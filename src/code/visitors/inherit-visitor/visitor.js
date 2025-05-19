import LPCParserFactory from '../../lpc-parser-factory';
import StringUtil from '../../string-util';

class InheritVisitor {
	visit(ctx, inherits, document) {
		if (ctx.programElement) {
			const elements = ctx.programElement();
			this.visitProgramElements(elements, inherits, document);
		}

		if (ctx.children) {
			for (const child of ctx.children) {
				this.visit(child, inherits, document);
			}
		}
	}

	visitProgramElements(elements, inherits, document) {
		let foundNonPreprocessorElement = false;

		for (const element of elements) {
			const inheritDecl = element.inheritDeclaration?.();

			/* istanbul ignore else */
			if (inheritDecl) {
				this.visitInheritDeclaration(inheritDecl, inherits, document, foundNonPreprocessorElement);
			} else if (!element.preprocessorDirective) {
				foundNonPreprocessorElement = true;
			}
		}
	}

	visitInheritDeclaration(inheritDecl, inherits, document, invalidPosition) {
		const identifier = inheritDecl.IDENTIFIER();
		const stringExpr = inheritDecl.stringExpression();
		const isPrivate = inheritDecl.PRIVATE() !== null;

		const path = StringUtil.getStringExpressionText(stringExpr);
		const start = inheritDecl.start;
		const stop = inheritDecl.stop;
		const label = identifier ? identifier.getText() : undefined;
		const originalText = document.getText().slice(
			start.start,
			stop.stop + 1
		);

		inherits.push({
			label,
			path,
			isPrivate,
			invalidPosition,
			range: {
				start: {
					line: start.line - 1, // ANTLR lines are 1-based
					character: start.column
				},
				end: {
					line: stop.line - 1,
					character: stop.column + stop.text.length
				}
			},
			uri: document.uri,
			text: originalText
		});
	}
}

function visitInherit(document) {
	const parser = LPCParserFactory.createParser(document.getText());
	const tree = parser.program();
	const visitor = new InheritVisitor();
	const inherits = [];

	visitor.visit(tree, inherits, document);

	return inherits;
}

export default visitInherit;
