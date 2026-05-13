import fs from "node:fs";
import path from "node:path";
const dirs = ["LaPlume\u0301ria", "LIpome\u0301a", "LAgave", "LaCoquelicot", "LOrchis"];
const result = {};
for (const d of dirs) {
  const base = path.join("public", "images", d);
  const files = [];
  const walk = (p) => {
    for (const e of fs.readdirSync(p, { withFileTypes: true })) {
      const full = path.join(p, e.name);
      if (e.isDirectory()) walk(full);
      else if (/\.(jpe?g|png|webp|avif)$/i.test(e.name)) files.push(full.replace(/\\/g, "/").replace(/^public/, ""));
    }
  };
  walk(base);
  result[d] = files;
  console.log("\n==", d, "(", files.length, ")");
  files.slice(0, 6).forEach(f => console.log(" ", f));
}
