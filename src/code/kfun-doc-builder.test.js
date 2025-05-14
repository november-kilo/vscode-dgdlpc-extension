import * as vscode from 'vscode';
import KFunDocBuilder from './kfun-doc-builder';
import MarkdownUtil from './markdown-util';

describe('KFunDocBuilder', () => {
	let showDocumentSpy;
	let boldSpy;
	let builder;
	const mockKfunsData = {
		kfuns: {
			'test_function': {
				description: 'Test description',
				synopsis: 'int test_function(int arg)',
				documentation: 'Test detailed documentation',
				returnType: 'int',
				params: [
					{
						label: 'arg',
						documentation: 'Test parameter',
						optional: false
					}
				],
				seeAlso: ['other_function']
			}
		}
	};

	beforeEach(() => {
		showDocumentSpy = jest.spyOn(MarkdownUtil, 'showDocument');
		showDocumentSpy.mockReturnValue('[view documentation](link)');
		boldSpy = jest.spyOn(MarkdownUtil, 'bold');
		boldSpy.mockReturnValue('**bold**');
		builder = new KFunDocBuilder();
		builder.getKfunsData = jest.fn().mockReturnValue(mockKfunsData);
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	describe('getCompletionItems', () => {
		test('returns array of completion items', () => {
			const completions = builder.getCompletionItems();
			expect(completions).toHaveLength(1);
			expect(completions[0].label).toBe('test_function');
			expect(completions[0].kind).toBe(vscode.CompletionItemKind.Function);
		});
	});

	describe('createDocumentation', () => {
		test('creates markdown documentation with all sections', () => {
			const doc = builder.createDocumentation('test_function', mockKfunsData.kfuns.test_function);

			expect(vscode.MarkdownString).toHaveBeenCalled();
			expect(doc.isTrusted).toBe(true);
			expect(doc.supportThemeIcons).toBe(true);
			expect(doc.supportHtml).toBe(true);

			expect(doc.appendMarkdown).toHaveBeenCalledWith(expect.stringContaining('### test_function'));
			expect(doc.appendMarkdown).toHaveBeenCalledWith(expect.stringContaining('Test description'));
			expect(doc.appendCodeblock).toHaveBeenCalledWith('int test_function(int arg)', 'lpc');
		});
	});

	describe('appendParameters', () => {
		test('appends parameters when present', () => {
			const doc = builder.initializeMarkdownString();
			builder.appendParameters(doc, mockKfunsData.kfuns.test_function.params);

			expect(doc.appendMarkdown).toHaveBeenCalledWith('**Parameters:**\n\n');
			expect(doc.appendMarkdown).toHaveBeenCalledWith(expect.stringContaining('`arg`'));
		});

		test('skips parameters section when no params', () => {
			const doc = builder.initializeMarkdownString();
			builder.appendParameters(doc, []);

			expect(doc.appendMarkdown).not.toHaveBeenCalledWith('**Parameters:**\n\n');
		});
	});

	describe('appendBasicInfo', () => {
		let doc;

		beforeEach(() => {
			doc = builder.initializeMarkdownString();
		});

		test('appends all available information', () => {
			const kfun = {
				description: 'Test description',
				synopsis: 'void test()',
				documentation: 'Detailed docs'
			};

			builder.appendBasicInfo(doc, 'test_function', kfun);

			expect(doc.appendMarkdown).toHaveBeenCalledWith('### test_function\n\n');
			expect(showDocumentSpy).toHaveBeenCalledWith('test_function', 'view documentation');
			expect(doc.appendMarkdown).toHaveBeenCalledWith('Test description\n\n');
			expect(doc.appendCodeblock).toHaveBeenCalledWith('void test()', 'lpc');
			expect(doc.appendMarkdown).toHaveBeenCalledWith('\n');
			expect(doc.appendMarkdown).toHaveBeenCalledWith('\nDetailed docs\n\n');
		});

		test('handles missing optional fields', () => {
			const kfun = {
				// No description, synopsis, or documentation
			};

			builder.appendBasicInfo(doc, 'test_function', kfun);

			expect(doc.appendMarkdown).toHaveBeenCalledWith('### test_function\n\n');
			expect(showDocumentSpy).toHaveBeenCalledWith('test_function', 'view documentation');
			expect(doc.appendMarkdown).not.toHaveBeenCalledWith(expect.stringContaining('undefined'));
			expect(doc.appendCodeblock).not.toHaveBeenCalled();
		});

		test('trims synopsis whitespace', () => {
			const kfun = {
				synopsis: '  void test()  \n\n'
			};

			builder.appendBasicInfo(doc, 'test_function', kfun);

			expect(doc.appendCodeblock).toHaveBeenCalledWith('void test()', 'lpc');
		});

		test('maintains correct order of sections', () => {
			const kfun = {
				description: 'desc',
				synopsis: 'syn',
				documentation: 'doc'
			};

			builder.appendBasicInfo(doc, 'test_function', kfun);

			const calls = doc.appendMarkdown.mock.calls.map(call => call[0]);
			const markdownCalls = calls.filter(call => call !== '\n' && call !== '\n\n');

			expect(markdownCalls[0]).toContain('###');  // Header first
			expect(markdownCalls[1]).toContain('view documentation');  // Link second
			expect(markdownCalls[2]).toContain('desc');  // Description third
			expect(markdownCalls[markdownCalls.length - 1]).toContain('doc');  // Documentation last
		});
	});

	describe('appendSeeAlso', () => {

		test('appends see also section when references exist', () => {
			const doc = builder.initializeMarkdownString();

			builder.appendSeeAlso(doc, ['other_function']);

			expect(boldSpy).toHaveBeenCalledWith('See Also', true);
			expect(showDocumentSpy).toHaveBeenCalledWith('other_function');
		});

		test('skips see also section when no references', () => {
			const doc = builder.initializeMarkdownString();
			builder.appendSeeAlso(doc, []);

			expect(boldSpy).not.toHaveBeenCalled();
		});
	});

	describe('createSnippetText', () => {
		test('creates snippet with parameters', () => {
			const params = [
				{ label: 'arg1' },
				{ label: 'arg2' }
			];
			const snippet = builder.createSnippetText('test', params);

			expect(vscode.SnippetString).toHaveBeenCalledWith('test(${1:arg1}, ${2:arg2})');
		});
	});

	describe('createCompletionItem', () => {
		test('creates completion item with all properties', () => {
			const item = builder.createCompletionItem(
				'test_function',
				mockKfunsData.kfuns.test_function
			);

			expect(item.label).toBe('test_function');
			expect(item.kind).toBe(vscode.CompletionItemKind.Function);
			expect(item.detail).toBe('int test_function');
			expect(item.insertText).toBeDefined();
		});

		test('creates completion item without parameters', () => {
			const funcData = {
				...mockKfunsData.kfuns.test_function,
				params: undefined
			};
			const item = builder.createCompletionItem('test_function', funcData);

			expect(item.insertText).toBeUndefined();
		});

		test('handles missing return type', () => {
			const funcData = {
				...mockKfunsData.kfuns.test_function,
				returnType: undefined
			};
			const item = builder.createCompletionItem('test_function', funcData);

			expect(item.detail).toBe(' test_function');
		});

		test('handles null return type', () => {
			const funcData = {
				...mockKfunsData.kfuns.test_function,
				returnType: null
			};
			const item = builder.createCompletionItem('test_function', funcData);

			expect(item.detail).toBe(' test_function');
		});
	});
});
