let eventHandlers = {};

const mockSocket = {
	connect: jest.fn((port, host, callback) => {
		if (callback) callback();
	}),
	write: jest.fn(),
	on: jest.fn((event, handler) => {
		eventHandlers[event] = handler;
	}),
	end: jest.fn(),
	triggerEvent: (event, data) => {
		if (eventHandlers[event]) {
			eventHandlers[event](data);
		}
	},
	resetEvents: () => {
		eventHandlers = {};
	}
};

const net = {
	Socket: jest.fn(() => mockSocket)
};

module.exports = net;
