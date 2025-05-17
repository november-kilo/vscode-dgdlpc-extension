import KfunsHoverHandler from './hover/hover-handler-kfuns';
import FunctionsHoverHandler from './hover/hover-handler-functions';
import FunctionDocBuilder from './function-doc-builder';

export default class LPCHoverProvider {
	constructor(hoverHandlers = [
		new KfunsHoverHandler(),
		new FunctionsHoverHandler()
	]) {
		this.hoverHandlers = hoverHandlers;
	}

	provideHover(document, position) {
		for (const handler of this.hoverHandlers) {
			const hover = handler.createHover(document, position);
			if (hover) {
				return hover;
			}
		}
		return null;
	}

	dispose() {
		for (const handler of this.hoverHandlers) {
			/* istanbul ignore next */
			if (typeof handler.dispose === 'function') {
				handler.dispose();
			}
		}
	}
}
