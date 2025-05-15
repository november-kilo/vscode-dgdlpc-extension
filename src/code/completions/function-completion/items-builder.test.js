import * as vscode from 'vscode';
import FunctionCompletionItemsBuilder from './items-builder';
import FunctionDocBuilder from '../../function-doc-builder';

jest.mock('../../function-doc-builder');

jest.mock('vscode', () => ({
	CompletionItem: jest.fn().mockImplementation((label, kind) => ({
		label,
		kind,
		documentation: null,
		detail: null
	})),
	CompletionItemKind: {
		Function: 'Function'
	}
}));

describe('FunctionCompletionItemsBuilder', () => {
	let mockDocument;

	beforeEach(() => {
		mockDocument = { uri: 'file:///test.lpc' };
		jest.clearAllMocks();
	});

	test('returns empty array for empty functions map', () => {
		const functions = new Map();
		const result = FunctionCompletionItemsBuilder.getCompletionItems(mockDocument, functions);
		expect(result).toEqual([]);
	});

	test('creates completion item for single function', () => {
		const mockFunction = {
			name: 'test_func',
			returnType: 'void',
			parameters: []
		};
		const functions = new Map([['test_func', mockFunction]]);

		const mockDocumentation = { value: 'Function documentation' };
		const mockDetail = 'void test_func()';

		FunctionDocBuilder.createDocumentation.mockReturnValue(mockDocumentation);
		FunctionDocBuilder.createDetail.mockReturnValue(mockDetail);

		const result = FunctionCompletionItemsBuilder.getCompletionItems(mockDocument, functions);

		expect(result).toHaveLength(1);
		expect(vscode.CompletionItem).toHaveBeenCalledWith('test_func', 'Function');
		expect(FunctionDocBuilder.createDocumentation).toHaveBeenCalledWith(mockFunction);
		expect(FunctionDocBuilder.createDetail).toHaveBeenCalledWith(mockFunction);
		expect(result[0]).toEqual({
			label: 'test_func',
			kind: 'Function',
			documentation: mockDocumentation,
			detail: mockDetail
		});
	});

	test('creates completion items for multiple functions', () => {
		const functions = new Map([
			['func1', { name: 'func1', returnType: 'int' }],
			['func2', { name: 'func2', returnType: 'string' }],
			['func3', { name: 'func3', returnType: 'void' }]
		]);

		FunctionDocBuilder.createDocumentation.mockImplementation(
			(func) => ({ value: `Doc for ${func.name}` })
		);
		FunctionDocBuilder.createDetail.mockImplementation(
			(func) => `${func.returnType} ${func.name}()`
		);

		const result = FunctionCompletionItemsBuilder.getCompletionItems(mockDocument, functions);

		expect(result).toHaveLength(3);
		expect(vscode.CompletionItem).toHaveBeenCalledTimes(3);
		expect(FunctionDocBuilder.createDocumentation).toHaveBeenCalledTimes(3);
		expect(FunctionDocBuilder.createDetail).toHaveBeenCalledTimes(3);

		functions.forEach((funcInfo, name) => {
			const item = result.find(item => item.label === name);
			expect(item).toBeDefined();
			expect(item.kind).toBe('Function');
			expect(item.documentation).toEqual({ value: `Doc for ${name}` });
			expect(item.detail).toBe(`${funcInfo.returnType} ${name}()`);
		});
	});

	test('handles functions with complex information', () => {
		const mockFunction = {
			name: 'complex_func',
			returnType: 'string*',
			parameters: ['int x', 'float y'],
			modifiers: ['private', 'static']
		};
		const functions = new Map([['complex_func', mockFunction]]);

		const mockDocumentation = { value: 'Complex function documentation' };
		const mockDetail = 'private static string* complex_func(int x, float y)';

		FunctionDocBuilder.createDocumentation.mockReturnValue(mockDocumentation);
		FunctionDocBuilder.createDetail.mockReturnValue(mockDetail);

		const result = FunctionCompletionItemsBuilder.getCompletionItems(mockDocument, functions);

		expect(result).toHaveLength(1);
		expect(result[0]).toEqual({
			label: 'complex_func',
			kind: 'Function',
			documentation: mockDocumentation,
			detail: mockDetail
		});
	});
});
