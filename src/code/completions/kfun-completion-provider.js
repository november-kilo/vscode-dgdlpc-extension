import * as vscode from 'vscode';

export default class KFunCompletionProvider {
	constructor(kfunsData) {
		this.kfunsData = kfunsData;
	}

	getCompletions() {
		return Object.entries(this.kfunsData.kfuns)
			.map(([kfunName, kfun]) => this.createCompletionItem(kfunName, kfun));
	}

	createCompletionItem(kfunName, kfun) {
		const completionItem = new vscode.CompletionItem(
			kfunName,
			vscode.CompletionItemKind.Function
		);

		completionItem.documentation = this.createDocumentation(kfunName, kfun);
		completionItem.detail = `${kfun.returnType || ''} ${kfunName}`;

		if (kfun.params?.length > 0) {
			completionItem.insertText = this.createSnippetText(kfunName, kfun.params);
		}

		return completionItem;
	}

	createDocumentation(kfunName, kfun) {
		const documentation = this.initializeMarkdownString();
		this.appendBasicInfo(documentation, kfunName, kfun);
		this.appendParameters(documentation, kfun.params);
		this.appendSeeAlso(documentation, kfun.seeAlso);
		return documentation;
	}

	initializeMarkdownString() {
		const documentation = new vscode.MarkdownString();
		documentation.isTrusted = true;
		documentation.supportThemeIcons = true;
		documentation.supportHtml = true;
		return documentation;
	}

	appendBasicInfo(documentation, kfunName, kfun) {
		documentation.appendMarkdown(`### ${kfunName}\n\n`);
		documentation.appendMarkdown(
			`[(view documentation)](command:dgdlpc.showDocument?${encodeURIComponent(JSON.stringify({name: kfunName}))})\n\n`
		);

		if (kfun.description) {
			documentation.appendMarkdown(`${kfun.description}\n\n`);
		}

		if (kfun.synopsis) {
			documentation.appendCodeblock(kfun.synopsis.trim(), 'c');
			documentation.appendMarkdown('\n');
		}

		if (kfun.documentation) {
			documentation.appendMarkdown(`\n${kfun.documentation}\n\n`);
		}
	}

	appendParameters(documentation, params) {
		if (!params?.length) {
			return;
		}

		documentation.appendMarkdown('**Parameters:**\n\n');
		params.forEach(param => {
			const optional = param.optional ? ' (optional)' : '';
			documentation.appendMarkdown(`- \`${param.label}\`${optional}: ${param.documentation}\n`);
		});
	}

	appendSeeAlso(documentation, seeAlso) {
		if (!seeAlso?.length) {
			return;
		}

		documentation.appendMarkdown('\n\n**See Also:**\n\n');
		const seeAlsoLinks = seeAlso
			.map(func => `[\`${func}\`](command:dgdlpc.showDocument?${encodeURIComponent(JSON.stringify({name: func}))})`)
			.join(', ');
		documentation.appendMarkdown(seeAlsoLinks);
	}

	createSnippetText(kfunName, params) {
		const snippetParams = params
			.map((param, index) => `\${${index + 1}:${param.label}}`)
			.join(', ');
		return new vscode.SnippetString(`${kfunName}(${snippetParams})`);
	}
}
