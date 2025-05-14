import * as vscode from 'vscode';
import FunctionDocBuilder from '../../function-doc-builder';

export default class FunctionCompletionItemsBuilder {
	static getCompletionItems(document, functions) {
		const docBuilder = new FunctionDocBuilder(document);
		const completions = [];
		for (const [name, funcInfo] of functions) {
			const completion = new vscode.CompletionItem(name, vscode.CompletionItemKind.Function);
			completion.documentation = docBuilder.createDocumentation(funcInfo);
			completion.detail = `${funcInfo.returnType} ${name}(${funcInfo.parameters.join(', ')})`;
			completions.push(completion);
		}
		return completions;
	}
}
