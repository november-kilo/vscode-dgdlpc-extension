export default class VariableInfoBuilder {
	static build(identifier, baseType, arrayDimension, modifiers) {
		const name = identifier.getText();
		const token = identifier.symbol;

		return {
			name,
			type: baseType,
			arrayDimension,
			modifiers,
			position: {
				start: {
					line: token.line - 1,
					character: token.column
				},
				end: {
					line: token.line - 1,
					character: token.column + name.length
				}
			}
		};
	}
}
