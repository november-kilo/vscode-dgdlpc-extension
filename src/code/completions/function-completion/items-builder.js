import * as vscode from 'vscode';
import FunctionDocBuilder from '../../function-doc-builder';

export default class FunctionCompletionItemsBuilder {
	static getCompletionItems(document, functions) {
		const completions = [];
		for (const [name, funcInfo] of functions) {
			const completion = new vscode.CompletionItem(name, vscode.CompletionItemKind.Function);
			completion.documentation = FunctionDocBuilder.createDocumentation(funcInfo);
			completion.detail = FunctionDocBuilder.createDetail(funcInfo);
			completions.push(completion);
		}
		return completions;
	}
}
