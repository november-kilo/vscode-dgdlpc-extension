import * as vscode from 'vscode';
import FunctionsHoverHandler from './hover-handler-functions';
import visitFunctions from '../visitors/function-visitor';
import FunctionDocBuilder from '../function-doc-builder';

jest.mock('../visitors/function-visitor');
jest.mock('../function-doc-builder');

describe('FunctionsHoverHandler', () => {
	let handler;
	let mockDocument;
	let mockPosition;
	let mockRange;

	beforeEach(() => {
		handler = new FunctionsHoverHandler();
		mockPosition = { line: 0, character: 5 };
		mockRange = { start: 0, end: 10 };
		jest.clearAllMocks();
	});

	test('returns null when no word range is found', () => {
		mockDocument = {
			getWordRangeAtPosition: jest.fn().mockReturnValue(null)
		};

		const result = handler.createHover(mockDocument, mockPosition);

		expect(result).toBeNull();
		expect(mockDocument.getWordRangeAtPosition).toHaveBeenCalledWith(mockPosition);
		expect(visitFunctions).not.toHaveBeenCalled();
	});

	test('creates hover for valid function', () => {
		const mockWord = 'testFunction';
		const mockFunctionInfo = {
			name: 'testFunction',
			returnType: 'void',
			parameters: ['int x', 'string y']
		};

		mockDocument = {
			getWordRangeAtPosition: jest.fn().mockReturnValue(mockRange),
			getText: jest.fn().mockReturnValue(mockWord)
		};

		const mockFunctions = new Map([[mockWord, mockFunctionInfo]]);
		visitFunctions.mockReturnValue(mockFunctions);

		const mockDetail = 'void testFunction(int x, string y)';
		const mockDocumentation = { value: 'Function documentation' };

		FunctionDocBuilder.createDetail.mockReturnValue(mockDetail);
		FunctionDocBuilder.createDocumentation.mockReturnValue(mockDocumentation);

		const result = handler.createHover(mockDocument, mockPosition);

		expect(mockDocument.getWordRangeAtPosition).toHaveBeenCalledWith(mockPosition);
		expect(mockDocument.getText).toHaveBeenCalledWith(mockRange);
		expect(visitFunctions).toHaveBeenCalledWith(mockDocument);

		expect(FunctionDocBuilder.createDetail).toHaveBeenCalledWith({
			...mockFunctionInfo,
			document: mockDocument
		});

		expect(FunctionDocBuilder.createDocumentation).toHaveBeenCalledWith({
			...mockFunctionInfo,
			document: mockDocument
		}, true);

		expect(vscode.Hover).toHaveBeenCalledWith(
			[mockDetail, mockDocumentation],
			mockRange
		);

		expect(result).toEqual({
			contents: [mockDetail, mockDocumentation],
			range: mockRange
		});
	});

	test('handles function info with existing document property', () => {
		const mockWord = 'testFunction';
		const mockFunctionInfo = {
			name: 'testFunction',
			returnType: 'int',
			parameters: [],
			document: 'existingDoc'
		};

		mockDocument = {
			getWordRangeAtPosition: jest.fn().mockReturnValue(mockRange),
			getText: jest.fn().mockReturnValue(mockWord)
		};

		const mockFunctions = new Map([[mockWord, mockFunctionInfo]]);
		visitFunctions.mockReturnValue(mockFunctions);

		const mockDetail = 'int testFunction()';
		const mockDocumentation = { value: 'Function documentation' };

		FunctionDocBuilder.createDetail.mockReturnValue(mockDetail);
		FunctionDocBuilder.createDocumentation.mockReturnValue(mockDocumentation);

		handler.createHover(mockDocument, mockPosition);

		expect(FunctionDocBuilder.createDetail).toHaveBeenCalledWith({
			...mockFunctionInfo,
			document: mockDocument
		});
	});

	test('returns null when word is not a function', () => {
		const mockWord = 'notAFunction';
		mockDocument = {
			getWordRangeAtPosition: jest.fn().mockReturnValue(mockRange),
			getText: jest.fn().mockReturnValue(mockWord)
		};

		// Return a Map without the searched word
		const mockFunctions = new Map([['someOtherFunction', {}]]);
		visitFunctions.mockReturnValue(mockFunctions);

		const result = handler.createHover(mockDocument, mockPosition);

		expect(result).toBeNull();
		expect(mockDocument.getWordRangeAtPosition).toHaveBeenCalledWith(mockPosition);
		expect(mockDocument.getText).toHaveBeenCalledWith(mockRange);
		expect(visitFunctions).toHaveBeenCalledWith(mockDocument);
		expect(FunctionDocBuilder.createDetail).not.toHaveBeenCalled();
		expect(FunctionDocBuilder.createDocumentation).not.toHaveBeenCalled();
	});
});
