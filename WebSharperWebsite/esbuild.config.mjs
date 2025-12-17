import { cpSync, readdirSync, existsSync } from 'fs'
import { build } from 'esbuild'

cpSync('./build/', './bin/html/', { recursive: true, filter: src => src == "./build/" || src.endsWith(".html") });
cpSync('./build/Assets/', './bin/html/Assets/', { recursive: true });

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
            globalName: 'wsbundle'
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
            };

            console.log("Bundling worker:", file);
            build(options);
        }
    });
}