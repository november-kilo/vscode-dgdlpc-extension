import LPCHoverProvider from "./hover-provider";

describe('LPCHoverProvider', () => {
	test('should return null when no handler can handle the hover', () => {
		const mockHandler = {
			canHandle: jest.fn().mockReturnValue(false),
			createHover: jest.fn()
		};

		const provider = new LPCHoverProvider([mockHandler]);
		const result = provider.provideHover({}, {});

		expect(result).toBeNull();
		expect(mockHandler.canHandle).toHaveBeenCalledTimes(1);
		expect(mockHandler.createHover).not.toHaveBeenCalled();
	});

	test('should return hover when handler can handle it', () => {
		const expectedHover = { content: 'test hover' };
		const mockHandler = {
			canHandle: jest.fn().mockReturnValue(true),
			createHover: jest.fn().mockReturnValue(expectedHover)
		};

		const provider = new LPCHoverProvider([mockHandler]);
		const result = provider.provideHover({}, {});

		expect(result).toBe(expectedHover);
		expect(mockHandler.canHandle).toHaveBeenCalledTimes(1);
		expect(mockHandler.createHover).toHaveBeenCalledTimes(1);
	});

	test('dispose should call dispose on all handlers that have it', () => {
		const mockHandler1 = {
			canHandle: jest.fn(),
			createHover: jest.fn(),
			dispose: jest.fn()
		};
		const mockHandler2 = {
			canHandle: jest.fn(),
			createHover: jest.fn(),
			dispose: jest.fn()
		};
		const mockHandler3 = {
			canHandle: jest.fn(),
			createHover: jest.fn()
		};

		const provider = new LPCHoverProvider([mockHandler1, mockHandler2, mockHandler3]);
		provider.dispose();

		expect(mockHandler1.dispose).toHaveBeenCalledTimes(1);
		expect(mockHandler2.dispose).toHaveBeenCalledTimes(1);
	});
});
