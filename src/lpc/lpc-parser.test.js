import antlr4 from 'antlr4';
import LPCLexer from './parser/LPCLexer.js';
import LPCParser from './parser/LPCParser.js';
import extractFunctions from './function-extractor.js';
import extractInherits from './inherit-extractor.js';
import extractDirectives from './preprocessor-directive-extractor';
import LPCErrorListener from './error-listener.js';

function parseCode(input) {
	const inputStream = new antlr4.InputStream(input);
	const lexer = new LPCLexer(inputStream);
	const tokens = new antlr4.CommonTokenStream(lexer);
	const parser = new LPCParser(tokens);

	const errorListener = new LPCErrorListener();
	parser.removeErrorListeners();
	parser.addErrorListener(errorListener);

	const tree = parser.program();
	tree.errors = errorListener.errors;
	return tree;
}

describe('LPC Parser', () => {
	test('should parse a function definition', () => {
		const input = `
            private int add(int x, varargs int y) {
                return x + y;
            }
        `;

		const tree = parseCode(input);

		expect(tree.errors).toHaveLength(0);
	});

	test('should parse multiple parameters', () => {
		const input = `
            private int add(mixed x, mixed y...) {
            		return 1;
            }
        `;

		const tree = parseCode(input);

		expect(tree.errors).toHaveLength(0);
	});

	test('should parse varargs multiple parameters', () => {
		const input = `
            private int add(mixed x, varargs mixed y...) {
            		return 1;
            }
        `;

		const tree = parseCode(input);

		expect(tree.errors).toHaveLength(0);
	});

	test('should handle invalid rlimits', () => {
		const input = `
        void foo() {
            rlimits {
                int x;
            }
        }
    `;

		const tree = parseCode(input);

		expect(tree.errors).toHaveLength(1);
	});

	test('should handle valid rlimits', () => {
		const input = `
        void foo() {
            rlimits (-1; -1) {
                int x;
            }
        }
    `;

		const tree = parseCode(input);

		expect(tree.errors).toHaveLength(0);
	});


	test('should handle catch stand alone block', () => {
		const input = `
        void foo() {
            catch {
                int x;
            }
        }
    `;

		const tree = parseCode(input);

		expect(tree.errors).toHaveLength(0);
	});

	test('should handle catch block', () => {
		const input = `
        void foo() {
        		try {
        		}
            catch {
                int x;
            }
        }
    `;

		const tree = parseCode(input);

		expect(tree.errors).toHaveLength(0);
	});

	test('should handle catch ... block', () => {
		const input = `
        void foo() {
        		try {
        		}
            catch (...) {
                int x;
            }
        }
    `;

		const tree = parseCode(input);

		expect(tree.errors).toHaveLength(0);
	});


	test('should handle catch with parameter block', () => {
		const input = `
        void foo() {
        		try {
        		}
            catch (err) {
                echo("Error: " + err);
            }
        }
    `;

		const tree = parseCode(input);

		expect(tree.errors).toHaveLength(0);
	});

	test('should parse a complete object definition', () => {
		const input = `
						#include <std.h>
						#include "some.h"
						#define FOO 1
						# define BAR(y) (y+1)
						#  define BAZ
						#define XYZ "\
							xyz\
						"
						
						#ifdef FOO
						#include "foo.h"
						#endif
						
            inherit "std/object.c";
            inherit room "room/room.c";
            private inherit "std/container.c";
            private inherit living "std/living.c";
            
            int *some_var;
            float bar;
            object obj;

            void create() {
            		room::create();
            		living::create();
            		::create();
                some_var = ({ 42 });
                obj = new Object;
                obj = new Object();
                obj = new Object(some_var);
                obj->fn();
            }
            
            static nomask int get_something() {
            	return 1;
            }
            
            nomask static float get_something_else() {
            	float* f;
            	 f = ({ 0.0, 2.0, 3.0, 5.0 });
            	 f[0]++;
            	 return (float*)f;
           }
        `;
		const inherits = extractInherits(input);
		const functions = extractFunctions(input).map(fn => fn.name);
		const includes = extractDirectives(input).includes;

		expect(inherits).toHaveLength(4);
		expect(functions).toHaveLength(3);
		expect(includes).toEqual([
			{
				"name": "#include <std.h>",
				"position": {
					"start": 7,
					"end": 22
				},
				"path": "std.h",
				"isSystemInclude": true,
				"isMacroInclude": false,
				"resolvedMacroPath": null,
				"conditionalContext": null
			},
			{
				"name": "#include \"some.h\"",
				"position": {
					"start": 30,
					"end": 46
				},
				"path": "some.h",
				"isSystemInclude": false,
				"isMacroInclude": false,
				"resolvedMacroPath": null,
				"conditionalContext": null
			},
			{
				"name": "#include \"foo.h\"",
				"position": {
					"start": 183,
					"end": 198
				},
				"path": "foo.h",
				"isMacroInclude": false,
				"resolvedMacroPath": null,
				"isSystemInclude": false,
				"conditionalContext": {
					"type": "ifdef",
					"condition": "FOO",
					"position": {
						"start": 166,
						"end": 175
					}
				}
			}
		]);

		const tree = parseCode(input);

		expect(tree.errors).toHaveLength(0);
	});

	test('should fail on invalid function definition', () => {
		const input = `
            int broken function() {
                return 1;
            }
        `;
		const tree = parseCode(input);

		expect(tree.errors).toHaveLength(2);
	});

	test('should fail on invalid statement', () => {
		const input = `
            int function() {
                return 1 +;
            }
        `;

		const tree = parseCode(input);

		expect(tree.errors.length).toBeGreaterThan(0);
	});

	test('should handle various float formats', () => {
		const input = `
float f;
f = 1.0;
f = .5;
f = 1.;
f = 1e5;
f = 1.5e-10;
f = .5E+10;
`;
		const tree = parseCode(input);
		expect(tree.errors).toHaveLength(0);
	});

	test('should handle float assignments in expressions', () => {
		const input = `
float f;
f = 1.0 + 2e-5;
f = f * 1.5;
`;
		const tree = parseCode(input);

		expect(tree.errors).toHaveLength(0);
	});


	test('should accept valid int', () => {
		const testCases = [
			// Decimal integers
			'42',
			'0',
			'123456789',

			// Octal integers (starting with 0)
			'0755',
			'0777',
			'00',

			// Hexadecimal integers
			'0xFF',
			'0xABCD',
			'0x0',
			'0x1234'
		];

		for (const input of testCases) {
			const inputStream = new antlr4.InputStream(input);
			const lexer = new LPCLexer(inputStream);
			const tokens = [];
			while (true) {
				const token = lexer.nextToken();
				if (token.type === antlr4.Token.EOF) break;
				tokens.push({
					type: token.type,
					text: token.text
				});
			}

			// Each test case should produce exactly one token
			expect(tokens.length).toBe(1);
			// All should be recognized as INTEGER tokens
			expect(tokens[0].text).toBe(input);
		}
	});

	test('handles one-liner invalid function', () => {
		const input = 'vo id fn() { }';

		const tree = parseCode(input);

		expect(tree.errors).toHaveLength(2);
	});

	test('handles invalid variable declaration', () => {
		const input = 'int x = 42;';

		const tree = parseCode(input);

		expect(tree.errors).toEqual([
			{
				"column": 6,
				"line": 1,
				"message": "no viable alternative at input 'intx='"
			}
		]);
	});

	test('handles both valid and invalid declarations', () => {
		const input = `
void fn() {
		int value;
		int value0, value1;
		int value2 = 42;
		int value3 = 42, value4 = 43;
		int value5, value6 = 44;
		int value7 = 45, value8;
}
        `;

		const tree = parseCode(input);

		expect(tree.errors).toEqual([
			{
				line: 5,
				column: 13,
				message: "mismatched input '=' expecting ';'"
			},
			{
				line: 6,
				column: 13,
				message: "mismatched input '=' expecting ';'"
			},
			{
				line: 6,
				column: 17,
				message: "mismatched input ',' expecting ';'"
			},
			{
				line: 7,
				column: 21,
				message: "mismatched input '=' expecting ';'"
			},
			{
				line: 8,
				column: 13,
				message: "mismatched input '=' expecting ';'"
			},
			{
				line: 8,
				column: 17,
				message: "mismatched input ',' expecting ';'"
			}
		]);
	});
});
