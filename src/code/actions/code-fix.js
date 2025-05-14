import * as vscode from 'vscode';

export default class CodeFix {
	constructor(document, diagnostic) {
		this.document = document;
		this.diagnostic = diagnostic;
	}

	createFix() {
		const fix = new vscode.CodeAction(
			this.getTitle(),
			vscode.CodeActionKind.QuickFix
		);

		const formattedCode = this.getFormattedCode();

		fix.edit = new vscode.WorkspaceEdit();
		fix.edit.replace(this.document.uri, this.diagnostic.range, formattedCode);
		fix.isPreferred = true;
		fix.diagnostics = [this.diagnostic];

		return fix;
	}

	getTitle() {
		throw new Error('getTitle must be implemented by subclass');
	}

	getFormattedCode() {
		throw new Error('getFormattedCode must be implemented by subclass');
	}

	getLineIndentation() {
		const lineNumber = this.diagnostic.range.start.line;
		const line = this.document.lineAt(lineNumber).text;
		return line.match(/^\s*/)[0];
	}
}
