export default class Logger {
	static log(prefix, antlrObject) {
		console.log(prefix, Logger.formatObject(antlrObject));
	}

	static logMap(prefix, map) {
		console.log(prefix, JSON.stringify(Logger.formatMap(map)));
	}

	static formatMap(map) {
		const obj = {};
		for (let [key, value] of map) {
			obj[key] = value instanceof Map ? Logger.formatMap(value) : value;
		}
		return obj;
	}

	static formatObject(obj, depth = 0, seen = new WeakSet()) {
		if (!obj || typeof obj !== 'object') {
			return obj;
		}

		if (seen.has(obj)) {
			return '[Circular]';
		}
		seen.add(obj);

		if (obj.constructor && obj.constructor.name.includes('Context')) {
			const result = {
				type: obj.constructor.name,
				text: obj.getText?.(),
				ruleIndex: obj.ruleIndex,
			};

			if (obj.children) {
				result.children = obj.children.map(child =>
					this.formatObject(child, depth + 1, seen)
				);
			}

			return result;
		}

		if (Array.isArray(obj)) {
			return obj.map(item => this.formatObject(item, depth + 1, seen));
		}

		const formatted = {};
		for (const [key, value] of Object.entries(obj)) {
			if (key !== 'parentCtx' && key !== 'parser' && key !== 'start' && key !== 'stop') {
				formatted[key] = this.formatObject(value, depth + 1, seen);
			}
		}
		return formatted;
	}
}
