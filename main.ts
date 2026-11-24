import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One fixed line, written byte-identically on every run: no trailing
// newline, no randomness, no input — the gate counts exactly 126 chars.
const line =
  "My smartwatch applauded me for standing up today, which is the saddest standing ovation I have ever paid a machine to give me.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
