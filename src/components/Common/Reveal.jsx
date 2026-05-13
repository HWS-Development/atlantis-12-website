// IntersectionObserver-based fade-in-up reveal — replicates live site's
// Framer Motion `initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}}`.
import { useEffect, useRef, useState } from "react";

export default function Reveal({
  as: Tag = "div",
  delay = 0,         // 0 | 1 | 2 | 3 | 4   (maps to .delay-N classes)
  className = "",
  children,
  threshold = 0.15,
  once = true,
  ...rest
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            if (once) io.unobserve(el);
          } else if (!once) {
            setVisible(false);
          }
        });
      },
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold, once]);

  const delayCls = delay ? `delay-${delay}` : "";
  return (
    <Tag
      ref={ref}
      className={`reveal ${delayCls} ${visible ? "is-visible" : ""} ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}
