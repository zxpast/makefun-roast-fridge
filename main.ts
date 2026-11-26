// One-line roast for the smart-fridge contest — the single funniest line wins.
// Entry: u-kiencx-roast-the-smart-fridge-one-line-best-laugh-b354d6c9
// What this does: builds the roast line and saves it as UTF-8 text at /output/entry.txt.
// Runs on Node 22 with the standard library only; same input, same output every run —
// no network, no clock, no randomness, no extra file access.
import { mkdirSync, writeFileSync } from "node:fs";

function buildRoastLine(): string {
  return "My robot vacuum mapped the dog, filed him under 'furniture,' and now cleans around him like he's a chair I can't return.";
}

function assertLineLength(line: string): number {
  const length = Array.from(line).length;
  if (length < 1 || length > 160) {
    throw new Error(`roast line must be 1-160 characters, got ${length}`);
  }
  return length;
}

function main(): void {
  const line = buildRoastLine();
  assertLineLength(line);
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", line, "utf8");
}

main();
