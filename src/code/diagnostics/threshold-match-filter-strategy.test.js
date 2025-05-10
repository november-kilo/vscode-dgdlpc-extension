import ThresholdMatchFilterStrategy from './threshold-match-filter-strategy';

describe('ThresholdMatchFilterStrategy', () => {
	let strategy;
	const threshold = 0.5;

	beforeEach(() => {
		strategy = new ThresholdMatchFilterStrategy(threshold);
	});

	test('should keep matches with distance less than or equal to threshold', () => {
		const matches = [
			{ distance: 0.3, text: 'close match' },
			{ distance: 0.5, text: 'threshold match' },
			{ distance: 0.7, text: 'far match' }
		];

		const filteredMatches = strategy.filter(matches);

		expect(filteredMatches).toHaveLength(2);
		expect(filteredMatches).toContainEqual(matches[0]);
		expect(filteredMatches).toContainEqual(matches[1]);
	});

	test('should return empty array when all matches are above threshold', () => {
		const matches = [
			{ distance: 0.6, text: 'far match 1' },
			{ distance: 0.8, text: 'far match 2' }
		];

		const filteredMatches = strategy.filter(matches);

		expect(filteredMatches).toHaveLength(0);
	});

	test('should return all matches when all are below threshold', () => {
		const matches = [
			{ distance: 0.1, text: 'very close' },
			{ distance: 0.3, text: 'close' },
			{ distance: 0.4, text: 'fairly close' }
		];

		const filteredMatches = strategy.filter(matches);

		expect(filteredMatches).toHaveLength(3);
		expect(filteredMatches).toEqual(matches);
	});

	test('should handle empty matches array', () => {
		const matches = [];

		const filteredMatches = strategy.filter(matches);

		expect(filteredMatches).toHaveLength(0);
	});
});
