import CodeFixFactory from './actions/code-fix-factory';

export default class LPCCodeActionProvider {
	provideCodeActions(document, range, context, token) {
		if (!context.diagnostics.length) {
			return [];
		}

		const actions = [];

		for (const diagnostic of context.diagnostics) {
			if (CodeFixFactory.isValidDiagnostic(diagnostic)) {
				const fixAction = this.createFixAction(document, diagnostic);
				if (fixAction) {
					actions.push(fixAction);
				}
			}
		}

		return actions;
	}

	createFixAction(document, diagnostic) {
		try {
			const fix = CodeFixFactory.createFix(document, diagnostic);
			return fix ? fix.createFix() : null;
		} catch (error) {
			console.error('Error creating fix action:', error);
			return null;
		}
	}

	dispose() {

	}
}
