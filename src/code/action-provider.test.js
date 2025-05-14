import LPCCodeActionProvider from './action-provider';
import CodeFixFactory from './actions/code-fix-factory';

jest.mock('./actions/code-fix-factory');

describe('LPCCodeActionProvider', () => {
	let provider;
	let mockDocument;
	let mockRange;
	let mockDiagnostic;
	let mockFix;
	let mockFixAction;

	beforeEach(() => {
		jest.clearAllMocks();

		provider = new LPCCodeActionProvider();
		mockDocument = {};
		mockRange = {};
		mockDiagnostic = { message: 'test diagnostic' };
		mockFixAction = { title: 'Fix Action' };
		mockFix = {
			createFix: jest.fn().mockReturnValue(mockFixAction)
		};

		CodeFixFactory.isValidDiagnostic = jest.fn().mockReturnValue(true);
		CodeFixFactory.createFix = jest.fn().mockReturnValue(mockFix);

		jest.spyOn(console, 'error').mockImplementation(() => {});
	});

	describe('provideCodeActions', () => {
		test('returns empty array when no diagnostics', () => {
			const context = { diagnostics: [] };
			const result = provider.provideCodeActions(mockDocument, mockRange, context);
			expect(result).toEqual([]);
		});

		test('adds fixAction to actions array when valid fix is created', () => {
			const context = { diagnostics: [mockDiagnostic] };
			const result = provider.provideCodeActions(mockDocument, mockRange, context);

			expect(result).toContain(mockFixAction);
			expect(result.length).toBe(1);
		});

		test('does not add fixAction to actions array when fix is null', () => {
			mockFix.createFix.mockReturnValue(null);
			const context = { diagnostics: [mockDiagnostic] };

			const result = provider.provideCodeActions(mockDocument, mockRange, context);

			expect(result).toEqual([]);
			expect(result.length).toBe(0);
		});

		test('skips invalid diagnostics', () => {
			CodeFixFactory.isValidDiagnostic.mockReturnValue(false);
			const context = { diagnostics: [mockDiagnostic] };

			const result = provider.provideCodeActions(mockDocument, mockRange, context);

			expect(CodeFixFactory.createFix).not.toHaveBeenCalled();
			expect(result).toEqual([]);
		});

		test('handles multiple diagnostics correctly', () => {
			const validDiagnostic1 = { message: 'valid1' };
			const validDiagnostic2 = { message: 'valid2' };
			const invalidDiagnostic = { message: 'invalid' };

			CodeFixFactory.isValidDiagnostic
				.mockImplementation(diag => diag.message.startsWith('valid'));

			mockFix.createFix
				.mockReturnValueOnce({ title: 'Fix 1' })
				.mockReturnValueOnce({ title: 'Fix 2' });

			const context = {
				diagnostics: [validDiagnostic1, invalidDiagnostic, validDiagnostic2]
			};

			const result = provider.provideCodeActions(mockDocument, mockRange, context);

			expect(result).toEqual([{ title: 'Fix 1' }, { title: 'Fix 2' }]);
			expect(result.length).toBe(2);
		});
	});

	describe('createFixAction', () => {
		test('handles errors gracefully', () => {
			CodeFixFactory.createFix.mockImplementation(() => {
				throw new Error('Test error');
			});

			const result = provider.createFixAction(mockDocument, mockDiagnostic);

			expect(console.error).toHaveBeenCalled();
			expect(result).toBeNull();
		});

		test('returns null when fix creation returns null', () => {
			CodeFixFactory.createFix.mockReturnValue(null);

			const result = provider.createFixAction(mockDocument, mockDiagnostic);

			expect(result).toBeNull();
		});
	});

	describe('dispose', () => {
		test('function executes without throwing', () => {
			expect(() => {
				provider.dispose();
			}).not.toThrow();
		});
	});
});
