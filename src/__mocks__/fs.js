const fs = jest.createMockFromModule('fs');

let mockFiles = Object.create(null);

function __setMockFiles(newMockFiles) {
	mockFiles = Object.create(null);
	for (const path in newMockFiles) {
		mockFiles[path] = newMockFiles[path];
	}
}

function existsSync(filePath) {
	return filePath in mockFiles;
}

function readFileSync(filePath, encoding) {
	if (!mockFiles[filePath]) {
		throw new Error(`ENOENT: no such file or directory, open '${filePath}'`);
	}
	return mockFiles[filePath];
}

fs.__setMockFiles = __setMockFiles;
fs.existsSync = existsSync;
fs.readFileSync = readFileSync;

module.exports = fs;
