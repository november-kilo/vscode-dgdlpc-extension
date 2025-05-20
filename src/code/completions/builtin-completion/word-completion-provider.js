import * as vscode from 'vscode';

export default class WordCompletionProvider {
	constructor(items, completionKind) {
		this.items = items;
		this.completionKind = completionKind;
	}

	getCompletionItems() {
		return this.items.map(([name, desc]) => {
			const completionItem = new vscode.CompletionItem(name);
			completionItem.kind = this.completionKind;
			completionItem.documentation = new vscode.MarkdownString(`**${name}** - ${desc}`);
			return completionItem;
		});
	}
}
