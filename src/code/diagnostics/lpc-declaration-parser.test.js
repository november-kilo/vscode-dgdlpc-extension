import LPCDeclarationParser from './lpc-declaration-parser';

describe('LPCDeclarationParser', () => {
	describe('parseDeclaration', () => {
		test('should parse simple declaration', () => {
			const text = 'int x = 42;';
			const result = LPCDeclarationParser.parseDeclaration(text);

			expect(result).toHaveLength(1);
			expect(result[0].data).toEqual({
				modifier: '',
				varType: 'int',
				varName: 'x',
				varValue: '42',
				isArray: false,
				arrayDimensions: 0
			});
		});

		test('should parse declaration with modifiers', () => {
			const text = 'private static int x = 42;';
			const result = LPCDeclarationParser.parseDeclaration(text);

			expect(result).toHaveLength(1);
			expect(result[0].data).toEqual({
				modifier: 'private static',
				varType: 'int',
				varName: 'x',
				varValue: '42',
				isArray: false,
				arrayDimensions: 0
			});
		});

		test('should parse multiple declarations', () => {
			const text = `
                int x = 42;
                string name = "test";
                private static float* values = ({ 1.0, 2.0, 3.0 });
            `;
			const result = LPCDeclarationParser.parseDeclaration(text);

			expect(result).toHaveLength(3);
			expect(result[1].data).toEqual({
				modifier: '',
				varType: 'string',
				varName: 'name',
				varValue: '"test"',
				isArray: false,
				arrayDimensions: 0
			});
		});
	});
});
