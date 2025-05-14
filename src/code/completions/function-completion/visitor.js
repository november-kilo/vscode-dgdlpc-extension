import * as vscode from 'vscode';
import FunctionCompletionParameters from './parameters';

export default class FunctionDeclarationVisitor {
	visit(ctx, functions, documentUri) {
		if (!ctx) {
			return;
		}

		if (ctx.programElement && typeof ctx.programElement === 'function') {
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
			if (element?.functionDeclaration && typeof element.functionDeclaration === 'function') {
				this.visitFunctionDeclaration(element.functionDeclaration(), functions, documentUri);
			}
		}
	}

	visitFunctionDeclaration(funcDecl, functions, documentUri) {
		if (!funcDecl) {
			return;
		}

		const typeSpec = this.getTypeSpecifier(funcDecl);
		const funcDeclarator = this.getFunctionDeclarator(funcDecl);

		if (typeSpec && funcDeclarator) {
			const returnType = typeSpec.getText();
			const name = this.getFunctionName(funcDeclarator);

			if (name) {
				const parameters = FunctionCompletionParameters.getParameters(
					this.getFormalParameters(funcDeclarator)
				);

				const isForwardDeclaration = this.isForwardDeclaration(funcDecl);
				const location = this.createLocation(funcDecl, documentUri);

				this.updateFunctionInfo(functions, name, returnType, parameters, location, isForwardDeclaration);
			}
		}
	}

	getTypeSpecifier(funcDecl) {
		return funcDecl.typeSpecifier && typeof funcDecl.typeSpecifier === 'function'
			? funcDecl.typeSpecifier()
			: null;
	}

	getFunctionDeclarator(funcDecl) {
		return funcDecl.functionDeclarator && typeof funcDecl.functionDeclarator === 'function'
			? funcDecl.functionDeclarator()
			: null;
	}

	getFunctionName(funcDeclarator) {
		const identifierNode = funcDeclarator.IDENTIFIER && typeof funcDeclarator.IDENTIFIER === 'function'
			? funcDeclarator.IDENTIFIER()
			: null;
		return identifierNode?.getText();
	}

	getFormalParameters(funcDeclarator) {
		return funcDeclarator.formalParameters && typeof funcDeclarator.formalParameters === 'function'
			? funcDeclarator.formalParameters()
			: [];
	}

	isForwardDeclaration(funcDecl) {
		return !funcDecl.block || (typeof funcDecl.block === 'function' && !funcDecl.block());
	}

	createLocation(funcDecl, documentUri) {
		return new vscode.Location(
			documentUri,
			new vscode.Position(
				(funcDecl.start?.line || 0) - 1,
				funcDecl.start?.column || 0
			)
		);
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
