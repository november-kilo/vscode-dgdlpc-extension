import KfunsHoverHandler from './hover/hover-handler-kfuns';

export default class LPCHoverProvider {
	constructor(hoverHandlers = [
		new KfunsHoverHandler()
	]) {
		this.hoverHandlers = hoverHandlers;
	}

	provideHover(document, position) {
		for (const handler of this.hoverHandlers) {
			if (handler.canHandle(document, position)) {
				return handler.createHover(document, position);
			}
		}
		return null;
	}

	dispose() {
		for (const handler of this.hoverHandlers) {
			if (typeof handler.dispose === 'function') {
				handler.dispose();
			}
		}
	}
}
