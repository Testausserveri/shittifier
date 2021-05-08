import path from 'path';
import { promises as fs } from 'fs';
import { shittify } from './shittify.js';

// we'll improve usage later - focus on the modules for now
// node src/index.js input.js

const args = process.argv.splice(2);
if (args.length != 1) throw 'Not enough arguments'; 

const inputFile = path.join(process.cwd(), args[0]);
if (!/^.*\.(js|ts|cjs)$/.test(inputFile)) throw 'Unsupported input file format';

const outputFile = (() => {
    let split = inputFile.split('.');
    split[split.length - 1] = 'shit.' + split[split.length - 1];
    return split.join('.');
})();

fs.readFile(inputFile, 'utf8')
.then(shittify)
.then(output => fs.writeFile(outputFile, output));