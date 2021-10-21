import { BaseImageTemplate } from '../BaseImage/BaseImage'

export const BaseImagePlaceholderTemplate = ({
  theme,
  noLogo,
  aspectRatio,
  wrapperClass,
  placeholder,
  // BaseImage props
  src,
  srcset,
  alt,
  width,
  height,
  imageWrapperClass,
  objectFitClass,
}) => {
  // interpret props
  if (!theme) theme = 'light-theme'
  if (!aspectRatio) aspectRatio = 'aspect-ratio-none'
  if (!objectFitClass) objectFitClass = 'object-contain'
  noLogo ? (noLogo = 'no-logo') : (noLogo = '')
  let renderWrapperClass = ''
  if (wrapperClass) renderWrapperClass = ` class="${wrapperClass}"`
  // BaseImage rendering
  const slot =
    src || srcset
      ? BaseImageTemplate({
          src: src,
          srcset: srcset,
          alt: alt,
          width: width,
          height: height,
          imageClass: '',
          wrapperClass: imageWrapperClass ? imageWrapperClass : '',
          objectFitClass: objectFitClass,
        })
      : placeholder
      ? `<div>${placeholder}</div>`
      : ''
  return `<div${renderWrapperClass}>
  <div class="BaseImagePlaceholder ${theme} ${aspectRatio} ${noLogo}">
    ${slot}
  </div>
</div>`
}
