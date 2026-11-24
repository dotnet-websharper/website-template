// Exports the conformance results of WebSharper core to the /conformance pages' data files.
//
//   node tools/conformance/export.mjs [csharp|fsharp] [path/to/core]     (default: csharp, ../core next to this repo)
//
// Reads core's tests/WebSharper.<Lang>.Conformance: the cases (Cases/*.cs or *.fs), the committed baseline.json
// (status per case) and known.json (accepted differences, with reasons), and runs the built .NET side (Net/, Release)
// for each case's expected output. Build Net/ first.
// Writes WebSharperWebsite/Assets/conformance/<csharp|fsharp>.json.

import { execFileSync } from "node:child_process";
import { readFileSync, writeFileSync, mkdirSync, readdirSync, existsSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const langs = {
  csharp: {
    project: "WebSharper.CSharp.Conformance", ext: ".cs", helpers: ["Runner"],
    // C("name", () => body),
    caseRe: /^\s*C\("([^"]+)",\s*\(\)\s*=>\s*(.*)\),\s*$/,
    areas: [
      ["Numbers", "Numbers"], ["Strings", "Strings and formatting"], ["Collections", "Collections"], ["Linq", "LINQ"],
      ["Language", "Language"], ["Patterns", "Pattern matching"], ["Records", "Records and structs"], ["Types", "Types and dates"],
    ],
  },
  fsharp: {
    project: "WebSharper.FSharp.Conformance", ext: ".fs", helpers: ["H", "Runner"],
    // C "name" (fun () -> body)
    caseRe: /^\s*C "([^"]+)" \(fun \(\) -> (.*)\)\s*$/,
    areas: [
      ["Numbers", "Numbers"], ["Strings", "Strings and printf"], ["Collections", "Lists, arrays and sequences"],
      ["Maps", "Maps, sets and dictionaries"], ["Records", "Records, unions and equality"], ["Patterns", "Pattern matching"],
      ["Language", "Language"], ["Dates", "Dates, math and conversions"],
    ],
  },
};

const args = process.argv.slice(2);
const langId = args[0] in langs ? args.shift() : "csharp";
const lang = langs[langId];
const here = dirname(fileURLToPath(import.meta.url));
const repo = resolve(here, "..", "..");
const core = resolve(args[0] ?? join(repo, "..", "core"));
const dir = join(core, "tests", lang.project);

const baseline = JSON.parse(readFileSync(join(dir, "baseline.json"), "utf8"));
const known = JSON.parse(readFileSync(join(dir, "known.json"), "utf8"));

const netDll = join(dir, "Net", "bin", "Release", lang.project + ".Net.dll");
if (!existsSync(netDll)) throw new Error(`${netDll} not found: build Net/ in Release first`);
const net = new Map();
for (const line of execFileSync("dotnet", [netDll], { encoding: "utf8", env: { ...process.env, TZ: "UTC" } }).split(/\r?\n/)) {
  const i = line.indexOf(" = ");
  if (i > 0) net.set(line.slice(0, i), line.slice(i + 3));
}

// One case per line; inside `#if !JS` the first (real) one wins.
const areas = [];
const seen = new Set();
for (const [file, areaName] of lang.areas) {
  const path = join(dir, "Cases", file + lang.ext);
  const cases = [];
  for (const line of readFileSync(path, "utf8").split(/\r?\n/)) {
    const m = lang.caseRe.exec(line);
    if (!m || seen.has(m[1])) continue;
    seen.add(m[1]);
    const name = m[1];
    const b = baseline[name];
    if (!b) throw new Error(`${name} is not in baseline.json`);
    const c = { name, code: m[2], status: b.status, net: net.get(name) ?? "" };
    if (b.status !== "pass") c.js = (b.js ?? "").split(" :: ")[0];
    cases.push(c);
  }
  areas.push({ id: file.toLowerCase(), name: areaName, cases });
}
const caseFiles = readdirSync(join(dir, "Cases")).filter(f => f.endsWith(lang.ext)).map(f => f.slice(0, -lang.ext.length));
const extra = caseFiles.filter(f => !lang.helpers.includes(f) && !lang.areas.some(([a]) => a === f));
if (extra.length) throw new Error(`unmapped case files: ${extra.join(", ")}`);
const missing = Object.keys(baseline).filter(n => !seen.has(n));
if (missing.length) throw new Error(`cases in baseline.json not found in Cases/: ${missing.join(", ")}`);

// "<difference>. <what to write instead>." — the last sentence is the alternative.
const knownList = Object.entries(known).map(([name, reason]) => {
  const i = reason.lastIndexOf(". ", reason.length - 2);
  const area = areas.find(a => a.cases.some(c => c.name === name));
  const c = area.cases.find(c => c.name === name);
  return {
    name, area: area.name, code: c.code, net: c.net, js: c.js ?? "",
    difference: i < 0 ? reason : reason.slice(0, i + 1),
    alternative: i < 0 ? "" : reason.slice(i + 2),
  };
});

const all = areas.flatMap(a => a.cases);
const count = s => all.filter(c => c.status === s).length;
const git = (...args) => execFileSync("git", ["-C", core, ...args], { encoding: "utf8" }).trim();
const out = {
  lang: langId,
  source: "dotnet-websharper/core tests/" + lang.project,
  commit: git("rev-parse", "--short", "HEAD"),
  commitDate: git("log", "-1", "--format=%cs"),
  generated: new Date().toISOString().slice(0, 10),
  total: all.length, pass: count("pass"), known: count("known"),
  mismatch: count("mismatch"), unsupported: count("unsupported"),
  knownDifferences: knownList,
  areas: areas.map(a => ({ ...a, total: a.cases.length, pass: a.cases.filter(c => c.status === "pass").length })),
};
const outDir = join(repo, "WebSharperWebsite", "Assets", "conformance");
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, langId + ".json"), JSON.stringify(out, null, 2) + "\n");
console.log(`${langId}: ${out.total} cases: ${out.pass} pass, ${out.known} known, ${out.mismatch} mismatch, ${out.unsupported} unsupported (core ${out.commit})`);
