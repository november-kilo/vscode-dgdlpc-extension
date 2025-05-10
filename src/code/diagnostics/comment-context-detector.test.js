import CommentContextDetector from './comment-context-detector';

describe('CommentContextDetector', () => {
	describe('isInComment', () => {
		test('should return false for text outside comments', () => {
			const text = 'x = 5;';

			expect(CommentContextDetector.isInComment(text, 0)).toBeFalsy();
		});

		test('should return true for text in slash-slash comment', () => {
			const text = 'x = 5; // this is a comment';

			expect(CommentContextDetector.isInComment(text, 15)).toBeTruthy();
		});

		test('should return true for text in slash-splat comment', () => {
			const text = 'x = 5; /* this is a comment */';

			expect(CommentContextDetector.isInComment(text, 15)).toBeTruthy();
		});

		test('should return true for text in multi-line comment', () => {
			const text = 'x = /* this is\na comment */ 5;';

			expect(CommentContextDetector.isInComment(text, 10)).toBeTruthy();
			expect(CommentContextDetector.isInComment(text, 20)).toBeTruthy();
		});

		test('should handle comment in strings', () => {
			const text = 'str = "// not a comment"; x = 5; // real comment';

			expect(CommentContextDetector.isInComment(text, 10)).toBeFalsy(); // in string
			expect(CommentContextDetector.isInComment(text, 40)).toBeTruthy(); // in actual comment
		});


		test('should handle unclosed multi-line comments', () => {
			const text = 'x = /* unclosed comment\nmore text';

			expect(CommentContextDetector.isInComment(text, 15)).toBeTruthy();
			expect(CommentContextDetector.isInComment(text, 25)).toBeTruthy();
		});
	});
});
