import * as vscode from 'vscode';
import CodeFix from './code-fix';

class InPlaceTestFix extends CodeFix {
	getTitle() {
		return 'Test In-Place Fix';
	}

	getFormattedCode() {
		return 'formatted code';
	}
}

class NonInPlaceTestFix extends CodeFix {
	getTitle() {
		return 'Test Non-In-Place Fix';
	}

	isInPlaceFix() {
		return false;
	}

	createWorkspaceEdit() {
		const edit = new vscode.WorkspaceEdit();
		edit.delete(this.document.uri, new vscode.Range(0, 0, 1, 0));
		edit.insert(this.document.uri, new vscode.Position(2, 0), 'new code\n');
		return edit;
	}
}

describe('CodeFix', () => {
	let document;
	let diagnostic;

	beforeEach(() => {
		document = {
			uri: { path: '/test/file.c' },
			lineAt: jest.fn().mockReturnValue({ text: '    some code' })
		};

		diagnostic = {
			range: {
				start: { line: 1, character: 0 },
				end: { line: 1, character: 10 }
			}
		};
	});

	describe('base class behavior', () => {
		test('throws error when getTitle is not implemented', () => {
			class UnimplementedFix extends CodeFix {}
			const fix = new UnimplementedFix(document, diagnostic);

			expect(() => fix.getTitle()).toThrow('getTitle must be implemented by subclass');
		});

		test('throws error when getFormattedCode is not implemented for in-place fix', () => {
			class UnimplementedFix extends CodeFix {}
			const fix = new UnimplementedFix(document, diagnostic);

			expect(() => fix.getFormattedCode()).toThrow('getFormattedCode must be implemented by subclass');
		});

		test('throws error when createWorkspaceEdit is not implemented for non-in-place fix', () => {
			class UnimplementedFix extends CodeFix {
				isInPlaceFix() {
					return false;
				}
			}
			const fix = new UnimplementedFix(document, diagnostic);

			expect(() => fix.createWorkspaceEdit()).toThrow('createWorkspaceEdit must be implemented by non-in-place fixes');
		});
	});

	describe('in-place fixes', () => {
		let inPlaceFix;

		beforeEach(() => {
			inPlaceFix = new InPlaceTestFix(document, diagnostic);
		});

		test('creates workspace edit with correct replacement', () => {
			const fix = inPlaceFix.createFix();

			delete fix.edit.delete;
			delete fix.edit.insert;

			expect(fix).toEqual({
				"title": "Test In-Place Fix",
				"kind": "quickfix",
				"edit": {
					"replacements": [
						{
							"uri": {
								"path": "/test/file.c"
							},
							"range": {
								"start": {
									"line": 1,
									"character": 0
								},
								"end": {
									"line": 1,
									"character": 10
								}
							},
							"newText": "formatted code"
						}
					]
				},
				"isPreferred": true,
				"diagnostics": [
					{
						"range": {
							"start": {
								"line": 1,
								"character": 0
							},
							"end": {
								"line": 1,
								"character": 10
							}
						}
					}
				]
			});
		});
	});

	describe('non-in-place fixes', () => {
		let nonInPlaceFix;

		beforeEach(() => {
			nonInPlaceFix = new NonInPlaceTestFix(document, diagnostic);
		});

		test('creates fix with correct properties', () => {
			const fix = nonInPlaceFix.createFix();

			expect(fix.title).toBe('Test Non-In-Place Fix');
			expect(fix.kind).toBe(vscode.CodeActionKind.QuickFix);
			expect(fix.isPreferred).toBe(true);
			expect(fix.diagnostics).toEqual([diagnostic]);
		});

		test('uses custom workspace edit', () => {
			const fix = nonInPlaceFix.createFix();
			const edit = fix.edit;

			expect(edit.delete).toHaveBeenCalledWith(
				document.uri,
				expect.any(Object) // vscode.Range
			);
			expect(edit.insert).toHaveBeenCalledWith(
				document.uri,
				expect.any(Object), // vscode.Position
				'new code\n'
			);
		});
	});

	describe('getLineIndentation', () => {
		let testFix;

		beforeEach(() => {
			testFix = new InPlaceTestFix(document, diagnostic);
		});

		test('returns correct space indentation', () => {
			document.lineAt.mockReturnValue({ text: '    some code' });
			expect(testFix.getLineIndentation()).toBe('    ');
		});

		test('returns correct tab indentation', () => {
			document.lineAt.mockReturnValue({ text: '\t\tsome code' });
			expect(testFix.getLineIndentation()).toBe('\t\t');
		});

		test('returns correct mixed indentation', () => {
			document.lineAt.mockReturnValue({ text: ' \t \tsome code' });
			expect(testFix.getLineIndentation()).toBe(' \t \t');
		});

		test('returns empty string for no indentation', () => {
			document.lineAt.mockReturnValue({ text: 'no indentation' });
			expect(testFix.getLineIndentation()).toBe('');
		});

		test('returns empty string for empty line', () => {
			document.lineAt.mockReturnValue({ text: '' });
			expect(testFix.getLineIndentation()).toBe('');
		});

		test('uses correct line number from diagnostic', () => {
			diagnostic.range.start.line = 42;
			testFix.getLineIndentation();
			expect(document.lineAt).toHaveBeenCalledWith(42);
		});
	});
});
