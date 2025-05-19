import * as vscode from 'vscode';
import MarkdownUtil from './markdown-util';
import Logger from './logger';

export default class DocBuilder {
	static createDetail(functionInfo) {
		return `${functionInfo.returnType} ${functionInfo.name}(${functionInfo.parameters.join(', ')})`;
	}

	static variableDocumentation({ name, varInfo, scope }) {
		const documentation = this.initializeMarkdownString();

		documentation.appendMarkdown(`**${scope}**: \`${name}\`\n\n`);
		documentation.appendMarkdown(`Type: \`${varInfo.type}${varInfo.arrayDimension ? '[]'.repeat(varInfo.arrayDimension) : ''}\`\n\n`);

		if (varInfo.modifiers) {
			documentation.appendMarkdown(`Modifiers: \`${varInfo.modifiers}\`\n\n`);
		}

		documentation.appendMarkdown(`Declared at line ${varInfo.position.start.line + 1}, column ${varInfo.position.start.character + 1}`);

		return documentation;
	}

	static functionDocumentation(functionInfo) {
		const documentation = this.initializeMarkdownString();

		const locations = [
			{ location: functionInfo.forwardDeclarationLocation, label: 'Declared', addNewline: true },
			{ location: functionInfo.definitionLocation, label: 'Defined' }
		];

		locations.forEach(config =>
			DocBuilder.appendLocation(documentation, config)
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

	static appendLocation(documentation, { document, location, label, addNewline = false }) {
		if (!location) {
			return;
		}

		const line = location.range.start.line + 1;
		const lineLink = MarkdownUtil.lineLink(line, document === undefined ? location : document);
		documentation.appendMarkdown(`${label} on ${lineLink}${addNewline ? '\n' : ''}`);
	}
}
