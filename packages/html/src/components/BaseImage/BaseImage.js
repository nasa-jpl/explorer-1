export const BaseImageTemplate = ({
  src,
  srcset,
  alt,
  width,
  height,
  imageClass,
  wrapperClass,
  objectFitClass
}) => {
  if (!src) src = ''
  if (!srcset) srcset = ''
  if (!alt) alt = ''
  if (!width) width = ''
  if (!height) height = ''
  if (!imageClass) imageClass = ''
  if (!objectFitClass) objectFitClass = ''

  return `<div${wrapperClass ? ` class="${wrapperClass}"` : ''}>${
    src
      ? `<img class="BaseImage ${imageClass} ${objectFitClass} lazyload" data-src="${src}" data-srcset="${srcset}" alt="${alt}" width="${width}" height="${height}" loading="lazy" />`
      : ''
  }</div>`
}
