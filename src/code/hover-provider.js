import * as vscode from 'vscode';
import kfunsData from '../kfuns.json';

export default class LPCHoverProvider {
	provideHover(document, position) {
		const range = document.getWordRangeAtPosition(position);
		if (!range) {
			return;
		}

		const word = document.getText(range);
		const kfun = kfunsData.kfuns[word];

		if (kfun) {
			const content = new vscode.MarkdownString();
			content.appendMarkdown(`### ${word}\n\n`);
			content.appendMarkdown(`${kfun.description}\n\n`);

			if (kfun.params && kfun.params.length > 0) {
				content.appendMarkdown('**Parameters:**\n\n');
				kfun.params.forEach(param => {
					const optional = param.optional ? ' (optional)' : '';
					content.appendMarkdown(`- \`${param.label}\`${optional}: ${param.documentation}\n`);
				});
			}

			return new vscode.Hover(content, range);
		}

		return null;
	}

	dispose() {

	}
}
