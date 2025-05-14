import * as vscode from 'vscode';
import FunctionCompletionItemsBuilder from './items-builder';
import FunctionDocBuilder from '../../function-doc-builder';

// Mock FunctionDocBuilder
jest.mock('../../function-doc-builder');

describe('FunctionCompletionItemsBuilder', () => {
	let mockDocument;
	let mockFunctions;
	let mockCreateDocumentation;

	beforeEach(() => {
		// Reset all mocks
		jest.clearAllMocks();

		// Mock document
		mockDocument = {
			uri: 'test-uri'
		};

		// Setup mock for createDocumentation
		mockCreateDocumentation = jest.fn().mockReturnValue('Mock documentation');

		// Mock the FunctionDocBuilder constructor and its method
		FunctionDocBuilder.mockImplementation(() => ({
			createDocumentation: mockCreateDocumentation
		}));

		// Mock CompletionItem constructor
		vscode.CompletionItem.mockImplementation((label, kind) => ({
			label,
			kind,
			documentation: null,
			detail: null
		}));
	});

	test('returns empty array for empty functions map', () => {
		mockFunctions = new Map();

		const result = FunctionCompletionItemsBuilder.getCompletionItems(mockDocument, mockFunctions);

		expect(result).toEqual([]);
		expect(FunctionDocBuilder).toHaveBeenCalledWith(mockDocument);
		expect(vscode.CompletionItem).not.toHaveBeenCalled();
	});

	test('creates completion items for single function', () => {
		const mockFuncInfo = {
			name: 'testFunc',
			returnType: 'void',
			parameters: ['int param1', 'string param2']
		};

		mockFunctions = new Map([
			['testFunc', mockFuncInfo]
		]);

		const result = FunctionCompletionItemsBuilder.getCompletionItems(mockDocument, mockFunctions);

		expect(result).toHaveLength(1);
		expect(vscode.CompletionItem).toHaveBeenCalledWith('testFunc', vscode.CompletionItemKind.Function);

		const completionItem = result[0];
		expect(completionItem.documentation).toBe('Mock documentation');
		expect(completionItem.detail).toBe('void testFunc(int param1, string param2)');
	});

	test('creates completion items for multiple functions', () => {
		mockFunctions = new Map([
			['func1', {
				name: 'func1',
				returnType: 'int',
				parameters: ['float x']
			}],
			['func2', {
				name: 'func2',
				returnType: 'string',
				parameters: []
			}]
		]);

		const result = FunctionCompletionItemsBuilder.getCompletionItems(mockDocument, mockFunctions);

		expect(result).toHaveLength(2);

		// Check first completion item
		expect(result[0].label).toBe('func1');
		expect(result[0].detail).toBe('int func1(float x)');

		// Check second completion item
		expect(result[1].label).toBe('func2');
		expect(result[1].detail).toBe('string func2()');
	});

	test('handles functions with no parameters', () => {
		mockFunctions = new Map([
			['emptyFunc', {
				name: 'emptyFunc',
				returnType: 'void',
				parameters: []
			}]
		]);

		const result = FunctionCompletionItemsBuilder.getCompletionItems(mockDocument, mockFunctions);

		expect(result).toHaveLength(1);
		expect(result[0].detail).toBe('void emptyFunc()');
	});

	test('correctly uses FunctionDocBuilder for documentation', () => {
		const mockFuncInfo = {
			name: 'testFunc',
			returnType: 'int',
			parameters: ['string param']
		};

		mockFunctions = new Map([
			['testFunc', mockFuncInfo]
		]);

		FunctionCompletionItemsBuilder.getCompletionItems(mockDocument, mockFunctions);

		// Verify that createDocumentation was called with the correct argument
		expect(mockCreateDocumentation).toHaveBeenCalledWith(mockFuncInfo);
	});
});
