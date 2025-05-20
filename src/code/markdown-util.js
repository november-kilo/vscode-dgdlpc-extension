import * as vscode from 'vscode';

export default class MarkdownUtil {
	static link(text, path, line, column = 0) {
		console.log('PATH', JSON.stringify(path, null, 2));
		if (column === 0) {
			return `[${text}](${encodeURI(path)}#${line})`;
		}
		return `[${text}](${encodeURI(path)}#${line},${column})`;
	}

	static lineLink(path, lineNumber, columnNumber = 0) {
		return MarkdownUtil.link(`line ${lineNumber}`, path, lineNumber, columnNumber);
	}

	static bold(text, isSection = false) {
		return `**${text}**${ isSection ? '\n\n' : ''}`;
	}

	static content(text) {
		return new vscode.MarkdownString(text);
	}

	static code(text) {
		return `\`${text}\``;
	}

	static commandLink(text, command, args) {
		return `[${text}](command:${command}${args ? '?' + JSON.stringify(args) : ''})`;
	}

	static showDocument(func, label = func) {
		return MarkdownUtil.commandLink(label, 'dgdlpc.showDocument', {name: func});
	}
}
