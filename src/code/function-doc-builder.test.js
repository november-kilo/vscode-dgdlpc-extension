import * as vscode from 'vscode';
import FunctionDocBuilder from './function-doc-builder';

describe('FunctionDocBuilder', () => {
	let builder;
	let mockDocument;

	beforeEach(() => {
		mockDocument = { uri: { fsPath: 'test/file.c' } };
		builder = new FunctionDocBuilder(mockDocument);
	});

	test('creates empty documentation when no locations exist', () => {
		const functionInfo = {
			forwardDeclarationLocation: null,
			definitionLocation: null
		};

		const doc = builder.createDocumentation(functionInfo);

		expect(doc.appendMarkdown).not.toHaveBeenCalled();
	});

	test('creates documentation with declaration only', () => {
		const functionInfo = {
			forwardDeclarationLocation: {
				range: { start: { line: 9 } }
			},
			definitionLocation: null
		};

		const doc = builder.createDocumentation(functionInfo);

		expect(doc.appendMarkdown).toHaveBeenCalledWith('Declared on [line 10](file://test/file.c#10)\n');
		expect(doc.appendMarkdown).toHaveBeenCalledTimes(1);
	});

	test('creates documentation with definition only', () => {
		const functionInfo = {
			forwardDeclarationLocation: null,
			definitionLocation: {
				range: { start: { line: 19 } }
			}
		};

		const doc = builder.createDocumentation(functionInfo);

		expect(doc.appendMarkdown).toHaveBeenCalledWith('Defined on [line 20](file://test/file.c#20)');
		expect(doc.appendMarkdown).toHaveBeenCalledTimes(1);
	});

	test('creates documentation with both declaration and definition', () => {
		const functionInfo = {
			forwardDeclarationLocation: {
				range: { start: { line: 9 } }
			},
			definitionLocation: {
				range: { start: { line: 19 } }
			}
		};

		const doc = builder.createDocumentation(functionInfo);

		expect(doc.appendMarkdown).toHaveBeenCalledTimes(2);
		expect(doc.appendMarkdown).toHaveBeenNthCalledWith(1, 'Declared on [line 10](file://test/file.c#10)\n');
		expect(doc.appendMarkdown).toHaveBeenNthCalledWith(2, 'Defined on [line 20](file://test/file.c#20)');
	});

	test('initializes markdown string with correct properties', () => {
		const doc = builder.initializeMarkdownString();

		expect(doc.isTrusted).toBe(true);
		expect(doc.supportThemeIcons).toBe(true);
		expect(doc.supportHtml).toBe(true);
	});
});
