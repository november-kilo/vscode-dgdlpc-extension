export default class VariableFunctionFinder {
	constructor(targetLine) {
		this.currentFunction = null;
		this.targetLine = targetLine;
	}

	visit(ctx) {
		if (ctx.programElement) {
			const elements = ctx.programElement();
			for (const element of elements) {
				const funcDecl = element.functionDeclaration?.();
				/* istanbul ignore else */
				if (funcDecl) {
					this.checkFunctionDeclaration(funcDecl);
				}
			}
		}

		if (ctx.children) {
			for (const child of ctx.children) {
				this.visit(child);
			}
		}
	}

	checkFunctionDeclaration(funcDecl) {
		if (!funcDecl.start || !funcDecl.stop) {
			return;
		}

		const startLine = funcDecl.start.line - 1;
		const endLine = funcDecl.stop.line - 1;

		if (startLine <= this.targetLine && this.targetLine <= endLine) {
			this.currentFunction = this.getFunctionName(funcDecl);
		}
	}

	getFunctionName(funcDecl) {
		const declarator = funcDecl.functionDeclarator();
		if (!declarator) {
			return null;
		}

		const firstChild = declarator.children[0];
		if (!firstChild) {
			return null;
		}

		return firstChild.constructor.name === 'OperatorNameContext'
			? firstChild.getText()
			: firstChild.getText();
	}
}
