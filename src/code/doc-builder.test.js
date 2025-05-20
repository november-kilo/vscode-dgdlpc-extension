import * as vscode from 'vscode';
import DocBuilder from './doc-builder';
import MarkdownUtil from './markdown-util';

jest.mock('./markdown-util', () => ({
	lineLink: jest.fn()
}));

describe('DocBuilder', () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	describe('createDetail', () => {
		it('should create function detail string correctly', () => {
			const functionInfo = {
				returnType: 'void',
				name: 'testFunction',
				parameters: ['int a', 'string b']
			};

			const result = DocBuilder.createDetail(functionInfo);
			expect(result).toBe('void testFunction(int a, string b)');
		});

		it('should handle empty parameters', () => {
			const functionInfo = {
				returnType: 'int',
				name: 'emptyParamsFunction',
				parameters: []
			};

			const result = DocBuilder.createDetail(functionInfo);
			expect(result).toBe('int emptyParamsFunction()');
		});
	});

	describe('initializeMarkdownString', () => {
		it('should initialize MarkdownString with correct properties', () => {
			const markdown = DocBuilder.initializeMarkdownString();

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

			DocBuilder.appendLocation(documentation, {
				location: null,
				label: 'Test',
				addNewline: false
			});

			expect(documentation.appendMarkdown).not.toHaveBeenCalled();
		});
	});

	describe('createDocumentation', () => {
		it('should create documentation with both locations', () => {
			const functionInfo = {
				forwardDeclarationLocation: {
					uri: { fsPath: '' },
					range: { start: { line: 4 } }
				},
				definitionLocation: {
					uri: { fsPath: '' },
					range: { start: { line: 9 } }
				}
			};

			MarkdownUtil.lineLink
				.mockReturnValueOnce('[line 5](decl-link)')
				.mockReturnValueOnce('[line 10](def-link)');

			const documentation = DocBuilder.functionDocumentation(functionInfo, false);

			expect(documentation.appendMarkdown).toHaveBeenCalledTimes(2);
			expect(documentation.appendMarkdown).toHaveBeenNthCalledWith(1, 'Declared on [line 5](decl-link)\n');
			expect(documentation.appendMarkdown).toHaveBeenNthCalledWith(2, 'Defined on [line 10](def-link)');
		});

		it('should handle missing locations using default parameter', () => {
			const functionInfo = {
				forwardDeclarationLocation: null,
				definitionLocation: null
			};

			const documentation = DocBuilder.functionDocumentation(functionInfo);

			expect(documentation.appendMarkdown).not.toHaveBeenCalled();
		});

		it('should handle missing locations', () => {
			const functionInfo = {
				forwardDeclarationLocation: null,
				definitionLocation: null
			};

			const documentation = DocBuilder.functionDocumentation(functionInfo, false);

			expect(documentation.appendMarkdown).not.toHaveBeenCalled();
		});
	});

	describe('variableDocumentation', () => {
		let mockMarkdownString;

		beforeEach(() => {
			mockMarkdownString = {
				appendMarkdown: jest.fn()
			};
			jest.spyOn(DocBuilder, 'initializeMarkdownString').mockReturnValue(mockMarkdownString);
		});

		it('should create basic variable documentation', () => {
			const varInfo = {
				type: 'string',
				position: {
					start: { line: 5, character: 8 }
				}
			};

			DocBuilder.variableDocumentation({
				name: 'testVar',
				varInfo,
				scope: 'Local Variable'
			});

			expect(mockMarkdownString.appendMarkdown).toHaveBeenNthCalledWith(
				1,
				'**Local Variable**: `testVar`\n\n'
			);
			expect(mockMarkdownString.appendMarkdown).toHaveBeenNthCalledWith(
				2,
				'Type: `string`\n\n'
			);
			expect(mockMarkdownString.appendMarkdown).toHaveBeenNthCalledWith(
				3,
				'Declared at line 6, column 9'
			);
		});

		it('should handle array types correctly', () => {
			const varInfo = {
				type: 'number',
				arrayDimension: 2,
				position: {
					start: { line: 0, character: 0 }
				}
			};

			DocBuilder.variableDocumentation({
				name: 'arrayVar',
				varInfo,
				scope: 'Global Variable'
			});

			expect(mockMarkdownString.appendMarkdown).toHaveBeenNthCalledWith(
				2,
				'Type: `number**`\n\n'
			);
		});

		it('should include modifiers when present', () => {
			const varInfo = {
				type: 'boolean',
				modifiers: 'private readonly',
				position: {
					start: { line: 10, character: 4 }
				}
			};

			DocBuilder.variableDocumentation({
				name: 'flag',
				varInfo,
				scope: 'Class Field'
			});

			expect(mockMarkdownString.appendMarkdown).toHaveBeenCalledWith(
				'Modifiers: `private readonly`\n\n'
			);
		});

		it('should skip modifiers section when not present', () => {
			const varInfo = {
				type: 'number',
				position: {
					start: { line: 0, character: 0 }
				}
			};

			DocBuilder.variableDocumentation({
				name: 'simple',
				varInfo,
				scope: 'Local Variable'
			});

			const calls = mockMarkdownString.appendMarkdown.mock.calls;
			expect(calls.some(call => call[0].includes('Modifiers:'))).toBeFalsy();
		});

		it('should handle zero-based positions correctly', () => {
			const varInfo = {
				type: 'string',
				position: {
					start: { line: 0, character: 0 }
				}
			};

			DocBuilder.variableDocumentation({
				name: 'firstVar',
				varInfo,
				scope: 'Global Variable'
			});

			expect(mockMarkdownString.appendMarkdown).toHaveBeenCalledWith(
				'Declared at line 1, column 1'
			);
		});
	});
});
