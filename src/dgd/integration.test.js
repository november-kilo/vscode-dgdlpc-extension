import { Socket } from 'net';
import DGDIntegration from './integration';

jest.mock('net');

describe('DGDIntegration', () => {
	let integration;
	let mockSocket;
	let mockConfig;

	beforeEach(() => {
		jest.clearAllMocks();

		mockSocket = new (require('net').Socket)();
		mockSocket.resetEvents();

		mockSocket.connect.mockImplementation((port, host, callback) => {
			if (callback) {
				process.nextTick(callback);
			}
			return mockSocket;
		});

		mockConfig = {
			directory: '/var/game',
			telnet_port: [{ 'localhost': 8023 }]
		};

		integration = new DGDIntegration(mockConfig);
	});

	describe('connect', () => {
		test('should connect successfully', async () => {
			const connectPromise = integration.connect();
			await connectPromise;

			expect(mockSocket.connect).toHaveBeenCalledWith(8023, 'localhost', expect.any(Function));
		}, 10000);

		test('should handle connection error', async () => {
			const error = new Error('Connection refused');

			// Override connect implementation for this test only
			mockSocket.connect.mockImplementation((port, host, callback) => {
				process.nextTick(() => mockSocket.triggerEvent('error', error));
				return mockSocket;
			});

			await expect(integration.connect()).rejects.toThrow('Connection refused');
		}, 10000);
	});

	describe('authenticate', () => {
		test('should authenticate successfully', async () => {
			const mockUsername = 'testuser';
			const mockPassword = 'testpass';

			const { showInputBox } = require('vscode').window;
			showInputBox
				.mockResolvedValueOnce(mockUsername)
				.mockResolvedValueOnce(mockPassword);

			await integration.connect();
			const result = await integration.authenticate();

			expect(result).toBe(true);
			expect(mockSocket.write).toHaveBeenNthCalledWith(1, `${mockUsername}\n`);
			expect(mockSocket.write).toHaveBeenNthCalledWith(2, `${mockPassword}\n`);
		}, 10000);

		test('should handle cancelled authentication', async () => {
			const { showInputBox } = require('vscode').window;
			showInputBox.mockResolvedValueOnce(null);

			await integration.connect();
			const result = await integration.authenticate();

			expect(result).toBe(false);
			expect(mockSocket.write).not.toHaveBeenCalled();
		}, 10000);
	});

	describe('getMudPath', () => {
		test('should convert local path to mud path', () => {
			const localPath = '/var/game/mud/include/test.c';
			const expected = '/mud/include/test.c';

			const result = integration.getMudPath(localPath);
			expect(result).toBe(expected);
		});
	});

	describe('executeCommand', () => {
		test('should execute command successfully', async () => {
			const mockDocument = {
				uri: { fsPath: '/var/game/mud/include/test.c' }
			};

			await integration.connect();
			await integration.executeCommand(mockDocument, 'compile');

			expect(mockSocket.write).toHaveBeenCalledWith('compile /mud/include/test.c\n');
		}, 10000);

		test('should handle command execution error', async () => {
			const mockDocument = {
				uri: { fsPath: '/var/game/mud/include/test.c' }
			};

			const error = new Error('Connection failed');

			mockSocket.connect.mockImplementation((port, host, callback) => {
				process.nextTick(() => mockSocket.triggerEvent('error', error));
				return mockSocket;
			});

			await integration.executeCommand(mockDocument, 'compile');

			const { showErrorMessage } = require('vscode').window;
			expect(showErrorMessage).toHaveBeenCalledWith('Command failed: Connection failed');
		}, 10000);
	});

	describe('dispose', () => {
		test('should clean up resources', () => {
			integration.socket = mockSocket;
			integration.dispose();

			expect(mockSocket.end).toHaveBeenCalled();
			expect(integration.socket).toBeNull();
			expect(integration.outputChannel.dispose).toHaveBeenCalled();
		});
	});
});
