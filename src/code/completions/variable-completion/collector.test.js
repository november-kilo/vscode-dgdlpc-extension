import VariablesCollector from './collector';

class MockDocument {
	constructor(content) {
		this.content = content;
	}

	getText() {
		return this.content;
	}
}

describe('VariableCollector', () => {
	let collector;

	beforeEach(() => {
		collector = new VariablesCollector();
	});

	describe('collectVariables', () => {
		it('should collect global variables', async () => {
			const document = new MockDocument(`
                int global_count;
                string global_name;
                
                void some_function() {
                    // Empty function
                }
            `);

			const result = await collector.collectVariables(document);

			expect(result.globalVariables.size).toBe(2);
			expect(result.globalVariables.has('global_count')).toBe(true);
			expect(result.globalVariables.has('global_name')).toBe(true);

			const countVar = result.globalVariables.get('global_count');
			expect(countVar.type).toBe('int');

			const nameVar = result.globalVariables.get('global_name');
			expect(nameVar.type).toBe('string');
		});

		it('should collect function variables', async () => {
			const document = new MockDocument(`
                void test_function() {
                    int local_var;
                    string name;
                }
            `);

			const result = await collector.collectVariables(document);

			expect(result.functionVariables.has('test_function')).toBe(true);

			const functionVars = result.functionVariables.get('test_function');
			expect(functionVars.size).toBe(2);
			expect(functionVars.has('local_var')).toBe(true);
			expect(functionVars.has('name')).toBe(true);
		});

		it('should handle array variables correctly', async () => {
			const document = new MockDocument(`
                int* numbers;
                string** matrix;
                
                void process() {
                    float* values;
                }
            `);

			const result = await collector.collectVariables(document);

			const numbersVar = result.globalVariables.get('numbers');
			expect(numbersVar.arrayDimension).toBe(1);

			const matrixVar = result.globalVariables.get('matrix');
			expect(matrixVar.arrayDimension).toBe(2);

			const functionVars = result.functionVariables.get('process');
			const valuesVar = functionVars.get('values');
			expect(valuesVar.arrayDimension).toBe(1);
		});

		it('should handle empty files', async () => {
			const document = new MockDocument('');

			const result = await collector.collectVariables(document);

			expect(result.globalVariables.size).toBe(0);
			expect(result.functionVariables.size).toBe(0);
		});
	});

	describe('helper methods', () => {
		beforeEach(() => {
			collector.functionVariables = new Map([
				['test_function', new Map([
					['local_var', { type: 'string', position: { start: { line: 1, character: 0 } } }]
				])],
				['empty_function', new Map()]
			]);
		});

		describe('getFunctionVariables', () => {
			it('should return variables for existing function', () => {
				const vars = collector.getFunctionVariables('test_function');
				expect(vars).toBeDefined();
				expect(vars.size).toBe(1);
				expect(vars.has('local_var')).toBe(true);
			});

			it('should return empty Map for function without variables', () => {
				const vars = collector.getFunctionVariables('empty_function');
				expect(vars).toBeDefined();
				expect(vars.size).toBe(0);
			});

			it('should return undefined for non-existing function', () => {
				const vars = collector.getFunctionVariables('non_existing');
				expect(vars).toBeUndefined();
			});
		});

		describe('hasFunction', () => {
			it('should return true for existing function', () => {
				expect(collector.hasFunction('test_function')).toBe(true);
			});

			it('should return true for function with no variables', () => {
				expect(collector.hasFunction('empty_function')).toBe(true);
			});

			it('should return false for non-existing function', () => {
				expect(collector.hasFunction('non_existing')).toBe(false);
			});
		});
	});
});
