import * as vscode from 'vscode';

export default class VariableCompletionItemsFactory {
	createVariableItem(name, varInfo, document, contextDescription) {
		const item = new vscode.CompletionItem(name, vscode.CompletionItemKind.Variable);
		item.detail = this.formatTypeDetail(varInfo);
		item.documentation = this.createDocumentation(varInfo, document, contextDescription);
		return item;
	}

	formatTypeDetail(varInfo) {
		return `${varInfo.type}${varInfo.arrayDimension ? '[]'.repeat(varInfo.arrayDimension) : ''}`;
	}

	createDocumentation(varInfo, document, contextDescription) {
		const documentation = new vscode.MarkdownString();
		const location = `line ${varInfo.position.start.line + 1}`;
		const link = `${document.uri}#${varInfo.position.start.line + 1},${varInfo.position.start.character + 1}`;

		documentation.appendMarkdown(`${contextDescription} declared on [${location}](${link})\n\n`);
		documentation.appendMarkdown(`Type: \`${varInfo.type}\``);
		documentation.isTrusted = true;

		return documentation;
	}
}
