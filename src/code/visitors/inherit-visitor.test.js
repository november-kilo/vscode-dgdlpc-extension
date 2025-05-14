import * as vscode from 'vscode';
import antlr4 from 'antlr4';
import LPCLexer from '../../lpc/parser/LPCLexer';
import LPCParser from '../../lpc/parser/LPCParser';
import InheritDeclarationVisitor from './inherit-visitor';

describe('InheritDeclarationVisitor', () => {
	let visitor;
	let mockUri;

	function parseInherit(code, contextOverride) {
		if (contextOverride !== undefined) {
			const inherits = [];
			visitor.visitInheritDeclaration(contextOverride, inherits, mockUri);
			return inherits;
		}

		const chars = new antlr4.InputStream(code);
		const lexer = new LPCLexer(chars);
		const tokens = new antlr4.CommonTokenStream(lexer);
		const parser = new LPCParser(tokens);
		const inheritContext = parser.inheritDeclaration();
		const inherits = [];
		visitor.visitInheritDeclaration(inheritContext, inherits, mockUri);
		return inherits;
	}

	beforeEach(() => {
		visitor = new InheritDeclarationVisitor();
		mockUri = vscode.Uri.file('/test/file.c');
	});

	test('handles !context', () => {
		const inherits = parseInherit('inherit "/std/object";', null);

		expect(inherits).toHaveLength(0);
	});

	test('handles basic inherit', () => {
		const inherits = parseInherit('inherit "/std/object";');

		expect(inherits).toHaveLength(1);
		expect(inherits[0]).toEqual({
			path: '/std/object',
			isPrivate: false,
			location: expect.any(vscode.Location)
		});
	});

	test('handles private inherit', () => {
		const inherits = parseInherit('private inherit "/std/object";');

		expect(inherits).toHaveLength(1);
		expect(inherits[0]).toEqual({
			path: '/std/object',
			isPrivate: true,
			location: expect.any(vscode.Location)
		});
	});

	test('handles inherit with identifier', () => {
		const inherits = parseInherit('inherit BASE "/std/object";');

		expect(inherits).toHaveLength(1);
		expect(inherits[0]).toEqual({
			path: '/std/object',
			isPrivate: false,
			identifier: 'BASE',
			location: expect.any(vscode.Location)
		});
	});

	test('handles escaped quotes in paths', () => {
		const inherits = parseInherit('inherit "/std/weird\\"path";');

		expect(inherits).toHaveLength(1);
		expect(inherits[0]).toEqual({
			path: '/std/weird"path',
			isPrivate: false,
			location: expect.any(vscode.Location)
		});
	});

	test('handles empty input', () => {
		const inherits = parseInherit('');
		expect(inherits).toHaveLength(0);
	});

	test('handles malformed inherit declaration', () => {
		const inherits = parseInherit('inherit ;');
		expect(inherits).toHaveLength(0);
	});

	test('handles inherit with invalid string expression', () => {
		const inherits = parseInherit('inherit ();');
		expect(inherits).toHaveLength(0);
	});

	test('handles malformed identifier', () => {
		// This should create a context where IDENTIFIER exists but isn't a function
		const inherits = parseInherit('inherit 123 "/std/object";');  // numbers aren't valid identifiers

		expect(inherits).toHaveLength(1);
		expect(inherits[0]).toEqual({
			path: '/std/object',
			isPrivate: false,
			location: expect.any(vscode.Location)
		});
	});
});
