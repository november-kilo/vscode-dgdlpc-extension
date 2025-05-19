import LPCParser from '../lpc/parser/LPCParser';

export default class StringUtil {
	static removeQuotes(text) {
		return text.slice(1, -1);
	}

	static isStringLiteral(node) {
		return Boolean(node?.symbol?.type === LPCParser.STRING_LITERAL);
	}

	static getStringExpressionText(stringExpr) {
		if (!stringExpr) {
			return '';
		}

		// Single string literal case
		if (stringExpr.STRING_LITERAL()) {
			return this.removeQuotes(stringExpr.STRING_LITERAL().getText());
		}

		// Concatenated strings case
		return (stringExpr.children ?? [])
			.filter(child => this.isStringLiteral(child))
			.map(child => this.removeQuotes(child.getText()))
			.join('');
	}
}
