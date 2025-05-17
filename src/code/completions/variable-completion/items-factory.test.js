import * as vscode from 'vscode';
import VariableCompletionItemsFactory from './items-factory';

describe('VariableCompletionItemsFactory', () => {
	let factory;
	let mockDocument;

	beforeEach(() => {
		factory = new VariableCompletionItemsFactory();
		mockDocument = {
			uri: 'file:///test.c'
		};
	});

	describe('createVariableItem', () => {
		it('should create a completion item with correct properties', () => {
			const varInfo = {
				type: 'int',
				position: {
					start: { line: 5, character: 10 }
				}
			};

			const item = factory.createVariableItem('count', varInfo, mockDocument, 'Global variable');

			expect(item.label).toBe('count');
			expect(item.kind).toBe(vscode.CompletionItemKind.Variable);
			expect(item.detail).toBe('int');
			expect(item.documentation).toBeDefined();
		});
	});

	describe('formatTypeDetail', () => {
		it('should format simple type correctly', () => {
			const varInfo = { type: 'string' };
			expect(factory.formatTypeDetail(varInfo)).toBe('string');
		});

		it('should format array type with single dimension', () => {
			const varInfo = { type: 'int', arrayDimension: 1 };
			expect(factory.formatTypeDetail(varInfo)).toBe('int[]');
		});

		it('should format array type with multiple dimensions', () => {
			const varInfo = { type: 'float', arrayDimension: 2 };
			expect(factory.formatTypeDetail(varInfo)).toBe('float[][]');
		});

		it('should handle missing arrayDimension', () => {
			const varInfo = { type: 'object' };
			expect(factory.formatTypeDetail(varInfo)).toBe('object');
		});
	});

	describe('createDocumentation', () => {
		it('should create documentation with correct format', () => {
			const varInfo = {
				type: 'string',
				position: {
					start: { line: 5, character: 10 }
				}
			};

			const documentation = factory.createDocumentation(
				varInfo,
				mockDocument,
				'Global variable'
			);

			expect(documentation).toBeInstanceOf(vscode.MarkdownString);
			expect(documentation.value).toContain('Global variable declared on');
			expect(documentation.value).toContain('line 6'); // line + 1
			expect(documentation.value).toContain('Type: `string`');
		});

		it('should create correct link in documentation', () => {
			const varInfo = {
				type: 'int',
				position: {
					start: { line: 0, character: 5 }
				}
			};

			const documentation = factory.createDocumentation(
				varInfo,
				mockDocument,
				'Local variable'
			);

			expect(documentation.value).toContain(
				`[line 1](file:///test.c#1,6)`
			);
		});

		it('should set documentation as trusted', () => {
			const varInfo = {
				type: 'int',
				position: {
					start: { line: 0, character: 0 }
				}
			};

			const documentation = factory.createDocumentation(
				varInfo,
				mockDocument,
				'Test variable'
			);

			expect(documentation.isTrusted).toBe(true);
		});
	});
});
