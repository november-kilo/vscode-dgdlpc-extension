import * as vscode from 'vscode';
import FunctionDocBuilder from './function-doc-builder';
import MarkdownUtil from './markdown-util';

jest.mock('./markdown-util', () => ({
	lineLink: jest.fn()
}));

describe('FunctionDocBuilder', () => {
	beforeEach(() => {
		// Clear all mocks before each test
		jest.clearAllMocks();
	});

	describe('createDetail', () => {
		it('should create function detail string correctly', () => {
			const functionInfo = {
				returnType: 'void',
				name: 'testFunction',
				parameters: ['int a', 'string b']
			};

			const result = FunctionDocBuilder.createDetail(functionInfo);
			expect(result).toBe('void testFunction(int a, string b)');
		});

		it('should handle empty parameters', () => {
			const functionInfo = {
				returnType: 'int',
				name: 'emptyParamsFunction',
				parameters: []
			};

			const result = FunctionDocBuilder.createDetail(functionInfo);
			expect(result).toBe('int emptyParamsFunction()');
		});
	});

	describe('initializeMarkdownString', () => {
		it('should initialize MarkdownString with correct properties', () => {
			const markdown = FunctionDocBuilder.initializeMarkdownString();

			expect(vscode.MarkdownString).toHaveBeenCalled();
			expect(markdown.isTrusted).toBe(true);
			expect(markdown.supportThemeIcons).toBe(true);
			expect(markdown.supportHtml).toBe(true);
		});
	});

	describe('appendLocation', () => {
		it('should not append anything if location is null', () => {
			const documentation = {
				appendMarkdown: jest.fn()
			};

			FunctionDocBuilder.appendLocation(documentation, {
				location: null,
				label: 'Test',
				addNewline: false
			}, false);

			expect(documentation.appendMarkdown).not.toHaveBeenCalled();
		});

		it('should append location with correct format', () => {
			const documentation = {
				appendMarkdown: jest.fn()
			};
			const location = {
				range: {
					start: { line: 9 } // Line 9 will become line 10 in display
				}
			};
			const document = 'testDoc';

			MarkdownUtil.lineLink.mockReturnValue('[line 10](link)');

			FunctionDocBuilder.appendLocation(documentation, {
				document,
				location,
				label: 'Test',
				addNewline: true
			}, false);

			expect(documentation.appendMarkdown).toHaveBeenCalledWith('Test on [line 10](link)\n');
			expect(MarkdownUtil.lineLink).toHaveBeenCalledWith(10, document);
		});
	});

	describe('createDocumentation', () => {
		it('should create documentation with both locations', () => {
			const functionInfo = {
				forwardDeclarationLocation: {
					range: { start: { line: 4 } }
				},
				definitionLocation: {
					range: { start: { line: 9 } }
				}
			};

			MarkdownUtil.lineLink
				.mockReturnValueOnce('[line 5](decl-link)')
				.mockReturnValueOnce('[line 10](def-link)');

			const documentation = FunctionDocBuilder.createDocumentation(functionInfo, false);

			expect(documentation.appendMarkdown).toHaveBeenCalledTimes(2);
			expect(documentation.appendMarkdown).toHaveBeenNthCalledWith(1, 'Declared on [line 5](decl-link)\n');
			expect(documentation.appendMarkdown).toHaveBeenNthCalledWith(2, 'Defined on [line 10](def-link)');
		});

		it('should handle missing locations using default parameter', () => {
			const functionInfo = {
				forwardDeclarationLocation: null,
				definitionLocation: null
			};

			const documentation = FunctionDocBuilder.createDocumentation(functionInfo);

			expect(documentation.appendMarkdown).not.toHaveBeenCalled();
		});

		it('should handle missing locations', () => {
			const functionInfo = {
				forwardDeclarationLocation: null,
				definitionLocation: null
			};

			const documentation = FunctionDocBuilder.createDocumentation(functionInfo, false);

			expect(documentation.appendMarkdown).not.toHaveBeenCalled();
		});

		it('should use location instead of document when fromLocation is true', () => {
			const functionInfo = {
				forwardDeclarationLocation: {
					range: { start: { line: 4 } }
				},
				definitionLocation: {
					range: { start: { line: 9 } }
				}
			};

			const documentation = FunctionDocBuilder.createDocumentation(functionInfo, true);

			expect(MarkdownUtil.lineLink).toHaveBeenCalledWith(5, functionInfo.forwardDeclarationLocation);
			expect(MarkdownUtil.lineLink).toHaveBeenCalledWith(10, functionInfo.definitionLocation);
		});
	});
});
