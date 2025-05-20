import TypeCompletionProvider from './type-completion-provider';
import * as vscode from 'vscode';

describe('TypeCompletionProvider', () => {
	let provider;

	beforeEach(() => {
		provider = new TypeCompletionProvider();
	});

	describe('TYPES constant', () => {
		test('contains all expected types', () => {
			const expectedTypes = ['void', 'int', 'string', 'object', 'mapping', 'mixed', 'float', 'nil'];
			const actualTypes = TypeCompletionProvider.TYPES.map(([type]) => type);
			expect(actualTypes).toEqual(expectedTypes);
		});

		test('each type has a description', () => {
			TypeCompletionProvider.TYPES.forEach(([type, desc]) => {
				expect(type).toBeDefined();
				expect(desc).toBeDefined();
				expect(typeof desc).toBe('string');
				expect(desc.length).toBeGreaterThan(0);
			});
		});
	});

	describe('getCompletionItems', () => {
		let completions;

		beforeEach(() => {
			completions = provider.getCompletionItems();
		});

		test('returns completion items for all types', () => {
			expect(completions).toHaveLength(TypeCompletionProvider.TYPES.length);
		});

		test('creates properly formatted completion items', () => {
			const [firstType, firstDesc] = TypeCompletionProvider.TYPES[0];
			const firstCompletion = completions[0];

			expect(firstCompletion.label).toBe(firstType);
			expect(firstCompletion.kind).toBe(vscode.CompletionItemKind.Class);
			expect(firstCompletion.documentation.value).toBe(`**${firstType}** - ${firstDesc}`);
		});

		test('all completion items have correct properties', () => {
			completions.forEach((item, index) => {
				const [type, desc] = TypeCompletionProvider.TYPES[index];

				expect(item.label).toBe(type);
				expect(item.kind).toBe(vscode.CompletionItemKind.Class);
				expect(item.documentation.value).toBe(`**${type}** - ${desc}`);
			});
		});

		test('completion items are unique', () => {
			const labels = completions.map(item => item.label);
			const uniqueLabels = new Set(labels);
			expect(labels.length).toBe(uniqueLabels.size);
		});
	});
});
