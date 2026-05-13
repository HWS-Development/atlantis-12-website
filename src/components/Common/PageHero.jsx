// src/components/common/PageHero.jsx
import { useTranslation } from "react-i18next";

export default function PageHero({
  image,                 // string: background image URL
  title,                 // string or node
  subtitle,              // string or node
  align = "center",      // 'left' | 'center'
  height = "lg",         // 'sm' | 'md' | 'lg'
  overlay = "dark",      // 'dark' | 'light' | 'none'
  overlayOpacity = 0.35, // number 0..1
  children,              // anything you want to render inside (buttons, forms…)
}) {
  const hMap = {
    sm: "h-[32vh] md:h-[36vh]",
    md: "h-[42vh] md:h-[50vh]",
    lg: "h-[56vh] md:h-[66vh]",
  };
  const textAlign =
    align === "left"
      ? "items-start text-left"
      : "items-center text-center";

  const overlayStyle =
    overlay === "none"
      ? {}
      : overlay === "light"
      ? { backgroundColor: `rgba(255,255,255,${overlayOpacity})` }
      : { backgroundColor: `rgba(0,0,0,${overlayOpacity})` };

  return (
    <section className={`relative w-full ${hMap[height]} overflow-hidden`}>
      {/* Background */}
      <img
        src={image}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
        fetchpriority="high"
      />
      {/* Overlay */}
      {overlay !== "none" && (
        <div className="absolute inset-0" style={overlayStyle} />
      )}

      {/* Content */}
      <div className={`relative z-10 h-full`}>
        <div className="container-std h-full">
          <div className={`h-full flex ${textAlign} justify-center md:justify-center items-center pt-10`}>
            <div className={`max-w-3xl ${align === "left" ? "" : "mx-auto"}`}>

              {/* Title */}
              {title && (
                <h1 className="font-serif text-white text-3xl md:text-5xl leading-tight drop-shadow-sm">
                  {title}
                </h1>
              )}

              {/* Subtitle */}
              {subtitle && (
                <p className="mt-2 md:mt-3 text-white/90 text-sm md:text-base">
                  {subtitle}
                </p>
              )}

              {/* Custom slot (buttons / forms / etc.) */}
              {children && <div className="mt-4 md:mt-6">{children}</div>}

              <p className="mt-2 md:mt-3 text-white/90 text-sm md:text-base">
                  {subtitle}
                </p>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle bottom vignette for legibility */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/15 to-transparent" />
    </section>
  );
}
