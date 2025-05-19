import CodeFix from '../code-fix';

export default class InvalidVariableDeclarationFix extends CodeFix {
	getTitle() {
		return 'Split variable declaration and initialization';
	}

	isInPlaceFix() {
		return true;
	}

	getFormattedCode() {
		const { modifier, varType, varName, varValue, isArray, arrayDimensions } = this.diagnostic.data;
		const indent = this.getLineIndentation();

		const modifierStr = modifier ? `${modifier} ` : '';
		const arrayStr = isArray ? '*'.repeat(arrayDimensions) : '';
		return `${modifierStr}${varType}${arrayStr} ${varName};\n${indent}${varName} = ${varValue}`;
	}
}
