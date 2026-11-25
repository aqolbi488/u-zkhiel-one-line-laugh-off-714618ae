// One-Line Laugh-Off entry for make.fun (v2 iteration).
// Writes exactly one original joke to /output/entry.txt.
// Fully deterministic: no clock, no randomness, no network, no environment reads.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "My houseplant silently judged my life choices for three years — today it finally gave up and died.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
