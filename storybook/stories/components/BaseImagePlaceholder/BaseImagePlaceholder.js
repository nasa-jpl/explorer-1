import { BaseImageTemplate } from '../BaseImage/BaseImage'
import { BaseImageData } from '../BaseImage/BaseImage.stories.js'

export const BaseImagePlaceholderTemplate = ({
  theme,
  noLogo,
  aspectRatio,
  objectFitClass,
  noImage,
}) => {
  if (!theme) theme = 'light-theme'
  if (!aspectRatio) aspectRatio = 'aspect-ratio-none'
  if (!objectFitClass) objectFitClass = 'object-contain'
  noLogo ? (noLogo = 'no-logo') : (noLogo = '')
  let theImage = ''
  if (!noImage) {
    theImage = BaseImageTemplate({
      ...BaseImageData,
      objectFitClass: objectFitClass,
    })
  } else {
    theImage = `<div></div>`
  }
  return `
  <div>
    <div class="BaseImagePlaceholder ${theme} ${aspectRatio} ${noLogo}">
      ${theImage}
    </div>
  </div>`
}
