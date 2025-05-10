import StringContextDetector from './string-context-detector';

describe('StringContextDetector', () => {
	describe('isInString', () => {
		test('should return false for text outside strings', () => {
			const text = 'const x = 5;';
			expect(StringContextDetector.isInString(text, 5)).toBeFalsy();
		});

		test('should return true for text inside double quoted string', () => {
			const text = 'const x = "hello world";';
			expect(StringContextDetector.isInString(text, 15)).toBeTruthy(); // position of 'w'
		});

		test('should return true for text inside single quoted string', () => {
			const text = "const x = 'hello world';";
			expect(StringContextDetector.isInString(text, 15)).toBeTruthy();
		});

		test('should handle escaped quotes correctly', () => {
			const text = 'const x = "hello \\"world\\"";';
			expect(StringContextDetector.isInString(text, 16)).toBeTruthy();
		});

		test('should handle multiple strings correctly', () => {
			const text = 'const x = "hello"; const y = "world";';
			expect(StringContextDetector.isInString(text, 15)).toBeTruthy(); // inside first string
			expect(StringContextDetector.isInString(text, 20)).toBeFalsy(); // between strings
			expect(StringContextDetector.isInString(text, 35)).toBeTruthy(); // inside second string
		});

		test('should handle multiline strings', () => {
			const text = 'const x = "hello\nworld";';
			expect(StringContextDetector.isInString(text, 15)).toBeTruthy();
			expect(StringContextDetector.isInString(text, 16)).toBeTruthy();
		});

		test('should handle empty strings', () => {
			const text = 'const x = "";';
			expect(StringContextDetector.isInString(text, 10)).toBeFalsy();
		});

		test('should handle position at quote characters', () => {
			const text = 'const x = "hello";';
			expect(StringContextDetector.isInString(text, 10)).toBeFalsy(); // at opening quote
			expect(StringContextDetector.isInString(text, 16)).toBeTruthy(); // at closing quote
		});

		test('should handle mixed quotes', () => {
			const text = 'const x = "hello"; const y = \'world\';';
			expect(StringContextDetector.isInString(text, 15)).toBeTruthy(); // in double quotes
			expect(StringContextDetector.isInString(text, 35)).toBeTruthy(); // in single quotes
		});
	});
});
