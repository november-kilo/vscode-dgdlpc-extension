import * as vscode from 'vscode';
import KfunsHoverHandler from "./hover-handler-kfuns";
import MarkdownUtil from '../markdown-util';

jest.mock('../markdown-util', () => ({
	bold: jest.fn((text) => `**${text}:**`),
	showDocument: jest.fn((funcName) =>
		`[${funcName}](command:lpc.showKfunDoc?${encodeURIComponent(JSON.stringify([funcName]))})`)
}));

jest.mock('../../kfuns.json', () => ({
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
			],
			seeAlso: ['related_fun', 'another_fun']
		},
		'no_params_fun': {
			description: 'Function without parameters'
		}
	}
}));

describe('KfunsHoverHandler', () => {
	let handler;
	let mockDocument;
	let mockPosition;
	let mockRange;

	beforeEach(() => {
		handler = new KfunsHoverHandler();
		mockRange = new vscode.Range(0, 0, 0, 8);
		mockPosition = new vscode.Position(0, 5);
		mockDocument = {
			getWordRangeAtPosition: jest.fn().mockReturnValue(mockRange),
			getText: jest.fn()
		};
		jest.clearAllMocks();
	});

	describe('canHandle', () => {
		test('returns false for no range', () => {
			mockDocument.getWordRangeAtPosition.mockReturnValue(null);

			const canHandle = handler.canHandle(mockDocument, mockPosition);

			expect(canHandle).toBe(false);
		});

		test('returns false for unknown kfun', () => {
			mockDocument.getWordRangeAtPosition.mockReturnValue(mockRange);
			mockDocument.getText.mockReturnValue('unknown_fun');

			const canHandle = handler.canHandle(mockDocument, mockPosition);

			expect(canHandle).toBe(false);
		});

		test('returns true for known kfun', () => {
			mockDocument.getText.mockReturnValue('test_fun');

			const canHandle = handler.canHandle(mockDocument, mockPosition);

			expect(canHandle).toBe(true);
		});
	});

	describe('hover content generation', () => {
		test('generates no hover when no range', () => {
			mockDocument.getWordRangeAtPosition.mockReturnValue(null);
			mockDocument.getText.mockReturnValue('test_fun');

			const hover = handler.createHover(mockDocument, mockPosition);

			expect(hover).toBeNull();
		});

		test('generates no hover when no content', () => {
			mockDocument.getText.mockReturnValue('');

			const hover = handler.createHover(mockDocument, mockPosition);

			expect(hover).toBeNull();
		});

		test('generates hover for function with all properties', () => {
			mockDocument.getText.mockReturnValue('test_fun');

			const hover = handler.createHover(mockDocument, mockPosition);

			expect(hover).toMatchSnapshot();
		});

		test('generates hover for function without parameters', () => {
			mockDocument.getText.mockReturnValue('no_params_fun');

			const hover = handler.createHover(mockDocument, mockPosition);

			expect(hover).toMatchSnapshot();
		});
	});
});
