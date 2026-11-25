import { mkdirSync, writeFileSync } from "node:fs";

// The GPS's own excuse, in its own voice: smug, defensive, and blaming
// the map for a cul-de-sac that was definitely, according to the map,
// a shortcut. One line, no setup, no dialogue tag.
const excuse =
  "That cul-de-sac was a shortcut on the map — I don't draw the maps, I just ruin weddings with them.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", excuse, "utf8");
