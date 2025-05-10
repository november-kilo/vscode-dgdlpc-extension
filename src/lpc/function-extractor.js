import antlr4 from 'antlr4';
import LPCLexer from './parser/LPCLexer.js';
import LPCParser from './parser/LPCParser.js';
import LPCVisitor from './parser/LPCVisitor.js';

export class LPCFunctionVisitor extends LPCVisitor {
	constructor() {
		super();
		this.functions = [];
	}

	visitFunctionDeclaration(ctx) {
		const functionInfo = {
			name: ctx.functionDeclarator().IDENTIFIER()?.getText(),
			returnType: ctx.typeSpecifier().getText(),
			modifiers: ctx.modifiers()?.getText() || '',
			position: {
				start: ctx.start.start,
				end: ctx.stop.stop
			}
		};

		this.functions.push(functionInfo);
		return this.visitChildren(ctx);
	}
}

function extractFunctions(sourceCode) {
	const inputStream = new antlr4.InputStream(sourceCode);
	const lexer = new LPCLexer(inputStream);
	const tokens = new antlr4.CommonTokenStream(lexer);
	const parser = new LPCParser(tokens);
	const tree = parser.program();

	const visitor = new LPCFunctionVisitor();
	visitor.visit(tree);

	return visitor.functions;
}

export default extractFunctions;
