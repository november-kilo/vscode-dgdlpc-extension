import LevenshteinDistanceStrategy from './levenshtein-distance-strategy';

describe('LevenshteinDistanceStrategy', () => {
	let strategy;

	beforeEach(() => {
		strategy = new LevenshteinDistanceStrategy();
	});

	test('should return 0 for identical strings', () => {
		expect(strategy.calculate('hello', 'hello')).toBe(0);
	});

	test('should handle empty strings', () => {
		expect(strategy.calculate('', '')).toBe(0);
		expect(strategy.calculate('abc', '')).toBe(3);
		expect(strategy.calculate('', 'abc')).toBe(3);
	});

	test('should calculate single character operations', () => {
		// Insertion
		expect(strategy.calculate('cat', 'cats')).toBe(1);
		// Deletion
		expect(strategy.calculate('cats', 'cat')).toBe(1);
		// Substitution
		expect(strategy.calculate('cat', 'cut')).toBe(1);
	});

	test('should calculate multiple operations', () => {
		expect(strategy.calculate('kitten', 'sitting')).toBe(3);
		expect(strategy.calculate('sunday', 'saturday')).toBe(3);
	});

	test('should handle case sensitivity', () => {
		expect(strategy.calculate('Hello', 'hello')).toBe(1);
		expect(strategy.calculate('WORLD', 'world')).toBe(5);
	});

	test('should handle completely different strings', () => {
		expect(strategy.calculate('abc', 'xyz')).toBe(3);
	});

	test('should handle strings with spaces', () => {
		expect(strategy.calculate('hello world', 'hello')).toBe(6);
		expect(strategy.calculate('a b c', 'abc')).toBe(2);
	});

	test('should handle special characters', () => {
		expect(strategy.calculate('user@example.com', 'user@sample.com')).toBe(2);
		expect(strategy.calculate('hello!', 'hello?')).toBe(1);
	});

	test('should handle strings of very different lengths', () => {
		expect(strategy.calculate('a', 'abcdef')).toBe(5);
		expect(strategy.calculate('abcdef', 'a')).toBe(5);
	});
});
