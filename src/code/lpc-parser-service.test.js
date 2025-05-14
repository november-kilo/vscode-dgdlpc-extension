import LPCParserService from './lpc-parser-service';
import LPCParserFactory from './lpc-parser-factory';

jest.mock('./lpc-parser-factory');

describe('LPCParserService', () => {
	// Spy on console.error for error case testing
	const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

	beforeEach(() => {
		// Clear all mocks before each test
		jest.clearAllMocks();
	});

	afterAll(() => {
		// Restore all mocks after all tests
		jest.restoreAllMocks();
	});

	test('successfully parses a document', () => {
		// Mock document
		const mockDocument = {
			getText: jest.fn().mockReturnValue('some code')
		};

		// Mock parser
		const mockParser = {
			program: jest.fn().mockReturnValue('AST result')
		};

		// Mock factory createParser method
		LPCParserFactory.createParser.mockReturnValue(mockParser);

		// Execute the method
		const result = LPCParserService.parseDocument(mockDocument);

		// Assertions
		expect(mockDocument.getText).toHaveBeenCalled();
		expect(LPCParserFactory.createParser).toHaveBeenCalledWith('some code');
		expect(mockParser.program).toHaveBeenCalled();
		expect(result).toBe('AST result');
		expect(consoleErrorSpy).not.toHaveBeenCalled();
	});

	test('returns null when document.getText throws error', () => {
		// Mock document with throwing getText
		const mockDocument = {
			getText: jest.fn().mockImplementation(() => {
				throw new Error('getText error');
			})
		};

		// Execute the method
		const result = LPCParserService.parseDocument(mockDocument);

		// Assertions
		expect(result).toBeNull();
		expect(consoleErrorSpy).toHaveBeenCalledWith('Parser error:', expect.any(Error));
		expect(LPCParserFactory.createParser).not.toHaveBeenCalled();
	});

	test('returns null when parser creation fails', () => {
		// Mock document
		const mockDocument = {
			getText: jest.fn().mockReturnValue('some code')
		};

		// Mock factory to throw
		LPCParserFactory.createParser.mockImplementation(() => {
			throw new Error('parser creation error');
		});

		// Execute the method
		const result = LPCParserService.parseDocument(mockDocument);

		// Assertions
		expect(result).toBeNull();
		expect(consoleErrorSpy).toHaveBeenCalledWith('Parser error:', expect.any(Error));
	});

	test('returns null when program parsing fails', () => {
		// Mock document
		const mockDocument = {
			getText: jest.fn().mockReturnValue('some code')
		};

		// Mock parser with throwing program method
		const mockParser = {
			program: jest.fn().mockImplementation(() => {
				throw new Error('parsing error');
			})
		};

		// Mock factory
		LPCParserFactory.createParser.mockReturnValue(mockParser);

		// Execute the method
		const result = LPCParserService.parseDocument(mockDocument);

		// Assertions
		expect(result).toBeNull();
		expect(consoleErrorSpy).toHaveBeenCalledWith('Parser error:', expect.any(Error));
	});
});
