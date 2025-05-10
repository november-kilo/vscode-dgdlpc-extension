export default class LPCDeclarationParser {
	static REGEX = /(?:((?:private|static|nomask|atomic)(?:\s+(?:private|static|nomask|atomic))*)\s+)?(int|string|float|object|mapping|mixed|void)\s*(\**)(\s*)([a-zA-Z_][a-zA-Z0-9_]*)\s*=\s*((?:\(\s*\{[\s\S]*?\}\s*\)|[^;]+));/gm;

	static shouldNotCreateDiagnostic(fullMatch, varType, varName) {
		const str = `${varType}${varName}`;
		const hasNoWhitespace = (str) => !/\s/.test(str);
		return hasNoWhitespace && fullMatch.trim().startsWith(str);
	}

	static parseDeclaration(text) {
		const matches = [];
		let match;

		// Reset lastIndex
		this.REGEX.lastIndex = 0;

		while ((match = this.REGEX.exec(text)) !== null) {
			const [fullMatch, modifiers, varType, pointers, spacing, varName, varValue] = match;

			if (LPCDeclarationParser.shouldNotCreateDiagnostic(fullMatch, varType, varName)) {
				continue;
			}

			matches.push({
				fullMatch,
				index: match.index,
				length: fullMatch.length,
				data: {
					modifier: modifiers ? modifiers.trim() : '',
					varType: varType,
					varName: varName,
					varValue: varValue.trim(),
					isArray: pointers.length > 0,
					arrayDimensions: pointers.length
				}
			});
		}

		return matches;
	}
}
