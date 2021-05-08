import path from 'path';
import { promises as fs } from 'fs';
import { shittify } from './shittify.js';

import fg from 'fast-glob';
import { ArgumentParser } from 'argparse';
 
const parser = new ArgumentParser({
  description: 'Shittifier'
});
 
parser.add_argument('-i', '--input', { help: 'Input file or directory. Wildcards are allowed.', required: true });
parser.add_argument('-o', '--output', { help: 'Output directory. Defaults to dist/.' });
const { input: inputPath, output: outputPath = '💩dist/'} = parser.parse_args();

async function main() {
    const files = await fg([inputPath], { dot: true })
    
    for (let file of files) {
        let inputFile = path.join(process.cwd(), file);
        let outputFile = path.join(process.cwd(), outputPath, file);
        
        fs.readFile(inputFile, 'utf8')
        .then(shittify)
        .then(output => {
            fs.mkdir(path.dirname(outputFile), {recursive: true})
            .then(() => fs.writeFile(outputFile, output));
        });
    }
}

main();


// we'll improve usage later - focus on the modules for now
// node src/index.js input.js

/*
const inputFile = ;
if (!/^.*\.(js|ts|cjs)$/.test(inputFile)) throw 'Unsupported input file format';

*/