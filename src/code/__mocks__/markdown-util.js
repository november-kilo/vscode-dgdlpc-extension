const markdownUtil = {
	bold: jest.fn((text) => `**${text}:**`),
	showDocument: jest.fn((funcName, text = funcName) =>
		text ? `[${text}](command:lpc.showKfunDoc?${encodeURIComponent(JSON.stringify([funcName]))})`
			: `[${funcName}](command:lpc.showKfunDoc?${encodeURIComponent(JSON.stringify([funcName]))})`)
};

module.exports = markdownUtil;
