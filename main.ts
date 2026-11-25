import { mkdirSync, writeFileSync } from "node:fs";

// One word, one username, one reward.
// The entry is exactly this handle — no extra words, no newline.
const USERNAME = "nexro-destro";
const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, USERNAME, "utf8");
