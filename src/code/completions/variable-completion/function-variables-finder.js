import VariableFunctionFinder from '../../visitors/variable-visitor/function-finder';
import LPCParserFactory from '../../lpc-parser-factory';

export default class FunctionVariablesFinder {
	getCurrentFunction(document, position) {
		const text = document.getText();
		const parser = LPCParserFactory.createParser(text);
		const tree = parser.program();
		const functionFinder = new VariableFunctionFinder(position.line);
		functionFinder.visit(tree);
		return functionFinder.currentFunction;
	}
}
