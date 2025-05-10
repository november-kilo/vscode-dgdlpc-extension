import LPCVisitor from '../../lpc/parser/LPCVisitor';

export default class LPCSemanticTokenVisitor extends LPCVisitor {
	constructor() {
		super();
		this.tokens = [];
	}

	// this is just a proof of concept, can we highlight the array dimensions?
	visitTypeSpecifier(ctx) {
		if (ctx.arraySpecifier()) {
			const arrayPart = ctx.arraySpecifier();

			this.tokens.push({
				line: arrayPart.start.line - 1,
				character: arrayPart.start.column,
				length: arrayPart.getText().length,
				tokenType: 0,
				tokenModifiers: 0
			});
		}

		return this.visitChildren(ctx);
	}

	getTokens() {
		return this.tokens;
	}
}
