// House rule: no em or en dashes anywhere in source. Fails the build if found.
const fs = require("fs");
const path = require("path");
const ROOTS = ["app", "components", "lib", "public"];
const SKIP = new Set([".png", ".jpg", ".jpeg", ".webp", ".ico", ".woff", ".woff2"]);
const offenders = [];
function walk(dir) {
  if (!fs.existsSync(dir)) return;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p);
    else if (!SKIP.has(path.extname(p))) {
      const txt = fs.readFileSync(p, "utf8");
      if (/[—–]/.test(txt)) offenders.push(p);
    }
  }
}
ROOTS.forEach(walk);
if (offenders.length) {
  console.error("BUILD BLOCKED: em or en dash found in:\n  " + offenders.join("\n  "));
  process.exit(1);
}
console.log("check-dashes: clean");
