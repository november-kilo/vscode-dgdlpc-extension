import * as vscode from 'vscode';
import CodeFix from '../code-fix';

export default class InvalidInheritPositionFix extends CodeFix {
	getTitle() {
		return 'Move inherit declaration to top';
	}

	isInPlaceFix() {
		return false;
	}

	createWorkspaceEdit() {
		const edit = new vscode.WorkspaceEdit();
		const lines = this.document.getText().split('\n');

		// Find insertion point (after preprocessor directives and last inherit)
		let insertLineIndex = 0;
		let lastInheritIndex = -1;

		for (let i = 0; i < lines.length; i++) {
			const line = lines[i].trim();
			if (line === '' || line.startsWith('#')) {
				continue;
			}
			if (line.startsWith('inherit ')) {
				lastInheritIndex = i;
				continue;
			}
			insertLineIndex = i;
			break;
		}

		if (lastInheritIndex !== -1) {
			insertLineIndex = lastInheritIndex + 1;
		}

		// Delete the entire line at current position
		const lineToDelete = this.document.lineAt(this.diagnostic.range.start.line);
		edit.delete(this.document.uri, new vscode.Range(
			lineToDelete.range.start,
			lineToDelete.rangeIncludingLineBreak.end
		));

		// Insert at new position
		const insertPosition = new vscode.Position(insertLineIndex, 0);
		const textToInsert = this.diagnostic.data.text + '\n';
		edit.insert(this.document.uri, insertPosition, textToInsert);

		return edit;
	}

	getFormattedCode() {
		// This is still required by the interface but won't be used
		return this.diagnostic.data.text;
	}
}
