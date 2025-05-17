import VariablesHoverHandler from './hover-handler-variables';
import DocBuilder from '../doc-builder';
import visitVariables from '../visitors/variable-visitor/visitor';
import VariableFunctionFilter from '../visitors/variable-visitor/function-filter';

jest.mock('../doc-builder');
jest.mock('../visitors/variable-visitor/visitor');
jest.mock('../visitors/variable-visitor/function-filter');

describe('VariablesHoverHandler', () => {
	let handler;
	let mockDocument;
	let mockRange;
	let mockPosition;
	let mockMarkdown;

	beforeEach(() => {
		handler = new VariablesHoverHandler();
		mockRange = {
			start: { line: 0, character: 0 },
			end: { line: 0, character: 5 }
		};
		mockPosition = { line: 0, character: 2 };
		mockDocument = {
			getWordRangeAtPosition: jest.fn().mockReturnValue(mockRange),
			getText: jest.fn().mockReturnValue('myVar')
		};
		mockMarkdown = 'mock markdown content';
		DocBuilder.variableDocumentation.mockReturnValue(mockMarkdown);
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	describe('createHover', () => {
		it('should return null if no range found at position', () => {
			mockDocument.getWordRangeAtPosition.mockReturnValueOnce(null);

			const result = handler.createHover(mockDocument, mockPosition);

			expect(result).toBeNull();
		});

		it('should return hover for global variable', () => {
			const mockVariables = {
				globalVariables: new Map([
					['myVar', { type: 'string', position: { start: { line: 0, character: 0 } } }]
				]),
				functionVariables: new Map()
			};
			visitVariables.mockReturnValue(mockVariables);

			const result = handler.createHover(mockDocument, mockPosition);

			expect(DocBuilder.variableDocumentation).toHaveBeenCalledWith({
				name: 'myVar',
				varInfo: expect.any(Object),
				scope: 'Global Variable'
			});
			expect(result).toEqual(expect.objectContaining({
				contents: [mockMarkdown],
				range: mockRange
			}));
		});

		it('should return hover for function-local variable', () => {
			const mockVariables = {
				globalVariables: new Map(),
				functionVariables: new Map([
					['testFunc', new Map([
						['myVar', { type: 'number', position: { start: { line: 1, character: 4 } } }]
					])]
				])
			};
			visitVariables.mockReturnValue(mockVariables);
			VariableFunctionFilter.findFunctionContainingVariable.mockReturnValue([
				'testFunc',
				mockVariables.functionVariables.get('testFunc')
			]);

			const result = handler.createHover(mockDocument, mockPosition);

			expect(DocBuilder.variableDocumentation).toHaveBeenCalledWith({
				name: 'myVar',
				varInfo: expect.any(Object),
				scope: 'Local Variable in `testFunc`'
			});
			expect(result).toEqual(expect.objectContaining({
				contents: [mockMarkdown],
				range: mockRange
			}));
		});

		it('should return null if variable not found', () => {
			const mockVariables = {
				globalVariables: new Map(),
				functionVariables: new Map()
			};
			visitVariables.mockReturnValue(mockVariables);
			VariableFunctionFilter.findFunctionContainingVariable.mockReturnValue(undefined);

			const result = handler.createHover(mockDocument, mockPosition);

			expect(result).toBeNull();
		});
	});

	describe('buildVariableHover', () => {
		it('should create hover with correct markdown and range', () => {
			const varInfo = { type: 'string', position: { start: { line: 0, character: 0 } } };

			const result = handler.buildVariableHover(varInfo, 'testVar', 'Test Scope', mockRange);

			expect(DocBuilder.variableDocumentation).toHaveBeenCalledWith({
				name: 'testVar',
				varInfo,
				scope: 'Test Scope'
			});
			expect(result).toEqual(expect.objectContaining({
				contents: [mockMarkdown],
				range: mockRange
			}));
		});
	});
});
