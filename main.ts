import { mkdirSync, writeFileSync } from "node:fs";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", "nexro-destro", "utf8");
