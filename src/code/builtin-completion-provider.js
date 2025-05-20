import KFunCompletionProvider from './completions/builtin-completion/kfun-completion-provider';
import KeywordCompletionProvider from './completions/builtin-completion/keyword-completion-provider';
import TypeCompletionProvider from './completions/builtin-completion/type-completion-provider';

export default class BuiltinCompletionProvider {
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
