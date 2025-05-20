import * as vscode from 'vscode';
import InheritLabelsProvider from './provider';
import visitInherit from '../../visitors/inherit-visitor/visitor';

jest.mock('../../visitors/inherit-visitor/visitor');
jest.mock('vscode', () => ({
	CompletionItem: jest.fn(),
	CompletionItemKind: {
		Keyword: 1
	}
}));

describe('InheritLabelsProvider', () => {
	let provider;
	let mockDocument;
	let mockPosition;

	beforeEach(() => {
		provider = new InheritLabelsProvider();
		mockDocument = { /* mock document */ };
		mockPosition = { /* mock position */ };

		visitInherit.mockReset();
		vscode.CompletionItem.mockReset();
	});

	test('should return empty array when no inherits found', async () => {
		visitInherit.mockReturnValue([]);

		const result = await provider.provideCompletionItems(mockDocument, mockPosition);

		expect(result).toEqual([]);
		expect(visitInherit).toHaveBeenCalledWith(mockDocument);
	});

	test('should filter out items with undefined labels', async () => {
		visitInherit.mockReturnValue([
			{ label: 'test1' },
			{ label: undefined },
			{ label: 'test2' }
		]);

		const result = await provider.provideCompletionItems(mockDocument, mockPosition);

		expect(result).toHaveLength(2);
		expect(visitInherit).toHaveBeenCalledWith(mockDocument);
	});

	test('should create completion items with correct properties', async () => {
		const mockLabels = [{ label: 'test1' }, { label: 'test2' }];
		visitInherit.mockReturnValue(mockLabels);

		vscode.CompletionItem.mockImplementation((label, kind) => ({
			label,
			kind,
			insertText: undefined
		}));

		const result = await provider.provideCompletionItems(mockDocument, mockPosition);

		expect(result).toHaveLength(2);
		expect(result[0].label).toBe('test1');
		expect(result[0].insertText).toBe('test1::');
		expect(result[0].kind).toBe(vscode.CompletionItemKind.Keyword);
		expect(result[1].label).toBe('test2');
		expect(result[1].insertText).toBe('test2::');
		expect(result[1].kind).toBe(vscode.CompletionItemKind.Keyword);
	});

	test('should handle empty label string', async () => {
		visitInherit.mockReturnValue([{ label: '' }]);

		vscode.CompletionItem.mockImplementation((label, kind) => ({
			label,
			kind,
			insertText: undefined
		}));

		const result = await provider.provideCompletionItems(mockDocument, mockPosition);

		expect(result).toHaveLength(1);
		expect(result[0].label).toBe('');
		expect(result[0].insertText).toBe('::');
	});
});
