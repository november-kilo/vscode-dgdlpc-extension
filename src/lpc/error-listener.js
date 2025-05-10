import antlr4 from 'antlr4';

export class SilentErrorListener extends antlr4.error.ErrorListener {
	syntaxError() {
	}

	reportAttemptingFullContext() {
	}

	reportContextSensitivity() {
	}

	reportAmbiguity() {
	}
}

export default class LPCErrorListener extends antlr4.error.ErrorListener {
	constructor() {
		super();
		this.errors = [];
	}

	syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
		this.errors.push({
			line: line,
			column: column,
			message: msg
		});
	}
}
