import InvalidVariableDeclarationFix from './invalid-variable-declaration-fix';

export default class CodeFixFactory {
	static ACTION_TYPES = {
		INVALID_DECLARATION_ASSIGNMENT: 'invalid-declaration-assignment'
	};

	static createFix(document, diagnostic) {
		switch (diagnostic.code) {
			case CodeFixFactory.ACTION_TYPES.INVALID_DECLARATION_ASSIGNMENT:
				return new InvalidVariableDeclarationFix(document, diagnostic);
			default:
				return null;
		}
	}

	static isValidDiagnostic(diagnostic) {
		switch (diagnostic.code) {
			case CodeFixFactory.ACTION_TYPES.INVALID_DECLARATION_ASSIGNMENT:
				return !!(diagnostic.data
					&& diagnostic.data.varType
					&& diagnostic.data.varName
					&& diagnostic.data.varValue);

			default:
				return false;
		}
	}
}
