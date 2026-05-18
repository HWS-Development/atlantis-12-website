import { useEffect } from "react";

const OG_IMAGE = "/images/about/patio.jpg"; // default og:image (hero-like property shot)

/**
 * Lightweight SEO head manager (no dependency needed).
 * Sets document.title, meta description, and og:image.
 */
export default function Seo({ title, description, ogImage }) {
  useEffect(() => {
    if (title) document.title = title;

    // Meta description
    if (description) {
      let el = document.querySelector('meta[name="description"]');
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("name", "description");
        document.head.appendChild(el);
      }
      el.setAttribute("content", description);
    }

    // og:title
    if (title) {
      let el = document.querySelector('meta[property="og:title"]');
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("property", "og:title");
        document.head.appendChild(el);
      }
      el.setAttribute("content", title);
    }

    // og:description
    if (description) {
      let el = document.querySelector('meta[property="og:description"]');
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("property", "og:description");
        document.head.appendChild(el);
      }
      el.setAttribute("content", description);
    }

    // og:image
    const img = ogImage || OG_IMAGE;
    let el = document.querySelector('meta[property="og:image"]');
    if (!el) {
      el = document.createElement("meta");
      el.setAttribute("property", "og:image");
      document.head.appendChild(el);
    }
    el.setAttribute("content", img);
  }, [title, description, ogImage]);

  return null;
}
