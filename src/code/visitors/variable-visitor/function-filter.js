export default class VariableFunctionFilter {
	static keepFunctionsHavingVariables(functions) {
		return new Map(
			Array.from(functions)
				.filter(([_, variables]) => variables.size > 0)
		);
	}

	static findFunctionContainingVariable(functionVariables, variableName) {
		return Array.from(functionVariables)
			.find(([_, funcVars]) => funcVars.has(variableName));
	}

}
