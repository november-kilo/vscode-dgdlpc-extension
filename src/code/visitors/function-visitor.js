import * as vscode from 'vscode';
import FunctionCompletionParameters from '../completions/function-completion/parameters';
import LPCParserFactory from '../lpc-parser-factory';
import Logger from '../logger';

class FunctionDeclarationVisitor {
	visit(ctx, functions, documentUri) {
		if (ctx.programElement) {
			const elements = ctx.programElement();
			this.visitProgramElements(elements, functions, documentUri);
		}

		if (ctx.children) {
			for (const child of ctx.children) {
				this.visit(child, functions, documentUri);
			}
		}
	}

	visitProgramElements(elements, functions, documentUri) {
		for (const element of elements) {
			const funcDecl = element.functionDeclaration?.();
			if (funcDecl) {
				this.visitFunctionDeclaration(funcDecl, functions, documentUri);
			}
		}
	}

	visitFunctionDeclaration(funcDecl, functions, documentUri) {
		const typeSpec = this.getTypeSpecifier(funcDecl);
		const funcDeclarator = this.getFunctionDeclarator(funcDecl);

		const returnType = typeSpec.getText();
		const name = this.getFunctionName(funcDeclarator);
		const parameters = FunctionCompletionParameters.getParameters(
			this.getFormalParameters(funcDeclarator)
		);

		const isForwardDeclaration = this.isForwardDeclaration(funcDecl);
		const location = this.createLocation(funcDecl, documentUri);

		this.updateFunctionInfo(functions, name, returnType, parameters, location, isForwardDeclaration);
	}

	/* istanbul ignore next */
	createLocation(funcDecl, documentUri) {
		return new vscode.Location(
			documentUri,
			new vscode.Position(
				funcDecl.start.line - 1,
				funcDecl.start.column
			)
		);
	}

	getTypeSpecifier(funcDecl) {
		return funcDecl.typeSpecifier?.();
	}

	getFunctionDeclarator(funcDecl) {
		return funcDecl.functionDeclarator?.();
	}

	getFunctionName(funcDeclarator) {
		const firstChild = funcDeclarator.children[0];

		if (firstChild.constructor.name === 'OperatorNameContext') {
			return firstChild.getText();
		}

		return firstChild.getText();
	}

	getFormalParameters(funcDeclarator) {
		return funcDeclarator.formalParameters?.();
	}

	isForwardDeclaration(funcDecl) {
		return !funcDecl.block || (typeof funcDecl.block === 'function' && !funcDecl.block());
	}

	updateFunctionInfo(functions, name, returnType, parameters, location, isForwardDeclaration) {
		if (!functions.has(name)) {
			functions.set(name, {
				name,
				returnType,
				parameters,
				forwardDeclarationLocation: null,
				definitionLocation: null
			});
		}

		const funcInfo = functions.get(name);
		if (isForwardDeclaration) {
			funcInfo.forwardDeclarationLocation = location;
		} else {
			funcInfo.definitionLocation = location;
		}
	}
}

function visitFunctions(document) {
	const visitor = new FunctionDeclarationVisitor();
	const text = document.getText();
	const parser = LPCParserFactory.createParser(text);
	const tree = parser.program();
	const functions = new Map();

	visitor.visit(tree, functions, document.uri);

	return functions;
}

export default visitFunctions;
