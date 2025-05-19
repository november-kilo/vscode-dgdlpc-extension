export default class VariableDeclarationParser {
	static REGEX_PATTERN = /(?:((?:private|static|nomask|atomic)(?:\s+(?:private|static))*)\s+)?(int|string|float|object|mapping|mixed)\s*(\**)(\s*)([a-zA-Z_][a-zA-Z0-9_]*)\s*=\s*((?:\(\s*\{[\s\S]*?\}\s*\)|[^;]+));/gm;

	static shouldNotCreateDiagnostic(fullMatch, varType, varName) {
		const str = `${varType}${varName}`;
		const hasNoWhitespace = !/\s/.test(str);
		return hasNoWhitespace && fullMatch.trim().startsWith(str);
	}

	static parseDeclaration(text) {
		const matches = [];

		for (const match of text.matchAll(this.REGEX_PATTERN)) {
			const [fullMatch, modifiers, varType, pointers, spacing, varName, varValue] = match;

			if (this.shouldNotCreateDiagnostic(fullMatch, varType, varName)) {
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
