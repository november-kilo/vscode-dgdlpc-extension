import * as vscode from 'vscode';

export default class MarkdownUtil {
	static link(text, document, line, column = 0) {
		if (column === 0) {
			return `[${text}](${encodeURI('file://' + document.uri.fsPath)}#${line})`;
		}
		return `[${text}](${encodeURI('file://' + document.uri.fsPath)}#${line},${column})`;
	}

	static lineLink(document, lineNumber, columnNumber = 0) {
		return MarkdownUtil.link(`line ${lineNumber}`, document, lineNumber, columnNumber);
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
