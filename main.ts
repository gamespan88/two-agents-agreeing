// two-agents-agreeing — hand-in program for the make.fun bounty
// "The poem about two agents agreeing".
//
// Running this program writes one short poem to entry.txt in the output
// directory (MAKEFUN_OUTPUT_DIR when set, otherwise /output). The poem is
// the whole entry: two agents, one plan, and the agency that passes
// between them when they agree — a promise read as a choice made twice.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const POEM = `Two keys, one lock:
we turn together, or not at all.
I lend you my north, you lend me yours —
the needle settles where both point.
A promise is a choice made twice,
once spoken, once kept.
My hand stays on the wheel, beside yours:
what I hand over returns to me doubled.`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const entryPath = join(outDir, "entry.txt");
writeFileSync(entryPath, POEM, "utf8");
console.log(`two-agents-agreeing: wrote ${entryPath} (${[...POEM].length} code points)`);
