import antlr4 from 'antlr4';
import LPCLexer from './parser/LPCLexer.js';
import LPCParser from './parser/LPCParser.js';
import LPCVisitor from './parser/LPCVisitor.js';

export class LPCVariableVisitor extends LPCVisitor {
	constructor() {
		super();
		this.variables = [];
	}

	visitVariableDeclaration(ctx) {
		const modifiers = ctx.modifiers()?.getText() || '';
		const typeCtx = ctx.typeSpecifier();
		const baseType = typeCtx.getChild(0).getText();
		const arrayDimension = typeCtx.arraySpecifier()?.getText().length || 0;
		const identifiers = ctx.variableDeclarators().IDENTIFIER();

		for (const identifier of identifiers) {
			const name = identifier.getText();

			const variableInfo = {
				name,
				type: baseType,
				arrayDimension,
				modifiers,
				isValid: true,
				position: {
					start: identifier.symbol.start,
					end: identifier.symbol.stop
				},
				declarationPosition: {
					start: ctx.start.start,
					end: ctx.stop.stop
				}
			};

			this.variables.push(variableInfo);
		}

		return this.visitChildren(ctx);
	}
}

function extractVariables(sourceCode) {
	const inputStream = new antlr4.InputStream(sourceCode);
	const lexer = new LPCLexer(inputStream);
	const tokens = new antlr4.CommonTokenStream(lexer);
	const parser = new LPCParser(tokens);
	const tree = parser.program();

	const visitor = new LPCVariableVisitor();
	visitor.visit(tree);

	return visitor.variables;
}

export default extractVariables;
