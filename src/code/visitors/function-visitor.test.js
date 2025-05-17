import visitFunctions from './function-visitor';
import Logger from '../logger';

describe('visitFunctions', () => {
	function createMockDocument(content) {
		return {
			getText: () => content,
			uri: 'file:///test.lpc'
		};
	}

	test('returns empty array for empty input', () => {
		const input = '';
		const functions = visitFunctions(createMockDocument(input));
		expect(functions.size).toBe(0);
	});

	test('extracts basic function declaration', () => {
		const input = `
            void test_func() {
                // empty function
            }
        `;
		const functions = visitFunctions(createMockDocument(input));

		expect(functions.get('test_func')).toEqual({
			name: 'test_func',
			returnType: 'void',
			parameters: [],
			forwardDeclarationLocation: null,
			definitionLocation: expect.any(Object)
		});
	});

	test('extracts function with parameters', () => {
		const input = `
            int calculate(int x, float y) {
                return x + y;
            }
        `;
		const functions = visitFunctions(createMockDocument(input));

		expect(functions.get('calculate')).toEqual({
			name: 'calculate',
			returnType: 'int',
			parameters: ['int x', 'float y'],
			forwardDeclarationLocation: null,
			definitionLocation: expect.any(Object)
		});
	});

	test('handles forward declaration and definition', () => {
		const input = `
            string process(int value);
            
            string process(int value) {
                return to_string(value);
            }
        `;
		const functions = visitFunctions(createMockDocument(input));

		expect(functions.get('process')).toEqual({
			name: 'process',
			returnType: 'string',
			parameters: ['int value'],
			forwardDeclarationLocation: expect.any(Object),
			definitionLocation: expect.any(Object)
		});
	});

	test('extracts multiple functions', () => {
		const input = `
            void first() {}
            int second(string s) {}
            float third(int x, int y) {}
        `;
		const functions = visitFunctions(createMockDocument(input));

		expect(functions.size).toBe(3);
		expect(functions.has('first')).toBe(true);
		expect(functions.has('second')).toBe(true);
		expect(functions.has('third')).toBe(true);
	});

	test('handles function with modifiers', () => {
		const input = `
            static nomask int secure_func(object caller) {
                return 42;
            }
        `;
		const functions = visitFunctions(createMockDocument(input));

		expect(functions.get('secure_func')).toEqual({
			name: 'secure_func',
			returnType: 'int',
			parameters: ['object caller'],
			forwardDeclarationLocation: null,
			definitionLocation: expect.any(Object)
		});
	});

	test('handles variadic parameter', () => {
		const input = `
            mixed printf(string fmt...) {
                // variadic function
            }
        `;
		const functions = visitFunctions(createMockDocument(input));

		expect(functions.get('printf')).toEqual({
			name: 'printf',
			returnType: 'mixed',
			parameters: ['string fmt'],
			forwardDeclarationLocation: null,
			definitionLocation: expect.any(Object)
		});
	});

	test('handles varargs parameter', () => {
		const input = `
            mixed printf(string str, varargs object obj) {
                // varargs function
            }
        `;
		const functions = visitFunctions(createMockDocument(input));

		expect(functions.get('printf')).toEqual({
			name: 'printf',
			returnType: 'mixed',
			parameters: ['string str', 'object obj'],
			forwardDeclarationLocation: null,
			definitionLocation: expect.any(Object)
		});
	});

	test('handles array return types', () => {
		const input = `
            string* get_names() {
                return ({"Alice", "Bob"});
            }
        `;
		const functions = visitFunctions(createMockDocument(input));

		expect(functions.get('get_names')).toEqual({
			name: 'get_names',
			returnType: 'string*',
			parameters: [],
			forwardDeclarationLocation: null,
			definitionLocation: expect.any(Object)
		});
	});

	test('handles invalid function declaration without type specifier', () => {
		const input = `
            broken_func() {
                return 42;
            }
        `;
		const functions = visitFunctions(createMockDocument(input));

		expect(functions.size).toBe(0);
	});

	test('handles invalid function declaration without function declarator', () => {
		const input = `
            int {
                return 42;
            }
        `;
		const functions = visitFunctions(createMockDocument(input));

		expect(functions.size).toBe(0);
	});

	test('handles non-function program elements', () => {
		const input = `
            int global_var;
            #define CONSTANT 42
            
            void test_func() {}
        `;
		const functions = visitFunctions(createMockDocument(input));

		expect(functions.size).toBe(1);
		expect(functions.has('test_func')).toBe(true);
	});

	test('handles invalid function declaration without name', () => {
		const input = `
            int () {
                return 42;
            }
        `;
		const functions = visitFunctions(createMockDocument(input));

		expect(functions.size).toBe(0);
	});

	test('handles multiple function declarations with different types and modifiers', () => {
		const input = `
        static int func1();
        private string func2(int x) {
            return "test";
        }
        nomask void func3(object obj, string str) {}
    `;
		const functions = visitFunctions(createMockDocument(input));

		expect(functions.size).toBe(3);
		expect(functions.get('func1')).toBeDefined();
		expect(functions.get('func2')).toBeDefined();
		expect(functions.get('func3')).toBeDefined();
	});

	test('handles operator overloading declarations', () => {
		const input = `
        mixed operator+(int x) {
            return x;
        }
        int operator[](int idx) {
            return idx;
        }
        int operator+=(int x) {
        	return x;
        }
    `;
		const functions = visitFunctions(createMockDocument(input));

		expect(functions.size).toBe(3);
	});

	test('handles mixed function declarations and other program elements', () => {
		const input = `
        int global;
        #define TEST 1
        void func1();
        inherit "/std/object";
        string func2() {
            return "test";
        }
    `;
		const functions = visitFunctions(createMockDocument(input));

		expect(functions.size).toBe(2);
		expect(functions.get('func1')).toBeDefined();
		expect(functions.get('func2')).toBeDefined();
		const func1 = functions.get('func1');
		const func2 = functions.get('func2');
		expect(func1.parameters).toEqual([]);
		expect(func2.parameters).toEqual([]);
	});
});
