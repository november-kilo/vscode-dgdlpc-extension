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

	test('createHover throws error when not implemented', () => {
		expect(() => {
			handler.createHover(document, position);
		}).toThrow('createHover must be implemented by subclass');
	});

	test('throws error when instantiating without implementing required methods', () => {
		class IncompleteHandler extends HoverHandler {
		}

		const incompleteHandler = new IncompleteHandler();

		expect(() => {
			incompleteHandler.createHover(document, { line: 0, character: 0 });
		}).toThrow('createHover must be implemented by subclass');
	});

	test('works when properly implemented', () => {
		class CompleteHandler extends HoverHandler {
			createHover() {
				return { contents: ['test'] };
			}
		}

		const completeHandler = new CompleteHandler();

		expect(() => {
			completeHandler.createHover(document, position);
		}).not.toThrow();
	});
});
