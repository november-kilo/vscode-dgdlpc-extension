import * as vscode from 'vscode';
import MarkdownUtil from './markdown-util';
import kfunsData from '../kfuns.json';

export default class KFunDocBuilder {
	getKfunsData() {
		return kfunsData;
	}

	getCompletions() {
		return Object.entries(this.getKfunsData().kfuns)
			.map(([kfunName, kfun]) => this.createCompletionItem(kfunName, kfun));
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
		documentation.appendMarkdown(MarkdownUtil.showDocument(kfunName, 'view documentation'));
		documentation.appendMarkdown('\n\n');

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

		const seeAlsoHeader = `\n\n${MarkdownUtil.bold('See Also', true)}`;
		documentation.appendMarkdown(seeAlsoHeader);
		const seeAlsoLinks = seeAlso
			.map(func => MarkdownUtil.showDocument(func))
			.join(', ');
		documentation.appendMarkdown(seeAlsoLinks);
	}

	createSnippetText(kfunName, params) {
		const snippetParams = params
			.map((param, index) => `\${${index + 1}:${param.label}}`)
			.join(', ');
		return new vscode.SnippetString(`${kfunName}(${snippetParams})`);
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
}
