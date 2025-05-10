import * as vscode from 'vscode';
import LPCCodeActionProvider from './action-provider';
import CodeFixFactory from './actions/code-fix-factory';

jest.mock('./actions/code-fix-factory');

describe('LPCCodeActionProvider', () => {
	let provider;
	let mockDocument;
	let mockRange;
	let mockDiagnostic;
	let mockContext;

	beforeEach(() => {
		provider = new LPCCodeActionProvider();
		mockDocument = { uri: vscode.Uri.file('/test/file.c') };
		mockRange = new vscode.Range(0, 0, 0, 1);
		mockDiagnostic = new vscode.Diagnostic(
			mockRange,
			'Test diagnostic',
			vscode.DiagnosticSeverity.Error
		);
		mockContext = {
			diagnostics: [mockDiagnostic]
		};

		// Reset all mocks
		jest.clearAllMocks();
	});

	describe('provideCodeActions', () => {
		test('should return empty array when no diagnostics', () => {
			const result = provider.provideCodeActions(
				mockDocument,
				mockRange,
				{ diagnostics: [] }
			);
			expect(result).toEqual([]);
		});

		test('should process valid diagnostics', () => {
			const mockCodeAction = new vscode.CodeAction(
				'Fix test issue',
				vscode.CodeActionKind.QuickFix
			);

			// Mock the CodeFixFactory methods
			CodeFixFactory.isValidDiagnostic.mockReturnValue(true);
			CodeFixFactory.createFix.mockReturnValue({
				createFix: () => mockCodeAction
			});

			const actions = provider.provideCodeActions(
				mockDocument,
				mockRange,
				mockContext
			);

			expect(actions).toHaveLength(1);
			expect(actions[0]).toBe(mockCodeAction);
			expect(CodeFixFactory.isValidDiagnostic).toHaveBeenCalledWith(mockDiagnostic);
			expect(CodeFixFactory.createFix).toHaveBeenCalledWith(mockDocument, mockDiagnostic);
		});

		test('should skip invalid diagnostics', () => {
			CodeFixFactory.isValidDiagnostic.mockReturnValue(false);

			const actions = provider.provideCodeActions(
				mockDocument,
				mockRange,
				mockContext
			);

			expect(actions).toHaveLength(0);
			expect(CodeFixFactory.isValidDiagnostic).toHaveBeenCalledWith(mockDiagnostic);
			expect(CodeFixFactory.createFix).not.toHaveBeenCalled();
		});

		test('should handle multiple diagnostics', () => {
			const mockDiagnostic2 = new vscode.Diagnostic(
				mockRange,
				'Second diagnostic',
				vscode.DiagnosticSeverity.Warning
			);

			const mockCodeAction1 = new vscode.CodeAction(
				'Fix first issue',
				vscode.CodeActionKind.QuickFix
			);
			const mockCodeAction2 = new vscode.CodeAction(
				'Fix second issue',
				vscode.CodeActionKind.QuickFix
			);

			mockContext.diagnostics = [mockDiagnostic, mockDiagnostic2];

			CodeFixFactory.isValidDiagnostic
				.mockReturnValueOnce(true)
				.mockReturnValueOnce(true);

			CodeFixFactory.createFix
				.mockReturnValueOnce({ createFix: () => mockCodeAction1 })
				.mockReturnValueOnce({ createFix: () => mockCodeAction2 });

			const actions = provider.provideCodeActions(
				mockDocument,
				mockRange,
				mockContext
			);

			expect(actions).toHaveLength(2);
			expect(actions).toContain(mockCodeAction1);
			expect(actions).toContain(mockCodeAction2);
		});
	});

	describe('createFixAction', () => {
		test('should create fix action when valid', () => {
			const mockCodeAction = new vscode.CodeAction(
				'Fix test issue',
				vscode.CodeActionKind.QuickFix
			);

			CodeFixFactory.createFix.mockReturnValue({
				createFix: () => mockCodeAction
			});

			const result = provider.createFixAction(mockDocument, mockDiagnostic);

			expect(result).toBe(mockCodeAction);
			expect(CodeFixFactory.createFix).toHaveBeenCalledWith(
				mockDocument,
				mockDiagnostic
			);
		});

		test('should return null when fix creation fails', () => {
			CodeFixFactory.createFix.mockImplementation(() => {
				throw new Error('Test error');
			});

			const consoleSpy = jest.spyOn(console, 'error').mockImplementation();

			const result = provider.createFixAction(mockDocument, mockDiagnostic);

			expect(result).toBeNull();
			expect(consoleSpy).toHaveBeenCalled();
			expect(consoleSpy.mock.calls[0][0]).toBe('Error creating fix action:');

			consoleSpy.mockRestore();
		});

		test('should return null when factory returns no fix', () => {
			CodeFixFactory.createFix.mockReturnValue(null);

			const result = provider.createFixAction(mockDocument, mockDiagnostic);

			expect(result).toBeNull();
		});
	});

	describe('dispose', () => {
		test('should not throw when disposed', () => {
			expect(() => provider.dispose()).not.toThrow();
		});
	});
});
