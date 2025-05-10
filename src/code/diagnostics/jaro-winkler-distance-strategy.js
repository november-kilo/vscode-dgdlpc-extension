import jaroWinkler from 'jaro-winkler';
import StringDistanceStrategy from './string-distance-strategy';

export default class JaroWinklerStrategy extends StringDistanceStrategy {
	calculate(source, target) {
		if (!source || !target) {
			return 0;
		}
		return jaroWinkler(String(source), String(target));
	}
}
