export const BaseImageTemplate = ({
  src,
  srcset,
  alt,
  width,
  height,
  imageClass,
  objectFitClass,
}) => {
  let theImage = `<div></div>`
  if (src) {
    theImage = `<img
    class="BaseImage ${imageClass} ${objectFitClass} lazyload"
    data-src="${src}"
    data-srcset="${srcset}"
    alt="${alt}"
    width="${width}"
    height="${height}"
    loading="lazy"
  />`
  }

  return `<div>
  ${theImage}
</div>`
}
