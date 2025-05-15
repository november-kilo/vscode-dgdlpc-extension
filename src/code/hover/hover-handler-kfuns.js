import * as vscode from 'vscode';
import HoverHandler from './hover-handler';
import KFunDocBuilder from '../kfun-doc-builder';

export default class KfunsHoverHandler extends HoverHandler {
	constructor() {
		super();
		this.processedKfuns = new Map();
		this.docBuilder = new KFunDocBuilder();
		this.initializeKfunsCache();
	}

	initializeKfunsCache() {
		Object.entries(this.docBuilder.getKfunsData().kfuns).forEach(([name, kfun]) => {
			const content = this.createKfunContent(name, kfun);
			this.processedKfuns.set(name, content);
		});
	}

	createKfunContent(name, kfun) {
		return this.docBuilder.createDocumentation(name, kfun);
	}

	createHover(document, position) {
		const range = document.getWordRangeAtPosition(position);
		if (!range) {
			return null;
		}

		const word = document.getText(range);
		const content = this.processedKfuns.get(word);
		if (!content) {
			return null;
		}

		return new vscode.Hover(content, range);
	}
}
