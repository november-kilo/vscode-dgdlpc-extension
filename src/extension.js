import * as vscode from 'vscode';
import * as path from 'path';
import LPCCodeActionProvider from './code/action-provider';
import LPCCompletionProvider from './code/completion-provider';
import InvalidVariableDeclarationDiagnostic from './code/diagnostics/invalid-variable-declaration-diagnostic';
import LPCDiagnosticProvider from './code/diagnostic-provider';
import LPCHoverProvider from './code/hover-provider';
import DGDConfigManager from './dgd/config-manager';
import DGDIntegration from './dgd/integration';
import FunctionCompletionProvider from './code/completions/function-completion/provider';

function registerDGDCommands(context, dgd) {
	context.subscriptions.push(
		vscode.commands.registerCommand('dgdlpc.indent', () => {
			const editor = vscode.window.activeTextEditor;
			if (editor) {
				dgd.indent(editor.document).catch(error =>
					console.error('Error indenting:', error)
				);
			}
		}),
		vscode.commands.registerCommand('dgdlpc.compile', () => {
			const editor = vscode.window.activeTextEditor;
			if (editor) {
				dgd.compile(editor.document).catch(error =>
					console.error('Error compiling:', error)
				);
			}
		}),
		dgd
	);
}

function registerDocumentationCommand(context) {
	return vscode.commands.registerCommand('dgdlpc.showDocument', async (args) => {
		const {name} = args;

		if (!name) {
			return;
		}

		try {
			const docPath = path.join(context.extensionPath, 'kfun-docs', `${name}.md`);
			const uri = vscode.Uri.file(docPath);
			await vscode.commands.executeCommand('markdown.showPreview', uri);
		} catch (error) {
			vscode.window.showErrorMessage(`Could not open documentation for ${name}`);
		}
	});
}

function registerConfigCommand(context, dgdConfig) {
	return vscode.commands.registerCommand('dgdlpc.showConfig', () => {
		if (!dgdConfig) {
			vscode.window.showErrorMessage('No DGD configuration loaded');
			return;
		}

		const channel = vscode.window.createOutputChannel('DGD Configuration');
		channel.clear();
		channel.appendLine('DGD Configuration:');
		channel.appendLine('=================\n');
		channel.appendLine(JSON.stringify(dgdConfig, null, 4));
		channel.show();
	});
}

function setupLanguageProviders(context) {
	const lpcDiagnosticProvider = new LPCDiagnosticProvider([
		new InvalidVariableDeclarationDiagnostic()
	]);

	const lpcCodeActionProvider = new LPCCodeActionProvider();
	const lpcCompletionProvider = new LPCCompletionProvider();
	const lpcFunctionCompletionProvider = new FunctionCompletionProvider();
	const lpcHoverProvider = new LPCHoverProvider();

	const lpcLanguageIdentifier = {
		scheme: 'file',
		language: 'lpc'
	};

	const registrations = [
		vscode.languages.registerCodeActionsProvider(
			lpcLanguageIdentifier,
			lpcCodeActionProvider,
			{
				providedCodeActionKinds: [vscode.CodeActionKind.QuickFix]
			}
		),
		vscode.languages.registerCompletionItemProvider(
			lpcLanguageIdentifier,
			lpcCompletionProvider
		),
		vscode.languages.registerHoverProvider(
			lpcLanguageIdentifier,
			lpcHoverProvider
		),
		vscode.languages.registerCompletionItemProvider(
			lpcLanguageIdentifier,
			lpcFunctionCompletionProvider
		)
	];

	const documentChangeListener = vscode.workspace.onDidChangeTextDocument((event) => {
		lpcDiagnosticProvider.updateDiagnostics(event.document);
	});

	if (vscode.window.activeTextEditor) {
		lpcDiagnosticProvider.updateDiagnostics(vscode.window.activeTextEditor.document);
	}

	return [...registrations, documentChangeListener];
}

export function activate(context) {
	console.log('LPC extension is activating...');

	const dgdConfigManager = new DGDConfigManager();
	dgdConfigManager.loadConfig();
	const dgdConfig = dgdConfigManager.getConfig();
	if (!dgdConfig) {
		throw new Error('Failed to load DGD configuration');
	}

	const dgd = new DGDIntegration(dgdConfig);
	registerDGDCommands(context, dgd);
	context.subscriptions.push(
		registerDocumentationCommand(context),
		registerConfigCommand(context, dgdConfig)
	);

	const languageProviders = setupLanguageProviders(context);
	context.subscriptions.push(...languageProviders);

	console.log('LPC extension activated');
}

export function deactivate() {

}
