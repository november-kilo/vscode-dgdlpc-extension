import * as vscode from 'vscode';
import InvalidInheritPositionFix from './invalid-position-fix';

describe('InvalidInheritPositionFix', () => {
	let document;
	let diagnostic;
	let fix;

	beforeEach(() => {
		diagnostic = {
			range: {
				start: { line: 5 },
				end: { line: 5 }
			},
			data: {
				text: 'inherit foo'
			}
		};
	});

	test('isInPlaceFix returns false', () => {
		fix = new InvalidInheritPositionFix({}, {});
		expect(fix.isInPlaceFix()).toBe(false);
	});

	test('getFormattedCode returns correct code', () => {
		fix = new InvalidInheritPositionFix({}, diagnostic);
		expect(fix.getFormattedCode()).toBe('inherit foo');
	});

	test('returns correct title', () => {
		fix = new InvalidInheritPositionFix({}, {});
		expect(fix.getTitle()).toBe('Move inherit declaration to top');
	});

	test('moves inherit after preprocessor directives', () => {
		document = {
			getText: () => [
				'#preprocessor',
				'',
				'some code',
				'more code',
				'',
				'inherit foo'
			].join('\n'),
			lineAt: () => ({
				range: { start: 0, end: 10 },
				rangeIncludingLineBreak: { start: 0, end: 11 }
			}),
			uri: 'test-uri'
		};

		fix = new InvalidInheritPositionFix(document, diagnostic);
		const edit = fix.createWorkspaceEdit();

		expect(edit.delete).toHaveBeenCalledWith(
			'test-uri',
			expect.any(Object) // Range object
		);
		expect(edit.insert).toHaveBeenCalledWith(
			'test-uri',
			expect.objectContaining({ line: 2, character: 0 }), // Position after preprocessor
			'inherit foo\n'
		);
	});

	test('moves inherit after existing inherit declarations', () => {
		document = {
			getText: () => [
				'#preprocessor',
				'inherit bar',
				'inherit baz',
				'some code',
				'inherit foo',
				'more code'
			].join('\n'),
			lineAt: () => ({
				range: { start: 0, end: 10 },
				rangeIncludingLineBreak: { start: 0, end: 11 }
			}),
			uri: 'test-uri'
		};

		fix = new InvalidInheritPositionFix(document, diagnostic);
		const edit = fix.createWorkspaceEdit();

		expect(edit.delete).toHaveBeenCalledWith(
			'test-uri',
			expect.any(Object) // Range object
		);
		expect(edit.insert).toHaveBeenCalledWith(
			'test-uri',
			expect.objectContaining({ line: 3, character: 0 }), // Position after last inherit
			'inherit foo\n'
		);
	});

	test('handles empty file', () => {
		document = {
			getText: () => '',
			lineAt: () => ({
				range: { start: 0, end: 0 },
				rangeIncludingLineBreak: { start: 0, end: 0 }
			}),
			uri: 'test-uri'
		};

		fix = new InvalidInheritPositionFix(document, diagnostic);
		const edit = fix.createWorkspaceEdit();

		expect(edit.delete).toHaveBeenCalledWith(
			'test-uri',
			expect.any(Object) // Range object
		);
		expect(edit.insert).toHaveBeenCalledWith(
			'test-uri',
			expect.objectContaining({ line: 0, character: 0 }), // Position at start
			'inherit foo\n'
		);
	});
});
