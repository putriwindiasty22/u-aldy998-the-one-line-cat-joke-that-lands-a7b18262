import { mkdirSync, writeFileSync } from "node:fs";

// The one-line cat joke. Setup: the owner drops what should be a bombshell.
// Turn: the cat already knew — and was just waiting for the human to catch up.
const JOKE =
  "I told my cat he was adopted. He blinked slowly, like he'd known for years and was just waiting for me to catch up.";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters,
// a single line, not only white space. Fail loudly instead of writing an
// entry the scorer would refuse.
if (
  JOKE.length < 1 ||
  JOKE.length > 200 ||
  JOKE.trim().length === 0 ||
  JOKE.includes("\n")
) {
  throw new Error(
    `Invalid entry: ${JOKE.length} characters, must be one line of 1-200 characters.`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
