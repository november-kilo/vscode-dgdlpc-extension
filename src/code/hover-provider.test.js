const vscode = require('vscode');
import LPCHoverProvider from './hover-provider';

jest.mock('../kfuns.json', () => ({
	kfuns: {
		'test_fun': {
			description: 'Test function description',
			params: [
				{
					label: 'param1',
					documentation: 'First parameter',
					optional: false
				},
				{
					label: 'param2',
					documentation: 'Second parameter',
					optional: true
				}
			]
		},
		'no_params_fun': {
			description: 'Function without parameters'
		}
	}
}));

describe('LPCHoverProvider', () => {
	let provider;
	let mockDocument;
	let mockPosition;
	let mockRange;

	beforeEach(() => {
		provider = new LPCHoverProvider();
		mockRange = new vscode.Range(0, 0, 0, 8);
		mockPosition = new vscode.Position(0, 5);

		mockDocument = {
			getWordRangeAtPosition: jest.fn().mockReturnValue(mockRange),
			getText: jest.fn()
		};
	});

	test('should return undefined when no word range is found', () => {
		mockDocument.getWordRangeAtPosition.mockReturnValue(null);

		const result = provider.provideHover(mockDocument, mockPosition);

		expect(result).toBeUndefined();
		expect(mockDocument.getWordRangeAtPosition).toHaveBeenCalledWith(mockPosition);
		expect(mockDocument.getText).not.toHaveBeenCalled();
	});

	test('should return null when word is not a known kfun', () => {
		mockDocument.getText.mockReturnValue('unknown_fun');

		const result = provider.provideHover(mockDocument, mockPosition);

		expect(result).toBeNull();
		expect(mockDocument.getText).toHaveBeenCalledWith(mockRange);
	});

	test('should provide hover for kfun with parameters', () => {
		mockDocument.getText.mockReturnValue('test_fun');

		const result = provider.provideHover(mockDocument, mockPosition);

		expect(result).toBeTruthy();
		expect(result.range).toBe(mockRange);

		const markdownContent = result.contents[0];
		expect(markdownContent.value).toContain('### test_fun');
		expect(markdownContent.value).toContain('Test function description');
		expect(markdownContent.value).toContain('**Parameters:**');
		expect(markdownContent.value).toContain('`param1`');
		expect(markdownContent.value).toContain('First parameter');
		expect(markdownContent.value).toContain('`param2` (optional)');
		expect(markdownContent.value).toContain('Second parameter');
	});

	test('should provide hover for kfun without parameters', () => {
		mockDocument.getText.mockReturnValue('no_params_fun');

		const result = provider.provideHover(mockDocument, mockPosition);

		expect(result).toBeTruthy();
		expect(result.range).toBe(mockRange);

		const markdownContent = result.contents[0];
		expect(markdownContent.value).toContain('### no_params_fun');
		expect(markdownContent.value).toContain('Function without parameters');
		expect(markdownContent.value).not.toContain('**Parameters:**');
	});

	test('dispose should not throw', () => {
		expect(() => provider.dispose()).not.toThrow();
	});
});
