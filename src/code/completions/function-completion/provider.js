import FunctionCompletionItemsBuilder from './items-builder';
import visitFunctions from '../../visitors/function-visitor';

export default class FunctionCompletionProvider {
	async provideCompletionItems(document, position) {
		const linePrefix = document.lineAt(position).text.substring(0, position.character);

		if (!linePrefix.match(/^\s*[\w\d_]*$/)) {
			return [];
		}

		const functions = visitFunctions(document);
		return FunctionCompletionItemsBuilder.getCompletionItems(document, functions);
	}
}
