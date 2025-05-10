import * as vscode from 'vscode';

export default class KeywordCompletionProvider {
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

	getCompletions() {
		return KeywordCompletionProvider.KEYWORDS.map(([keyword, desc]) => {
			const completionItem = new vscode.CompletionItem(keyword);
			completionItem.kind = vscode.CompletionItemKind.Keyword;
			completionItem.documentation = new vscode.MarkdownString(`**${keyword}** - ${desc}`);
			return completionItem;
		});
	}
}
