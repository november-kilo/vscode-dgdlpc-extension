import MatchFilterStrategy from './match-filter-strategy';

export default class JaroWinklerMatchFilterStrategy extends MatchFilterStrategy {
	constructor(threshold = 0.8) { // Default threshold of 0.8 is common for Jaro-Winkler
		super();
		if (threshold < 0 || threshold > 1) {
			throw new Error('Jaro-Winkler threshold must be between 0 and 1');
		}
		this.threshold = threshold;
	}

	filter(matches) {
		return matches.filter(match => match.distance >= this.threshold);
	}
}
