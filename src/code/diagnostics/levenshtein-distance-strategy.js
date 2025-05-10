// levenshtein-distance-strategy.js
import StringDistanceStrategy from './string-distance-strategy';

export default class LevenshteinDistanceStrategy extends StringDistanceStrategy {
	calculate(source, target) {
		if (source.length === 0) return target.length;
		if (target.length === 0) return source.length;

		const matrix = this.initializeMatrix(source, target);
		return this.fillMatrix(matrix, source, target);
	}

	initializeMatrix(source, target) {
		const matrix = Array(target.length + 1).fill(null)
			.map(() => Array(source.length + 1).fill(null));

		for (let col = 0; col <= source.length; col++) matrix[0][col] = col;
		for (let row = 0; row <= target.length; row++) matrix[row][0] = row;

		return matrix;
	}

	fillMatrix(matrix, source, target) {
		for (let row = 1; row <= target.length; row++) {
			for (let col = 1; col <= source.length; col++) {
				const cost = source[col - 1] === target[row - 1] ? 0 : 1;
				matrix[row][col] = Math.min(
					matrix[row - 1][col] + 1,     // deletion
					matrix[row][col - 1] + 1,     // insertion
					matrix[row - 1][col - 1] + cost // substitution
				);
			}
		}
		return matrix[target.length][source.length];
	}
}
