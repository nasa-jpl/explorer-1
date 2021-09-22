export const BaseImageTemplate = ({
  src,
  srcset,
  alt,
  width,
  height,
  imageClass,
  objectFitClass,
}) => {
  return `<div>
  <img
    class="BaseImage ${imageClass} ${objectFitClass} lazyload"
    data-src="${src}"
    data-srcset="${srcset}"
    alt="${alt}"
    width="${width}"
    height="${height}"
    loading="lazy"
  />
</div>`
}
