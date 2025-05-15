import * as vscode from 'vscode';
import MarkdownUtil from './markdown-util';

export default class FunctionDocBuilder {
	static createDetail(functionInfo) {
		return `${functionInfo.returnType} ${functionInfo.name}(${functionInfo.parameters.join(', ')})`;
	}

	static createDocumentation(functionInfo, fromLocation = false) {
		const documentation = this.initializeMarkdownString();

		const locations = [
			{ location: functionInfo.forwardDeclarationLocation, label: 'Declared', addNewline: true },
			{ location: functionInfo.definitionLocation, label: 'Defined' }
		];

		locations.forEach(config =>
			FunctionDocBuilder.appendLocation(documentation, config, fromLocation)
		);

		return documentation;
	}

	static initializeMarkdownString() {
		const documentation = new vscode.MarkdownString();
		documentation.isTrusted = true;
		documentation.supportThemeIcons = true;
		documentation.supportHtml = true;
		return documentation;
	}

	static appendLocation(documentation, { document, location, label, addNewline = false }, fromLocation) {
		if (!location) {
			return;
		}

		const line = location.range.start.line + 1;
		const lineLink = MarkdownUtil.lineLink(line, document === undefined ? location : document);
		documentation.appendMarkdown(`${label} on ${lineLink}${addNewline ? '\n' : ''}`);
	}
}
