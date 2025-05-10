export default class StringContextDetector {
	static isInString(text, position) {
		const beforeText = text.substring(0, position);
		const quotes = beforeText.match(/["']/g) || [];

		let inString = false;
		for (let i = 0; i < quotes.length; i++) {
			// Skip escaped quotes
			if (beforeText[beforeText.indexOf(quotes[i], i > 0 ? i - 1 : 0) - 1] !== '\\') {
				inString = !inString;
			}
		}

		return inString;
	}
}
