export default class Logger {

	static log(prefix, complexObject) {
		console.log(prefix, JSON.stringify(complexObject, (key, value) => {
			if (value instanceof Map) {
				return {
					dataType: 'Map',
					value: Array.from(value.entries())
				};
			}
			// Prevent circular references
			if (typeof value === 'object' && value !== null) {
				const seen = new WeakSet();
				if (seen.has(value)) {
					return '[Circular]';
				}
				seen.add(value);
			}
			return value;
		}, 2));
	}
}
