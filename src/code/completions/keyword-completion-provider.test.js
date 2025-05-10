import * as vscode from 'vscode';
import KeywordCompletionProvider from './keyword-completion-provider';

describe('KeywordCompletionProvider', () => {
	let provider;

	beforeEach(() => {
		provider = new KeywordCompletionProvider();
	});

	test('provides all LPC keywords as completion items', () => {
		const completions = provider.getCompletions();
		expect(completions).toHaveLength(KeywordCompletionProvider.KEYWORDS.length);
	});

	test('formats completion items correctly', () => {
		const completions = provider.getCompletions();
		const [firstKeyword, firstDesc] = KeywordCompletionProvider.KEYWORDS[0];
		const firstCompletion = completions[0];

		expect(firstCompletion).toEqual({
			label: firstKeyword,
			kind: vscode.CompletionItemKind.Keyword,
			documentation: expect.objectContaining({
				value: `**${firstKeyword}** - ${firstDesc}`
			}),
			detail: undefined,
			insertText: undefined
		});
	});

	test('includes documentation for all completion items', () => {
		const completions = provider.getCompletions();

		completions.forEach((completion, index) => {
			const [keyword, desc] = KeywordCompletionProvider.KEYWORDS[index];
			expect(completion.documentation.value).toBe(`**${keyword}** - ${desc}`);
		});
	});

	test('keywords are unique', () => {
		const keywords = KeywordCompletionProvider.KEYWORDS.map(([keyword]) => keyword);
		const uniqueKeywords = new Set(keywords);
		expect(keywords.length).toBe(uniqueKeywords.size);
	});

	test('all keywords have valid descriptions', () => {
		KeywordCompletionProvider.KEYWORDS.forEach(([keyword, desc]) => {
			expect(desc).toBeTruthy();
			expect(typeof desc).toBe('string');
			expect(desc.length).toBeGreaterThan(0);
		});
	});
});
