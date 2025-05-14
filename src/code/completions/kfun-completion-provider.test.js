import KFunCompletionProvider from './kfun-completion-provider';
import KFunDocBuilder from '../kfun-doc-builder';

jest.mock('../kfun-doc-builder');

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

	test('getCompletions should return completions from doc builder', () => {
		const completions = provider.getCompletions();

		expect(provider.docBuilder.getCompletions).toHaveBeenCalled();
		expect(completions).toEqual(expect.arrayContaining([
			expect.objectContaining({
				label: 'test_function'
			})
		]));
	});

	test('getCompletions should return empty array when doc builder returns null', () => {
		provider.docBuilder.getCompletions.mockReturnValue(null);

		const completions = provider.getCompletions();

		expect(completions).toEqual([]);
	});

	test('getCompletions should handle errors from doc builder', () => {
		provider.docBuilder.getCompletions.mockImplementation(() => {
			throw new Error('Test error');
		});

		const completions = provider.getCompletions();

		expect(completions).toEqual([]);
	});
});
