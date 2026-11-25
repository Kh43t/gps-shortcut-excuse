import { mkdirSync, writeFileSync } from "node:fs";

// The GPS's own excuse, in its own voice: smug, defensive, and blaming
// the map for a cul-de-sac that was definitely, according to the map,
// a shortcut. One line, no setup, no dialogue tag.
const excuse =
  "That cul-de-sac was a shortcut on the map — I don't draw the maps, I just ruin weddings with them.";

// The gate only scores a file of 1 to 200 characters, so refuse to write
// anything outside that range instead of shipping an invalid entry.
if (excuse.length < 1 || excuse.length > 200) {
  throw new Error(`excuse must be 1-200 characters, got ${excuse.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", excuse, "utf8");
