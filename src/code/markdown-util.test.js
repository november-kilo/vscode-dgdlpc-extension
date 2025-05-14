import * as vscode from 'vscode';
import MarkdownUtil from './markdown-util';

describe('MarkdownUtil', () => {
	describe('link', () => {
		test('creates markdown link with correct file path and line', () => {
			const document = {
				uri: { fsPath: '/path/to/file.js' }
			};
			const result = MarkdownUtil.link('Click here', document, 42);
			expect(result).toBe('[Click here](file:///path/to/file.js#42)');
		});
	});

	describe('lineLink', () => {
		test('creates line-specific link', () => {
			const document = {
				uri: { fsPath: '/path/to/file.js' }
			};
			const result = MarkdownUtil.lineLink(42, document);
			expect(result).toBe('[line 42](file:///path/to/file.js#42)');
		});
	});

	describe('bold', () => {
		test('creates bold text without section', () => {
			const result = MarkdownUtil.bold('test');
			expect(result).toBe('**test**');
		});

		test('creates bold text with section', () => {
			const result = MarkdownUtil.bold('test', true);
			expect(result).toBe('**test**\n\n');
		});
	});

	describe('content', () => {
		test('creates MarkdownString with text', () => {
			const result = MarkdownUtil.content('test content');
			expect(vscode.MarkdownString).toHaveBeenCalledWith('test content');
			expect(result.value).toBe('test content');
		});
	});

	describe('code', () => {
		test('wraps text in inline code markers', () => {
			const result = MarkdownUtil.code('test');
			expect(result).toBe('`test`');
		});
	});

	describe('commandLink', () => {
		test('creates command link without args', () => {
			const result = MarkdownUtil.commandLink('Click me', 'test.command');
			expect(result).toBe('[Click me](command:test.command)');
		});

		test('creates command link with args', () => {
			const args = { foo: 'bar' };
			const result = MarkdownUtil.commandLink('Click me', 'test.command', args);
			expect(result).toBe('[Click me](command:test.command?{"foo":"bar"})');
		});
	});

	describe('showDocument', () => {
		test('creates show document link with same label as function name', () => {
			const result = MarkdownUtil.showDocument('testFunc');
			expect(result).toBe('[testFunc](command:dgdlpc.showDocument?{"name":"testFunc"})');
		});

		test('creates show document link with custom label', () => {
			const result = MarkdownUtil.showDocument('testFunc', 'Click to see docs');
			expect(result).toBe('[Click to see docs](command:dgdlpc.showDocument?{"name":"testFunc"})');
		});
	});
});
