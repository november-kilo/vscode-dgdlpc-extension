import * as vscode from 'vscode';
import WordCompletionProvider from './word-completion-provider';

describe('WordCompletionProvider', () => {
	let provider;
	const testItems = [
		['test1', 'Test description 1'],
		['test2', 'Test description 2']
	];
	const testKind = vscode.CompletionItemKind.Keyword;

	beforeEach(() => {
		provider = new WordCompletionProvider(testItems, testKind);
	});

	test('constructor should initialize with correct properties', () => {
		expect(provider.items).toBe(testItems);
		expect(provider.completionKind).toBe(testKind);
	});

	test('getCompletionItems should return array of completion items', () => {
		const completions = provider.getCompletionItems();

		expect(Array.isArray(completions)).toBe(true);
		expect(completions).toHaveLength(2);
	});

	test('completion items should have correct properties', () => {
		const completions = provider.getCompletionItems();
		const firstCompletion = completions[0];

		expect(firstCompletion.label).toBe('test1');
		expect(firstCompletion.kind).toBe(testKind);
		expect(firstCompletion.documentation.value).toBe('**test1** - Test description 1');
	});

	test('should handle empty items array', () => {
		const emptyProvider = new WordCompletionProvider([], testKind);
		const completions = emptyProvider.getCompletionItems();

		expect(completions).toHaveLength(0);
	});

	test('should work with different completion kinds', () => {
		const classProvider = new WordCompletionProvider(
			testItems,
			vscode.CompletionItemKind.Class
		);
		const completions = classProvider.getCompletionItems();

		expect(completions[0].kind).toBe(vscode.CompletionItemKind.Class);
	});
});
