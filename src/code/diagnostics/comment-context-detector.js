import StringContextDetector from './string-context-detector';

export default class CommentContextDetector {
	static isInComment(text, position) {
		if (StringContextDetector.isInString(text, position)) {
			return false;
		}

		const lineStart = text.lastIndexOf('\n', position) + 1;
		const lineEnd = text.indexOf('\n', position);
		const line = text.substring(lineStart, lineEnd === -1 ? text.length : lineEnd);
		const positionInLine = position - lineStart;

		let commentStart = text.indexOf('/*', 0);
		if (commentStart !== -1 && commentStart < position) {
			const commentEnd = text.indexOf('*/', commentStart);
			return position > commentStart && (commentEnd === -1 || position <= commentEnd);
		}

		const commentIdx = line.indexOf('//');
		return commentIdx !== -1 && positionInLine > commentIdx;
	}
}
