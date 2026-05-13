// Extract structured room data from all 5 captured modal HTMLs
import { readFileSync, writeFileSync } from "fs";

const SLUGS = ["la-plumeria", "lipomea", "lagave", "la-coquelicot", "lorchis"];
const out = {};

for (const s of SLUGS) {
  const html = readFileSync(`reference/rooms/${s}.modal.html`, "utf8");

  const catMatch = html.match(
    /text-primary">([^<]+)<\/p><p class="font-body text-xs tracking-\[0\.4em\] uppercase text-primary\/50">([^<]+)<\/p><p class="font-body text-xs tracking-\[0\.4em\] uppercase text-primary\/50">([^<]+)/
  );
  const name = html.match(/text-7xl text-foreground mb-8">([^<]+)/)?.[1];
  const intro = html.match(/text-foreground\/65">([^<]+)/)?.[1];

  const equip = [
    ...html.matchAll(/border border-border text-foreground\/60">([^<]+)<\/span>/g),
  ].map((m) => m[1].replace(/&amp;/g, "&").trim());

  const imgs = [
    ...html.matchAll(/src="(https:\/\/media\.base44\.com[^"]+\.jpg)" alt="([^"]+)"/g),
  ];
  const seen = new Set();
  const unique = [];
  for (const m of imgs) {
    if (!seen.has(m[1])) {
      seen.add(m[1]);
      unique.push({ src: m[1], alt: m[2] });
    }
  }
  const artwork = unique[unique.length - 1];
  const gallery = unique.slice(0, -1);

  out[s] = {
    name,
    category: catMatch?.[1].trim(),
    adults: catMatch?.[2].trim(),
    area: catMatch?.[3].trim(),
    intro,
    equip,
    images: gallery,
    artwork,
  };
}

writeFileSync("reference/rooms/_extracted.json", JSON.stringify(out, null, 2));
console.log(JSON.stringify(out, null, 2));
