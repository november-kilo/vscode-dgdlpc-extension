import InvalidVariableDeclarationFix from './variable-declaration/invalid-declaration-fix';
import InvalidInheritPositionFix from './inherit-declaration/invalid-position-fix';

export default class CodeFixFactory {
	static ACTION_TYPES = {
		INVALID_DECLARATION_ASSIGNMENT: 'invalid-declaration-assignment',
		INVALID_INHERIT_POSITION: 'invalid-inherit-position'
	};

	static createFix(document, diagnostic) {
		switch (diagnostic.code) {
			case CodeFixFactory.ACTION_TYPES.INVALID_DECLARATION_ASSIGNMENT:
				return new InvalidVariableDeclarationFix(document, diagnostic);
			case CodeFixFactory.ACTION_TYPES.INVALID_INHERIT_POSITION:
				return new InvalidInheritPositionFix(document, diagnostic);
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
			case CodeFixFactory.ACTION_TYPES.INVALID_INHERIT_POSITION:
				return !!(diagnostic.data && diagnostic.data.text);
			default:
				return false;
		}
	}
}
