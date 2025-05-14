import * as vscode from 'vscode';
import KFunCompletionProvider from './completions/kfun-completion/provider';
import KeywordCompletionProvider from './completions/word-completion/keyword-completion-provider';
import TypeCompletionProvider from './completions/word-completion/type-completion-provider';

export default class LPCCompletionProvider {
	constructor() {
		this.kfunProvider = new KFunCompletionProvider();
		this.keywordProvider = new KeywordCompletionProvider();
		this.typeProvider = new TypeCompletionProvider();
	}

	provideCompletionItems(document, position) {
		const providers = [
			this.kfunProvider,
			this.keywordProvider,
			this.typeProvider
		];

		return providers
			.map(provider => provider.getCompletionItems())
			.filter(Array.isArray)
			.flat();
	}

	dispose() {
	}
}
