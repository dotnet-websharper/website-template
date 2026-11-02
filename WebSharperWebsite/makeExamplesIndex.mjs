// The Examples page is also served from /examples/ (as examples/index.html) so that
// its client-side hash router reads as /examples/#/charts. The generated page uses
// relative "./…" URLs, which would resolve under /examples/ in the copy, so rewrite
// them (and the WebSharper runtime script base) to root-absolute.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';

const dir = process.argv[2] ?? 'bin/html';

let html = readFileSync(`${dir}/examples.html`, 'utf8')
    .replace(/="\.\//g, '="/')
    .replace(/ScriptBasePath = '\.\/Scripts\/WebSharper\/'/g, "ScriptBasePath = '/Scripts/WebSharper/'");

mkdirSync(`${dir}/examples`, { recursive: true });
writeFileSync(`${dir}/examples/index.html`, html);
