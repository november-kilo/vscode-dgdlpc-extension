import * as vscode from 'vscode';

export default class LPCDiagnostic {
	constructor(severity = vscode.DiagnosticSeverity.Error) {
		this.severity = severity;
	}

	createDiagnostic(range, message, code, data) {
		const diagnostic = new vscode.Diagnostic(
			range,
			message,
			this.severity
		);
		diagnostic.code = code;
		if (data) {
			diagnostic.data = data;
		}
		return diagnostic;
	}

	analyze(document) {
		throw new Error('analyze method must be implemented by subclasses');
	}
}
