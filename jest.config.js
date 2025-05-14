module.exports = {
	injectGlobals: true,
	transform: {
		'^.+\\.js$': 'babel-jest'
	},
	"transformIgnorePatterns": [
		"/node_modules/(?!antlr4/.*)"
	],
	testEnvironment: 'node',
	moduleDirectories: ['node_modules', '__mocks__'],
	testPathIgnorePatterns: [
		'/node_modules/',
		'/dist/',
		'/dist/__mocks__/'
	],
	watchPathIgnorePatterns: ['/dist/'],
	modulePathIgnorePatterns: ['/dist/'],
	collectCoverage: true,
	collectCoverageFrom: [
		'./src/**/*.{js,jsx}',
		'!./src/lpc/parser/**',
		'!./src/code/diagnostics/match-filter-strategy.js',
		'!./src/code/diagnostics/string-distance-strategy.js'
	],
	coverageDirectory: 'coverage',
	coverageReporters: ['text', 'html']
};

