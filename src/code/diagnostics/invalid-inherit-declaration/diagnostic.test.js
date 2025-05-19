import * as vscode from 'vscode';
import InvalidInheritDeclarationDiagnostic from './diagnostic';
import visitInherit from '../../visitors/inherit-visitor/visitor';
import CodeFixFactory from '../../actions/code-fix-factory';

jest.mock('../../visitors/inherit-visitor/visitor');

describe('InvalidInheritDeclarationDiagnostic', () => {
	let diagnosticAnalyzer;
	let mockDocument;

	beforeEach(() => {
		diagnosticAnalyzer = new InvalidInheritDeclarationDiagnostic();
		mockDocument = {
			getText: jest.fn(),
			uri: { path: '/test/file.c' }
		};
		jest.clearAllMocks();
	});

	describe('analyze', () => {
		test('creates diagnostic for invalid inherit position', () => {
			const mockInherit = {
				invalidPosition: true,
				range: {
					start: { line: 5, character: 0 },
					end: { line: 5, character: 12 }
				},
				text: 'inherit foo'
			};

			visitInherit.mockReturnValue([mockInherit]);

			const [diagnostic] = diagnosticAnalyzer.analyze(mockDocument);

			expect(visitInherit).toHaveBeenCalledWith(mockDocument);
			expect(diagnostic).toEqual(expect.objectContaining({
				message: 'Inherit declaration must appear before any other code',
				code: CodeFixFactory.ACTION_TYPES.INVALID_INHERIT_POSITION,
				range: new vscode.Range(5, 0, 5, 12),
				data: mockInherit
			}));
		});

		test('ignores valid inherit positions', () => {
			const mockInherits = [
				{
					invalidPosition: false,
					range: {
						start: { line: 1, character: 0 },
						end: { line: 1, character: 12 }
					},
					text: 'inherit foo'
				},
				{
					invalidPosition: false,
					range: {
						start: { line: 2, character: 0 },
						end: { line: 2, character: 12 }
					},
					text: 'inherit bar'
				}
			];

			visitInherit.mockReturnValue(mockInherits);

			const diagnostics = diagnosticAnalyzer.analyze(mockDocument);

			expect(visitInherit).toHaveBeenCalledWith(mockDocument);
			expect(diagnostics).toHaveLength(0);
		});

		test('handles multiple invalid inherit positions', () => {
			const mockInherits = [
				{
					invalidPosition: true,
					range: {
						start: { line: 5, character: 0 },
						end: { line: 5, character: 12 }
					},
					text: 'inherit foo'
				},
				{
					invalidPosition: true,
					range: {
						start: { line: 7, character: 0 },
						end: { line: 7, character: 12 }
					},
					text: 'inherit bar'
				}
			];

			visitInherit.mockReturnValue(mockInherits);

			const diagnostics = diagnosticAnalyzer.analyze(mockDocument);

			expect(diagnostics).toHaveLength(2);
			expect(diagnostics[0].range).toEqual(new vscode.Range(5, 0, 5, 12));
			expect(diagnostics[1].range).toEqual(new vscode.Range(7, 0, 7, 12));
		});

		test('handles empty inherit list', () => {
			visitInherit.mockReturnValue([]);

			const diagnostics = diagnosticAnalyzer.analyze(mockDocument);

			expect(visitInherit).toHaveBeenCalledWith(mockDocument);
			expect(diagnostics).toHaveLength(0);
		});

		test('preserves severity level', () => {
			const mockInherit = {
				invalidPosition: true,
				range: {
					start: { line: 5, character: 0 },
					end: { line: 5, character: 12 }
				},
				text: 'inherit foo'
			};

			visitInherit.mockReturnValue([mockInherit]);
			diagnosticAnalyzer.severity = vscode.DiagnosticSeverity.Error;

			const [diagnostic] = diagnosticAnalyzer.analyze(mockDocument);

			expect(diagnostic.severity).toBe(vscode.DiagnosticSeverity.Error);
		});
	});
});
