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

		if (this.isInPlaceFix()) {
			const formattedCode = this.getFormattedCode();
			fix.edit = new vscode.WorkspaceEdit();
			fix.edit.replace(this.document.uri, this.diagnostic.range, formattedCode);
		} else {
			fix.edit = this.createWorkspaceEdit();
		}

		fix.isPreferred = true;
		fix.diagnostics = [this.diagnostic];

		return fix;
	}

	isInPlaceFix() {
		return true;
	}

	// New method for complex edit operations
	createWorkspaceEdit() {
		throw new Error('createWorkspaceEdit must be implemented by non-in-place fixes');
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
