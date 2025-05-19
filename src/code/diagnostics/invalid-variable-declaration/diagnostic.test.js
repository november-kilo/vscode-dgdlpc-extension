import * as vscode from 'vscode';
import InvalidVariableDeclarationDiagnostic from './diagnostic';
import VariableDeclarationParser from './parser';

describe('Diagnostic', () => {
	let diagnosticAnalyzer;
	let mockDocument;

	beforeEach(() => {
		diagnosticAnalyzer = new InvalidVariableDeclarationDiagnostic();
		mockDocument = {
			getText: jest.fn(),
			positionAt: jest.fn().mockImplementation((offset) => ({
				line: 0,
				character: offset
			}))
		};
		jest.restoreAllMocks();
	});

	describe('analyze', () => {
		test('should create diagnostic for simple variable declaration', () => {
			const code = 'int x = 42;';
			mockDocument.getText.mockReturnValue(code);

			const declarations = [{
				index: 0,
				length: code.length,
				data: { varType: 'int', varName: 'x' }
			}];

			jest.spyOn(VariableDeclarationParser, 'parseDeclaration')
				.mockReturnValue(declarations);

			const [diagnostic] = diagnosticAnalyzer.analyze(mockDocument);

			expect(diagnostic.range).toEqual({
				start: {
					line: 0,
					character: 0
				},
				end: {
					line: 0,
					character: code.length
				}
			});
		});

		test('should not match assignments where variable name contains a data type', () => {
			const input = `
        // These should not match as they are assignments
        objectd = find_object(OBJECTSERVER);
        dobject = find_object(FOO);
        dobjectd = find_object(BAR);
        
        // This should match as it's a declaration
        object my_object = find_object(BAZ);
    `;

			const matches = VariableDeclarationParser.parseDeclaration(input);

			expect(matches).toHaveLength(1);
			expect(matches[0].data).toEqual({
				modifier: '',
				varType: 'object',
				varName: 'my_object',
				varValue: 'find_object(BAZ)',
				isArray: false,
				arrayDimensions: 0
			});
		});

		test('should handle multiple declarations', () => {
			const code = 'int x = 42; int y = 23;';
			mockDocument.getText.mockReturnValue(code);

			const declarations = [
				{
					index: 0,
					length: 10,
					data: { varType: 'int', varName: 'x' }
				},
				{
					index: 11,
					length: 10,
					data: { varType: 'int', varName: 'y' }
				}
			];

			jest.spyOn(VariableDeclarationParser, 'parseDeclaration')
				.mockReturnValue(declarations);

			const diagnostics = diagnosticAnalyzer.analyze(mockDocument);

			expect(diagnostics).toHaveLength(2);
			// Add range checks for both diagnostics
			expect(diagnostics[0].range).toEqual({
				start: {
					line: 0,
					character: 0
				},
				end: {
					line: 0,
					character: 10
				}
			});
			expect(diagnostics[1].range).toEqual({
				start: {
					line: 0,
					character: 11
				},
				end: {
					line: 0,
					character: 21
				}
			});
		});


		test('should create proper diagnostic ranges', () => {
			const code = 'int x = 42;';
			mockDocument.getText.mockReturnValue(code);

			mockDocument.positionAt
				.mockImplementation((offset) => {
					return {
						line: 0,
						character: offset
					}
				});

			const declarations = [{
				index: 0,
				length: code.length,
				data: { varType: 'int', varName: 'x' }
			}];

			jest.spyOn(VariableDeclarationParser, 'parseDeclaration')
				.mockReturnValue(declarations);

			const [diagnostic] = diagnosticAnalyzer.analyze(mockDocument);

			// Test the actual structure we're receiving
			expect(diagnostic.range).toEqual({
				start: {
					line: 0,
					character: 0
				},
				end: {
					line: 0,
					character: code.length
				}
			});
		});
	});

	describe('severity', () => {
		test('severity should use custom severity if provided', () => {
			const code = 'int x = 42;';
			mockDocument.getText.mockReturnValue(code);

			const declarations = [{
				index: 0,
				length: code.length,
				data: { varType: 'int', varName: 'x' }
			}];

			jest.spyOn(VariableDeclarationParser, 'parseDeclaration')
				.mockReturnValue(declarations);

			diagnosticAnalyzer.severity = vscode.DiagnosticSeverity.Error;
			const [diagnostic] = diagnosticAnalyzer.analyze(mockDocument);

			expect(diagnostic.severity).toBe(vscode.DiagnosticSeverity.Error);
		});
	});
});
