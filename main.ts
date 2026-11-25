// One-Line Laugh-Off entry for make.fun.
// Writes exactly one original joke to /output/entry.txt.
// Fully deterministic: no clock, no randomness, no network, no environment reads.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "My smoke alarm only goes off when I cook — I've decided it's my biggest fan.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
