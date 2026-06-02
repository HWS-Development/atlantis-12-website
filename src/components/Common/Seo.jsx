import { useEffect } from "react";
import { DEFAULT_OG_IMAGE } from "../../seo/metadata";

function ensureTag(selector, create) {
  let el = document.querySelector(selector);
  if (!el) {
    el = create();
    document.head.appendChild(el);
  }
  return el;
}

export default function Seo({ title, description, ogImage }) {
  useEffect(() => {
    if (title) document.title = title;

    if (description) {
      const el = ensureTag('meta[name="description"]', () => {
        const meta = document.createElement("meta");
        meta.setAttribute("name", "description");
        return meta;
      });
      el.setAttribute("content", description);
    }

    if (title) {
      const el = ensureTag('meta[property="og:title"]', () => {
        const meta = document.createElement("meta");
        meta.setAttribute("property", "og:title");
        return meta;
      });
      el.setAttribute("content", title);
    }

    if (description) {
      const el = ensureTag('meta[property="og:description"]', () => {
        const meta = document.createElement("meta");
        meta.setAttribute("property", "og:description");
        return meta;
      });
      el.setAttribute("content", description);
    }

    const img = ogImage || DEFAULT_OG_IMAGE;
    ensureTag('meta[property="og:image"]', () => {
      const meta = document.createElement("meta");
      meta.setAttribute("property", "og:image");
      return meta;
    }).setAttribute("content", img);

    ensureTag('meta[name="twitter:title"]', () => {
      const meta = document.createElement("meta");
      meta.setAttribute("name", "twitter:title");
      return meta;
    }).setAttribute("content", title || document.title);

    if (description) {
      ensureTag('meta[name="twitter:description"]', () => {
        const meta = document.createElement("meta");
        meta.setAttribute("name", "twitter:description");
        return meta;
      }).setAttribute("content", description);
    }

    ensureTag('meta[name="twitter:image"]', () => {
      const meta = document.createElement("meta");
      meta.setAttribute("name", "twitter:image");
      return meta;
    }).setAttribute("content", img);
  }, [title, description, ogImage]);

  return null;
}
