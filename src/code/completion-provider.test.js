import * as vscode from 'vscode';
import LPCCompletionProvider from './completion-provider';
import KFunCompletionProvider from './completions/kfun-completion/provider';
import KeywordCompletionProvider from './completions/word-completion/keyword-completion-provider';
import TypeCompletionProvider from './completions/word-completion/type-completion-provider';

jest.mock('./completions/kfun-completion/provider');
jest.mock('./completions/word-completion/keyword-completion-provider');
jest.mock('./completions/word-completion/type-completion-provider');
jest.mock('../kfuns.json', () => ({}), { virtual: true });

describe('LPCCompletionProvider', () => {
	let provider;
	let mockDocument;
	let mockPosition;
	let mockKFunProvider;
	let mockKeywordProvider;
	let mockTypeProvider;

	beforeEach(() => {
		jest.clearAllMocks();

		const createMockCompletionItem = (label) =>
			new vscode.CompletionItem(label, vscode.CompletionItemKind.Function);

		mockKFunProvider = {
			getCompletionItems: jest.fn().mockReturnValue([
				createMockCompletionItem('kfun1'),
				createMockCompletionItem('kfun2')
			])
		};

		mockKeywordProvider = {
			getCompletionItems: jest.fn().mockReturnValue([
				createMockCompletionItem('keyword1'),
				createMockCompletionItem('keyword2')
			])
		};

		mockTypeProvider = {
			getCompletionItems: jest.fn().mockReturnValue([
				createMockCompletionItem('type1'),
				createMockCompletionItem('type2')
			])
		};

		KFunCompletionProvider.mockImplementation(() => mockKFunProvider);
		KeywordCompletionProvider.mockImplementation(() => mockKeywordProvider);
		TypeCompletionProvider.mockImplementation(() => mockTypeProvider);

		provider = new LPCCompletionProvider();
		mockDocument = { uri: vscode.Uri.file('/test/file.c') };
		mockPosition = vscode.Position(0, 0);
	});

	describe('provideCompletionItems', () => {
		test('should combine completions from all providers', () => {
			const completions = provider.provideCompletionItems(mockDocument, mockPosition);

			expect(completions).toHaveLength(6);
			expect(mockKFunProvider.getCompletionItems).toHaveBeenCalled();
			expect(mockKeywordProvider.getCompletionItems).toHaveBeenCalled();
			expect(mockTypeProvider.getCompletionItems).toHaveBeenCalled();

			const labels = completions.map(item => item.label);

			expect(labels).toContain('kfun1');
			expect(labels).toContain('kfun2');
			expect(labels).toContain('keyword1');
			expect(labels).toContain('keyword2');
			expect(labels).toContain('type1');
			expect(labels).toContain('type2');
		});

		test('should handle empty completions from providers', () => {
			mockKFunProvider.getCompletionItems.mockReturnValue([]);

			const completions = provider.provideCompletionItems(mockDocument, mockPosition);

			expect(completions).toHaveLength(4);
		});

		test('should handle null/undefined completions from providers', () => {
			mockKFunProvider.getCompletionItems.mockReturnValue(null);
			mockKeywordProvider.getCompletionItems.mockReturnValue(undefined);

			const completions = provider.provideCompletionItems(mockDocument, mockPosition);
			expect(completions).toHaveLength(2);

			const labels = completions.map(item => item.label);
			expect(labels).toContain('type1');
			expect(labels).toContain('type2');
		});
	});

	describe('dispose', () => {
		test('should not throw when disposed', () => {
			expect(() => provider.dispose()).not.toThrow();
		});
	});
});
