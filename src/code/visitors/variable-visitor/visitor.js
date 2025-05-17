import LPCParserFactory from '../../lpc-parser-factory';
import VariableInfoBuilder from './info-builder';
import VariableFunctionFilter from './function-filter';

class VariableVisitor {
	constructor() {
		this.globalVariables = new Map();
		this.functionVariables = new Map();
		this.currentFunction = null;
	}

	visit(ctx) {
		if (ctx.programElement) {
			const elements = ctx.programElement();
			this.visitProgramElements(elements);
		}

		if (ctx.children) {
			for (const child of ctx.children) {
				this.visit(child);
			}
		}
	}

	visitProgramElements(elements) {
		for (const element of elements) {
			if (element.functionDeclaration?.()) {
				this.visitFunctionDeclaration(element.functionDeclaration());
			} else if (element.variableDeclaration?.()) {
				this.visitVariableDeclaration(element.variableDeclaration());
			}
		}
	}

	visitFunctionDeclaration(funcDecl) {
		const funcDeclarator = funcDecl.functionDeclarator?.();

		const functionName = this.getFunctionName(funcDeclarator);
		this.currentFunction = functionName;
		this.functionVariables.set(functionName, new Map());

		// Visit function body for local variables
		const block = funcDecl.block?.();
		/* istanbul ignore else */
		if (block) {
			this.visitBlock(funcDecl.block());
		}

		this.currentFunction = null;
	}

	getFunctionName(funcDeclarator) {
		const firstChild = funcDeclarator.children[0];
		if (firstChild.constructor.name === 'OperatorNameContext') {
			return firstChild.children.map(child => child.getText()).join('');
		}
		return firstChild.getText();
	}


	visitBlock(block) {
		const statements = block.statement();
		for (const statement of statements) {
			if (statement.variableDeclaration?.()) {
				this.visitVariableDeclaration(statement.variableDeclaration());
			}

			/* istanbul ignore next */
			// TODO: if branch never taken (block-local scoping)
			if (statement.block?.()) {
				this.visitBlock(statement.block());
			}
		}
	}

	visitVariableDeclaration(varDecl) {
		const typeSpec = varDecl.typeSpecifier?.();
		const baseType = typeSpec.getChild(0).getText();
		const arrayDimension = (typeSpec.arraySpecifier?.()?.getText()?.length || 0);
		const modifiers = varDecl.modifiers?.()?.getText() || '';
		const declarators = varDecl.variableDeclarators();

		for (const identifier of declarators.IDENTIFIER()) {
			const varInfo = VariableInfoBuilder.build(identifier, baseType, arrayDimension, modifiers);
			this.updateVariables(identifier.getText(), varInfo);
		}
	}

	updateVariables(name, varInfo) {
		if (this.currentFunction) {
			this.functionVariables.get(this.currentFunction).set(name, varInfo);
		} else {
			this.globalVariables.set(name, varInfo);
		}
	}

	getResult() {
		const filteredFunctionVariables = VariableFunctionFilter
			.keepFunctionsHavingVariables(this.functionVariables.entries());

		return {
			globalVariables: this.globalVariables,
			functionVariables: filteredFunctionVariables
		};
	}
}

function visitVariables(document) {
	if (!document) {
		console.error('No document provided');
		return {
			globalVariables: new Map(),
			functionVariables: new Map()
		};
	}

	const visitor = new VariableVisitor();
	const text = document.getText();
	const parser = LPCParserFactory.createParser(text);
	const tree = parser.program();

	visitor.visit(tree);

	return visitor.getResult();
}

export default visitVariables;
