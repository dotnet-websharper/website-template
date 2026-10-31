# todomvc-lm (static preview)

A static export of the **`todomvc-lm`** sample from the `wsocaml` repository
(`examples/todomvc-lm`), served as the live preview in the OCaml page's code
window (`./snippets/todomvc-lm/index.html`, wired from `ServerPages.Ocaml`).

The `wsocaml` sample builds a native OCaml server that renders the TodoMVC
template server-side and binds it with the client bundle. To embed it here as a
static site (this repo has no OCaml toolchain in its build), the app is frozen
into three files:

| File | What |
| --- | --- |
| `wwwroot/index.html` | the server-rendered skeleton, with `/Main.js` + `/css/app.css` rewritten to relative paths |
| `wwwroot/app.js` | the ES-module client bundle, bundled with esbuild into one classic script |
| `wwwroot/css/app.css` | the sample's stylesheet |

## Regenerating

From a checkout of `wsocaml` with `examples/todomvc-lm` built (`bash build.sh`):

```sh
SRC=~/oprojects/wsocaml/examples/todomvc-lm
ESB=node_modules/.bin/esbuild
"$ESB" "$SRC/out/client/Main.js" --bundle --format=iife --outfile=WebSharperWebsite/snippets/todomvc-lm/wwwroot/app.js
cp "$SRC/out/client/css/app.css" WebSharperWebsite/snippets/todomvc-lm/wwwroot/css/app.css
# then refresh index.html from `curl http://127.0.0.1:8123/` with relative asset paths
```
