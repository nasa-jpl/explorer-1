import { BaseImageTemplate } from '../BaseImage/BaseImage'

export const BaseImagePlaceholderTemplate = ({
  theme,
  noLogo,
  aspectRatio,
  wrapperClass,
  // BaseImage props
  src,
  srcset,
  alt,
  width,
  height,
  objectFitClass,
  // Story props
  noImage,
}) => {
  // interpret props
  if (!theme) theme = 'light-theme'
  if (!aspectRatio) aspectRatio = 'aspect-ratio-none'
  if (!objectFitClass) objectFitClass = 'object-contain'
  noLogo ? (noLogo = 'no-logo') : (noLogo = '')
  let renderWrapperClass = ''
  if (wrapperClass) renderWrapperClass = ` class="${wrapperClass}"`
  // BaseImage rendering
  const theImage = BaseImageTemplate({
    src: src,
    srcset: srcset,
    alt: alt,
    width: width,
    height: height,
    imageClass: '',
    objectFitClass: objectFitClass,
  })
  return `<div${renderWrapperClass}>
  <div class="BaseImagePlaceholder ${theme} ${aspectRatio} ${noLogo}">
    ${theImage}
  </div>
</div>`
}
