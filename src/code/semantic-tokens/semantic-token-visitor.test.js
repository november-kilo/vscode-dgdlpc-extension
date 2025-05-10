import * as vscode from 'vscode';
import antlr4 from 'antlr4';
import LPCLexer from '../../lpc/parser/LPCLexer';
import LPCParser from '../../lpc/parser/LPCParser';
import LPCSemanticTokenVisitor from './semantic-token-visitor';

describe('LPCSemanticTokenVisitor', () => {
	const parseAndVisit = (input) => {
		const inputStream = new antlr4.InputStream(input);
		const lexer = new LPCLexer(inputStream);
		const tokens = new antlr4.CommonTokenStream(lexer);
		const parser = new LPCParser(tokens);
		const tree = parser.program();
		const visitor = new LPCSemanticTokenVisitor();
		tree.accept(visitor);
		return visitor.getTokens();
	};

	describe('array declaration visitor', () => {
		test('detects single array dimension', () => {
			const input = `
            int* numbers;
        `;

			const tokens = parseAndVisit(input);

			expect(tokens).toHaveLength(1);
			expect(tokens[0]).toEqual({
				line: 1,
				character: expect.any(Number),
				length: 1,
				tokenType: 0,
				tokenModifiers: 0
			});
		});

		test('detects multiple array dimensions', () => {
			const input = `
            string*** matrix;
        `;

			const tokens = parseAndVisit(input);

			expect(tokens).toHaveLength(1);
			expect(tokens[0]).toEqual({
				line: 1,
				character: expect.any(Number),
				length: 3,
				tokenType: 0,
				tokenModifiers: 0
			});
		});

		test('handles multiple variable declarations', () => {
			const input = `
            int* numbers;
            string** names;
        `;

			const tokens = parseAndVisit(input);

			expect(tokens).toHaveLength(2);
			expect(tokens[0].length).toBe(1);
			expect(tokens[1].length).toBe(2);
		});

		test('ignores non-array type declarations', () => {
			const input = `
            int number;
            string name;
        `;

			const tokens = parseAndVisit(input);

			expect(tokens).toHaveLength(0);
		});

		test('handles array declarations in function parameters', () => {
			const input = `
            void process(int* array, string** matrix) {
                // function body
            }
        `;

			const tokens = parseAndVisit(input);

			expect(tokens).toHaveLength(2);
			expect(tokens[0].length).toBe(1);
			expect(tokens[1].length).toBe(2);
		});
	});
});
