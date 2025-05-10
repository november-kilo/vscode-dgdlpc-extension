import { exec } from 'child_process';
import { join, dirname } from 'path';
import { mkdirSync } from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const parserDir = 'src/lpc/parser';
const outputDir = join(__dirname, parserDir);

console.log('outputDir', outputDir);

try {
    mkdirSync(outputDir, { recursive: true });
} catch (err) {
    if (err.code !== 'EEXIST') {
        console.error('Error creating directory:', err);
        process.exit(1);
    }
}

exec(`antlr -Dlanguage=JavaScript -visitor LPC.g4 -o ${parserDir}`, {
    cwd: __dirname
}, (error, stdout, stderr) => {
    if (error) {
        console.error('Error:', error);
        process.exit(1);
    }
    if (stderr) {
        console.error('Stderr:', stderr);
    }
    console.log('Parser generated successfully');
});
