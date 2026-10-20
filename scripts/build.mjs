import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { stripTypeScriptTypes } from 'node:module';

const source = readFileSync(new URL('../src/counter.ts', import.meta.url), 'utf8');
const output = stripTypeScriptTypes(source, { mode: 'strip' });
const directory = new URL('../dist/', import.meta.url);
mkdirSync(directory, { recursive: true });
writeFileSync(new URL('counter.js', directory), output);
