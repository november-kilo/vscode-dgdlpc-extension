import VariableInfoBuilder from './info-builder';

describe('VariableInfoBuilder', () => {
	describe('build', () => {
		it('should build the variable info object with correct structure', () => {
			const mockIdentifier = {
				getText: () => 'variableName',
				symbol: {line: 3, column: 5}
			};
			const baseType = 'int';
			const arrayDimension = 1;
			const modifiers = ['final'];

			const result = VariableInfoBuilder.build(
				mockIdentifier,
				baseType,
				arrayDimension,
				modifiers
			);

			expect(result).toEqual({
				name: 'variableName',
				type: 'int',
				arrayDimension: 1,
				modifiers: ['final'],
				position: {
					start: {
						line: 2,
						character: 5
					},
					end: {
						line: 2,
						character: 17
					}
				}
			});
		});

		it('should calculate position.start and position.end correctly based on token data', () => {
			const mockIdentifier = {
				getText: () => 'myVar',
				symbol: {line: 10, column: 2}
			};
			const baseType = 'string';
			const arrayDimension = 0;
			const modifiers = [];

			const result = VariableInfoBuilder.build(
				mockIdentifier,
				baseType,
				arrayDimension,
				modifiers
			);

			expect(result.position).toEqual({
				start: {
					line: 9,
					character: 2
				},
				end: {
					line: 9,
					character: 7
				}
			});
		});

		it('should handle an empty modifiers array', () => {
			const mockIdentifier = {
				getText: () => 'emptyVar',
				symbol: {line: 5, column: 10}
			};
			const baseType = 'float';
			const arrayDimension = 2;
			const modifiers = [];

			const result = VariableInfoBuilder.build(
				mockIdentifier,
				baseType,
				arrayDimension,
				modifiers
			);

			expect(result.modifiers).toEqual([]);
			expect(result.name).toBe('emptyVar');
			expect(result.type).toBe('float');
			expect(result.arrayDimension).toBe(2);
		});
	});
});
