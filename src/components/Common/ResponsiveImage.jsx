import imageManifest from "../../generated/responsive-images";

export default function ResponsiveImage({ src, sizes = "100vw", ...props }) {
  const image = imageManifest[src];

  if (!image) return <img src={src} loading="lazy" {...props} />;

  const srcSet = [
    ...image.sources.map((source) => `${source.src} ${source.width}w`),
    `${src} ${image.width}w`,
  ].join(", ");
  const fallbackSrc = image.sources[0]?.src || src;

  return (
    <img
      src={fallbackSrc}
      srcSet={srcSet}
      sizes={sizes}
      loading="lazy"
      width={props.width || image.width}
      height={props.height || image.height}
      {...props}
    />
  );
}
