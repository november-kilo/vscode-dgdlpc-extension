This extension provides language support for [DGD](https://github.com/dworkin/dgd) LPC.

# Requirements

This extension is coded specifically for DGD LPC.

Code formatting is done with the DGD editor.
Therefore, it is necessary to have a local instance running and a user with appropriate permissions
for the extension to connect with.
Such a command could be implemented with
```c
    editor("edit " + fileName);
    editor("set sw=4");
    editor("I");
    editor("wq!");
```

# Development

An example of `.vscode/launch.json`:
```json
{
	"version": "0.2.0",
	"configurations": [
		{
			"name": "Extension",
			"type": "extensionHost",
			"request": "launch",
			"args": [
				"--extensionDevelopmentPath=${workspaceFolder}",
				"/home/mud/src"
			],
			"outFiles": [
				"${workspaceFolder}/dist/**/*.js",
				"${workspaceFolder}/dist/**/*.json"
			]
		}
	]
}
```

# Project Structure

## Root Directory

- `LICENSE` - Unlicense
- `LPC.g4` - ANTLR4 grammar for LPC
- `babel.config.js` - Babel configuration for JavaScript transpilation
- `generate-hover-json.js` - Script for generating hover documentation
- `generate-kfun-docs.js` - Script for generating kfun documentation
- `generate-lpc-parser.js` - Script for generating LPC parser
- `jest.config.js` - Jest testing configuration
- `language-configuration.json` - Language configuration for the extension
- `package.json` and `package-lock.json` - Project configuration
- `/kfun-docs` - Contains markdown documentation for kernel functions (kfuns).
- `/lpc-doc` - LPC language documentation (https://github.com/dworkin/lpc-doc):
- `/syntaxes/lpc.tmLanguage.json` - TextMate grammar for LPC

## VSCode Extension

- `src/extension.js` - Main extension entry point
- `src/kfuns.json` - Kernel functions definitions
- `src/code` - VSCode extension functionality
- `src/code/actions` - Actions, such as 'Quick Fix'
- `src/code/completions` - Auto-completion providers
- `src/code/diagnostics` - Diagnostics, such as detecting variable declaration with assignment. There's a lot of other code in here because there were other things I wanted to do but haven't got around to them.
- `src/code/hover` - Hover handlers
- `src/code/visitors` - Visitors used by other parts of the extension
- `src/dgd` - DGD-specific functionality
- `src/lpc` - LPC language parsing. The code here is experimenting with antlr to learn how to use it to implement more features.
- `src/lpc/parser` - Generated ANTLR4 parser
- Test files are next to the files they test (`file-name.js` and `file-name.test.js`)
- `src/__mocks__`
  - `fs`
  - `net`
  - `vscode`

# Extension Settings

* DGD Config File - gets parsed when the extension is activated

# Commands
- cntrl+shift+i will indent the file
- cntrl+shift+b will compile the file
- cntrl+shift+p provides some more commands

Output from DGD is on the "DGD LPC" channel in the Output tab.

# Known Issues

The extension is rudimentary at this point.

The antlr parser is a basic start towards a usable parser
for implementing extension features.

Code formatting requires a DGD connection and a user
which can run an `indent` command.

# Release Notes

## 1.0.0

Initial release
