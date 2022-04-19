export const BaseImageTemplate = ({
  src,
  src_webp,
  srcset,
  alt,
  width,
  height,
  imageClass,
  wrapperClass,
  objectFitClass,
}) => {
  if (!src) src = ''
  if (!srcset) srcset = ''
  if (!alt) alt = ''
  if (!width) width = ''
  if (!height) height = ''
  if (!imageClass) imageClass = ''
  if (!objectFitClass) objectFitClass = ''

  const img_element_template = `<img class="BaseImage ${imageClass} ${objectFitClass} lazyload" data-src="${src}" data-srcset="${srcset}" alt="${alt}" width="${width}" height="${height}" loading="lazy" />`

  return `<div${wrapperClass ? ` class="${wrapperClass}"` : ''}>${
    src
      ? src_webp
        ? `<picture><source srcset="${src_webp}" type="image/webp" />${img_element_template}</picture>`
        : `${img_element_template}`
      : ''
  }</div>`
}
