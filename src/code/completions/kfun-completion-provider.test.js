import * as vscode from 'vscode';
import KFunCompletionProvider from './kfun-completion-provider';

jest.mock('vscode', () => ({
	...jest.requireActual('vscode'),
	CompletionItem: jest.fn().mockImplementation((label, kind) => ({
		label,
		kind,
		documentation: undefined,
		detail: undefined,
		insertText: undefined
	})),
	CompletionItemKind: {
		Function: 'Function'
	},
	MarkdownString: jest.fn().mockImplementation(function(value = '') {
		this.value = value;
		this.isTrusted = false;
		this.supportThemeIcons = false;
		this.supportHtml = false;
		this.appendMarkdown = function(text) {
			this.value += text;
			return this;
		};
		this.appendCodeblock = function(code, language) {
			this.value += `\`\`\`${language}\n${code}\n\`\`\``;
			return this;
		};
	}),
	SnippetString: jest.fn().mockImplementation(function(value = '') {
		this.value = value;
	})
}));

describe('KFunCompletionProvider', () => {
	let provider;
	const mockKfunsData = {
		kfuns: {
			'test_function': {
				returnType: 'void',
				description: 'Test function description',
				synopsis: 'void test_function(string arg1, int arg2)',
				documentation: 'Detailed documentation',
				params: [
					{ label: 'arg1', documentation: 'First argument', optional: false },
					{ label: 'arg2', documentation: 'Second argument', optional: true }
				],
				seeAlso: ['other_func', 'another_func']
			},
			'simple_function': {
				returnType: 'int',
				description: 'Simple function'
			}
		}
	};

	beforeEach(() => {
		provider = new KFunCompletionProvider(mockKfunsData);
	});

	describe('getCompletions', () => {
		test('returns completion items for all kfuns', () => {
			const completions = provider.getCompletions();
			expect(completions).toHaveLength(2);
			expect(completions[0].label).toBe('test_function');
			expect(completions[1].label).toBe('simple_function');
		});
	});

	describe('createCompletionItem', () => {
		test('creates completion item with basic properties', () => {
			const item = provider.createCompletionItem('test_function', mockKfunsData.kfuns['test_function']);

			expect(item.label).toBe('test_function');
			expect(item.kind).toBe(vscode.CompletionItemKind.Function);
			expect(item.detail).toBe('void test_function');
		});

		test('creates snippet text for functions with parameters', () => {
			const item = provider.createCompletionItem('test_function', mockKfunsData.kfuns['test_function']);

			expect(item.insertText).toBeDefined();
			expect(item.insertText.value).toBe('test_function(${1:arg1}, ${2:arg2})');
		});

		test('does not create snippet text for functions without parameters', () => {
			const item = provider.createCompletionItem('simple_function', mockKfunsData.kfuns['simple_function']);

			expect(item.insertText).toBeUndefined();
		});
	});

	describe('createDocumentation', () => {
		test('creates documentation with all sections for complete kfun', () => {
			const doc = provider.createDocumentation('test_function', mockKfunsData.kfuns['test_function']);

			expect(doc.value).toContain('### test_function');
			expect(doc.value).toContain('Test function description');
			expect(doc.value).toContain('```c\nvoid test_function(string arg1, int arg2)\n```');
			expect(doc.value).toContain('Detailed documentation');
			expect(doc.value).toContain('**Parameters:**');
			expect(doc.value).toContain('`arg1`');
			expect(doc.value).toContain('`arg2` (optional)');
			expect(doc.value).toContain('**See Also:**');
			expect(doc.value).toContain('other_func');
			expect(doc.value).toContain('another_func');
		});

		test('creates documentation with only available information', () => {
			const doc = provider.createDocumentation('simple_function', mockKfunsData.kfuns['simple_function']);

			expect(doc.value).toContain('### simple_function');
			expect(doc.value).toContain('Simple function');
			expect(doc.value).not.toContain('**Parameters:**');
			expect(doc.value).not.toContain('**See Also:**');
		});
	});

	describe('appendParameters', () => {
		test('adds parameter documentation when parameters exist', () => {
			const doc = provider.initializeMarkdownString();
			provider.appendParameters(doc, mockKfunsData.kfuns['test_function'].params);

			expect(doc.value).toContain('**Parameters:**');
			expect(doc.value).toContain('`arg1`');
			expect(doc.value).toContain('First argument');
			expect(doc.value).toContain('`arg2` (optional)');
			expect(doc.value).toContain('Second argument');
		});

		test('skips parameter section when no parameters', () => {
			const doc = provider.initializeMarkdownString();
			provider.appendParameters(doc, []);

			expect(doc.value).not.toContain('**Parameters:**');
		});
	});

	describe('appendSeeAlso', () => {
		test('adds see also section when references exist', () => {
			const doc = provider.initializeMarkdownString();
			provider.appendSeeAlso(doc, mockKfunsData.kfuns['test_function'].seeAlso);

			expect(doc.value).toContain('**See Also:**');
			expect(doc.value).toContain('other_func');
			expect(doc.value).toContain('another_func');
		});

		test('skips see also section when no references', () => {
			const doc = provider.initializeMarkdownString();
			provider.appendSeeAlso(doc, []);

			expect(doc.value).not.toContain('**See Also:**');
		});
	});

	describe('createSnippetText', () => {
		test('creates correct snippet with multiple parameters', () => {
			const snippet = provider.createSnippetText('test_function', mockKfunsData.kfuns['test_function'].params);

			expect(snippet.value).toBe('test_function(${1:arg1}, ${2:arg2})');
		});

		test('creates correct snippet with single parameter', () => {
			const snippet = provider.createSnippetText('test_function', [{ label: 'arg1' }]);

			expect(snippet.value).toBe('test_function(${1:arg1})');
		});
	});
});
