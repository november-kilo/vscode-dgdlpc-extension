import fs from 'node:fs';
import path from 'node:path';

const SECTION_HEADER_PATTERN = /^[A-Z][A-Z ]+$/;
const KFUN_PREFIX = 'kfun/';
const SEE_ALSO_SECTION = 'SEE ALSO';
const DEFAULT_ENCODING = 'utf8';
const MARKDOWN_EXTENSION = '.md';

function convertManToMarkdown(content) {
	const sections = parseSections(content);
	return generateMarkdown(sections);
}

function parseSections(content) {
	const sections = {};
	let currentSection = null;
	let currentContent = [];

	const lines = content.split('\n');
	for (const line of lines) {
		if (line.match(SECTION_HEADER_PATTERN)) {
			if (currentSection) {
				sections[currentSection] = currentContent.join('\n');
				currentContent = [];
			}
			currentSection = line.trim();
		} else if (currentSection) {
			currentContent.push(line);
		}
	}

	if (currentSection && currentContent.length) {
		sections[currentSection] = currentContent.join('\n');
	}

	return sections;
}

function generateMarkdown(sections) {
	let markdown = '\n```\n';

	// Add main content sections
	for (const [section, content] of Object.entries(sections)) {
		if (section !== SEE_ALSO_SECTION) {
			markdown += `${section}\n${content}\n`;
		}
	}
	markdown += '```\n\n';

	// Add See Also section if exists
	if (sections[SEE_ALSO_SECTION]) {
		markdown += generateSeeAlsoSection(sections[SEE_ALSO_SECTION]);
	}

	return markdown;
}

function generateSeeAlsoSection(seeAlsoContent) {
	const references = seeAlsoContent
		.split(',')
		.map(ref => ref.trim())
		.map(formatReference);

	return '**See Also:**\n\n' + references.join('\n') + '\n';
}

function formatReference(ref) {
	if (ref.startsWith(KFUN_PREFIX)) {
		const funcName = ref.substring(KFUN_PREFIX.length);
		return ` [\`${funcName}\`](./${funcName}.md)`;
	}
	return ` \`${ref}\` `;
}

function convertLpcDocsToMarkdown(inputDir, outputDir) {
	validateInputs(inputDir, outputDir);
	ensureOutputDirectory(outputDir);

	const files = getInputFiles(inputDir);
	processFiles(files, inputDir, outputDir);
}

function validateInputs(inputDir, outputDir) {
	if (!inputDir || !outputDir) {
		throw new Error('Input and output directories must be specified');
	}
}

function ensureOutputDirectory(outputDir) {
	try {
		fs.mkdirSync(outputDir, { recursive: true });
	} catch (error) {
		throw new Error(`Failed to create output directory: ${error.message}`);
	}
}

function getInputFiles(inputDir) {
	try {
		return fs.readdirSync(inputDir);
	} catch (error) {
		throw new Error(`Failed to read input directory: ${error.message}`);
	}
}

function processFiles(files, inputDir, outputDir) {
	files.forEach(file => {
		const inputPath = path.join(inputDir, file);

		if (!fs.statSync(inputPath).isFile()) {
			return;
		}

		processFile(file, inputPath, outputDir);
	});
}

function processFile(file, inputPath, outputDir) {
	try {
		const content = fs.readFileSync(inputPath, DEFAULT_ENCODING);
		const baseName = path.basename(file, path.extname(file));
		const outputPath = path.join(outputDir, `${baseName}${MARKDOWN_EXTENSION}`);

		const markdown = convertManToMarkdown(content, file);
		fs.writeFileSync(outputPath, markdown);

		console.log(`Processed: ${baseName}`);
	} catch (error) {
		console.error(`Failed to process file ${file}: ${error.message}`);
	}
}

const inputDir = './lpc-doc/kfun';
const outputDir = './kfun-docs';

convertLpcDocsToMarkdown(inputDir, outputDir);
