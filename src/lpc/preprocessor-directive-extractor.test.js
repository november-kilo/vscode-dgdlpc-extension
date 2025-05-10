import extractDirectives, {LPCPreprocessorDirectiveVisitor} from './preprocessor-directive-extractor.js';

describe('LPCPreprocessorDirectiveVisitor', () => {
	test('should handle basic include directives', () => {
		const input = `
            #include <std/room.h>
            #include "my/room.h"
        `;

		const directives = extractDirectives(input);

		expect(directives.includes).toHaveLength(2);
		expect(directives.includes[0]).toMatchObject({
			path: 'std/room.h',
			isSystemInclude: true
		});
		expect(directives.includes[1]).toMatchObject({
			path: 'my/room.h',
			isSystemInclude: false
		});
	});

	test('should handle malformed include directives', () => {
		const input = `
        #include malformed_include
        #include
        #include <>
        #include ""
    `;

		const directives = extractDirectives(input);

		expect(directives.includes).toHaveLength(0);
	});

	test('should handle macro includes', () => {
		const input = `
        #define HEADER "myheader.h"
        #define SYS_HEADER <system.h>
        #include HEADER
        #include SYS_HEADER
        #include UNDEFINED_MACRO
    `;

		const directives = extractDirectives(input);

		expect(directives.includes).toHaveLength(2);
		expect(directives.includes[0]).toMatchObject({
			path: 'HEADER',
			isMacroInclude: true
		});
		expect(directives.includes[1]).toMatchObject({
			path: 'SYS_HEADER',
			isMacroInclude: true
		});
	});

	test('should handle define directives', () => {
		const input = `
            #define DEBUG
            #define MAX_SIZE 100
            #define MACRO(x) ((x) * 2)
        `;

		const directives = extractDirectives(input);

		expect(directives.defines).toHaveLength(3);
		expect(directives.defines[0]).toMatchObject({
			macro: 'DEBUG',
			definition: null
		});
		expect(directives.defines[1]).toMatchObject({
			macro: 'MAX_SIZE',
			definition: '100'
		});
		expect(directives.defines[2]).toMatchObject({
			macro: 'MACRO(x)',
			definition: '((x) * 2)'
		});
	});

	test('should handle ifdef conditional context', () => {
		const input = `
            #ifdef DEBUG
            #define LOG_LEVEL 2
            #include "debug.h"
            #endif
        `;

		const directives = extractDirectives(input);

		expect(directives.ifdef).toHaveLength(1);
		expect(directives.ifdef[0]).toMatchObject({
			condition: 'DEBUG'
		});
		expect(directives.defines).toHaveLength(1);
		expect(directives.defines[0].conditionalContext).toMatchObject({
			type: 'ifdef',
			condition: 'DEBUG'
		});
		expect(directives.includes).toHaveLength(1);
		expect(directives.includes[0].conditionalContext).toMatchObject({
			type: 'ifdef',
			condition: 'DEBUG'
		});
		expect(directives.endif).toHaveLength(1);
		expect(directives.endif[0]).toMatchObject({});
	});

	test('should handle ifndef conditional context', () => {
		const input = `
            #ifndef HEADER_GUARD
            #define HEADER_GUARD
            #endif
        `;

		const directives = extractDirectives(input);

		expect(directives.ifndef).toHaveLength(1);
		expect(directives.ifndef[0]).toMatchObject({
			condition: 'HEADER_GUARD'
		});
		expect(directives.defines).toHaveLength(1);
		expect(directives.defines[0].conditionalContext).toMatchObject({
			type: 'ifndef',
			condition: 'HEADER_GUARD'
		});
		expect(directives.endif).toHaveLength(1);
		expect(directives.endif[0]).toMatchObject({});
	});

	test('should handle else directives', () => {
		const input = `
            #ifdef DEBUG
            #define LOG_LEVEL 2
            #else
            #define LOG_LEVEL 0
            #endif
        `;

		const directives = extractDirectives(input);

		expect(directives.else).toHaveLength(1);
		expect(directives.else[0]).toMatchObject({
			parentCondition: 'DEBUG'
		});
		expect(directives.defines).toHaveLength(2);
		expect(directives.defines[1].conditionalContext).toMatchObject({
			type: 'else',
			parentType: 'ifdef',
			parentCondition: 'DEBUG'
		});
	});

	test('should handle undef directives', () => {
		const input = `
            #define DEBUG 1
            #ifdef CLEANUP
            #undef DEBUG
            #endif
        `;

		const directives = extractDirectives(input);

		expect(directives.undef).toHaveLength(1);
		expect(directives.undef[0]).toMatchObject({
			macro: 'DEBUG',
			conditionalContext: {
				type: 'ifdef',
				condition: 'CLEANUP'
			}
		});
	});

	test('should handle nested conditionals', () => {
		const input = `
            #ifdef OUTER
            #define OUTER_VAR 1
            #ifdef INNER
            #define INNER_VAR 2
            #endif
            #endif
        `;

		const directives = extractDirectives(input);

		expect(directives.ifdef).toHaveLength(2);
		expect(directives.defines).toHaveLength(2);
		expect(directives.defines[0].conditionalContext).toMatchObject({
			type: 'ifdef',
			condition: 'OUTER'
		});
		expect(directives.defines[1].conditionalContext).toMatchObject({
			type: 'ifdef',
			condition: 'INNER'
		});
	});

	test('should throw error for mismatched conditionals', () => {
		const inputWithExtraEndif = `
            #ifdef DEBUG
            #endif
            #endif
        `;

		expect(() => extractDirectives(inputWithExtraEndif))
			.toThrow('#endif without matching #ifdef/#ifndef');

		const inputWithExtraElse = `
            #else
            #define SOMETHING 1
            #endif
        `;

		expect(() => extractDirectives(inputWithExtraElse))
			.toThrow('#else without matching #ifdef/#ifndef');
	});

	describe('LPCPreprocessorDirectiveVisitor helper methods', () => {
		let visitor;

		beforeEach(() => {
			visitor = new LPCPreprocessorDirectiveVisitor();
		});

		describe('_isMacroDefined', () => {
			test('should return false for undefined macro', () => {
				expect(visitor.isMacroDefined('UNDEFINED')).toBe(false);
			});

			test('should return true for defined macro', () => {
				visitor.directives.defines.push({
					macro: 'FOO',
					definition: '"foo.h"',
					position: { start: 0, end: 10 }
				});
				expect(visitor.isMacroDefined('FOO')).toBe(true);
			});

			test('should return false for undefined macro', () => {
				visitor.directives.defines.push({
					macro: 'FOO',
					definition: '"foo.h"',
					position: { start: 0, end: 10 }
				});
				visitor.directives.undef.push({
					macro: 'FOO',
					position: { start: 11, end: 20 }
				});
				expect(visitor.isMacroDefined('FOO')).toBe(false);
			});

			test('should handle multiple defines and undefs', () => {
				visitor.directives.defines.push({
					macro: 'FOO',
					definition: '"foo1.h"',
					position: { start: 0, end: 10 }
				});
				visitor.directives.undef.push({
					macro: 'FOO',
					position: { start: 11, end: 20 }
				});
				visitor.directives.defines.push({
					macro: 'FOO',
					definition: '"foo2.h"',
					position: { start: 21, end: 30 }
				});
				expect(visitor.isMacroDefined('FOO')).toBe(true);
			});
		});

		describe('_getMacroDefinition', () => {
			test('should return null for undefined macro', () => {
				expect(visitor.getMacroDefinition('UNDEFINED')).toBeNull();
			});

			test('should return latest definition', () => {
				visitor.directives.defines.push({
					macro: 'FOO',
					definition: '"foo1.h"',
					position: { start: 0, end: 10 }
				});
				visitor.directives.defines.push({
					macro: 'FOO',
					definition: '"foo2.h"',
					position: { start: 11, end: 20 }
				});
				expect(visitor.getMacroDefinition('FOO')).toBe('"foo2.h"');
			});

			test('should return null after undef', () => {
				visitor.directives.defines.push({
					macro: 'FOO',
					definition: '"foo.h"',
					position: { start: 0, end: 10 }
				});
				visitor.directives.undef.push({
					macro: 'FOO',
					position: { start: 11, end: 20 }
				});
				expect(visitor.getMacroDefinition('FOO')).toBeNull();
			});

			test('should handle redefine after undef', () => {
				visitor.directives.defines.push({
					macro: 'FOO',
					definition: '"foo1.h"',
					position: { start: 0, end: 10 }
				});
				visitor.directives.undef.push({
					macro: 'FOO',
					position: { start: 11, end: 20 }
				});
				visitor.directives.defines.push({
					macro: 'FOO',
					definition: '"foo2.h"',
					position: { start: 21, end: 30 }
				});
				expect(visitor.getMacroDefinition('FOO')).toBe('"foo2.h"');
			});

			test('should handle multiple macros independently', () => {
				visitor.directives.defines.push({
					macro: 'FOO',
					definition: '"foo.h"',
					position: { start: 0, end: 10 }
				});
				visitor.directives.defines.push({
					macro: 'BAR',
					definition: '"bar.h"',
					position: { start: 11, end: 20 }
				});
				visitor.directives.undef.push({
					macro: 'FOO',
					position: { start: 21, end: 30 }
				});
				expect(visitor.getMacroDefinition('FOO')).toBeNull();
				expect(visitor.getMacroDefinition('BAR')).toBe('"bar.h"');
			});
		});

		test('should handle multiple undefs correctly', () => {
			visitor.directives.defines.push({
				macro: 'FOO',
				definition: '"foo.h"',
				position: { start: 0, end: 10 }
			});
			// Add multiple undefs in different positions
			visitor.directives.undef.push({
				macro: 'FOO',
				position: { start: 11, end: 20 }
			});
			visitor.directives.undef.push({
				macro: 'FOO',
				position: { start: 21, end: 30 }
			});

			expect(visitor.getMacroDefinition('FOO')).toBeNull();
		});
	});
});
