import * as vscode from 'vscode';
import * as fs from 'fs';
import DGDConfigManager from './config-manager';

jest.mock('fs');


describe('DGDConfigManager', () => {
	let configManager;
	const mockConfigPath = '/path/to/config.dgd';
	const mockConfigContent = `
        telnet_port = ([ "localhost" : 8023 ]);
        binary_port = ([ "localhost" : 8013 ]);
        directory = "/var/game";
        users = "/var/game/mud/etc/users";
        access = ({ "localhost" });
        network_extensions = ({
            "extras",
            "http",
            "ftp"
        });
        include_dirs = ([
            "/var/game/mud/include" : 1,
            "/var/game/mud/kernel/include" : 1
        ]);
    `;

	beforeEach(() => {
		configManager = new DGDConfigManager();

		jest.clearAllMocks();

		vscode.workspace.getConfiguration.mockReturnValue({
			get: jest.fn().mockReturnValue(mockConfigPath)
		});

		fs.__setMockFiles({
			[mockConfigPath]: mockConfigContent
		});
	});

	describe('loadConfig', () => {
		test('should load and parse config file successfully', () => {
			const config = configManager.loadConfig();

			expect(config).toBeTruthy();
			expect(config.telnet_port).toEqual([{ localhost: 8023 }]);
			expect(config.binary_port).toEqual([{ localhost: 8013 }]);
			expect(config.directory).toBe('/var/game');
			expect(config.users).toBe('/var/game/mud/etc/users');
			expect(config.access).toEqual(['localhost']);
			expect(config.network_extensions).toEqual(['extras', 'http', 'ftp']);
			expect(config.include_dirs).toEqual({
				'/var/game/mud/include': 1,
				'/var/game/mud/kernel/include': 1
			});
		});

		test('should handle missing config path', () => {
			vscode.workspace.getConfiguration.mockReturnValue({
				get: jest.fn().mockReturnValue(null)
			});

			const config = configManager.loadConfig();

			expect(config).toBeNull();
			expect(vscode.window.showErrorMessage)
				.toHaveBeenCalledWith(expect.stringContaining('DGD config path not set'));
		});

		test('should handle non-existent config file', () => {
			fs.__setMockFiles({});

			const config = configManager.loadConfig();

			expect(config).toBeNull();
			expect(vscode.window.showErrorMessage)
				.toHaveBeenCalledWith(expect.stringContaining('Config file not found'));
		});
	});

	describe('DGDConfigParser', () => {
		test('should handle comments correctly', () => {
			const contentWithComments = `
                // Single line comment
                telnet_port = ([ "localhost" : 8023 ]); // End of line comment
                /* Multi-line
                   comment */
                binary_port = ([ "localhost" : 8013 ]);
            `;
			fs.__setMockFiles({
				[mockConfigPath]: contentWithComments
			});

			const config = configManager.loadConfig();

			expect(config.telnet_port).toEqual([{ localhost: 8023 }]);
			expect(config.binary_port).toEqual([{ localhost: 8013 }]);
		});

		test('should parse multi-line values correctly', () => {
			const multiLineContent = `
                include_dirs = ([
                    "/var/game/mud/include" : 1,
                    "/var/game/mud/kernel/include" : 1
                ]);
            `;
			fs.__setMockFiles({
				[mockConfigPath]: multiLineContent
			});

			const config = configManager.loadConfig();

			expect(config.include_dirs).toEqual({
				'/var/game/mud/include': 1,
				'/var/game/mud/kernel/include': 1
			});
		});
	});

	describe('getConfig', () => {
		test('should return null before loading', () => {
			expect(configManager.getConfig()).toBeNull();
		});

		test('should return config after loading', () => {
			configManager.loadConfig();
			const config = configManager.getConfig();

			expect(config).toBeTruthy();
			expect(config.telnet_port).toEqual([{ localhost: 8023 }]);
		});
	});

	test('dispose should not throw', () => {
		expect(() => configManager.dispose()).not.toThrow();
	});
});
