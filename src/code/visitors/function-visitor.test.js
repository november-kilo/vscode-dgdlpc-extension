import visitFunctions, {FunctionDeclarationVisitor} from './function-visitor';

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
});
