import * as vscode from 'vscode';
import LPCDiagnostic from '../lpc-diagnostic';
import CodeFixFactory from '../../actions/code-fix-factory';
import VariableDeclarationParser from './parser';

function mapper(document) {
	return (match) => {
		const startPos = document.positionAt(match.index);
		const endPos = document.positionAt(match.index + match.length);

		const range = new vscode.Range(
			startPos.line,
			startPos.character,
			endPos.line,
			endPos.character
		);

		return this.createDiagnostic(
			range,
			'Variable declaration and initialization should be split',
			CodeFixFactory.ACTION_TYPES.INVALID_DECLARATION_ASSIGNMENT,
			match.data
		);
	};
}

export default class InvalidVariableDeclarationDiagnostic extends LPCDiagnostic {
	analyze(document) {
		return VariableDeclarationParser.parseDeclaration(document.getText())
			.map(mapper.call(this, document));
	}
}
