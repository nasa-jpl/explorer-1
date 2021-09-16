export const BaseImageTemplate = ({
  src,
  srcset,
  alt,
  width,
  height,
  loading,
  imageClass,
  objectFitClass,
}) => {
  if (!loading) loading = 'lazy'
  return `<div>
  <img
    class="BaseImage ${imageClass} ${objectFitClass} lazyload"
    data-src="${src}"
    data-srcset="${srcset}"
    alt="${alt}"
    width="${width}"
    height="${height}"
    loading="${loading}"
  />
</div>`
}
