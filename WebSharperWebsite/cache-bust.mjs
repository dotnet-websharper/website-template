// Cache-bust the shared WebSharper bundles.
//
// Cloudflare caches `Scripts/WebSharper/*.css` and `*.js` for hours (the
// `all.css`/`all.js` URLs carry no version), so after a deploy the edge can keep
// serving the previous stylesheet/script while the HTML is already new — which
// makes a freshly added Tailwind class silently missing. Appending a
// content-hash query (`all.css?v=<hash>`) gives every deploy a fresh URL, so a
// stale edge copy can never be used.
//
// Runs after `ExamplesDirectoryIndex` (see WebSharperWebsite.fsproj), i.e. after
// every bundle and every HTML file has been written to `bin/html`.
import { readFileSync, writeFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { createHash } from 'node:crypto';
import path from 'node:path';

const root = process.argv[2] ?? 'bin/html';
const assetDir = path.join(root, 'Scripts', 'WebSharper');

if (!existsSync(assetDir)) {
    console.log('cache-bust: no asset directory, skipping');
    process.exit(0);
}

// Hash every top-level bundle: all.css/all.js plus the per-page bundles
// (home.css, bindings.js, …).
const hashes = new Map();
for (const name of readdirSync(assetDir)) {
    const file = path.join(assetDir, name);
    if (!statSync(file).isFile() || !/\.(css|js)$/.test(name)) continue;
    const hash = createHash('sha256').update(readFileSync(file)).digest('hex').slice(0, 10);
    hashes.set(name, hash);
}

let changed = 0;

function rewrite(file) {
    let html = readFileSync(file, 'utf8');
    const before = html;
    for (const [name, hash] of hashes) {
        const escaped = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        // Match `…/Scripts/WebSharper/<name>` with an optional existing query,
        // but not a longer name such as `all.css.map`.
        const re = new RegExp(`(Scripts/WebSharper/${escaped})(\\?[^"'\\s>]*)?(?![\\w.-])`, 'g');
        html = html.replace(re, `$1?v=${hash}`);
    }
    if (html !== before) {
        writeFileSync(file, html);
        changed++;
    }
}

function walk(dir) {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
        const p = path.join(dir, entry.name);
        if (entry.isDirectory()) walk(p);
        else if (entry.name.endsWith('.html')) rewrite(p);
    }
}

walk(root);
console.log(`cache-bust: versioned ${hashes.size} bundles across ${changed} HTML files`);
