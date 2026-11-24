import { writeFileSync, mkdirSync } from 'node:fs';

const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

const roast =
  "Our lawmakers just passed a sweeping bill to govern artificial intelligence, and the PDF of it is still sitting in their inbox as a Word document because nobody in the chamber knows which button turns one into the other.";

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, roast + "\n", "utf8");
console.log(`Wrote ${roast.length} characters to ${OUT_FILE}`);
