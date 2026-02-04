#!/usr/bin/env node
/**
 * Remove vertical-align:middle da regra do preflight que usa display:block
 * (img, svg, video, etc.). Com display:block, vertical-align é ignorado e o
 * linter CSS reporta "propertyIgnoredDueToDisplay".
 */
import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const stylePath = join(__dirname, '../dist/componentes/currency-converter/style.css');

let css = readFileSync(stylePath, 'utf8');
css = css.replace(/vertical-align:middle;display:block/g, 'display:block');
writeFileSync(stylePath, css);
console.log('fix-css-lint: removido vertical-align:middle da regra display:block');
