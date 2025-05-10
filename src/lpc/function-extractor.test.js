import extractFunctions from "./function-extractor";

describe('LPCFunctionVisitor', () => {
	test('extracts basic function declaration', () => {
		const input = `
            void test_func() {
                // empty function
            }
        `;

		const functions = extractFunctions(input);

		expect(functions).toHaveLength(1);
		expect(functions[0]).toEqual({
			name: 'test_func',
			returnType: 'void',
			modifiers: '',
			position: expect.any(Object) // we can't know exact positions
		});
	});

	test('extracts function with modifiers', () => {
		const input = `
            private string get_name() {
                return "test";
            }
        `;

		const functions = extractFunctions(input);

		expect(functions).toHaveLength(1);
		expect(functions[0]).toEqual({
			name: 'get_name',
			returnType: 'string',
			modifiers: 'private',
			position: expect.any(Object)
		});
	});

	test('extracts multiple functions', () => {
		const input = `
            private int add(int a, int b) {
                return a + b;
            }
            
            static nomask void log() {
                // logging
            }
        `;

		const functions = extractFunctions(input);

		expect(functions).toHaveLength(2);
		expect(functions[0].name).toBe('add');
		expect(functions[1].name).toBe('log');
	});

	test('handles missing modifiers gracefully', () => {
		const input = `
            int calculate() {
                return 42;
            }
        `;

		const functions = extractFunctions(input);

		expect(functions).toHaveLength(1);
		expect(functions[0].modifiers).toBe('');
	});
});
