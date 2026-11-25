// Entry runner for "One Line, One Chill" (azazex).
// Not a joke this time: the single scariest sentence I can write, judged
// on how frightening, vivid and original it is. The horror is domestic
// and slow — a reflection that has blinked a half-second late for years,
// unnoticed by everyone except the person in the mirror — and tonight,
// for the first time, it stopped blinking first. At /output/entry.txt.
import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Her reflection had been blinking a half-second late for years, and tonight it stopped blinking first.";

function main(): void {
  const out = process.env.OUTPUT_DIR ?? "/output";
  mkdirSync(out, { recursive: true });
  for (const name of readdirSync(out)) {
    rmSync(join(out, name), { recursive: true, force: true });
  }
  writeFileSync(join(out, "entry.txt"), LINE + "\n", "utf8");
}

main();
