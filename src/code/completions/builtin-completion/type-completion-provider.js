import * as vscode from 'vscode';
import WordCompletionProvider from './word-completion-provider';

export default class TypeCompletionProvider extends WordCompletionProvider{
	static TYPES = [
		['void', 'No return value'],
		['int', 'Integer number'],
		['string', 'Text string'],
		['object', 'Object reference'],
		['mapping', 'Key-value associative array'],
		['mixed', 'Any type'],
		['float', 'Floating point number'],
		['nil', 'Null value']
	];

	constructor() {
		super(TypeCompletionProvider.TYPES, vscode.CompletionItemKind.Class);
	}
}
