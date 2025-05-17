import VariableFunctionFilter from './function-filter';

describe('VariableFunctionFilter', () => {
	const sampleFunctions = new Map([
		['functionA', new Set(['var1', 'var2'])],
		['functionB', new Set([])],
		['functionC', new Set(['var3'])]
	]);

	describe('keepFunctionsHavingVariables', () => {
		it('should filter out functions with no variables', () => {
			const output = VariableFunctionFilter.keepFunctionsHavingVariables(sampleFunctions);

			expect(output).toEqual(new Map([
				['functionA', new Set(['var1', 'var2'])],
				['functionC', new Set(['var3'])]
			]));
		});

		it('should return an empty Map if all functions have no variables', () => {
			const input = new Map([
				['functionA', new Set()],
				['functionB', new Set()]
			]);

			const output = VariableFunctionFilter.keepFunctionsHavingVariables(input);

			expect(output).toEqual(new Map());
		});

		it('should return the original Map if all functions have variables', () => {
			const input = new Map([
				['functionA', new Set(['var1'])],
				['functionB', new Set(['var2', 'var3'])]
			]);

			const output = VariableFunctionFilter.keepFunctionsHavingVariables(input);

			expect(output).toEqual(input);
		});

		it('should return an empty Map if the input Map is empty', () => {
			const input = new Map();

			const output = VariableFunctionFilter.keepFunctionsHavingVariables(input);

			expect(output).toEqual(new Map());
		});
	});

	describe('findFunctionContainingVariable', () => {
		it('should find function containing the specified variable', () => {
			const result = VariableFunctionFilter.findFunctionContainingVariable(sampleFunctions, 'var1');

			expect(result).toEqual(['functionA', new Set(['var1', 'var2'])]);
		});

		it('should find function containing variable when multiple functions exist', () => {
			const result = VariableFunctionFilter.findFunctionContainingVariable(sampleFunctions, 'var3');

			expect(result).toEqual(['functionC', new Set(['var3'])]);
		});

		it('should return undefined when variable is not found in any function', () => {
			const result = VariableFunctionFilter.findFunctionContainingVariable(sampleFunctions, 'nonexistent');

			expect(result).toBeUndefined();
		});

		it('should return undefined for empty Map', () => {
			const result = VariableFunctionFilter.findFunctionContainingVariable(new Map(), 'var1');

			expect(result).toBeUndefined();
		});

		it('should handle functions with empty variable sets', () => {
			const result = VariableFunctionFilter.findFunctionContainingVariable(
				new Map([['emptyFunc', new Set()]]),
				'anyVar'
			);

			expect(result).toBeUndefined();
		});
	});
});
