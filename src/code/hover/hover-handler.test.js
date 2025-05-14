import HoverHandler from './hover-handler';

describe('HoverHandler', () => {
	let handler;
	let document;
	let position;

	beforeEach(() => {
		handler = new HoverHandler();
		document = {};
		position = { line: 0, character: 0 };
	});

	test('canHandle throws error when not implemented', () => {
		expect(() => {
			handler.canHandle(document, position);
		}).toThrow('canHandle must be implemented by subclass');
	});

	test('createHover throws error when not implemented', () => {
		expect(() => {
			handler.createHover(document, position);
		}).toThrow('createHover must be implemented by subclass');
	});

	test('throws error when instantiating without implementing required methods', () => {
		class IncompleteHandler extends HoverHandler {
			canHandle() {
				return true;
			}
		}

		const incompleteHandler = new IncompleteHandler();

		expect(() => {
			incompleteHandler.createHover(document, { line: 0, character: 0 });
		}).toThrow('createHover must be implemented by subclass');
	});

	test('works when properly implemented', () => {
		class CompleteHandler extends HoverHandler {
			canHandle() {
				return true;
			}
			createHover() {
				return { contents: ['test'] };
			}
		}

		const completeHandler = new CompleteHandler();

		expect(() => {
			completeHandler.canHandle(document, position);
			completeHandler.createHover(document, position);
		}).not.toThrow();
	});
});
