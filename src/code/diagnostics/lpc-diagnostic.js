import * as vscode from 'vscode';

export default class LPCDiagnostic {
	constructor(severity = vscode.DiagnosticSeverity.Error) {
		this.severity = severity;
	}

	createDiagnostic(range, message, code, data = null) {
		if (!range || !message || !code) {
			throw new TypeError('range, message, and code are required parameters');
		}

		const diagnostic = new vscode.Diagnostic(
			range,
			message,
			this.severity
		);

		diagnostic.code = code;
		if (data !== null) {
			diagnostic.data = data;
		}

		return diagnostic;
	}

	analyze(document) {
		throw new Error('analyze must be implemented by subclass');
	}
}
