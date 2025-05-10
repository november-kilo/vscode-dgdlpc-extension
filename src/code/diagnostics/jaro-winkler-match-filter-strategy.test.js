import JaroWinklerMatchFilterStrategy from './jaro-winkler-match-filter-strategy';

describe('JaroWinklerMatchFilterStrategy', () => {
	describe('constructor', () => {
		test('should use default threshold of 0.8', () => {
			const filter = new JaroWinklerMatchFilterStrategy();
			expect(filter.threshold).toBe(0.8);
		});

		test('should accept custom threshold', () => {
			const filter = new JaroWinklerMatchFilterStrategy(0.9);
			expect(filter.threshold).toBe(0.9);
		});

		test('should throw error for threshold < 0', () => {
			expect(() => new JaroWinklerMatchFilterStrategy(-0.1))
				.toThrow('Jaro-Winkler threshold must be between 0 and 1');
		});

		test('should throw error for threshold > 1', () => {
			expect(() => new JaroWinklerMatchFilterStrategy(1.1))
				.toThrow('Jaro-Winkler threshold must be between 0 and 1');
		});
	});

	describe('filter', () => {
		let filter;
		const sampleMatches = [
			{ distance: 1.0, text: 'perfect' },
			{ distance: 0.9, text: 'high' },
			{ distance: 0.8, text: 'threshold' },
			{ distance: 0.7, text: 'below' },
			{ distance: 0.5, text: 'low' }
		];

		beforeEach(() => {
			filter = new JaroWinklerMatchFilterStrategy();
		});

		test('should filter matches below default threshold', () => {
			const result = filter.filter(sampleMatches);
			expect(result).toHaveLength(3);
			expect(result).toContainEqual(expect.objectContaining({ distance: 1.0 }));
			expect(result).toContainEqual(expect.objectContaining({ distance: 0.9 }));
			expect(result).toContainEqual(expect.objectContaining({ distance: 0.8 }));
		});

		test('should handle custom threshold', () => {
			filter = new JaroWinklerMatchFilterStrategy(0.9);
			const result = filter.filter(sampleMatches);
			expect(result).toHaveLength(2);
			expect(result).toContainEqual(expect.objectContaining({ distance: 1.0 }));
			expect(result).toContainEqual(expect.objectContaining({ distance: 0.9 }));
		});

		test('should handle empty matches array', () => {
			const result = filter.filter([]);
			expect(result).toHaveLength(0);
		});

		test('should handle threshold at boundaries', () => {
			filter = new JaroWinklerMatchFilterStrategy(1.0);
			let result = filter.filter(sampleMatches);
			expect(result).toHaveLength(1);
			expect(result[0]).toEqual(expect.objectContaining({ distance: 1.0 }));

			filter = new JaroWinklerMatchFilterStrategy(0.0);
			result = filter.filter(sampleMatches);
			expect(result).toHaveLength(5);
		});
	});
});
