import KFunCompletionProvider from './provider';
import KFunDocBuilder from '../../kfun-doc-builder';

jest.mock('../../kfun-doc-builder');

describe('KFunCompletionProvider', () => {
	let provider;

	beforeEach(() => {
		jest.clearAllMocks();
		provider = new KFunCompletionProvider();
	});

	test('should be instantiated with a doc builder', () => {
		expect(provider.docBuilder).toBeDefined();
		expect(KFunDocBuilder).toHaveBeenCalled();
	});

	test('getCompletionItems should return completions from doc builder', () => {
		const completions = provider.getCompletionItems();

		expect(provider.docBuilder.getCompletionItems).toHaveBeenCalled();
		expect(completions).toEqual(expect.arrayContaining([
			expect.objectContaining({
				label: 'test_function'
			})
		]));
	});

	test('getCompletionItems should return empty array when doc builder returns null', () => {
		provider.docBuilder.getCompletionItems.mockReturnValue(null);

		const completions = provider.getCompletionItems();

		expect(completions).toEqual([]);
	});

	test('getCompletionItems should handle errors from doc builder', () => {
		provider.docBuilder.getCompletionItems.mockImplementation(() => {
			throw new Error('Test error');
		});

		const completions = provider.getCompletionItems();

		expect(completions).toEqual([]);
	});
});
