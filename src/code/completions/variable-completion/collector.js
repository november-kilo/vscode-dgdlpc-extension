import visitVariables from '../../visitors/variable-visitor/visitor';

export default class VariablesCollector {
	constructor() {
		this.globalVariables = new Map();
		this.functionVariables = new Map();
	}

	async collectVariables(document) {
		const result = await visitVariables(document);
		this.globalVariables = result.globalVariables;
		this.functionVariables = result.functionVariables;
		return { globalVariables: this.globalVariables, functionVariables: this.functionVariables };
	}

	getFunctionVariables(functionName) {
		return this.functionVariables.get(functionName);
	}

	hasFunction(functionName) {
		return this.functionVariables.has(functionName);
	}
}
