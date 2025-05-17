import FunctionVariablesFinder from './function-variables-finder';

class MockDocument {
	constructor(content) {
		this.content = content;
	}

	getText() {
		return this.content;
	}
}

describe('FunctionVariablesFinder', () => {
	let finder;

	beforeEach(() => {
		finder = new FunctionVariablesFinder();
	});

	describe('getCurrentFunction', () => {
		it('should find function at cursor position', () => {
			const document = new MockDocument(`
                void function1() {
                    int x;
                }

                void function2() {
                    string y;
                }
            `);

			// Test cursor in function1
			expect(finder.getCurrentFunction(document, { line: 2 })).toBe('function1');
			// Test cursor in function2
			expect(finder.getCurrentFunction(document, { line: 6 })).toBe('function2');
		});

		it('should return null when cursor is not in any function', () => {
			const document = new MockDocument(`
                int global_var;

                void function1() {
                    int x;
                }
            `);

			expect(finder.getCurrentFunction(document, { line: 1 })).toBeNull();
		});

		it('should handle empty document', () => {
			const document = new MockDocument('');

			expect(finder.getCurrentFunction(document, { line: 0 })).toBeNull();
		});
	});
});
