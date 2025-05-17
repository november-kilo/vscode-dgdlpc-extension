import * as vscode from 'vscode';
import DocBuilder from '../../doc-builder';

export default class FunctionCompletionItemsBuilder {
	static getCompletionItems(document, functions) {
		const completions = [];
		for (const [name, funcInfo] of functions) {
			const completion = new vscode.CompletionItem(name, vscode.CompletionItemKind.Function);

			const parsedParams = funcInfo.parameters.map(param => {
				const parts = param.trim().split(/\s+/);
				return {
					type: parts[0],
					name: parts[1]
				};
			});

			const snippetArgs = parsedParams
				.map((param, index) => `\${${index + 1}:${param.name}}`)
				.join(', ');

			completion.insertText = new vscode.SnippetString(`${name}(${snippetArgs});`);
			completion.documentation = DocBuilder.functionDocumentation(funcInfo);
			completion.detail = DocBuilder.createDetail(funcInfo);

			completions.push(completion);
		}
		return completions;
	}
}
