import LPCHoverProvider from "./hover-provider";

describe('LPCHoverProvider', () => {
	test('should return null when no handler can handle the hover', () => {
		const mockHandler = {
			createHover: jest.fn()
		};

		const provider = new LPCHoverProvider([mockHandler]);
		const result = provider.provideHover({}, {});

		expect(result).toBeNull();
		expect(mockHandler.createHover).toHaveBeenCalledTimes(1);
	});

	test('should return hover when handler can handle it', () => {
		const expectedHover = { content: 'test hover' };
		const mockHandler = {
			createHover: jest.fn().mockReturnValue(expectedHover)
		};

		const provider = new LPCHoverProvider([mockHandler]);
		const result = provider.provideHover({}, {});

		expect(result).toBe(expectedHover);
		expect(mockHandler.createHover).toHaveBeenCalledTimes(1);
	});

	test('dispose should call dispose on all handlers that have it', () => {
		const mockHandler = {
			createHover: jest.fn(),
			dispose: jest.fn()
		};

		const provider = new LPCHoverProvider([mockHandler]);
		provider.dispose();

		expect(mockHandler.dispose).toHaveBeenCalledTimes(1);
	});
});
