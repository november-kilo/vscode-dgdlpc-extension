import * as vscode from 'vscode';
import FunctionDeclarationVisitor from './function-visitor';
import FunctionCompletionParameters from '../completions/function-completion/parameters';

jest.mock('../completions/function-completion/parameters');

describe('FunctionDeclarationVisitor', () => {
	let visitor;
	let mockFunctions;
	let mockUri;

	beforeEach(() => {
		visitor = new FunctionDeclarationVisitor();
		mockFunctions = new Map();
		mockUri = { scheme: 'file', path: '/test/file.lpc' };
		FunctionCompletionParameters.getParameters.mockReturnValue(['int param1', 'string param2']);
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	test('handles null context gracefully', () => {
		visitor.visit(null, mockFunctions, mockUri);
		expect(mockFunctions.size).toBe(0);
	});

	test('processes function declaration correctly', () => {
		const mockFunctionDecl = {
			typeSpecifier: () => ({
				getText: () => 'int'
			}),
			functionDeclarator: () => ({
				IDENTIFIER: () => ({
					getText: () => 'testFunction'
				}),
				formalParameters: () => ({
					// Mock formal parameters structure
				})
			}),
			start: { line: 1, column: 0 },
			block: () => ({}) // Non-empty block means it's not a forward declaration
		};

		const mockContext = {
			programElement: () => [{
				functionDeclaration: () => mockFunctionDecl
			}]
		};

		visitor.visit(mockContext, mockFunctions, mockUri);

		expect(mockFunctions.size).toBe(1);
		expect(mockFunctions.has('testFunction')).toBe(true);

		const funcInfo = mockFunctions.get('testFunction');
		expect(funcInfo).toEqual(expect.objectContaining({
			name: 'testFunction',
			returnType: 'int',
			parameters: ['int param1', 'string param2']
		}));
		expect(funcInfo.definitionLocation).toBeInstanceOf(vscode.Location);
	});

	test('handles forward declarations', () => {
		const mockFunctionDecl = {
			typeSpecifier: () => ({
				getText: () => 'void'
			}),
			functionDeclarator: () => ({
				IDENTIFIER: () => ({
					getText: () => 'forwardFunc'
				}),
				formalParameters: () => ({})
			}),
			start: { line: 1, column: 0 },
			block: () => null // Null block indicates forward declaration
		};

		const mockContext = {
			programElement: () => [{
				functionDeclaration: () => mockFunctionDecl
			}]
		};

		visitor.visit(mockContext, mockFunctions, mockUri);

		expect(mockFunctions.size).toBe(1);
		const funcInfo = mockFunctions.get('forwardFunc');
		expect(funcInfo.forwardDeclarationLocation).toBeDefined();
		expect(funcInfo.definitionLocation).toBeNull();
	});

	test('handles both forward declaration and definition', () => {
		const createMockFunctionDecl = (hasBlock) => ({
			typeSpecifier: () => ({
				getText: () => 'string'
			}),
			functionDeclarator: () => ({
				IDENTIFIER: () => ({
					getText: () => 'dualFunc'
				}),
				formalParameters: () => ({})
			}),
			start: { line: hasBlock ? 2 : 1, column: 0 },
			block: () => hasBlock ? ({}) : null
		});

		const mockContext = {
			programElement: () => [
				{ functionDeclaration: () => createMockFunctionDecl(false) }, // Forward declaration
				{ functionDeclaration: () => createMockFunctionDecl(true) }   // Definition
			]
		};

		visitor.visit(mockContext, mockFunctions, mockUri);

		expect(mockFunctions.size).toBe(1);
		const funcInfo = mockFunctions.get('dualFunc');
		expect(funcInfo.forwardDeclarationLocation).toBeDefined();
		expect(funcInfo.definitionLocation).toBeDefined();
		expect(funcInfo.forwardDeclarationLocation.range.start.line).toBe(0); // 1-1
		expect(funcInfo.definitionLocation.range.start.line).toBe(1); // 2-1
	});

	test('handles missing or invalid function components', () => {
		const mockFunctionDecl = {
			typeSpecifier: () => null,
			functionDeclarator: () => null
		};

		const mockContext = {
			programElement: () => [{
				functionDeclaration: () => mockFunctionDecl
			}]
		};

		visitor.visit(mockContext, mockFunctions, mockUri);
		expect(mockFunctions.size).toBe(0);
	});

	test('recursively visits nested nodes', () => {
		const mockFunctionDecl = {
			typeSpecifier: () => ({
				getText: () => 'int'
			}),
			functionDeclarator: () => ({
				IDENTIFIER: () => ({
					getText: () => 'nestedFunction'
				}),
				formalParameters: () => ({})
			}),
			start: { line: 1, column: 0 },
			block: () => ({})
		};

		// Create a nested structure that matches the expected AST format
		const mockContext = {
			children: [{
				programElement: () => [{
					functionDeclaration: () => mockFunctionDecl
				}]
			}]
		};

		visitor.visit(mockContext, mockFunctions, mockUri);

		expect(mockFunctions.size).toBe(1);
		expect(mockFunctions.has('nestedFunction')).toBe(true);
		const funcInfo = mockFunctions.get('nestedFunction');
		expect(funcInfo.returnType).toBe('int');
	});

	test('handles non-function-declaration program elements', () => {
		const mockContext = {
			programElement: () => [
				// A valid function declaration
				{
					functionDeclaration: () => ({
						typeSpecifier: () => ({
							getText: () => 'void'
						}),
						functionDeclarator: () => ({
							IDENTIFIER: () => ({
								getText: () => 'validFunc'
							}),
							formalParameters: () => ({})
						}),
						start: { line: 1, column: 0 },
						block: () => ({})
					})
				},
				// Non-function declaration elements
				{
					functionDeclaration: null  // null functionDeclaration
				},
				{}, // no functionDeclaration property
				{
					functionDeclaration: 'not a function' // functionDeclaration is not a function
				}
			]
		};

		visitor.visit(mockContext, mockFunctions, mockUri);

		// Only the valid function declaration should be processed
		expect(mockFunctions.size).toBe(1);
		expect(mockFunctions.has('validFunc')).toBe(true);
	});

	test('handles null function declaration', () => {
		const mockContext = {
			programElement: () => [{
				functionDeclaration: () => null  // This will make element.functionDeclaration() return null
			}]
		};

		visitor.visit(mockContext, mockFunctions, mockUri);

		// No functions should be processed
		expect(mockFunctions.size).toBe(0);
	});

	test('handles function declaration without valid name', () => {
		const mockContext = {
			programElement: () => [{
				functionDeclaration: () => ({
					typeSpecifier: () => ({
						getText: () => 'int'
					}),
					functionDeclarator: () => ({
						// IDENTIFIER is missing or returns null/undefined
						IDENTIFIER: () => null,
						formalParameters: () => ({})
					}),
					start: { line: 1, column: 0 },
					block: () => ({})
				})
			}]
		};

		visitor.visit(mockContext, mockFunctions, mockUri);

		// No functions should be added since the name is missing
		expect(mockFunctions.size).toBe(0);
	});

	describe('getTypeSpecifier', () => {
		test('handles missing typeSpecifier property', () => {
			expect(visitor.getTypeSpecifier({})).toBeNull();
		});

		test('handles non-function typeSpecifier', () => {
			expect(visitor.getTypeSpecifier({ typeSpecifier: 'not a function' })).toBeNull();
		});
	});

	describe('getFunctionDeclarator', () => {
		test('handles missing functionDeclarator property', () => {
			expect(visitor.getFunctionDeclarator({})).toBeNull();
		});

		test('handles non-function functionDeclarator', () => {
			expect(visitor.getFunctionDeclarator({ functionDeclarator: 'string' })).toBeNull();
		});
	});

	describe('getFunctionName', () => {
		test('handles missing IDENTIFIER property', () => {
			expect(visitor.getFunctionName({})).toBeUndefined();
		});

		test('handles non-function IDENTIFIER', () => {
			expect(visitor.getFunctionName({ IDENTIFIER: 'string' })).toBeUndefined();
		});

		test('handles IDENTIFIER() returning null', () => {
			expect(visitor.getFunctionName({
				IDENTIFIER: () => null
			})).toBeUndefined();
		});

		test('handles IDENTIFIER() returning undefined', () => {
			expect(visitor.getFunctionName({
				IDENTIFIER: () => undefined
			})).toBeUndefined();
		});
	});

	describe('getFormalParameters', () => {
		test('handles missing formalParameters property', () => {
			expect(visitor.getFormalParameters({})).toEqual([]);
		});

		test('handles non-function formalParameters', () => {
			expect(visitor.getFormalParameters({
				formalParameters: 'not a function'
			})).toEqual([]);
		});
	});

	describe('isForwardDeclaration', () => {
		test('handles missing block property', () => {
			expect(visitor.isForwardDeclaration({})).toBe(true);
		});

		test('handles non-function block', () => {
			// The function checks !funcDecl.block first, so any non-null value
			// that's not a function should return true
			expect(visitor.isForwardDeclaration({
				block: null
			})).toBe(true);
		});

		test('handles block() returning null', () => {
			expect(visitor.isForwardDeclaration({
				block: () => null
			})).toBe(true);
		});
	});

	describe('createLocation', () => {
		const mockUri = vscode.Uri.file('test.cpp');

		test('handles missing start property', () => {
			const location = visitor.createLocation({}, mockUri);
			expect(location.range.start.line).toBe(-1);
			expect(location.range.start.character).toBe(0);
		});

		test('handles partial start property', () => {
			const location = visitor.createLocation({
				start: { line: 5 } // missing column
			}, mockUri);
			expect(location.range.start.line).toBe(4); // line - 1
			expect(location.range.start.character).toBe(0);
		});

		test('handles missing line in start property', () => {
			const location = visitor.createLocation({
				start: { column: 3 } // missing line
			}, mockUri);
			expect(location.range.start.line).toBe(-1);
			expect(location.range.start.character).toBe(3);
		});
	});

});
