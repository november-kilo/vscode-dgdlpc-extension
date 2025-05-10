import antlr4 from 'antlr4';
import LPCLexer from './parser/LPCLexer.js';
import LPCParser from './parser/LPCParser.js';
import LPCVisitor from './parser/LPCVisitor.js';

export class LPCInheritVisitor extends LPCVisitor {
	constructor() {
		super();
		this.inheritStatements = [];
	}

	visitInheritDeclaration(ctx) {
		const stringExprCtx = ctx.stringExpression();
		const inheritInfo = {
			path: stringExprCtx?.STRING_LITERAL()?.getText()?.replace(/^"|"$/g, ''),
			isPrivate: Boolean(ctx.PRIVATE()),
			label: ctx.IDENTIFIER()?.getText(),
			position: {
				start: ctx.start.start,
				end: ctx.stop.stop
			}
		};

		this.inheritStatements.push(inheritInfo);

		return this.visitChildren(ctx);
	}
}

function extractInherits(sourceCode) {
	const inputStream = new antlr4.InputStream(sourceCode);
	const lexer = new LPCLexer(inputStream);
	const tokens = new antlr4.CommonTokenStream(lexer);
	const parser = new LPCParser(tokens);

	const tree = parser.program();
	const visitor = new LPCInheritVisitor();
	tree.accept(visitor);
	return visitor.inheritStatements;
}

export default extractInherits;

