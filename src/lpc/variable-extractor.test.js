import extractVariables from './variable-extractor';

function expectVariable(variable, expected) {
	expect(variable.name).toBe(expected.name);
	expect(variable.type).toBe(expected.type);
	expect(variable.modifiers).toBe(expected.modifiers || '');
	expect(variable.arrayDimension).toBe(expected.arrayDimension || 0);
}


describe('LPC Variable Extractor', () => {
	test('should extract valid multiline variable declaration', () => {
		const input = `
int *array;
 array = ({
	1,
	2,
	3
});
		`;

		const variables = extractVariables(input);

		expect(variables).toHaveLength(1);
		expectVariable(variables[0], {
			name: 'array',
			type: 'int',
			arrayDimension: 1,
		});
	});

	test('should extract valid variable declaration', () => {
		const input = `
private int *count;
static string name;
float x, y, z;
mapping **data;
`;

		const variables = extractVariables(input);

		expect(variables).toHaveLength(6);
		expectVariable(variables[0], {name: 'count', type: 'int', modifiers: 'private', arrayDimension: 1});
		expectVariable(variables[1], {name: 'name', type: 'string', modifiers: 'static'});
		expectVariable(variables[2], {name: 'x', type: 'float'});
		expectVariable(variables[3], {name: 'y', type: 'float'});
		expectVariable(variables[4], {name: 'z', type: 'float'});
		expectVariable(variables[5], {name: 'data', type: 'mapping', arrayDimension: 2});
	});
});
