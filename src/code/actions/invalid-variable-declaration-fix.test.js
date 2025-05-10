import InvalidVariableDeclarationFix from './invalid-variable-declaration-fix';

describe('InvalidVariableDeclarationFix', () => {
	let document;
	let diagnostic;
	let fix;

	beforeEach(() => {
		document = {
			uri: { path: '/test/file.c' },
			lineAt: jest.fn().mockReturnValue({ text: '    ' })
		};
	});

	describe('getTitle', () => {
		test('returns correct title', () => {
			fix = new InvalidVariableDeclarationFix(document, {});

			expect(fix.getTitle()).toBe('Split variable declaration and initialization');
		});
	});

	describe('getFormattedCode', () => {
		test('formats basic variable declaration and initialization', () => {
			diagnostic = {
				range: {
					start: { line: 0 }
				},
				data: {
					varType: 'int',
					varName: 'count',
					varValue: '42',
					isArray: false
				}
			};

			fix = new InvalidVariableDeclarationFix(document, diagnostic);

			expect(fix.getFormattedCode()).toBe('int count;\n    count = 42');
		});

		test('includes modifier when present', () => {
			diagnostic = {
				range: {
					start: { line: 0 }
				},
				data: {
					modifier: 'private',
					varType: 'string',
					varName: 'name',
					varValue: '"John"',
					isArray: false
				}
			};

			fix = new InvalidVariableDeclarationFix(document, diagnostic);

			expect(fix.getFormattedCode()).toBe('private string name;\n    name = "John"');
		});

		test('handles array type with single dimension', () => {
			diagnostic = {
				range: {
					start: { line: 0 }
				},
				data: {
					varType: 'int',
					varName: 'numbers',
					varValue: '({1, 2, 3})',
					isArray: true,
					arrayDimensions: 1
				}
			};

			fix = new InvalidVariableDeclarationFix(document, diagnostic);

			expect(fix.getFormattedCode()).toBe('int* numbers;\n    numbers = ({1, 2, 3})');
		});

		test('handles array type with multiple dimensions', () => {
			diagnostic = {
				range: {
					start: { line: 0 }
				},
				data: {
					varType: 'int',
					varName: 'matrix',
					varValue: '({({1,2}), ({3,4})})',
					isArray: true,
					arrayDimensions: 2
				}
			};

			fix = new InvalidVariableDeclarationFix(document, diagnostic);

			expect(fix.getFormattedCode()).toBe('int** matrix;\n    matrix = ({({1,2}), ({3,4})})');
		});

		test('handles no indentation', () => {
			document.lineAt.mockReturnValue({ text: 'no-indent' });
			diagnostic = {
				range: {
					start: { line: 0 }
				},
				data: {
					varType: 'int',
					varName: 'x',
					varValue: '1',
					isArray: false
				}
			};

			fix = new InvalidVariableDeclarationFix(document, diagnostic);

			expect(fix.getFormattedCode()).toBe('int x;\nx = 1');
		});
	});
});
