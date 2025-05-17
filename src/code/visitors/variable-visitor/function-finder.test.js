import VariableFunctionFinder from './function-finder';

describe('VariableFunctionFinder', () => {
	let finder;

	beforeEach(() => {
		finder = new VariableFunctionFinder(5); // sample target line
	});

	describe('visit', () => {
		test('should handle empty context', () => {
			const mockContext = {
				programElement: undefined,
				children: undefined
			};

			finder.visit(mockContext);
			expect(finder.currentFunction).toBeNull();
		});

		test('should process function declarations', () => {
			const mockFunctionDeclarator = {
				children: [{
					constructor: { name: 'TerminalNodeImpl' },
					getText: () => 'testFunction'
				}]
			};

			const mockFunctionDecl = {
				start: { line: 1 },
				stop: { line: 10 },
				functionDeclarator: () => mockFunctionDeclarator
			};

			const mockElement = {
				functionDeclaration: () => mockFunctionDecl
			};

			const mockContext = {
				programElement: () => [mockElement],
				children: []
			};

			finder.visit(mockContext);
			expect(finder.currentFunction).toBe('testFunction');
		});

		test('should handle nested children', () => {
			const mockChild1 = {
				programElement: undefined,
				children: undefined
			};

			const mockChild2 = {
				programElement: undefined,
				children: undefined
			};

			const mockContext = {
				programElement: undefined,
				children: [mockChild1, mockChild2]
			};

			// Spy on visit method to ensure it's called for each child
			const visitSpy = jest.spyOn(finder, 'visit');

			finder.visit(mockContext);

			expect(visitSpy).toHaveBeenCalledTimes(3); // once for parent, once for each child
			expect(visitSpy).toHaveBeenCalledWith(mockChild1);
			expect(visitSpy).toHaveBeenCalledWith(mockChild2);
		});

		test('should handle operator name context', () => {
			const mockFunctionDeclarator = {
				children: [{
					constructor: { name: 'OperatorNameContext' },
					getText: () => 'operator+'
				}]
			};

			const mockFunctionDecl = {
				start: { line: 1 },
				stop: { line: 10 },
				functionDeclarator: () => mockFunctionDeclarator
			};

			const mockElement = {
				functionDeclaration: () => mockFunctionDecl
			};

			const mockContext = {
				programElement: () => [mockElement],
				children: []
			};

			finder.visit(mockContext);
			expect(finder.currentFunction).toBe('operator+');
		});

		test('should ignore functions outside target line', () => {
			const mockFunctionDeclarator = {
				children: [{
					constructor: { name: 'TerminalNodeImpl' },
					getText: () => 'outsideFunction'
				}]
			};

			const mockFunctionDecl = {
				start: { line: 20 }, // Above our target line of 5
				stop: { line: 25 },
				functionDeclarator: () => mockFunctionDeclarator
			};

			const mockElement = {
				functionDeclaration: () => mockFunctionDecl
			};

			const mockContext = {
				programElement: () => [mockElement],
				children: []
			};

			finder.visit(mockContext);
			expect(finder.currentFunction).toBeNull();
		});

		test('should handle invalid function declarator', () => {
			const mockFunctionDecl = {
				start: { line: 1 },
				stop: { line: 10 },
				functionDeclarator: () => null
			};

			const mockElement = {
				functionDeclaration: () => mockFunctionDecl
			};

			const mockContext = {
				programElement: () => [mockElement],
				children: []
			};

			finder.visit(mockContext);
			expect(finder.currentFunction).toBeNull();
		});
	});

	describe('checkFunctionDeclaration', () => {
		test('should return early if function declaration has no start or stop', () => {
			const mockFuncDecl = {
				start: null,
				stop: null
			};

			finder.checkFunctionDeclaration(mockFuncDecl);
			expect(finder.currentFunction).toBeNull();
		});

		test('should not update currentFunction if target line is before function range', () => {
			const mockFuncDecl = {
				start: { line: 7 },
				stop: { line: 10 }
			};

			finder.checkFunctionDeclaration(mockFuncDecl);
			expect(finder.currentFunction).toBeNull();
		});

		test('should not update currentFunction if target line is after function range', () => {
			const mockFuncDecl = {
				start: { line: 1 },
				stop: { line: 3 }
			};

			finder.checkFunctionDeclaration(mockFuncDecl);
			expect(finder.currentFunction).toBeNull();
		});

		test('should update currentFunction if target line is within function range', () => {
			const mockFuncDecl = {
				start: { line: 3 },
				stop: { line: 7 },
				functionDeclarator: () => ({
					children: [{ getText: () => 'testFunction' }]
				})
			};

			finder.checkFunctionDeclaration(mockFuncDecl);
			expect(finder.currentFunction).toBe('testFunction');
		});

		test('should update currentFunction if target line matches function start line', () => {
			const mockFuncDecl = {
				start: { line: 6 },
				stop: { line: 8 },
				functionDeclarator: () => ({
					children: [{ getText: () => 'testFunction' }]
				})
			};

			finder = new VariableFunctionFinder(5); // line 5 after adjustment (6-1)
			finder.checkFunctionDeclaration(mockFuncDecl);
			expect(finder.currentFunction).toBe('testFunction');
		});

		test('should update currentFunction if target line matches function end line', () => {
			const mockFuncDecl = {
				start: { line: 3 },
				stop: { line: 6 },
				functionDeclarator: () => ({
					children: [{ getText: () => 'testFunction' }]
				})
			};

			finder = new VariableFunctionFinder(5); // line 5 after adjustment (6-1)
			finder.checkFunctionDeclaration(mockFuncDecl);
			expect(finder.currentFunction).toBe('testFunction');
		});
	});

	describe('getFunctionName', () => {
		test('should return early if function declaration has no start position', () => {
			const funcDecl = {
				start: null,
				stop: { line: 10 }
			};

			finder.checkFunctionDeclaration(funcDecl);
			expect(finder.currentFunction).toBeNull();
		});

		test('should return early if function declaration has no stop position', () => {
			const funcDecl = {
				start: { line: 1 },
				stop: null
			};

			finder.checkFunctionDeclaration(funcDecl);
			expect(finder.currentFunction).toBeNull();
		});

		test('should not update currentFunction if target line is before function range', () => {
			finder = new VariableFunctionFinder(2);
			const funcDecl = {
				start: { line: 5 },
				stop: { line: 10 }
			};

			finder.checkFunctionDeclaration(funcDecl);
			expect(finder.currentFunction).toBeNull();
		});

		test('should not update currentFunction if target line is after function range', () => {
			finder = new VariableFunctionFinder(15);
			const funcDecl = {
				start: { line: 5 },
				stop: { line: 10 }
			};

			finder.checkFunctionDeclaration(funcDecl);
			expect(finder.currentFunction).toBeNull();
		});

		test('should update currentFunction if target line is within function range', () => {
			finder = new VariableFunctionFinder(7);
			const funcDecl = {
				start: { line: 5 },
				stop: { line: 10 }
			};

			// Mock getFunctionName to return a known value
			finder.getFunctionName = jest.fn().mockReturnValue('testFunction');

			finder.checkFunctionDeclaration(funcDecl);
			expect(finder.currentFunction).toBe('testFunction');
			expect(finder.getFunctionName).toHaveBeenCalledWith(funcDecl);
		});

		test('should update currentFunction if target line is at start of function', () => {
			finder = new VariableFunctionFinder(5);
			const funcDecl = {
				start: { line: 6 },
				stop: { line: 10 }
			};

			finder.getFunctionName = jest.fn().mockReturnValue('testFunction');

			finder.checkFunctionDeclaration(funcDecl);
			expect(finder.currentFunction).toBe('testFunction');
		});

		test('should update currentFunction if target line is at end of function', () => {
			finder = new VariableFunctionFinder(9);
			const funcDecl = {
				start: { line: 5 },
				stop: { line: 10 }
			};

			finder.getFunctionName = jest.fn().mockReturnValue('testFunction');

			finder.checkFunctionDeclaration(funcDecl);
			expect(finder.currentFunction).toBe('testFunction');
		});

		test('should return null when declarator has no children', () => {
			const funcDecl = {
				functionDeclarator: () => ({
					children: []
				})
			};

			const result = finder.getFunctionName(funcDecl);
			expect(result).toBeNull();
		});
	});
});
