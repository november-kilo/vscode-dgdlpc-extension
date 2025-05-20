import * as vscode from 'vscode';
import KFunDocBuilder from '../../kfun-doc-builder';

export default class KFunCompletionProvider {
	constructor() {
		this.docBuilder = new KFunDocBuilder();
	}

	getCompletionItems() {
		try {
			const completions = this.docBuilder.getCompletionItems();
			return completions || [];
		} catch (error) {
			console.error('Error getting completions:', error);
			return [];
		}
	}
}
