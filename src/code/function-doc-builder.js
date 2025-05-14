import * as vscode from 'vscode';
import MarkdownUtil from './markdown-util';

export default class FunctionDocBuilder {
	constructor(document) {
		this.document = document;
	}

	createDocumentation(functionInfo) {
		const documentation = this.initializeMarkdownString();

		this.appendLocation(documentation, {
			location: functionInfo.forwardDeclarationLocation,
			label: 'Declared',
			addNewline: true
		});

		this.appendLocation(documentation, {
			location: functionInfo.definitionLocation,
			label: 'Defined'
		});

		return documentation;
	}

	initializeMarkdownString() {
		const documentation = new vscode.MarkdownString();
		documentation.isTrusted = true;
		documentation.supportThemeIcons = true;
		documentation.supportHtml = true;
		return documentation;
	}

	appendLocation(documentation, { location, label, addNewline = false }) {
		if (!location) {
			return;
		}

		const line = location.range.start.line + 1;
		const lineLink = MarkdownUtil.lineLink(line, this.document);
		documentation.appendMarkdown(`${label} on ${lineLink}${addNewline ? '\n' : ''}`);
	}
}
