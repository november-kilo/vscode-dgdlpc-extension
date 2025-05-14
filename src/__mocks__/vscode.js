class DiagnosticClass {
	constructor(range, message, severity) {
		this.range = range;
		this.message = message;
		this.severity = severity;
		this.code = undefined;
		this.data = undefined;
	}
}

const DiagnosticMock = jest.fn().mockImplementation((range, message, severity) => {
	return new DiagnosticClass(range, message, severity);
});
// Make the prototype chain work correctly for instanceof checks
Object.setPrototypeOf(DiagnosticClass.prototype, DiagnosticMock.prototype);

class LocationClass {
	constructor(uri, position) {
		this.uri = uri;
		this.range = {
			start: position,
			end: position
		};
	}
}

const LocationMock = jest.fn().mockImplementation((uri, position) => {
	return new LocationClass(uri, position);
});

Object.setPrototypeOf(LocationClass.prototype, LocationMock.prototype);

const HoverMock = jest.fn().mockImplementation((contents, range) => ({
	contents: contents ? (Array.isArray(contents) ? contents : [contents]) : [],
	range: range || null
}));

class WorkspaceEditMock {
	constructor() {
		this.replacements = [];
	}

	replace(uri, range, newText) {
		this.replacements.push({ uri, range, newText });
	}
}

class SemanticTokensLegendClass {
	constructor(tokenTypes, tokenModifiers) {
		this.tokenTypes = tokenTypes;
		this.tokenModifiers = tokenModifiers;
	}
}

const SemanticTokensLegendMock = jest.fn().mockImplementation((tokenTypes, tokenModifiers) => {
	return new SemanticTokensLegendClass(tokenTypes, tokenModifiers);
});

// Make the prototype chain work correctly for instanceof checks
Object.setPrototypeOf(SemanticTokensLegendClass.prototype, SemanticTokensLegendMock.prototype);

module.exports = {
	Range: jest.fn((startLine, startChar, endLine, endChar) => ({
		start: { line: startLine, character: startChar },
		end: { line: endLine, character: endChar }
	})),
	Position: jest.fn((line, character) => ({
		line,
		character,
		isAfter: function(other) {
			return this.line > other.line ||
				(this.line === other.line && this.character > other.character);
		},
		isBefore: function(other) {
			return this.line < other.line ||
				(this.line === other.line && this.character < other.character);
		},
		isEqual: function(other) {
			return this.line === other.line && this.character === other.character;
		},
		translate: function(lineDelta, characterDelta) {
			return new Position(
				this.line + (lineDelta || 0),
				this.character + (characterDelta || 0)
			);
		},
		with: function(line, character) {
			return new Position(
				line === undefined ? this.line : line,
				character === undefined ? this.character : character
			);
		}
	})),
	Diagnostic: DiagnosticMock,
	DiagnosticSeverity: {
		Error: 0,
		Warning: 1,
		Information: 2,
		Hint: 3
	},
	CompletionItem: jest.fn().mockImplementation((label, kind) => ({
		label,
		kind,
		documentation: undefined,
		detail: undefined,
		insertText: undefined
	})),
	CompletionItemKind: {
		Function: 'Function',
		Class: 'Class',
		Keyword: 'Keyword'
	},
	MarkdownString: jest.fn().mockImplementation(function(value = '') {
		this.value = value;
		this.appendMarkdown = jest.fn();
		this.isTrusted = false;
		this.supportThemeIcons = false;
		this.supportHtml = false;
		this.appendMarkdown = jest.fn(text => {
			this.value += text;
			return this;
		});
		this.appendCodeblock = jest.fn((code, language) => {
			this.value += `\`\`\`${language}\n${code}\n\`\`\``;
			return this;
		});
	}),
	SnippetString: jest.fn().mockImplementation(function(value = '') {
		this.value = value;
	}),
	CodeAction: jest.fn().mockImplementation((title, kind) => ({
		title,
		kind,
		edit: undefined,
		isPreferred: false,
		diagnostics: []
	})),
	CodeActionKind: {
		QuickFix: 'quickfix'
	},
	window: {
		createOutputChannel: jest.fn(() => ({
			appendLine: jest.fn(),
			dispose: jest.fn()
		})),
		showInputBox: jest.fn(),
		showErrorMessage: jest.fn()
	},
	workspace: {
		getConfiguration: jest.fn().mockImplementation(() => ({
			get: jest.fn()
		})),
		workspaceFolders: [{
			uri: {
				fsPath: '/test/workspace'
			}
		}],
		onDidChangeTextDocument: jest.fn().mockImplementation((callback) => ({
			dispose: jest.fn()
		})),
		onDidCloseTextDocument: jest.fn().mockImplementation((callback) => ({
			dispose: jest.fn()
		})),
		textDocuments: []
	},
	WorkspaceEdit: jest.fn().mockImplementation(() => new WorkspaceEditMock()),
	Uri: {
		file: jest.fn(path => ({ path, scheme: 'file' })),
		parse: jest.fn(uri => ({ uri, scheme: 'file' }))
	},
	Hover: HoverMock,
	commands: {
		registerCommand: jest.fn().mockImplementation((command, callback) => ({
			dispose: jest.fn()
		}))
	},
	SemanticTokensLegend: SemanticTokensLegendMock,
	SemanticTokensBuilder: jest.fn().mockImplementation(() => ({
		push: jest.fn(),
		build: jest.fn().mockReturnValue('built-tokens')
	})),
	languages: {
		createDiagnosticCollection: jest.fn().mockImplementation((name) => ({
			name,
			set: jest.fn(),
			delete: jest.fn(),
			clear: jest.fn(),
			dispose: jest.fn()
		})),
		registerCodeActionsProvider: jest.fn().mockImplementation((selector, provider, metadata) => ({
			dispose: jest.fn()
		})),
		registerCompletionItemProvider: jest.fn().mockImplementation((selector, provider, ...triggerCharacters) => ({
			dispose: jest.fn()
		})),
		registerHoverProvider: jest.fn().mockImplementation((selector, provider) => ({
			dispose: jest.fn()
		})),
		registerDocumentSemanticTokensProvider: jest.fn().mockReturnValue({ dispose: jest.fn() })
	},
	Location: LocationMock
};
