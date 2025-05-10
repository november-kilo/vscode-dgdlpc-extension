import antlr4 from 'antlr4';
import LPCErrorListener, {SilentErrorListener} from './error-listener.js';

describe('Error Listeners', () => {
	let listener;

	const expectNotToThrow = (fn) => {
		expect(() => fn()).not.toThrow();
	}

	describe('SilentErrorListener', () => {
		beforeEach(() => {
			listener = new SilentErrorListener();
		});

		test('should extend antlr4.error.ErrorListener', () => {
			expect(listener).toBeInstanceOf(antlr4.error.ErrorListener);
		});

		test('syntaxError should not throw', () => {
			expectNotToThrow(listener.syntaxError);
		});

		test('reportAttemptingFullContext should not throw', () => {
			expectNotToThrow(listener.reportAttemptingFullContext);
		});

		test('reportContextSensitivity should not throw', () => {
			expectNotToThrow(listener.reportContextSensitivity);
		});

		test('reportAmbiguity should not throw', () => {
			expectNotToThrow(listener.reportAmbiguity);
		});
	});

	describe('LPCErrorListener', () => {
		beforeEach(() => {
			listener = new LPCErrorListener();
		});

		test('should extend antlr4.error.ErrorListener', () => {
			expect(listener).toBeInstanceOf(antlr4.error.ErrorListener);
		});

		test('should initialize with empty errors array', () => {
			expect(listener.errors).toEqual([]);
		});

		test('syntaxError should add error to errors array', () => {
			const recognizer = {};
			const symbol = {};
			const line = 1;
			const column = 5;
			const msg = 'Test error message';
			const e = new Error();

			listener.syntaxError(recognizer, symbol, line, column, msg, e);

			expect(listener.errors).toHaveLength(1);
			expect(listener.errors[0]).toEqual({
				line: line,
				column: column,
				message: msg
			});
		});

		test('should accumulate multiple errors', () => {
			const errors = [
				{line: 1, column: 5, message: 'First error'},
				{line: 2, column: 10, message: 'Second error'},
				{line: 3, column: 15, message: 'Third error'}
			];

			errors.forEach(error => {
				listener.syntaxError(
					{}, // recognizer
					{}, // symbol
					error.line,
					error.column,
					error.message,
					new Error()
				);
			});

			expect(listener.errors).toHaveLength(3);
			expect(listener.errors).toEqual(errors);
		});

		test('should preserve error order', () => {
			const errors = [
				{line: 1, column: 5, message: 'First error'},
				{line: 2, column: 10, message: 'Second error'}
			];

			errors.forEach(error => {
				listener.syntaxError(
					{}, // recognizer
					{}, // symbol
					error.line,
					error.column,
					error.message,
					new Error()
				);
			});

			expect(listener.errors[0].message).toBe('First error');
			expect(listener.errors[1].message).toBe('Second error');
		});
	});
});
