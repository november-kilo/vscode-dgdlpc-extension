import * as vscode from 'vscode';
import LPCDiagnosticProvider from './diagnostic-provider';

// Mock vscode.languages at the module level
jest.mock('vscode', () => {
	const mockDiagnosticCollection = {
		set: jest.fn(),
		dispose: jest.fn()
	};

	return {
		...jest.requireActual('vscode'),
		languages: {
			createDiagnosticCollection: jest.fn().mockReturnValue(mockDiagnosticCollection)
		}
	};
});

describe('LPCDiagnosticProvider', () => {
	let provider;
	let mockDocument;
	let mockDiagnostic1;
	let mockDiagnostic2;

	beforeEach(() => {
		// Clear all mocks
		jest.clearAllMocks();

		// Create mock document
		mockDocument = {
			uri: vscode.Uri.file('/test/file.c'),
			languageId: 'lpc'
		};

		// Create mock diagnostic analyzers
		mockDiagnostic1 = {
			analyze: jest.fn().mockReturnValue([
				new vscode.Diagnostic(
					new vscode.Range(0, 0, 0, 10),
					'Test diagnostic 1',
					vscode.DiagnosticSeverity.Error
				)
			])
		};

		mockDiagnostic2 = {
			analyze: jest.fn().mockReturnValue([
				new vscode.Diagnostic(
					new vscode.Range(1, 0, 1, 10),
					'Test diagnostic 2',
					vscode.DiagnosticSeverity.Warning
				)
			])
		};
	});

	describe('constructor', () => {
		test('should create diagnostic collection', () => {
			provider = new LPCDiagnosticProvider();
			expect(vscode.languages.createDiagnosticCollection).toHaveBeenCalledWith('lpc');
		});

		test('should initialize with provided diagnostics', () => {
			const diagnostics = [mockDiagnostic1, mockDiagnostic2];
			provider = new LPCDiagnosticProvider(diagnostics);
			expect(provider.diagnostics).toBe(diagnostics);
		});

		test('should initialize with empty diagnostics if none provided', () => {
			provider = new LPCDiagnosticProvider();
			expect(provider.diagnostics).toEqual([]);
		});
	});

	describe('updateDiagnostics', () => {
		beforeEach(() => {
			provider = new LPCDiagnosticProvider([mockDiagnostic1, mockDiagnostic2]);
		});

		test('should ignore non-LPC documents', () => {
			const nonLpcDocument = { ...mockDocument, languageId: 'javascript' };
			const result = provider.updateDiagnostics(nonLpcDocument);

			expect(result).toEqual([]);
			expect(provider.diagnosticCollection.set).not.toHaveBeenCalled();
			expect(mockDiagnostic1.analyze).not.toHaveBeenCalled();
			expect(mockDiagnostic2.analyze).not.toHaveBeenCalled();
		});

		test('should analyze document with all diagnostics', () => {
			const result = provider.updateDiagnostics(mockDocument);

			expect(mockDiagnostic1.analyze).toHaveBeenCalledWith(mockDocument);
			expect(mockDiagnostic2.analyze).toHaveBeenCalledWith(mockDocument);
			expect(result).toHaveLength(2);
		});

		test('should update diagnostic collection', () => {
			const result = provider.updateDiagnostics(mockDocument);

			expect(provider.diagnosticCollection.set).toHaveBeenCalledWith(
				mockDocument.uri,
				result
			);
		});

		test('should handle empty diagnostic results', () => {
			mockDiagnostic1.analyze.mockReturnValue([]);
			mockDiagnostic2.analyze.mockReturnValue([]);

			const result = provider.updateDiagnostics(mockDocument);

			expect(result).toEqual([]);
			expect(provider.diagnosticCollection.set).toHaveBeenCalledWith(
				mockDocument.uri,
				[]
			);
		});

		test('should handle diagnostic analyzer errors', () => {
			mockDiagnostic1.analyze.mockImplementation(() => {
				throw new Error('Analyzer error');
			});

			const result = provider.updateDiagnostics(mockDocument);

			// Should still get diagnostics from working analyzer
			expect(result).toHaveLength(1);
			expect(provider.diagnosticCollection.set).toHaveBeenCalledWith(
				mockDocument.uri,
				result
			);
		});
	});

	describe('dispose', () => {
		test('should dispose diagnostic collection', () => {
			provider = new LPCDiagnosticProvider();
			provider.dispose();
			expect(provider.diagnosticCollection.dispose).toHaveBeenCalled();
		});
	});
});
