import * as vscode from 'vscode';
import visitInherit from '../../visitors/inherit-visitor/visitor';

export default class InheritLabelsProvider {
	async provideCompletionItems(document, position) {

		return visitInherit(document)
			.filter((inherit) => inherit.label !== undefined)
			.map(({label}) => {
				const completion = new vscode.CompletionItem(label, vscode.CompletionItemKind.Keyword);
				completion.insertText = `${label}::`;
				return completion;
			});
	}
}
