import * as vscode from 'vscode';
import KFunCompletionProvider from './completions/kfun-completion-provider';
import KeywordCompletionProvider from './completions/keyword-completion-provider';
import TypeCompletionProvider from './completions/type-completion-provider';
import kfunsData from '../kfuns.json';

export default class LPCCompletionProvider {
	constructor() {
		this.kfunProvider = new KFunCompletionProvider(kfunsData);
		this.keywordProvider = new KeywordCompletionProvider();
		this.typeProvider = new TypeCompletionProvider();
	}

	provideCompletionItems(document, position) {
		const completions = [];

		try {
			const kfunCompletions = this.kfunProvider.getCompletions();
			if (Array.isArray(kfunCompletions)) {
				completions.push(...kfunCompletions);
			}
		} catch (error) {
			console.error('Error getting kfun completions:', error);
		}

		try {
			const keywordCompletions = this.keywordProvider.getCompletions();
			if (Array.isArray(keywordCompletions)) {
				completions.push(...keywordCompletions);
			}
		} catch (error) {
			console.error('Error getting keyword completions:', error);
		}

		try {
			const typeCompletions = this.typeProvider.getCompletions();
			if (Array.isArray(typeCompletions)) {
				completions.push(...typeCompletions);
			}
		} catch (error) {
			console.error('Error getting type completions:', error);
		}

		return completions;
	}

	dispose() {
	}
}
