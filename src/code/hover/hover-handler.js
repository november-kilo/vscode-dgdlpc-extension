export default class HoverHandler {
	canHandle(document, position) {
		throw new Error('canHandle must be implemented by subclass');
	}

	createHover(document, position) {
		throw new Error('createHover must be implemented by subclass');
	}
}
