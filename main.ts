// One Letter: Coffee or Tea — make.fun u-rusdyxbt-one-letter-coffee-or-tea-89877fa0
//
// The entry is exactly one character: "A" for coffee (B would be tea).
// Coffee is the livelier stance — mornings, momentum, "but first, coffee" —
// so the letter A is the answer. The program writes that single letter to
// $MAKEFUN_OUTPUT_DIR/entry.txt (the grader mounts it at /output).
// Node 22 standard library only. No input, no network, no clock, no
// randomness: two runs are byte-identical by construction.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LETTER = "A"; // A = coffee, B = tea

// The gate allows exactly one character, so refuse to write anything else
// rather than silently submitting an invalid entry.
if (!/^[AB]$/.test(LETTER)) {
  throw new Error(`entry must be a single letter A or B, got: ${JSON.stringify(LETTER)}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LETTER, "utf8");
