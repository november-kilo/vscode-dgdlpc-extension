import LPCParser from '../lpc/parser/LPCParser';
import StringUtil from './string-util';

describe('StringUtil', () => {
	describe('removeQuotes', () => {
		it('removes first and last character', () => {
			expect(StringUtil.removeQuotes('"test"')).toBe('test');
			expect(StringUtil.removeQuotes('"hello world"')).toBe('hello world');
		});
	});

	describe('isStringLiteral', () => {
		it('returns true for string literal nodes', () => {
			const node = { symbol: { type: LPCParser.STRING_LITERAL } };
			expect(StringUtil.isStringLiteral(node)).toBe(true);
		});

		it('returns false for non-string literal nodes', () => {
			const node = { symbol: { type: 'something_else' } };
			expect(StringUtil.isStringLiteral(node)).toBe(false);
		});

		it('returns false for nodes without symbol', () => {
			const node = {};
			expect(StringUtil.isStringLiteral(node)).toBe(false);
		});
	});

	describe('getStringExpressionText', () => {
		it('returns empty string for null input', () => {
			expect(StringUtil.getStringExpressionText(null)).toBe('');
		});

		it('returns empty string for undefined input', () => {
			expect(StringUtil.getStringExpressionText(undefined)).toBe('');
		});

		it('handles single string literal', () => {
			const mockExpr = {
				STRING_LITERAL: () => ({
					getText: () => '"hello world"'
				})
			};
			expect(StringUtil.getStringExpressionText(mockExpr)).toBe('hello world');
		});

		it('handles concatenated strings', () => {
			const mockExpr = {
				STRING_LITERAL: () => null,
				children: [
					{
						symbol: { type: LPCParser.STRING_LITERAL },
						getText: () => '"hello "'
					},
					{
						symbol: { type: 'NOT_STRING' },
						getText: () => '+'
					},
					{
						symbol: { type: LPCParser.STRING_LITERAL },
						getText: () => '"world"'
					}
				]
			};
			expect(StringUtil.getStringExpressionText(mockExpr)).toBe('hello world');
		});

		it('handles empty concatenated strings array', () => {
			const mockExpr = {
				STRING_LITERAL: () => null,
				children: []
			};
			expect(StringUtil.getStringExpressionText(mockExpr)).toBe('');
		});

		it('handles expression with no children property', () => {
			const mockExpr = {
				STRING_LITERAL: () => null
			};
			expect(StringUtil.getStringExpressionText(mockExpr)).toBe('');
		});

		it('ignores non-string literals in concatenation', () => {
			const mockExpr = {
				STRING_LITERAL: () => null,
				children: [
					{
						symbol: { type: 'NOT_STRING' },
						getText: () => '+'
					},
					{
						symbol: { type: LPCParser.STRING_LITERAL },
						getText: () => '"test"'
					}
				]
			};
			expect(StringUtil.getStringExpressionText(mockExpr)).toBe('test');
		});
	});
});
