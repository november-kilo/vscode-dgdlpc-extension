import extractInherits from './inherit-extractor';

describe('LPCInheritVisitor', () => {
	test('should handle basic inheritance', () => {
		const input = 'inherit "/std/object";';

		const inheritStatements = extractInherits(input);

		expect(inheritStatements).toHaveLength(1);
		expect(inheritStatements[0]).toEqual({
			path: '/std/object',
			isPrivate: false,
			position: expect.any(Object)
		});
	});

	test('should handle private inheritance', () => {
		const input = 'private inherit "/std/object";';

		const inheritStatements = extractInherits(input);

		expect(inheritStatements).toHaveLength(1);
		expect(inheritStatements[0]).toEqual({
			path: '/std/object',
			isPrivate: true,
			position: expect.any(Object)
		});
	});

	test('should handle labeled inheritance', () => {
		const input = 'inherit parent "/std/object";';

		const inheritStatements = extractInherits(input);

		expect(inheritStatements).toHaveLength(1);
		expect(inheritStatements[0]).toEqual({
			path: '/std/object',
			isPrivate: false,
			label: 'parent',
			position: expect.any(Object)
		});
	});

	test('should handle private labeled inheritance', () => {
		const input = 'private inherit base "/std/object";';

		const inheritStatements = extractInherits(input);

		expect(inheritStatements).toHaveLength(1);
		expect(inheritStatements[0]).toEqual({
			path: '/std/object',
			isPrivate: true,
			label: 'base',
			position: expect.any(Object)
		});
	});

	test('should handle multiple inheritance statements', () => {
		const input = `
            inherit "/std/object";
            private inherit parent "/std/container";
            inherit base "/std/room";
        `;

		const inheritStatements = extractInherits(input);

		expect(inheritStatements).toHaveLength(3);
		expect(inheritStatements).toEqual([
			{
				path: '/std/object',
				isPrivate: false,
				position: expect.any(Object)
			},
			{
				path: '/std/container',
				isPrivate: true,
				label: 'parent',
				position: expect.any(Object)
			},
			{
				path: '/std/room',
				isPrivate: false,
				label: 'base',
				position: expect.any(Object)
			}
		]);
	});

	test('should handle inheritance mixed with other code', () => {
		const input = `
            int value;
            inherit "/std/object";
            void create() {
                ::create();
            }
            private inherit util "/std/util";
        `;

		const inheritStatements = extractInherits(input);

		expect(inheritStatements).toHaveLength(2);
		expect(inheritStatements).toEqual([
			{
				path: '/std/object',
				isPrivate: false,
				position: expect.any(Object)
			},
			{
				path: '/std/util',
				isPrivate: true,
				label: 'util',
				position: expect.any(Object)
			}
		]);
	});

	test('should handle empty program', () => {
		const inheritStatements = extractInherits('');

		expect(inheritStatements).toHaveLength(0);
	});

	test('should handle program without inherit statements', () => {
		const input = `
            int main() {
                return 42;
            }
        `;

		const inheritStatements = extractInherits(input);

		expect(inheritStatements).toHaveLength(0);
	});
});
