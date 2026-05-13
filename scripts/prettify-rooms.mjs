// Pretty-print the captured modal HTMLs
import { readFileSync, writeFileSync, readdirSync } from "fs";

const files = readdirSync("reference/rooms").filter((f) => f.endsWith(".modal.html"));
for (const f of files) {
  const html = readFileSync(`reference/rooms/${f}`, "utf8");
  // Naive prettify: insert newlines before tags
  const pretty = html
    .replace(/></g, ">\n<")
    .replace(/(<[^/][^>]*>)([^\n<])/g, "$1\n  $2")
    .replace(/([^>\n])(<\/)/g, "$1\n$2");
  writeFileSync(`reference/rooms/${f.replace(".modal.html", ".pretty.html")}`, pretty);
  console.log("wrote", f.replace(".modal.html", ".pretty.html"));
}
