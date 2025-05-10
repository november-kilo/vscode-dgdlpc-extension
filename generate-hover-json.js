import fs from 'node:fs';
import path from 'node:path';

const SECTION_HEADER_PATTERN = /^[A-Z][A-Z ]+$/;

function addSection(sections, sectionName, content) {
	if (sectionName && content.length) {
		sections[sectionName] = content.join('\n').trim();
	}
}

function parseManPage(content) {
	if (!content) {
		return null;
	}

	const sections = {};
	let currentSection = null;
	let currentContent = [];

	const lines = content.split('\n');

	for (const line of lines) {
		if (line.match(SECTION_HEADER_PATTERN)) {
			addSection(sections, currentSection, currentContent);
			currentSection = line.trim();
			currentContent = [];
		} else if (currentSection) {
			currentContent.push(line);
		}
	}

	addSection(sections, currentSection, currentContent);
	return convertToKfunJSON(sections);
}

function parseParameters(synopsis) {
	const paramMatch = synopsis.match(/\((.*?)\)/);
	if (!paramMatch) {
		return [];
	}

	const paramString = paramMatch[1];
	if (!paramString) {
		return [];
	}

	return paramString.split(',').map(param => {
		const parts = param.trim().split(/\s+/);
		const isOptional = param.includes('...');
		const label = parts[parts.length - 1].replace('...', '');
		const type = parts.slice(0, -1).join(' ');

		return {
			label: label,
			documentation: `${type} parameter`,
			optional: isOptional
		};
	});
}

function convertToKfunJSON(sections) {
	if (!sections['NAME']) {
		return null;
	}

	const [name, description] = sections['NAME'].split('-').map(s => s.trim());

	let returnType = 'void';
	let params = [];
	let synopsis = '';

	if (sections['SYNOPSIS']) {
		synopsis = sections['SYNOPSIS'].trim();
		const synopsisMatch = synopsis.match(/^(\w+)\s+\w+\s*\(/);
		if (synopsisMatch) {
			returnType = synopsisMatch[1];
		}
		params = parseParameters(synopsis);
	}

	const seeAlso = sections['SEE ALSO'] ?
		sections['SEE ALSO']
			.split(',')
			.map(ref => ref.trim())
			.map(ref => ref.startsWith('kfun/') ? ref.substring(5) : ref)
		: [];

	return {
		name,
		description,
		returnType,
		synopsis,
		params,
		documentation: sections['DESCRIPTION'] || '',
		seeAlso
	};
}

function processManPages(inputDir, outputFile) {
	const files = fs.readdirSync(inputDir);
	const kfuns = {};

	for (const file of files) {
		const filePath = path.join(inputDir, file);
		if (fs.statSync(filePath).isFile()) {
			const content = fs.readFileSync(filePath, 'utf8');
			const kfunData = parseManPage(content);

			if (kfunData) {
				kfuns[kfunData.name] = kfunData;
				console.log(`Processed: ${kfunData.name}`);
			}
		}
	}

	const outputData = { kfuns };
	fs.writeFileSync(outputFile, JSON.stringify(outputData, null, 2));
	console.log(`Output written to ${outputFile}`);
}

const inputDir = './lpc-doc/kfun';
const outputFile = './src/kfuns.json';
fs.mkdirSync(path.dirname(outputFile), { recursive: true });
processManPages(inputDir, outputFile);
