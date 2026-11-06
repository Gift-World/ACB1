const imageUrl = (source, width, quality = 80) => {
  const localSource = source.startsWith("/") ? source : `/${source}`;
  return `/.netlify/images?url=${encodeURIComponent(localSource)}&w=${width}&fm=webp&q=${quality}`;
};

export const responsiveImageSrcSet = (source, widths, quality) =>
  widths.map((width) => `${imageUrl(source, width, quality)} ${width}w`).join(", ");

export default imageUrl;
