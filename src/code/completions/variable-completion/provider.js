import * as vscode from 'vscode';
import VariableCompletionItemsFactory from './items-factory';
import FunctionVariablesFinder from './function-variables-finder';
import VariablesCollector from './collector';

export default class VariableCompletionProvider {
	constructor(completionItemFactory, functionContextFinder, variablesCollector) {
		this.completionItemFactory = completionItemFactory || new VariableCompletionItemsFactory();
		this.functionContextFinder = functionContextFinder || new FunctionVariablesFinder();
		this.variablesCollector = variablesCollector || new VariablesCollector();
	}

	async provideCompletionItems(document, position) {
		const variables = await this.variablesCollector.collectVariables(document);
		const currentFunction = this.functionContextFinder.getCurrentFunction(document, position);
		const completionItems = [];

		// Add global variables
		this.addVariableCompletionItems(
			variables.globalVariables,
			document,
			'Global variable'
		).forEach(item => completionItems.push(item));

		// Add local variables if we're in a function
		if (currentFunction && this.variablesCollector.hasFunction(currentFunction)) {
			this.addVariableCompletionItems(
				this.variablesCollector.getFunctionVariables(currentFunction),
				document,
				`Local variable in \`${currentFunction}\``
			).forEach(item => completionItems.push(item));
		}

		return completionItems;
	}

	addVariableCompletionItems(variables, document, contextDescription) {
		return Array.from(variables.entries()).map(([name, varInfo]) =>
			this.completionItemFactory.createVariableItem(name, varInfo, document, contextDescription)
		);
	}
}
