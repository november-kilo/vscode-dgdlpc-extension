import LPCParserFactory from './lpc-parser-factory';

export default class LPCParserService {
	static parseDocument(document) {
		try {
			const text = document.getText();
			const parser = LPCParserFactory.createParser(text);
			return parser.program();
		} catch (error) {
			console.error('Parser error:', error);
			return null;
		}
	}
}
