import FunctionCompletionProvider from './provider';
import FunctionCompletionItemsBuilder from './items-builder';
import visitFunctions from '../../visitors/function-visitor/visitor';

jest.mock('./items-builder');
jest.mock('../../visitors/function-visitor/visitor');

describe('FunctionCompletionProvider', () => {
	let provider;
	let mockDocument;
	let mockPosition;
	let mockToken;
	let mockContext;

	beforeEach(() => {
		provider = new FunctionCompletionProvider();

		// Reset mocks
		jest.clearAllMocks();

		// Setup common mock values
		mockPosition = { character: 5, line: 0 };
		mockToken = {};
		mockContext = {};
	});

	test('returns empty array when line prefix contains invalid characters', async () => {
		mockDocument = {
			lineAt: jest.fn().mockReturnValue({
				text: 'foo.bar'
			})
		};

		const result = await provider.provideCompletionItems(
			mockDocument,
			mockPosition,
			mockToken,
			mockContext
		);

		expect(result).toEqual([]);
		expect(visitFunctions).not.toHaveBeenCalled();
		expect(FunctionCompletionItemsBuilder.getCompletionItems).not.toHaveBeenCalled();
	});

	test('returns empty array when line prefix contains special characters', async () => {
		mockDocument = {
			lineAt: jest.fn().mockReturnValue({
				text: 'foo->bar'
			})
		};

		const result = await provider.provideCompletionItems(
			mockDocument,
			mockPosition,
			mockToken,
			mockContext
		);

		expect(result).toEqual([]);
		expect(visitFunctions).not.toHaveBeenCalled();
		expect(FunctionCompletionItemsBuilder.getCompletionItems).not.toHaveBeenCalled();
	});

	test('processes valid line prefix and returns completion items', async () => {
		mockDocument = {
			lineAt: jest.fn().mockReturnValue({
				text: '    func'
			})
		};

		const mockFunctions = new Map([
			['function1', { /* function details */ }]
		]);
		const mockCompletionItems = [{ label: 'function1' }];

		visitFunctions.mockReturnValue(mockFunctions);
		FunctionCompletionItemsBuilder.getCompletionItems.mockReturnValue(mockCompletionItems);

		const result = await provider.provideCompletionItems(
			mockDocument,
			mockPosition,
			mockToken,
			mockContext
		);

		expect(visitFunctions).toHaveBeenCalledWith(mockDocument);
		expect(FunctionCompletionItemsBuilder.getCompletionItems).toHaveBeenCalledWith(
			mockDocument,
			mockFunctions
		);
		expect(result).toBe(mockCompletionItems);
	});

	test('handles empty line prefix', async () => {
		mockDocument = {
			lineAt: jest.fn().mockReturnValue({
				text: ''
			})
		};

		const mockFunctions = new Map();
		const mockCompletionItems = [];

		visitFunctions.mockReturnValue(mockFunctions);
		FunctionCompletionItemsBuilder.getCompletionItems.mockReturnValue(mockCompletionItems);

		const result = await provider.provideCompletionItems(
			mockDocument,
			mockPosition,
			mockToken,
			mockContext
		);

		expect(visitFunctions).toHaveBeenCalledWith(mockDocument);
		expect(FunctionCompletionItemsBuilder.getCompletionItems).toHaveBeenCalledWith(
			mockDocument,
			mockFunctions
		);
		expect(result).toBe(mockCompletionItems);
	});

	test('processes line prefix with only whitespace', async () => {
		mockDocument = {
			lineAt: jest.fn().mockReturnValue({
				text: '    '
			})
		};

		const mockFunctions = new Map();
		const mockCompletionItems = [];

		visitFunctions.mockReturnValue(mockFunctions);
		FunctionCompletionItemsBuilder.getCompletionItems.mockReturnValue(mockCompletionItems);

		const result = await provider.provideCompletionItems(
			mockDocument,
			mockPosition,
			mockToken,
			mockContext
		);

		expect(visitFunctions).toHaveBeenCalledWith(mockDocument);
		expect(FunctionCompletionItemsBuilder.getCompletionItems).toHaveBeenCalledWith(
			mockDocument,
			mockFunctions
		);
		expect(result).toBe(mockCompletionItems);
	});

	test('processes line prefix with valid identifier characters', async () => {
		mockDocument = {
			lineAt: jest.fn().mockReturnValue({
				text: '    my_func123'
			})
		};

		const mockFunctions = new Map();
		const mockCompletionItems = [];

		visitFunctions.mockReturnValue(mockFunctions);
		FunctionCompletionItemsBuilder.getCompletionItems.mockReturnValue(mockCompletionItems);

		const result = await provider.provideCompletionItems(
			mockDocument,
			mockPosition,
			mockToken,
			mockContext
		);

		expect(visitFunctions).toHaveBeenCalledWith(mockDocument);
		expect(FunctionCompletionItemsBuilder.getCompletionItems).toHaveBeenCalledWith(
			mockDocument,
			mockFunctions
		);
		expect(result).toBe(mockCompletionItems);
	});
});
