function formatAny(value, seen = new WeakSet()) {
	// Handle circular references
	if (typeof value === 'object' && value !== null) {
		if (seen.has(value)) {
			return '[Circular]';
		}
		seen.add(value);
	}

	// Handle different types
	if (value === null) return 'null';
	if (value === undefined) return 'undefined';
	if (typeof value === 'function') return `[Function: ${value.name || 'anonymous'}]`;
	if (typeof value !== 'object') return value;

	// Handle special objects
	if (value instanceof Map) {
		const entries = Array.from(value.entries())
			.map(([k, v]) => `${formatAny(k, seen)} => ${formatAny(v, seen)}`);
		return `Map(${value.size}) { ${entries.join(', ')} }`;
	}
	if (value instanceof Set) {
		const values = Array.from(value).map(v => formatAny(v, seen));
		return `Set(${value.size}) { ${values.join(', ')} }`;
	}
	if (Array.isArray(value)) {
		return `[${value.map(v => formatAny(v, seen)).join(', ')}]`;
	}

	// Handle regular objects
	try {
		const entries = Object.entries(value)
			.map(([k, v]) => `${k}: ${formatAny(v, seen)}`);
		return `{ ${entries.join(', ')} }`;
	} catch (e) {
		return value.toString();
	}
}

class Logger {
	static log(value, label) {
		if (label) {
			console.log(label, formatAny(value));
		} else {
			console.log(formatAny(value));
		}
	}
}

export default Logger;
