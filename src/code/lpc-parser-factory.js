import antlr4 from 'antlr4';
import LPCLexer from '../lpc/parser/LPCLexer';
import LPCParser from '../lpc/parser/LPCParser';

export default class LPCParserFactory {
	static createParser(text) {
		const inputStream = new antlr4.InputStream(text);
		const lexer = new LPCLexer(inputStream);
		const tokens = new antlr4.CommonTokenStream(lexer);
		return new LPCParser(tokens);
	}
}
