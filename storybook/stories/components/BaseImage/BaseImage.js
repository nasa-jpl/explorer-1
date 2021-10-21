export const BaseImageTemplate = ({
  src,
  srcset,
  alt,
  width,
  height,
  imageClass,
  wrapperClass,
  objectFitClass,
}) => {
  return `<div${wrapperClass ? ` class="${wrapperClass}"` : ''}>${
    src
      ? `<img class="BaseImage ${imageClass} ${objectFitClass} lazyload" data-src="${src}" data-srcset="${srcset}" alt="${alt}" width="${width}" height="${height}" loading="lazy" />`
      : ''
  }</div>`
}
