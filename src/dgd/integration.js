import { window, workspace } from 'vscode';
import { Socket } from 'net';
import { relative } from 'path';

export default class DGDIntegration {
    constructor(dgdConfig) {
        this.dgdConfig = dgdConfig;
        this.outputChannel = window.createOutputChannel('DGD LPC');
        this.socket = null;
        this.directory = this.dgdConfig.directory;
    }

    log(message) {
        const timestamp = new Date().toISOString();
        this.outputChannel.appendLine(`[${timestamp}] ${message}`);
    }

    cleanTelnetOutput(data) {
        return data.toString()
          // telnet
          .replace(/\xFF[\xFA-\xFE][\x00-\xFF]/g, '')
          .trim();
    }

    async connect() {
        const portConfig = this.dgdConfig.telnet_port[0];
        const host = Object.keys(portConfig)[0];
        const port = portConfig[host];

        return new Promise((resolve, reject) => {
            this.socket = new Socket();

            this.socket.connect(port, host, () => {
                this.log(`Connected to DGD at ${host}:${port}`);
                resolve();
            });

            this.socket.on('data', (data) => {
                const cleanData = this.cleanTelnetOutput(data);
                if (cleanData && cleanData !== '>' && cleanData !== ' ') {
                    this.log(`DGD: ${cleanData}`);
                }
            });

            this.socket.on('error', (err) => {
                this.log(`Connection error: ${err.message}`);
                reject(err);
            });

            this.socket.on('close', () => {
                this.log('Connection closed');
                this.socket = null;
            });
        });
    }

    async authenticate() {
        const username = await window.showInputBox({
            prompt: 'Enter DGD username',
            placeHolder: 'Username'
        });

        if (!username) {
            return false;
        }

        const password = await window.showInputBox({
            prompt: 'Enter DGD password',
            password: true
        });

        if (!password) {
            return false;
        }

        this.socket.write(`${username}\n`);
        await new Promise(resolve => setTimeout(resolve, 500));
        this.socket.write(`${password}\n`);
        return true;
    }

    getMudPath(localPath) {
        const relativePath = relative(this.directory, localPath);
        return '/' + relativePath.replace(/\\/g, '/');
    }

    async executeCommand(document, command) {
        try {
            if (!this.socket) {
                await this.connect();
                await this.authenticate();
            }

            const mudPath = this.getMudPath(document.uri.fsPath);
            this.log(`Executing ${command} on: ${mudPath}`);
            this.socket.write(`${command} ${mudPath}\n`);
        } catch (error) {
            window.showErrorMessage(`Command failed: ${error.message}`);
            this.log(`Error: ${error.message}`);
        }
    }

    async indent(document) {
        return this.executeCommand(document, 'indent');
    }

    async compile(document) {
        return this.executeCommand(document, 'compile');
    }

    dispose() {
        if (this.socket) {
            this.socket.end();
            this.socket = null;
        }
        this.outputChannel.dispose();
    }
}
