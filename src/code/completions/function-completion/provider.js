import * as vscode from 'vscode';
import LPCParserFactory from '../../lpc-parser-factory';
import FunctionCompletionItemsBuilder from './items-builder';
import FunctionDeclarationVisitor from './visitor';

export default class FunctionCompletionProvider {
	constructor() {
		this.visitor = new FunctionDeclarationVisitor();
	}

	async provideCompletionItems(document, position, token, context) {
		const linePrefix = document.lineAt(position).text.substring(0, position.character);

		// Early return if the prefix doesn't match our pattern
		if (!linePrefix.match(/^\s*[\w\d_]*$/)) {
			return [];
		}

		const functions = new Map();
		try {
			const text = document.getText();
			const parser = LPCParserFactory.createParser(text);
			const tree = parser.program();
			this.visitor.visit(tree, functions, document.uri);

			if (functions.size === 0) {
				return [];
			}

			return FunctionCompletionItemsBuilder.getCompletionItems(document, functions);
		} catch (error) {
			console.error('Parser error:', error);
			return [];
		}
	}
}
