const mockCompletions = [
	{
		label: 'test_function',
		kind: 1, // CompletionItemKind.Function
		documentation: 'Test documentation',
		detail: 'void test_function',
		insertText: 'test_function(${1:arg})'
	}
];

const KFunDocBuilder = jest.fn().mockImplementation(() => ({
	getCompletions: jest.fn().mockReturnValue(mockCompletions),

}));

export default KFunDocBuilder;
