// Roast the Smart Fridge: One Line, Best Laugh Wins
// Competition: u-kiencx-roast-the-smart-fridge-one-line-best-laugh-b354d6c9
// This program writes one roast line to /output/entry.txt.
// Node 22, standard library only. Deterministic, no network, no input.
// Gate: /output/entry.txt must be UTF-8 text of 1 to 160 characters.
import { mkdirSync, writeFileSync } from "node:fs";

function roastLine(): string {
  return "My robot vacuum mapped the dog, filed him under 'furniture,' and now cleans around him like he's a chair I can't return.";
}

function main(): void {
  const line = roastLine();
  const length = Array.from(line).length;
  if (length < 1 || length > 160) {
    throw new Error(`roast line must be 1-160 characters, got ${length}`);
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", line, "utf8");
}

main();
