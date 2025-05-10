import { workspace, window } from 'vscode';
import { existsSync, readFileSync } from 'fs';
import { isAbsolute, join } from 'path';

class DGDConfigParser {
    static VALUE_TYPES = {
        ARRAY: '({',
        MAP: '([',
        STRING: '"'
    };

    static PORT_KEYS = ['telnet_port', 'binary_port'];
    static NUMERIC_PATTERN = /^\d+$/;
    static SEMICOLON_END = /;$/;
    static COMMENT_REGEX = /\/\*[\s\S]*?\*\/|\/\/.*/g;
    static MULTIPLE_NEWLINES_REGEX = /\n\s*\n/g;

    parse(content) {
        const cleanContent = this.removeCommentsAndExtraNewlines(content);
        const config = {};
        const lines = cleanContent.split('\n');

        let currentEntry = {
            key: null,
            value: ''
        };

        for (let line of lines) {
            line = line.trim();
            if (!line) {
                continue;
            }

            currentEntry = this.processConfigLine(line, currentEntry, config);
        }

        return config;
    }

    removeCommentsAndExtraNewlines(content) {
        return content
          .replace(DGDConfigParser.COMMENT_REGEX, '')
          .replace(DGDConfigParser.MULTIPLE_NEWLINES_REGEX, '\n');
    }

    processConfigLine(line, currentEntry, config) {
        if (line.includes('=')) {
            currentEntry = this.handleAssignmentLine(line, currentEntry, config);
        } else {
            currentEntry.value += line;
        }

        if (line.endsWith(';')) {
            this.finalizeEntry(currentEntry, config);
            currentEntry = { key: null, value: '' };
        }

        return currentEntry;
    }

    handleAssignmentLine(line, currentEntry, config) {
        if (currentEntry.key) {
            this.finalizeEntry(currentEntry, config);
        }

        const [key, ...valueParts] = line.split('=');
        return {
            key: key.trim(),
            value: valueParts.join('=')
        };
    }

    finalizeEntry(entry, config) {
        if (entry.key) {
            config[entry.key] = this.parseValue(entry.key, entry.value.trim());
        }
    }

    parseValue(key, value) {
        const cleanValue = this.cleanInputValue(value);

        if (this.isPortKey(key)) {
            return this.parsePortMapping(cleanValue);
        }

        if (this.isArrayValue(cleanValue)) {
            return this.parseArrayValue(cleanValue);
        }

        if (this.isMapValue(cleanValue)) {
            return this.parseMapValue(cleanValue);
        }

        if (this.isQuotedString(cleanValue)) {
            return cleanValue.slice(1, -1);
        }

        if (this.isNumeric(cleanValue)) {
            return parseInt(cleanValue, 10);
        }

        return cleanValue;
    }

    cleanInputValue(value) {
        return value.replace(DGDConfigParser.SEMICOLON_END, '').trim();
    }

    isPortKey(key) {
        return DGDConfigParser.PORT_KEYS.includes(key);
    }

    isArrayValue(value) {
        return value.startsWith(DGDConfigParser.VALUE_TYPES.ARRAY) &&
          value.endsWith('})');
    }

    isMapValue(value) {
        return value.startsWith(DGDConfigParser.VALUE_TYPES.MAP) &&
          value.endsWith('])');
    }

    isQuotedString(value) {
        return value.startsWith(DGDConfigParser.VALUE_TYPES.STRING) &&
          value.endsWith(DGDConfigParser.VALUE_TYPES.STRING);
    }

    isNumeric(value) {
        return DGDConfigParser.NUMERIC_PATTERN.test(value);
    }

    parseArrayValue(value) {
        const content = value.slice(2, -2);
        return content.split(',')
          .map(item => this.parseValue(null, item.trim()))
          .filter(item => item !== '');
    }

    parseMapValue(value) {
        const content = value.slice(2, -2);
        const pairs = content.split(',')
          .map(pair => pair.trim())
          .filter(pair => pair !== '');

        return pairs.reduce((mapping, pair) => {
            const [key, val] = pair.split(':')
              .map(part => this.parseValue(null, part.trim()));
            if (key && val !== undefined) {
                mapping[key] = val;
            }
            return mapping;
        }, {});
    }

    parsePortMapping(value) {
        const content = value.slice(2, -2).trim();
        if (!content) {
            return [];
        }

        return content.split(',').map(pair => {
            const [host, port] = pair.split(':').map(part => part.trim());
            const cleanHost = host.replace(/^"/, '').replace(/"$/, '');
            return { [cleanHost]: parseInt(port, 10) };
        });
    }
}

export default class DGDConfigManager {
    constructor() {
        this.parser = new DGDConfigParser();
        this.config = null;
    }

    loadConfig() {
        try {
            const configPath = workspace.getConfiguration('dgdlpc').get('dgdConfigPath');
            if (!configPath) {
                throw new Error('DGD config path not set');
            }

            const resolvedPath = isAbsolute(configPath) ? configPath :
              workspace.workspaceFolders?.[0] &&
              join(workspace.workspaceFolders[0].uri.fsPath, configPath);

            if (!resolvedPath || !existsSync(resolvedPath)) {
                throw new Error('Config file not found');
            }

            const content = readFileSync(resolvedPath, 'utf8');
            this.config = this.parser.parse(content);
            return this.config;
        } catch (error) {
            window.showErrorMessage(`Error loading DGD config: ${error.message}`);
            console.error('DGD Config loading error:', error);
            return null;
        }
    }

    getConfig() {
        return this.config;
    }

    dispose() {

    }
}
