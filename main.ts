import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The pitch: a city pigeon sells investors on its flock as a startup.
// Investor jargon, translated into pigeon life: zero churn, zero rent,
// a workforce paid in crumbs, and a competitive advantage that is,
// quite literally, what pigeons already do to the competition.
const LINE =
  "Investors, our churn is zero, our rent is zero, our staff works for crumbs — fund my flock, the only startup that literally poops on its competition.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
