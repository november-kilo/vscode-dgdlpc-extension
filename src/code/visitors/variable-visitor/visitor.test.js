import visitVariables from './visitor';

describe('visitVariables', () => {
	const createMockDocument = (code) => ({
		getText: () => code
	});

	test('should return empty maps when document is null', () => {
		const result = visitVariables(null);
		expect(result.globalVariables.size).toBe(0);
		expect(result.functionVariables.size).toBe(0);
	});

	test('should handle no variables', () => {
		const code = `
			function everything() {
				return 42;
			}
		`;

		const result = visitVariables(createMockDocument(code));

		expect(result.globalVariables.size).toBe(0);
		expect(result.functionVariables.size).toBe(0);
	})

	test('should detect global variables', () => {
		const code = `
            int globalVar;
            string globalString;
            object *globalObjArray;
        `;

		const result = visitVariables(createMockDocument(code));

		expect(result.globalVariables.size).toBe(3);
		expect(result.globalVariables.has('globalVar')).toBe(true);
		expect(result.globalVariables.has('globalString')).toBe(true);
		expect(result.globalVariables.has('globalObjArray')).toBe(true);
		const objArrayInfo = result.globalVariables.get('globalObjArray');
		expect(objArrayInfo.arrayDimension).toBe(1);
	});

	test('should detect function-local variables', () => {
		const code = `
            void testFunction() {
                int localVar;
                string localString;
            }
        `;

		const result = visitVariables(createMockDocument(code));

		expect(result.functionVariables.size).toBe(1);
		expect(result.functionVariables.has('testFunction')).toBe(true);
		const functionVars = result.functionVariables.get('testFunction');
		expect(functionVars.size).toBe(2);
		expect(functionVars.has('localVar')).toBe(true);
		expect(functionVars.has('localString')).toBe(true);
	});

	test('should handle multiple variable declarations in one statement', () => {
		const code = `
            int var1, var2, var3;
        `;

		const result = visitVariables(createMockDocument(code));

		expect(result.globalVariables.size).toBe(3);
		expect(result.globalVariables.has('var1')).toBe(true);
		expect(result.globalVariables.has('var2')).toBe(true);
		expect(result.globalVariables.has('var3')).toBe(true);
	});

	test('should handle variables with modifiers', () => {
		const code = `
            private static int privateVar;
            static string publicVar;
        `;

		const result = visitVariables(createMockDocument(code));

		expect(result.globalVariables.size).toBe(2);
		const privateVarInfo = result.globalVariables.get('privateVar');
		const publicVarInfo = result.globalVariables.get('publicVar');

		expect(privateVarInfo.modifiers).toContain('private');
		expect(privateVarInfo.modifiers).toContain('static');
		expect(publicVarInfo.modifiers).toContain('static');
	});

	test('should handle mixed global and function variables', () => {
		const code = `
            int globalVar;
            void function1() {
                int localVar1;
            }
            string globalString;
            void function2() {
                int localVar2;
            }
        `;

		const result = visitVariables(createMockDocument(code));

		expect(result.globalVariables.size).toBe(2);
		expect(result.functionVariables.size).toBe(2);

		expect(result.globalVariables.has('globalVar')).toBe(true);
		expect(result.globalVariables.has('globalString')).toBe(true);

		expect(result.functionVariables.get('function1').has('localVar1')).toBe(true);
		expect(result.functionVariables.get('function2').has('localVar2')).toBe(true);
	});

	test('handles operator overloading without variables', () => {
		const code = `
        mixed operator+(int x) {
            return x;
        }
    `;

		const result = visitVariables(createMockDocument(code));

		expect(result.globalVariables.size).toBe(0);
		expect(result.functionVariables.size).toBe(0);
	});

	test('handles operator overloading with variables', () => {
		const code = `
        mixed operator + (int x) {
        		int y;
            return x;
        }
    `;

		const result = visitVariables(createMockDocument(code));

		expect(result.globalVariables.size).toBe(0);
		expect(result.functionVariables.size).toBe(1);
	});

	// TODO block-local scoping
	describe.skip('block-local scoping', () => {
		test('should handle nested blocks', () => {
			const code = `
        void testFunction() {
            int outerVar;
            if (1) {
                int innerVar;
            }
            while (1) {
                int whileVar;
            }
        }
    `;

			const result = visitVariables(createMockDocument(code));

			expect(result.functionVariables.size).toBe(1);
			const functionVars = result.functionVariables.get('testFunction');
			expect(functionVars.size).toBe(3);
			expect(functionVars.has('outerVar')).toBe(true);
			expect(functionVars.has('innerVar')).toBe(true);
			expect(functionVars.has('whileVar')).toBe(true);
		});
	});

	test('should capture variable position information', () => {
		const code = `
int globalVar;
void testFunction() {
    int localVar;
}`;

		const result = visitVariables(createMockDocument(code));

		const globalVarInfo = result.globalVariables.get('globalVar');
		expect(globalVarInfo.position).toBeDefined();
		expect(globalVarInfo.position.start).toEqual({
			line: 1,
			character: 4
		});
		expect(globalVarInfo.position.end).toEqual({
			line: 1,
			character: 13
		});

		const functionVars = result.functionVariables.get('testFunction');
		const localVarInfo = functionVars.get('localVar');
		expect(localVarInfo.position).toBeDefined();
		expect(localVarInfo.position.start).toEqual({
			line: 3,
			character: 8
		});
		expect(localVarInfo.position.end).toEqual({
			line: 3,
			character: 16
		});
	});
});
