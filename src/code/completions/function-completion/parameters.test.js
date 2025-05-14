import FunctionCompletionParameters from './parameters';

describe('FunctionCompletionParameters', () => {
	test('returns empty array for null formalParams', () => {
		const result = FunctionCompletionParameters.getParameters(null);
		expect(result).toEqual([]);
	});

	test('returns empty array for void parameters', () => {
		const mockFormalParams = {
			VOID: () => () => true
		};

		const result = FunctionCompletionParameters.getParameters(mockFormalParams);
		expect(result).toEqual([]);
	});

	test('returns empty array when parameterList is null', () => {
		const mockFormalParams = {
			VOID: () => false,
			parameterList: () => null
		};

		const result = FunctionCompletionParameters.getParameters(mockFormalParams);
		expect(result).toEqual([]);
	});

	test('returns empty array when parameterDeclaration is not an array', () => {
		const mockFormalParams = {
			VOID: () => false,
			parameterList: () => ({
				parameterDeclaration: () => null
			})
		};

		const result = FunctionCompletionParameters.getParameters(mockFormalParams);
		expect(result).toEqual([]);
	});

	test('correctly processes single parameter declaration', () => {
		const mockFormalParams = {
			VOID: () => false,
			parameterList: () => ({
				parameterDeclaration: () => [{
					typeSpecifier: () => ({
						getText: () => 'int'
					}),
					IDENTIFIER: () => ({
						getText: () => 'param1'
					})
				}]
			})
		};

		const result = FunctionCompletionParameters.getParameters(mockFormalParams);
		expect(result).toEqual(['int param1']);
	});

	test('correctly processes multiple parameter declarations', () => {
		const mockFormalParams = {
			VOID: () => false,
			parameterList: () => ({
				parameterDeclaration: () => [
					{
						typeSpecifier: () => ({
							getText: () => 'int'
						}),
						IDENTIFIER: () => ({
							getText: () => 'param1'
						})
					},
					{
						typeSpecifier: () => ({
							getText: () => 'string'
						}),
						IDENTIFIER: () => ({
							getText: () => 'param2'
						})
					},
					{
						typeSpecifier: () => ({
							getText: () => 'float'
						}),
						IDENTIFIER: () => ({
							getText: () => 'param3'
						})
					}
				]
			})
		};

		const result = FunctionCompletionParameters.getParameters(mockFormalParams);
		expect(result).toEqual([
			'int param1',
			'string param2',
			'float param3'
		]);
	});

	test('handles complex type specifiers', () => {
		const mockFormalParams = {
			VOID: () => false,
			parameterList: () => ({
				parameterDeclaration: () => [{
					typeSpecifier: () => ({
						getText: () => 'array<string>'
					}),
					IDENTIFIER: () => ({
						getText: () => 'names'
					})
				}]
			})
		};

		const result = FunctionCompletionParameters.getParameters(mockFormalParams);
		expect(result).toEqual(['array<string> names']);
	});

	test('handles when VOID method exists but returns false', () => {
		const mockFormalParams = {
			VOID: () => false,
			parameterList: () => ({
				parameterDeclaration: () => [{
					typeSpecifier: () => ({
						getText: () => 'int'
					}),
					IDENTIFIER: () => ({
						getText: () => 'param1'
					})
				}]
			})
		};

		const result = FunctionCompletionParameters.getParameters(mockFormalParams);
		expect(result).toEqual(['int param1']);
	});
});
