import * as vscode from 'vscode';
import LPCDiagnostic from './lpc-diagnostic';

describe('LPCDiagnostic', () => {
	let diagnostic;

	beforeEach(() => {
		diagnostic = new LPCDiagnostic();
	});

	describe('constructor', () => {
		test('should set default severity to Error', () => {
			expect(diagnostic.severity).toBe(vscode.DiagnosticSeverity.Error);
		});

		test('should use custom severity when provided', () => {
			const warningDiagnostic = new LPCDiagnostic(vscode.DiagnosticSeverity.Warning);
			expect(warningDiagnostic.severity).toBe(vscode.DiagnosticSeverity.Warning);
		});
	});

	describe('createDiagnostic', () => {
		let mockRange;

		beforeEach(() => {
			mockRange = new vscode.Range(0, 0, 0, 1);
		});

		test('should create diagnostic with required properties', () => {
			const result = diagnostic.createDiagnostic(
				mockRange,
				'Test message',
				'test-code'
			);

			expect(result).toBeInstanceOf(vscode.Diagnostic);
			expect(result.range).toBe(mockRange);
			expect(result.message).toBe('Test message');
			expect(result.severity).toBe(vscode.DiagnosticSeverity.Error);
			expect(result.code).toBe('test-code');
		});

		test('should create diagnostic with optional data', () => {
			const testData = { key: 'value' };
			const result = diagnostic.createDiagnostic(
				mockRange,
				'Test message',
				'test-code',
				testData
			);

			expect(result.data).toEqual(testData);
		});

		test('should create diagnostic without data when not provided', () => {
			const result = diagnostic.createDiagnostic(
				mockRange,
				'Test message',
				'test-code'
			);

			expect(result.data).toBeUndefined();
		});

		test('should use configured severity', () => {
			const warningDiagnostic = new LPCDiagnostic(vscode.DiagnosticSeverity.Warning);
			const result = warningDiagnostic.createDiagnostic(
				mockRange,
				'Test message',
				'test-code'
			);

			expect(result.severity).toBe(vscode.DiagnosticSeverity.Warning);
		});
	});

	describe('analyze', () => {
		test('should throw error when not implemented', () => {
			expect(() => {
				diagnostic.analyze({});
			}).toThrow('analyze method must be implemented by subclasses');
		});

		test('should allow implementation in subclass', () => {
			class TestDiagnostic extends LPCDiagnostic {
				analyze(document) {
					return [];
				}
			}

			const testDiagnostic = new TestDiagnostic();
			expect(() => {
				testDiagnostic.analyze({});
			}).not.toThrow();
		});
	});
});
