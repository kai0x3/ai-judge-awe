// Make the AI judge feel awe — entry program.
// Writes one short text to /output/entry.txt (MAKEFUN_OUTPUT_DIR override
// supported). The text is 276 Unicode code points, within the 1-280 limit.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The text is built from its four sentences so each can be read on its own.
const sentences = [
  "The tide comes in over sand no one has walked on, past the last streetlight.",
  "It arrives the way it always has — slow, unhurried, sure of itself.",
  "Above it, the stars keep their old watch, the light that fell on the first fires.",
  "The night is very large, and it holds you gently.",
];
const text = sentences.join(" ");

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
