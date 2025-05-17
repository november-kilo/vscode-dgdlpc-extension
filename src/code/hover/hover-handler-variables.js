import * as vscode from 'vscode';
import HoverHandler from './hover-handler';
import DocBuilder from '../doc-builder';
import visitVariables from '../visitors/variable-visitor/visitor';
import VariableFunctionFilter from '../visitors/variable-visitor/function-filter';

export default class VariablesHoverHandler extends HoverHandler {
	createHover(document, position) {
		const range = document.getWordRangeAtPosition(position);
		if (!range) {
			return null;
		}

		const word = document.getText(range);
		const variables = visitVariables(document);

		if (variables.globalVariables.has(word)) {
			return this.buildGlobalVariableHover(variables, word, range);
		}

		const functionEntry = VariableFunctionFilter
			.findFunctionContainingVariable(variables.functionVariables.entries(), word);
		if (functionEntry) {
			const [funcName, funcVars] = functionEntry;
			return this.buildFunctionVariableHover(funcVars, word, funcName, range);
		}

		return null;
	}

	buildFunctionVariableHover(funcVars, word, funcName, range) {
		return this.buildVariableHover(
			funcVars.get(word),
			word,
			`Local Variable in \`${funcName}\``,
			range
		);
	}

	buildGlobalVariableHover(variables, word, range) {
		return this.buildVariableHover(
			variables.globalVariables.get(word),
			word,
			'Global Variable',
			range
		);
	}

	buildVariableHover(varInfo, name, scope, range) {
		const markdown = DocBuilder.variableDocumentation({
			name,
			varInfo,
			scope
		});
		return new vscode.Hover(markdown, range);
	}
}
