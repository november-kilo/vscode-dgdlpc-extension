import JaroWinklerStrategy from './jaro-winkler-distance-strategy';

describe('JaroWinklerStrategy', () => {
	let strategy;

	beforeEach(() => {
		strategy = new JaroWinklerStrategy();
	});

	test('exact matches should return 1.0', () => {
		expect(strategy.calculate('MARTHA', 'MARTHA')).toBe(1.0);
		expect(strategy.calculate('DWAYNE', 'DWAYNE')).toBe(1.0);
	});

	test('known Jaro-Winkler scores', () => {
		// These are standard test cases with known scores
		expect(strategy.calculate('MARTHA', 'MARHTA')).toBeCloseTo(0.961, 3);
		expect(strategy.calculate('DIXON', 'DICKSONX')).toBeCloseTo(0.813, 3);
		expect(strategy.calculate('DWAYNE', 'DUANE')).toBeCloseTo(0.84, 3);
	});

	test('completely different strings should have low scores', () => {
		expect(strategy.calculate('ABC', 'XYZ')).toBeLessThan(0.5);
	});

	test('handle null and undefined inputs', () => {
		expect(strategy.calculate(null, 'test')).toBe(0);
		expect(strategy.calculate('test', null)).toBe(0);
		expect(strategy.calculate(null, null)).toBe(0);
		expect(strategy.calculate(undefined, 'test')).toBe(0);
	});

	test('handle numeric inputs', () => {
		expect(strategy.calculate(123, '123')).toBe(1.0);
		expect(strategy.calculate('123', 123)).toBe(1.0);
	});

	test('case sensitivity', () => {
		expect(strategy.calculate('martha', 'MARTHA')).toBeLessThan(1.0);
	});
});
