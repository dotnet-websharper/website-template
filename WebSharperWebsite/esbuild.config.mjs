import { cpSync, readdirSync, existsSync, statSync, readFileSync, writeFileSync } from 'fs'
import path from 'path'
import { build } from 'esbuild'

// WebSharper 10.1 emits local `JS.ImportFile` resources as
// `.../Content/WebSharper/<Assembly>/<file>` imports, while this "html"
// project's output places them under `build/Scripts/WebSharper/<Assembly>/`.
// Resolve the former from the latter (and relative paths such as Tailwind's
// `../../tailwind.css` from `build/`).
const websharperContentImports = {
    name: 'websharper-content-imports',
    setup(build) {
        build.onResolve({ filter: /\/Content\/WebSharper\// }, (args) => {
            const suffix = args.path.split('/Content/WebSharper/')[1]
            if (!suffix) return null
            const candidates = [
                path.resolve('./build/Scripts/WebSharper', suffix),
                path.resolve('./build', suffix),
            ]
            const found = candidates.find(existsSync)
            return found ? { path: found } : null
        })
    },
}

cpSync('./build/', './bin/html/', {
    recursive: true,
    // Copy the generated HTML pages, including nested routes such as
    // `blogs/article.html`. `cpSync` skips the *contents* of a filtered-out
    // directory, so the filter must let directories through; snippets are
    // copied from their `wwwroot` by the loop below.
    filter: (src) => {
        const rel = path.relative('./build', src)
        if (rel.split(path.sep)[0] === 'snippets') return false
        return statSync(src).isDirectory() || src.endsWith('.html')
    },
})
cpSync('./build/Assets/', './bin/html/Assets/', { recursive: true });

// Article images live in the `blogs` submodule's `assets/` folder and are
// referenced as root-absolute `/assets/...` from the articles.
const blogAssets = path.resolve('../blogs/assets');
if (existsSync(blogAssets)) {
    cpSync(blogAssets, './bin/html/assets/', { recursive: true });
}

const snippetsDir = './build/snippets/';

if (existsSync(snippetsDir)) {
    const snippets = readdirSync(snippetsDir);

    // Copies wwwroot from each snippet project to snippets_out
    snippets.forEach(folder => {
        const source = snippetsDir + folder + '/wwwroot/';
        if (existsSync(source)) {
            cpSync(source, './bin/html/snippets/' + folder + '/', { recursive: true });
        }
    });
}

// A page served from a subdirectory (e.g. blogs/article.html) resolves relative
// URLs against its own directory, so the shared chrome's `./bindings`, logo, … 
// would point under /blogs/. Rebase `./` to `/` in nested pages. Snippets are
// self-contained and keep their relative URLs.
function rebaseNestedPageLinks(dir, depth) {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
        if (depth === 0 && entry.name === 'snippets') continue;
        const p = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            rebaseNestedPageLinks(p, depth + 1);
        } else if (depth > 0 && entry.name.endsWith('.html')) {
            const html = readFileSync(p, 'utf8');
            const rebased = html.replace(/="\.\//g, '="/');
            if (rebased !== html) writeFileSync(p, rebased);
        }
    }
}
rebaseNestedPageLinks('./bin/html', 0);

const prebundles = readdirSync('./build/Scripts/WebSharper/WebSharperWebsite/');

prebundles.forEach(file => {
    if (file.endsWith('.js')) {
        var options =
        {
            entryPoints: ['./build/Scripts/WebSharper/WebSharperWebsite/' + file],
            bundle: true,
            minify: true,
            format: 'iife',
            outfile: 'bin/html/Scripts/WebSharper/' + file,
            globalName: 'wsbundle',
            plugins: [websharperContentImports]
        };

        console.log("Bundling:", file);
        build(options);
    }
});

if (existsSync('./build/Scripts/WebSharper/workers/')) {
    const workers = readdirSync('./build/Scripts/WebSharper/workers/');

    workers.forEach(file => {
        if (file.endsWith('.js')) {
            var options =
            {
                entryPoints: ['./build/Scripts/WebSharper/workers/' + file],
                bundle: true,
                minify: true,
                format: 'iife',
                outfile: 'wwwroot/Scripts/WebSharper/workers/' + file,
                plugins: [websharperContentImports]
            };

            console.log("Bundling worker:", file);
            build(options);
        }
    });
}