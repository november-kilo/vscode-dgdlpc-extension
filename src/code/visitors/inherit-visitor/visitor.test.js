import visitInherit from './visitor';
import Logger from '../../logger';

describe('visitInherit', () => {
	function createMockDocument(content) {
		return {
			getText: () => content,
			uri: 'file:///test.c'
		};
	}

	test('returns empty array for empty input', () => {
		const input = '';

		const inherits = visitInherit(createMockDocument(input));

		expect(inherits).toEqual([]);
	});

	test('extracts basic inherit declaration', () => {
		const input = `
			inherit "/std/object";
		`;

		const inherits = visitInherit(createMockDocument(input));

		expect(inherits).toEqual([
			{
				"path": "/std/object",
				"isPrivate": false,
				"invalidPosition": false,
				"range": {
					"start": {
						"line": 1,
						"character": 3
					},
					"end": {
						"line": 1,
						"character": 25
					}
				},
				"uri": "file:///test.c",
				"text": "inherit \"/std/object\";"
			}
		]);
	});

	test('extracts inherit declaration with identifier', () => {
		const input = `
			inherit MONSTER "/std/monster";
		`;

		const inherits = visitInherit(createMockDocument(input));

		expect(inherits).toEqual([
			{
				"label": "MONSTER",
				"path": "/std/monster",
				"isPrivate": false,
				"invalidPosition": false,
				"range": {
					"start": {
						"line": 1,
						"character": 3
					},
					"end": {
						"line": 1,
						"character": 34
					}
				},
				"uri": "file:///test.c",
				"text": "inherit MONSTER \"/std/monster\";"
			}
		]);
	});

	test('extracts multiple inherit declarations', () => {
		const input = `
            inherit MONSTER "/std/monster";
            inherit WEAPON "/std/weapon";
            inherit "/std/object";
        `;

		const inherits = visitInherit(createMockDocument(input));

		expect(inherits).toEqual([
			{
				"label": "MONSTER",
				"path": "/std/monster",
				"isPrivate": false,
				"invalidPosition": false,
				"range": {
					"start": {
						"line": 1,
						"character": 12
					},
					"end": {
						"line": 1,
						"character": 43
					}
				},
				"uri": "file:///test.c",
				"text": "inherit MONSTER \"/std/monster\";"
			},
			{
				"label": "WEAPON",
				"path": "/std/weapon",
				"isPrivate": false,
				"invalidPosition": false,
				"range": {
					"start": {
						"line": 2,
						"character": 12
					},
					"end": {
						"line": 2,
						"character": 41
					}
				},
				"uri": "file:///test.c",
				"text": "inherit WEAPON \"/std/weapon\";"
			},
			{
				"path": "/std/object",
				"isPrivate": false,
				"invalidPosition": false,
				"range": {
					"start": {
						"line": 3,
						"character": 12
					},
					"end": {
						"line": 3,
						"character": 34
					}
				},
				"uri": "file:///test.c",
				"text": "inherit \"/std/object\";"
			}
		]);
	});

	test('handles private inherit declarations', () => {
		const input = `private inherit ROOM "/std/room";`;

		const inherits = visitInherit(createMockDocument(input));

		expect(inherits).toEqual([
			{
				"label": "ROOM",
				"path": "/std/room",
				"isPrivate": true,
				"invalidPosition": false,
				"range": {
					"start": {
						"line": 0,
						"character": 0
					},
					"end": {
						"line": 0,
						"character": 33
					}
				},
				"uri": "file:///test.c",
				"text": "private inherit ROOM \"/std/room\";"
			}
		]);
	});

	test('extracts inherits mixed with other declarations', () => {
		const input = `
            int global_var;
            inherit BASE "/std/base";
            void func() {}
            inherit UTIL "/std/util";
        `;

		const inherits = visitInherit(createMockDocument(input));

		expect(inherits).toEqual([
			{
				"label": "BASE",
				"path": "/std/base",
				"isPrivate": false,
				"invalidPosition": true,
				"range": {
					"start": {
						"line": 2,
						"character": 12
					},
					"end": {
						"line": 2,
						"character": 37
					}
				},
				"uri": "file:///test.c",
				"text": "inherit BASE \"/std/base\";"
			},
			{
				"label": "UTIL",
				"path": "/std/util",
				"isPrivate": false,
				"invalidPosition": true,
				"range": {
					"start": {
						"line": 4,
						"character": 12
					},
					"end": {
						"line": 4,
						"character": 37
					}
				},
				"uri": "file:///test.c",
				"text": "inherit UTIL \"/std/util\";"
			}
		]);
	});

	test('handles inherits with preprocessor directives', () => {
		const input = `
            #include <std.h>
            inherit MONSTER "/std/monster";
            #ifdef DEBUG
            inherit TEST "/std/test";
            #endif
        `;

		const inherits = visitInherit(createMockDocument(input));

		expect(inherits).toEqual([
			{
				"label": "MONSTER",
				"path": "/std/monster",
				"isPrivate": false,
				"invalidPosition": false,
				"range": {
					"start": {
						"line": 2,
						"character": 12
					},
					"end": {
						"line": 2,
						"character": 43
					}
				},
				"uri": "file:///test.c",
				"text": "inherit MONSTER \"/std/monster\";"
			},
			{
				"label": "TEST",
				"path": "/std/test",
				"isPrivate": false,
				"invalidPosition": false,
				"range": {
					"start": {
						"line": 4,
						"character": 12
					},
					"end": {
						"line": 4,
						"character": 37
					}
				},
				"uri": "file:///test.c",
				"text": "inherit TEST \"/std/test\";"
			}
		]);
	});

	test('marks inherit as invalid after non-preprocessor elements', () => {
		const input = `
        string name;
        inherit "/std/object";
    `;

		const inherits = visitInherit(createMockDocument(input));

		expect(inherits).toEqual([
			{
				"path": "/std/object",
				"isPrivate": false,
				"invalidPosition": true,
				"range": {
					"start": {
						"line": 2,
						"character": 8
					},
					"end": {
						"line": 2,
						"character": 30
					}
				},
				"uri": "file:///test.c",
				"text": "inherit \"/std/object\";"
			}
		]);
	});

	// TODO address this
	test.skip('handles invalid inherit declarations', () => {
		const input = `
            inherit;
            inherit "/missing/semicolon"
            inherit BROKEN
        `;

		const inherits = visitInherit(createMockDocument(input));

		expect(inherits).toEqual([
			{
				"path": "/missing/semicolon",
				"isPrivate": false,
				"invalidPosition": true,
				"range": {
					"start": {
						"line": 2,
						"character": 12
					},
					"end": {
						"line": 2,
						"character": 40
					}
				},
				"uri": "file:///test.c",
				"text": "inherit \"/missing/semicolon\""
			}
		]);
	});

	test('handles complex file with multiple declarations', () => {
		const input = `
            #include <std.h>
            
            inherit MONSTER "/std/monster";
            
            int global_var;
            
            private inherit WEAPON "/std/weapon";
            
            void setup() {
                // Some function content
            }
            
            inherit "/std/object";
        `;

		const inherits = visitInherit(createMockDocument(input));

		expect(inherits).toEqual([
			{
				"label": "MONSTER",
				"path": "/std/monster",
				"isPrivate": false,
				"invalidPosition": false,
				"range": {
					"start": {
						"line": 3,
						"character": 12
					},
					"end": {
						"line": 3,
						"character": 43
					}
				},
				"uri": "file:///test.c",
				"text": "inherit MONSTER \"/std/monster\";"
			},
			{
				"label": "WEAPON",
				"path": "/std/weapon",
				"isPrivate": true,
				"invalidPosition": true,
				"range": {
					"start": {
						"line": 7,
						"character": 12
					},
					"end": {
						"line": 7,
						"character": 49
					}
				},
				"uri": "file:///test.c",
				"text": "private inherit WEAPON \"/std/weapon\";"
			},
			{
				"path": "/std/object",
				"isPrivate": false,
				"invalidPosition": true,
				"range": {
					"start": {
						"line": 13,
						"character": 12
					},
					"end": {
						"line": 13,
						"character": 34
					}
				},
				"uri": "file:///test.c",
				"text": "inherit \"/std/object\";"
			}
		]);
	});

	test('handles file with only preprocessor directives', () => {
		const input = `
            #include <std.h>
            #define CONSTANT 42
            #ifdef DEBUG
            #endif
        `;

		const inherits = visitInherit(createMockDocument(input));

		expect(inherits).toEqual([]);
	});
});
