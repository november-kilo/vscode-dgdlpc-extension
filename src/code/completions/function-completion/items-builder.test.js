import * as vscode from 'vscode';
import FunctionCompletionItemsBuilder from './items-builder';
import DocBuilder from '../../doc-builder';

jest.mock('../../doc-builder');

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

		DocBuilder.functionDocumentation.mockReturnValue(mockDocumentation);
		DocBuilder.createDetail.mockReturnValue(mockDetail);

		const result = FunctionCompletionItemsBuilder.getCompletionItems(mockDocument, functions);

		expect(result).toHaveLength(1);
		expect(vscode.CompletionItem).toHaveBeenCalledWith('test_func', 'Function');
		expect(DocBuilder.functionDocumentation).toHaveBeenCalledWith(mockFunction);
		expect(DocBuilder.createDetail).toHaveBeenCalledWith(mockFunction);
		expect(result[0]).toMatchObject({
			label: 'test_func',
			kind: 'Function',
			documentation: mockDocumentation,
			detail: mockDetail
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

		DocBuilder.functionDocumentation.mockReturnValue(mockDocumentation);
		DocBuilder.createDetail.mockReturnValue(mockDetail);

		const result = FunctionCompletionItemsBuilder.getCompletionItems(mockDocument, functions);

		expect(result).toHaveLength(1);
		expect(result[0]).toMatchObject({
			label: 'complex_func',
			kind: 'Function',
			documentation: mockDocumentation,
			detail: mockDetail
		});
	});
});
