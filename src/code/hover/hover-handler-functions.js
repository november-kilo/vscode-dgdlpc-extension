import * as vscode from 'vscode';
import HoverHandler from './hover-handler';
import visitFunctions from '../visitors/function-visitor';
import FunctionDocBuilder from '../function-doc-builder';

export default class FunctionsHoverHandler extends HoverHandler {
	createHover(document, position) {
		const range = document.getWordRangeAtPosition(position);
		if (!range) {
			return null;
		}

		const word = document.getText(range);
		const functions = visitFunctions(document);
		const functionInfo = functions.get(word);

		if (functionInfo === undefined) {
			return null;
		}

		functionInfo.document = document;
		const detail = FunctionDocBuilder.createDetail(functionInfo);
		const documentation = FunctionDocBuilder.createDocumentation(functionInfo, true);

		return new vscode.Hover([detail, documentation], range);
	}
}
