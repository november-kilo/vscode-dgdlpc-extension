import MatchFilterStrategy from './match-filter-strategy';

export default class ThresholdMatchFilterStrategy extends MatchFilterStrategy {
	constructor(threshold) {
		super();
		this.threshold = threshold;
	}

	filter(matches) {
		return matches.filter(match => match.distance <= this.threshold);
	}
}
