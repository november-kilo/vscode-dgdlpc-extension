import * as vscode from 'vscode';
import LPCDiagnostic from './lpc-diagnostic';
import CodeFixFactory from '../actions/code-fix-factory';
import LPCDeclarationParser from './lpc-declaration-parser';

export default class InvalidVariableDeclarationDiagnostic extends LPCDiagnostic {
	analyze(document) {
		const text = document.getText();
		const matches = LPCDeclarationParser.parseDeclaration(text);

		return matches.map(match => {
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
		});
	}
}
