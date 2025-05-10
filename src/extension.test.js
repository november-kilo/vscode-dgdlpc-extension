import * as vscode from 'vscode';
import {activate} from './extension';
import DGDConfigManager from './dgd/config-manager';
import DGDIntegration from './dgd/integration';

jest.mock('./dgd/config-manager');
jest.mock('./dgd/integration');

describe('Extension', () => {
	describe('Activation', () => {
		beforeEach(() => {
			jest.clearAllMocks();

			DGDConfigManager.mockImplementation(() => ({
				loadConfig: jest.fn(),
				getConfig: jest.fn().mockReturnValue({
					dgdPath: '/mock/dgd',
					includePaths: ['/mock/include']
				})
			}));

			DGDIntegration.mockImplementation(() => ({
				indent: jest.fn().mockResolvedValue(undefined),
				compile: jest.fn().mockResolvedValue(undefined)
			}));
		});

		test('should activate successfully', () => {
			const context = {
				subscriptions: [],
				extensionPath: '/fake/path'
			};

			activate(context);

			expect(context.subscriptions.length).toBeGreaterThan(0);
		});

		test('should throw error when config loading fails', () => {
			DGDConfigManager.mockImplementation(() => ({
				loadConfig: jest.fn(),
				getConfig: jest.fn().mockReturnValue(null)
			}));

			const context = {
				subscriptions: [],
				extensionPath: '/fake/path'
			};

			expect(() => activate(context)).toThrow('Failed to load DGD configuration');
		});
	});
});
