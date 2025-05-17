import VariableCompletionProvider from './provider';

describe('VariableCompletionProvider', () => {
	let provider;
	let mockFactory;
	let mockFunctionFinder;
	let mockCollector;
	let mockDocument;

	beforeEach(() => {
		mockFactory = {
			createVariableItem: jest.fn((name, varInfo, document, context) => ({
				name,
				varInfo,
				context
			}))
		};

		mockFunctionFinder = {
			getCurrentFunction: jest.fn()
		};

		mockCollector = {
			collectVariables: jest.fn(),
			hasFunction: jest.fn(),
			getFunctionVariables: jest.fn()
		};

		mockDocument = {
			uri: 'test://document'
		};

		provider = new VariableCompletionProvider(
			mockFactory,
			mockFunctionFinder,
			mockCollector
		);
	});

	describe('provideCompletionItems', () => {
		it('should provide global variables when not in function context', async () => {
			const globalVars = new Map([
				['count', { type: 'int' }],
				['name', { type: 'string' }]
			]);

			mockCollector.collectVariables.mockResolvedValue({
				globalVariables: globalVars,
				functionVariables: new Map()
			});
			mockFunctionFinder.getCurrentFunction.mockReturnValue(null);

			const items = await provider.provideCompletionItems(mockDocument, { line: 0, character: 0 });

			expect(items).toHaveLength(2);
			expect(mockFactory.createVariableItem).toHaveBeenCalledTimes(2);
			expect(mockFactory.createVariableItem).toHaveBeenCalledWith(
				'count',
				{ type: 'int' },
				mockDocument,
				'Global variable'
			);
		});

		it('should provide both global and local variables when in function context', async () => {
			const globalVars = new Map([
				['global_var', { type: 'int' }]
			]);
			const functionVars = new Map([
				['local_var', { type: 'string' }]
			]);

			mockCollector.collectVariables.mockResolvedValue({
				globalVariables: globalVars,
				functionVariables: new Map()
			});
			mockFunctionFinder.getCurrentFunction.mockReturnValue('test_function');
			mockCollector.hasFunction.mockReturnValue(true);
			mockCollector.getFunctionVariables.mockReturnValue(functionVars);

			const items = await provider.provideCompletionItems(mockDocument, { line: 1, character: 0 });

			expect(items).toHaveLength(2);
			expect(mockFactory.createVariableItem).toHaveBeenCalledWith(
				'global_var',
				{ type: 'int' },
				mockDocument,
				'Global variable'
			);
			expect(mockFactory.createVariableItem).toHaveBeenCalledWith(
				'local_var',
				{ type: 'string' },
				mockDocument,
				'Local variable in `test_function`'
			);
		});

		it('should handle empty variable collections', async () => {
			mockCollector.collectVariables.mockResolvedValue({
				globalVariables: new Map(),
				functionVariables: new Map()
			});
			mockFunctionFinder.getCurrentFunction.mockReturnValue(null);

			const items = await provider.provideCompletionItems(mockDocument, { line: 0, character: 0 });

			expect(items).toHaveLength(0);
			expect(mockFactory.createVariableItem).not.toHaveBeenCalled();
		});

		it('should skip local variables if function is not found', async () => {
			const globalVars = new Map([
				['global_var', { type: 'int' }]
			]);

			mockCollector.collectVariables.mockResolvedValue({
				globalVariables: globalVars,
				functionVariables: new Map()
			});
			mockFunctionFinder.getCurrentFunction.mockReturnValue('test_function');
			mockCollector.hasFunction.mockReturnValue(false);

			const items = await provider.provideCompletionItems(mockDocument, { line: 1, character: 0 });

			expect(items).toHaveLength(1);
			expect(mockCollector.getFunctionVariables).not.toHaveBeenCalled();
		});
	});

	describe('addVariableCompletionItems', () => {
		it('should convert map entries to completion items', () => {
			const variables = new Map([
				['var1', { type: 'int' }],
				['var2', { type: 'string' }]
			]);

			const items = provider.addVariableCompletionItems(
				variables,
				mockDocument,
				'Test Context'
			);

			expect(items).toHaveLength(2);
			expect(mockFactory.createVariableItem).toHaveBeenCalledTimes(2);
			expect(mockFactory.createVariableItem).toHaveBeenCalledWith(
				'var1',
				{ type: 'int' },
				mockDocument,
				'Test Context'
			);
		});

		it('should handle empty map', () => {
			const items = provider.addVariableCompletionItems(
				new Map(),
				mockDocument,
				'Test Context'
			);

			expect(items).toHaveLength(0);
			expect(mockFactory.createVariableItem).not.toHaveBeenCalled();
		});
	});
});
