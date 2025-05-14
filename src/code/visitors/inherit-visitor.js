import * as vscode from 'vscode';

export default class InheritDeclarationVisitor {
	visitInheritDeclaration(ctx, inherits, documentUri) {
		if (!ctx) {
			return;
		}

		const isPrivate = this.hasPrivateModifier(ctx);
		const identifier = this.getIdentifier(ctx);
		const path = this.resolveStringExpression(ctx.stringExpression());
		const location = this.createLocation(ctx, documentUri);

		if (path) {
			inherits.push({
				path,
				isPrivate,
				identifier: identifier?.getText(),
				location
			});
		}
	}

	hasPrivateModifier(ctx) {
		return ctx.PRIVATE?.() !== null;
	}

	getIdentifier(ctx) {
		return ctx.IDENTIFIER?.() ?? null;
	}

	resolveStringExpression(ctx) {
		if (!ctx) {
			return null;
		}

		// Only process string literals and concatenations
		const text = ctx.getText().trim();

		// Handle simple case - just a quoted string
		if (text.startsWith('"') && text.endsWith('"')) {
			return this.unquoteString(text);
		}

		// Handle concatenation - split on + and process each part
		const parts = text.split('+')
			.map(part => part.trim())
			.filter(part => part.length > 0)
			.map(part => this.unquoteString(part));

		return parts.join('');
	}

	unquoteString(str) {
		return str.slice(1, -1)
			.replace(/\\"/g, '"')
			.replace(/\\\\/g, '\\');
	}

	/* istanbul ignore next */
	createLocation(ctx, documentUri) {
		return new vscode.Location(
			documentUri,
			new vscode.Position(
				(ctx.start?.line || 0) - 1,
				ctx.start?.column || 0
			)
		);
	}
}
