import * as vscode from 'vscode';

export default class LPCDiagnosticProvider {
	constructor(diagnostics = []) {
		this.diagnosticCollection = vscode.languages.createDiagnosticCollection('lpc');
		this.diagnostics = diagnostics;
	}

	updateDiagnostics(document) {
		if (document.languageId !== 'lpc') {
			return [];
		}

		const allDiagnostics = this.diagnostics.flatMap(diagnostic => {
			try {
				return diagnostic.analyze(document);
			} catch (error) {
				console.error('Error in diagnostic analyzer:', error);
				return [];
			}
		});

		this.diagnosticCollection.set(document.uri, allDiagnostics);
		return allDiagnostics;
	}

	dispose() {
		this.diagnosticCollection.dispose();
	}
}
