import * as vscode from 'vscode';
import WordCompletionProvider from './word-completion-provider';

export default class KeywordCompletionProvider extends WordCompletionProvider{
	static KEYWORDS = [
		['if', 'Conditional statement'],
		['else', 'Alternative conditional branch'],
		['while', 'Loop while condition is true'],
		['do', 'Do-while loop'],
		['for', 'For loop'],
		['switch', 'Switch statement'],
		['case', 'Case in switch statement'],
		['default', 'Default case in switch statement'],
		['break', 'Break out of loop or switch'],
		['continue', 'Continue to next iteration'],
		['return', 'Return from function'],
		['inherit', 'Inherit from another object'],
		['new', 'Create a new object'],
		['atomic', 'Atomic function specifier'],
		['private', 'Private access modifier'],
		['static', 'Static variable or function'],
		['nomask', 'Prevent function overriding'],
		['varargs', 'Variable arguments']
	];

	constructor() {
		super(KeywordCompletionProvider.KEYWORDS, vscode.CompletionItemKind.Keyword);
	}
}
