import * as vscode from 'vscode';
import LPCDiagnostic from '../lpc-diagnostic';
import visitInherit from '../../visitors/inherit-visitor/visitor';
import CodeFixFactory from '../../actions/code-fix-factory';

function mapper() {
	return inherit => {
		const range = new vscode.Range(
			inherit.range.start.line,
			inherit.range.start.character,
			inherit.range.end.line,
			inherit.range.end.character
		);

		return this.createDiagnostic(
			range,
			'Inherit declaration must appear before any other code',
			CodeFixFactory.ACTION_TYPES.INVALID_INHERIT_POSITION,
			inherit
		);
	};
}

export default class InvalidInheritDeclarationDiagnostic extends LPCDiagnostic {
	analyze(document) {
		const inherits = visitInherit(document);

		return inherits
			.filter(inherit => inherit.invalidPosition)
			.map(mapper.call(this));
	}
}
