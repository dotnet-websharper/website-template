# ocaml-counter (static preview)

A static export of the OCaml counter snippet shown in the "Reactive by default"
section of the OCaml page (`CodeFragments/ocaml/counter.ml`), served as its live
preview (`./snippets/ocaml-counter/index.html`, wired from `ServerPages.Ocaml`).

The snippet is built with the `wsocaml` client-only pipeline and frozen into two
files so this repo (which has no OCaml toolchain in its build) can serve it:

| File | What |
| --- | --- |
| `wwwroot/index.html` | a minimal page with `<div id="root"></div>` |
| `wwwroot/app.js` | the client bundle, bundled with esbuild into one classic script |

## Regenerating

From a checkout of `wsocaml` (`websharper-sitelets` installed, frontend built):

```sh
# build from an isolated copy — build-ui-app.sh also compiles sibling .ml
# files, and CodeFragments/ocaml/ contains other snippets.
mkdir -p /tmp/counter-only
cp WebSharperWebsite/CodeFragments/ocaml/counter.ml /tmp/counter-only/
eval "$(opam env)"
bash scripts/build-ui-app.sh /tmp/counter-only/counter.ml /tmp/counter-only/out

node_modules/.bin/esbuild /tmp/counter-only/out/Main.js \
  --bundle --format=iife \
  --outfile=WebSharperWebsite/snippets/ocaml-counter/wwwroot/app.js
```
