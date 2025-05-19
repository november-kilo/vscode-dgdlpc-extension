import CodeFixFactory from './code-fix-factory';
import InvalidVariableDeclarationFix from './variable-declaration/invalid-declaration-fix';
import InvalidInheritPositionFix from './inherit-declaration/invalid-position-fix';

jest.mock('./variable-declaration/invalid-declaration-fix');
jest.mock('./inherit-declaration/invalid-position-fix');

describe('CodeFixFactory', () => {
	let document;
	let diagnostic;

	beforeEach(() => {
		document = {
			uri: {path: '/test/file.c'}
		};
	});

	describe('invalid variable declaration assignment', () => {
		beforeEach(() => {
			diagnostic = {
				code: CodeFixFactory.ACTION_TYPES.INVALID_DECLARATION_ASSIGNMENT,
				data: {
					varType: 'int',
					varName: 'count',
					varValue: '42'
				}
			};
			InvalidVariableDeclarationFix.mockClear();
		});

		describe('createFix', () => {
			test('creates InvalidVariableDeclarationFix for invalid declaration assignment', () => {
				const fix = CodeFixFactory.createFix(document, diagnostic);

				expect(InvalidVariableDeclarationFix).toHaveBeenCalledTimes(1);
				expect(InvalidVariableDeclarationFix).toHaveBeenCalledWith(document, diagnostic);
				expect(fix).toBeInstanceOf(InvalidVariableDeclarationFix);
			});

			test('returns null for unknown diagnostic code', () => {
				diagnostic.code = 'unknown-code';

				const fix = CodeFixFactory.createFix(document, diagnostic);

				expect(InvalidVariableDeclarationFix).not.toHaveBeenCalled();
				expect(fix).toBeNull();
			});
		});

		describe('isValidDiagnostic', () => {
			test('returns true for valid invalid declaration assignment diagnostic', () => {
				const isValid = CodeFixFactory.isValidDiagnostic(diagnostic);

				expect(isValid).toBe(true);
			});

			test('returns false for missing varType', () => {
				delete diagnostic.data.varType;

				const isValid = CodeFixFactory.isValidDiagnostic(diagnostic);

				expect(isValid).toBe(false);
			});

			test('returns false for missing varName', () => {
				delete diagnostic.data.varName;

				const isValid = CodeFixFactory.isValidDiagnostic(diagnostic);

				expect(isValid).toBe(false);
			});

			test('returns false for missing varValue', () => {
				delete diagnostic.data.varValue;

				const isValid = CodeFixFactory.isValidDiagnostic(diagnostic);

				expect(isValid).toBe(false);
			});

			test('returns false for missing data object', () => {
				delete diagnostic.data;

				const isValid = CodeFixFactory.isValidDiagnostic(diagnostic);

				expect(isValid).toBe(false);
			});

			test('returns false for unknown diagnostic code', () => {
				diagnostic.code = 'unknown-code';

				const isValid = CodeFixFactory.isValidDiagnostic(diagnostic);

				expect(isValid).toBe(false);
			});
		});

		describe('invalid inherit position', () => {
			beforeEach(() => {
				diagnostic = {
					code: CodeFixFactory.ACTION_TYPES.INVALID_INHERIT_POSITION,
					data: {
						text: 'inherit foo'
					}
				};
				InvalidInheritPositionFix.mockClear();
			});

			describe('createFix', () => {
				test('creates InvalidInheritPositionFix for invalid inherit position', () => {
					const fix = CodeFixFactory.createFix(document, diagnostic);

					expect(InvalidInheritPositionFix).toHaveBeenCalledTimes(1);
					expect(InvalidInheritPositionFix).toHaveBeenCalledWith(document, diagnostic);
					expect(fix).toBeInstanceOf(InvalidInheritPositionFix);
				});
			});

			describe('isValidDiagnostic', () => {
				test('returns true for valid invalid inherit position diagnostic', () => {
					const isValid = CodeFixFactory.isValidDiagnostic(diagnostic);

					expect(isValid).toBe(true);
				});

				test('returns false for missing text', () => {
					delete diagnostic.data.text;

					const isValid = CodeFixFactory.isValidDiagnostic(diagnostic);

					expect(isValid).toBe(false);
				});

				test('returns false for missing data object', () => {
					delete diagnostic.data;

					const isValid = CodeFixFactory.isValidDiagnostic(diagnostic);

					expect(isValid).toBe(false);
				});
			});
		});

		describe('common cases', () => {
			test('returns null for unknown diagnostic code', () => {
				diagnostic = {
					code: 'unknown-code',
					data: {text: 'some text'}
				};

				const fix = CodeFixFactory.createFix(document, diagnostic);

				expect(InvalidVariableDeclarationFix).not.toHaveBeenCalled();
				expect(InvalidInheritPositionFix).not.toHaveBeenCalled();
				expect(fix).toBeNull();
			});

			test('returns false for unknown diagnostic code in isValidDiagnostic', () => {
				diagnostic = {
					code: 'unknown-code',
					data: {text: 'some text'}
				};

				const isValid = CodeFixFactory.isValidDiagnostic(diagnostic);

				expect(isValid).toBe(false);
			});
		});
	});
});
