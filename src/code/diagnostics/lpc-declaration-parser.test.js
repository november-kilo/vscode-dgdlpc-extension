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

	describe('shouldNotCreateDiagnostic', () => {
		let varName;
		let varType;

		beforeEach(() => {
			varName = 'x';
			varType = 'int';
		})

		test('should return true for exact varType and varName match with no extra whitespace', () => {
			const fullMatch = 'intx = 42;';

			expect(LPCDeclarationParser.shouldNotCreateDiagnostic(fullMatch, varType, varName)).toBe(true);
		});

		test('should return false if varName has whitespace', () => {
			const fullMatch = 'int x = 42;';

			expect(LPCDeclarationParser.shouldNotCreateDiagnostic(fullMatch, varType, varName)).toBe(false);
		});

		test('should return false if fullMatch does not start with concatenated varType and varName', () => {
			const fullMatch = 'private int x = 42;';

			expect(LPCDeclarationParser.shouldNotCreateDiagnostic(fullMatch, varType, varName)).toBe(false);
		});

		test('should return true for exact varType and varName with extra spacing in fullMatch', () => {
			const fullMatch = '   intx=42   ';

			expect(LPCDeclarationParser.shouldNotCreateDiagnostic(fullMatch, varType, varName)).toBe(true);
		});

		test('should return false if varType and varName concatenation has whitespace in between', () => {
			const fullMatch = 'int x=42;';

			expect(LPCDeclarationParser.shouldNotCreateDiagnostic(fullMatch, varType, varName)).toBe(false);
		});
	});
});
