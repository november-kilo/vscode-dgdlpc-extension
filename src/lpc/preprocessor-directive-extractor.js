import antlr4 from 'antlr4';
import LPCLexer from './parser/LPCLexer.js';
import LPCParser from './parser/LPCParser.js';
import LPCVisitor from './parser/LPCVisitor.js';

export class LPCPreprocessorDirectiveVisitor extends LPCVisitor {
	constructor() {
		super();
		this.directives = {
			includes: [],
			defines: [],
			ifdef: [],
			ifndef: [],
			else: [],
			endif: [],
			undef: []
		};
		this.conditionalStack = [];
	}

	visitPreprocessorDirective(ctx) {
		return this.visitChildren(ctx);
	}

	getCurrentConditional() {
		return this.conditionalStack.length > 0 ?
			this.conditionalStack[this.conditionalStack.length - 1] :
			null;
	}

	isMacroDefined(macro) {
		return this.directives.defines.some(def =>
			def.macro === macro &&
			!this.directives.undef.some(undef =>
				undef.macro === macro &&
				undef.position.end > def.position.end
			)
		);
	}

	getMacroDefinition(macro) {
		// Get the latest definition before any undef
		const definitions = this.directives.defines
			.filter(def => def.macro === macro)
			.sort((a, b) => b.position.end - a.position.end);

		const latestDef = definitions[0];
		if (!latestDef) {
			return null;
		}

		// Check if it was undefined later
		const latestUndef = this.directives.undef
			.filter(undef => undef.macro === macro)
			.sort((a, b) => b.position.end - a.position.end)[0];

		if (latestUndef && latestUndef.position.end > latestDef.position.end) {
			return null;
		}

		return latestDef.definition;
	}


	visitIncludeDirective(ctx) {
		const text = ctx.INCLUDE().getText();
		const position = {
			start: ctx.start.start,
			end: ctx.stop.stop
		};

		const pathMatch = text.match(/<([^>]+)>|"([^"]+)"|#\s*include\s+(\w+)/);
		if (pathMatch) {
			const path = pathMatch[1] || pathMatch[2] || pathMatch[3];
			const isSystemInclude = !!pathMatch[1];
			const isMacroInclude = !!pathMatch[3];

			// Skip invalid macro includes
			if (isMacroInclude && !this.isMacroDefined(path)) {
				return null;
			}

			this.directives.includes.push({
				name: text,
				position: position,
				path: path,
				isSystemInclude: isSystemInclude,
				isMacroInclude: isMacroInclude,
				resolvedMacroPath: isMacroInclude ? this.getMacroDefinition(path) : null,
				conditionalContext: this.getCurrentConditional()
			});
		}
		return null;
	}


	visitDefineDirective(ctx) {
		const text = ctx.DEFINE().getText();
		const position = {
			start: ctx.start.start,
			end: ctx.stop.stop
		};

		const defineContent = text.replace(/^#\s*define\s+/, '');
		const [macro, ...definitionParts] = defineContent.trim().split(/\s+/);
		const definition = definitionParts.length > 0 ? definitionParts.join(' ') : null;

		this.directives.defines.push({
			name: text,
			position: position,
			macro: macro,
			definition: definition,
			conditionalContext: this.getCurrentConditional()
		});
		return null;
	}

	visitIfdefDirective(ctx) {
		const text = ctx.IFDEF().getText();
		const position = {
			start: ctx.start.start,
			end: ctx.stop.stop
		};

		const condition = text.replace(/^#\s*ifdef\s+/, '').trim();
		const directive = {
			name: text,
			position: position,
			condition: condition
		};

		this.directives.ifdef.push(directive);
		this.conditionalStack.push({
			type: 'ifdef',
			condition: condition,
			position: position
		});

		return null;
	}

	visitIfndefDirective(ctx) {
		const text = ctx.IFNDEF().getText();
		const position = {
			start: ctx.start.start,
			end: ctx.stop.stop
		};

		const condition = text.replace(/^#\s*ifndef\s+/, '').trim();
		const directive = {
			name: text,
			position: position,
			condition: condition
		};

		this.directives.ifndef.push(directive);
		this.conditionalStack.push({
			type: 'ifndef',
			condition: condition,
			position: position
		});

		return null;
	}

	visitElseDirective(ctx) {
		const text = ctx.ELSEDIR().getText();
		const position = {
			start: ctx.start.start,
			end: ctx.stop.stop
		};

		const parentConditional = this.conditionalStack.pop();
		if (!parentConditional) {
			throw new Error('#else without matching #ifdef/#ifndef');
		}

		const directive = {
			name: text,
			position: position,
			parentCondition: parentConditional.condition
		};

		this.directives.else.push(directive);
		this.conditionalStack.push({
			type: 'else',
			parentType: parentConditional.type,
			parentCondition: parentConditional.condition,
			position: position
		});

		return null;
	}

	visitEndifDirective(ctx) {
		const text = ctx.ENDIF().getText();
		const position = {
			start: ctx.start.start,
			end: ctx.stop.stop
		};

		if (this.conditionalStack.length === 0) {
			throw new Error('#endif without matching #ifdef/#ifndef');
		}

		this.directives.endif.push({
			name: text,
			position: position
		});

		this.conditionalStack.pop();
		return null;
	}

	visitUndefDirective(ctx) {
		const text = ctx.UNDEF().getText();
		const position = {
			start: ctx.start.start,
			end: ctx.stop.stop
		};

		const macro = text.replace(/^#\s*undef\s+/, '').trim();
		this.directives.undef.push({
			name: text,
			position: position,
			macro: macro,
			conditionalContext: this.getCurrentConditional()
		});
		return null;
	}
}

function extractDirectives(sourceCode) {
	const inputStream = new antlr4.InputStream(sourceCode);
	const lexer = new LPCLexer(inputStream);
	const tokens = new antlr4.CommonTokenStream(lexer);
	const parser = new LPCParser(tokens);
	parser.buildParseTrees = true;
	const tree = parser.program();

	const visitor = new LPCPreprocessorDirectiveVisitor();
	visitor.visit(tree);

	return visitor.directives;
}

export default extractDirectives;
