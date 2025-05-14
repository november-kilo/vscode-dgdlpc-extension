import * as vscode from 'vscode';
import FunctionCompletionProvider from './provider';
import LPCParserFactory from '../../lpc-parser-factory';
import FunctionCompletionItemsBuilder from './items-builder';
import FunctionDeclarationVisitor from '../../visitors/function-visitor';

// Mock dependencies
jest.mock('../../lpc-parser-factory', () => ({
	createParser: jest.fn().mockReturnValue({
		program: jest.fn().mockReturnValue({})
	})
}));

jest.mock('../../visitors/function-visitor');
jest.mock('./items-builder');

describe('FunctionCompletionProvider', () => {
	let provider;
	let mockDocument;
	let mockPosition;

	beforeEach(() => {
		jest.clearAllMocks();

		// Setup mocks
		FunctionCompletionItemsBuilder.getCompletionItems = jest.fn().mockImplementation((document, functions) => {
			const items = [];
			for (const [name, funcInfo] of functions) {
				const item = new vscode.CompletionItem(name, vscode.CompletionItemKind.Function);
				items.push(item);
			}
			return items;
		});

		mockDocument = {
			getText: jest.fn().mockReturnValue('mock code'),
			uri: { toString: jest.fn() },
			lineAt: jest.fn().mockReturnValue({ text: 'test_' })
		};

		mockPosition = { character: 5 };

		provider = new FunctionCompletionProvider();
	});

	test('constructor initializes with visitor', () => {
		expect(provider.visitor).toBeInstanceOf(FunctionDeclarationVisitor);
	});

	test('provides no completions for invalid prefix patterns', async () => {
		const invalidPrefixes = [
			{ text: '!func', pos: 5 },
			{ text: ' func', pos: 5 },
			{ text: '123!', pos: 4 }
		];

		for (const { text, pos } of invalidPrefixes) {
			mockDocument.lineAt.mockReturnValue({ text });
			mockPosition.character = pos;

			const result = await provider.provideCompletionItems(mockDocument, mockPosition);
			expect(result).toEqual([]);
			expect(FunctionCompletionItemsBuilder.getCompletionItems).not.toHaveBeenCalled();
		}
	});

	test('provides completions for valid prefix patterns', async () => {
		const validPrefixes = [
			{ text: 'func', pos: 4 },
			{ text: 'test_', pos: 5 },
			{ text: 'abc123', pos: 6 }
		];

		// Mock visitor to return some functions
		provider.visitor.visit.mockImplementation((tree, functions) => {
			functions.set('test_func', {
				returnType: 'void',
				parameters: [],
				documentation: 'Test function'
			});
		});

		for (const { text, pos } of validPrefixes) {
			mockDocument.lineAt.mockReturnValue({ text });
			mockPosition.character = pos;

			const result = await provider.provideCompletionItems(mockDocument, mockPosition);

			expect(result).toHaveLength(1);
			expect(result[0]).toEqual(expect.objectContaining({
				label: 'test_func',
				kind: vscode.CompletionItemKind.Function
			}));
			expect(FunctionCompletionItemsBuilder.getCompletionItems).toHaveBeenCalled();
		}
	});

	test('returns empty array when no functions are found', async () => {
		// Mock visitor to return no functions
		provider.visitor.visit.mockImplementation((tree, functions) => {});

		const result = await provider.provideCompletionItems(mockDocument, mockPosition);

		expect(result).toEqual([]);
		expect(FunctionCompletionItemsBuilder.getCompletionItems).not.toHaveBeenCalled();
	});

	test('handles parser errors gracefully', async () => {
		// Mock parser to throw an error
		LPCParserFactory.createParser.mockImplementation(() => {
			throw new Error('Parser error');
		});

		const result = await provider.provideCompletionItems(mockDocument, mockPosition);

		expect(result).toEqual([]);
		expect(FunctionCompletionItemsBuilder.getCompletionItems).not.toHaveBeenCalled();
	});
});
