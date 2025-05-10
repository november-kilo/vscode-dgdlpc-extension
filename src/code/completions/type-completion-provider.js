import * as vscode from 'vscode';

export default class TypeCompletionProvider {
	static TYPES = [
		['void', 'No return value'],
		['int', 'Integer number'],
		['string', 'Text string'],
		['object', 'Object reference'],
		['mapping', 'Key-value associative array'],
		['mixed', 'Any type'],
		['float', 'Floating point number'],
		['nil', 'Null value']
	];

	getCompletions() {
		return TypeCompletionProvider.TYPES.map(([type, desc]) => {
			const completionItem = new vscode.CompletionItem(type);
			completionItem.kind = vscode.CompletionItemKind.Class;
			completionItem.documentation = new vscode.MarkdownString(`**${type}** - ${desc}`);
			return completionItem;
		});
	}
}
