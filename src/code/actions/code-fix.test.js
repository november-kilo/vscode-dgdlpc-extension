import * as vscode from 'vscode';
import CodeFix from './code-fix';

class TestCodeFix extends CodeFix {
	getTitle() {
		return 'Test Fix';
	}

	getFormattedCode() {
		return 'formatted code';
	}
}

describe('CodeFix', () => {
	let document;
	let diagnostic;
	let codeFix;

	beforeEach(() => {
		document = {
			uri: { path: '/test/file.lpc' },
			lineAt: jest.fn().mockReturnValue({ text: '    some code' })
		};

		diagnostic = {
			range: {
				start: { line: 1, character: 0 },
				end: { line: 1, character: 10 }
			}
		};

		codeFix = new TestCodeFix(document, diagnostic);
	});

	test('creates fix with correct properties', () => {
		const fix = codeFix.createFix();

		expect(fix.title).toBe('Test Fix');
		expect(fix.kind).toBe(vscode.CodeActionKind.QuickFix);
		expect(fix.isPreferred).toBe(true);
		expect(fix.diagnostics).toEqual([diagnostic]);
	});

	test('creates workspace edit with correct replacement', () => {
		const fix = codeFix.createFix();

		expect(fix.edit).toBeTruthy();
		expect(fix.edit.replacements).toHaveLength(1);
		expect(fix.edit.replacements[0]).toEqual({
			uri: document.uri,
			range: diagnostic.range,
			newText: 'formatted code'
		});
	});

	test('gets correct line indentation', () => {
		const indentation = codeFix.getLineIndentation();
		expect(indentation).toBe('    ');
	});

	test('returns empty string for no indentation', () => {
		document.lineAt.mockReturnValue({ text: 'no indentation' });
		const indentation = codeFix.getLineIndentation();
		expect(indentation).toBe('');
	});

	describe('getLineIndentation', () => {
		test('returns empty string for no indentation', () => {
			document.lineAt.mockReturnValue({ text: 'no indentation' });
			const indentation = codeFix.getLineIndentation();
			expect(indentation).toBe('');
		});

		test('gets correct tab indentation', () => {
			document.lineAt.mockReturnValue({ text: '\t\tsome code' });
			const indentation = codeFix.getLineIndentation();
			expect(indentation).toBe('\t\t');
		});

		test('gets correct mixed indentation', () => {
			document.lineAt.mockReturnValue({ text: ' \t \tsome code' });
			const indentation = codeFix.getLineIndentation();
			expect(indentation).toBe(' \t \t');
		});

		test('uses correct line number from diagnostic', () => {
			diagnostic.range.start.line = 42;
			codeFix.getLineIndentation();
			expect(document.lineAt).toHaveBeenCalledWith(42);
		});

		test('returns empty string for empty line', () => {
			document.lineAt.mockReturnValue({ text: '' });
			const indentation = codeFix.getLineIndentation();
			expect(indentation).toBe('');
		});
	});


	test('throws error when getTitle is not implemented', () => {
		class UnimplementedFix extends CodeFix {}
		const fix = new UnimplementedFix(document, diagnostic);

		expect(() => fix.getTitle()).toThrow('getTitle must be implemented by subclass');
	});

	test('throws error when getFormattedCode is not implemented', () => {
		class UnimplementedFix extends CodeFix {}
		const fix = new UnimplementedFix(document, diagnostic);

		expect(() => fix.getFormattedCode()).toThrow('getFormattedCode must be implemented by subclass');
	});
});
