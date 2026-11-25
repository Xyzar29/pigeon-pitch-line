import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The pitch: a city pigeon sells investors on its flock as a startup.
// Investor jargon, translated into pigeon life: zero churn, zero rent,
// a workforce paid in crumbs, and a competitive advantage that is,
// quite literally, what pigeons already do to the competition.
const LINE =
  "Investors, our churn is zero, our rent is zero, our staff works for crumbs — fund my flock, the only startup that literally poops on its competition.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR?.trim()
  ? process.env.MAKEFUN_OUTPUT_DIR
  : "/output";

// Self-check the competition's gate before writing anything: the entry
// must be UTF-8 text of 1 to 200 characters, not only white space, and
// a single line with no trailing whitespace. Fail loudly instead of
// shipping an invalid entry.
if (
  LINE.length < 1 ||
  LINE.length > 200 ||
  LINE.trim().length === 0 ||
  LINE !== LINE.trim() ||
  /[\r\n]/.test(LINE)
) {
  throw new Error(
    `entry line fails the 1-200 char single-line gate (length ${LINE.length})`,
  );
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
