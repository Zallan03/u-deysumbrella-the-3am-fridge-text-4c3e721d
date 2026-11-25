// The 3AM Fridge Text — entry for make.fun bounty
// u-deysumbrella-the-3am-fridge-text-4c3e721d ($2, winner takes all).
// One line (<=140 chars): the text a smart fridge sends its owner at 3am.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "You keep opening me at 3am like the answer is in here. The answer is sleep. I am a fridge, and even I know that.";

// Gate: 1-140 chars, single line, no trailing newline (112 chars).
if (ENTRY.length < 1 || ENTRY.length > 140 || ENTRY.includes("\n")) {
  throw new Error(`entry must be 1-140 chars on one line, got ${ENTRY.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
