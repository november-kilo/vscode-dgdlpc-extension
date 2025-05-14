import * as vscode from 'vscode';
import KFunDocBuilder from '../kfun-doc-builder';

export default class KFunCompletionProvider {
	constructor() {
		this.docBuilder = new KFunDocBuilder();
	}

	getCompletions() {
		try {
			const completions = this.docBuilder.getCompletions();
			return completions || [];
		} catch (error) {
			console.error('Error getting completions:', error);
			return [];
		}
	}
}
