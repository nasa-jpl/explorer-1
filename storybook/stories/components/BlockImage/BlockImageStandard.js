import { BaseImagePlaceholderTemplate } from '../BaseImagePlaceholder/BaseImagePlaceholder'
import { BaseImageCaptionTemplate } from '../BaseImageCaption/BaseImageCaption'
import { BlockImageLightboxTemplate } from './BlockImageLightbox'

export const BlockImageStandardTemplate = ({ image, fancyboxGallery }) => {
  let blockImageLightbox = BlockImageLightboxTemplate({
    image,
    fancyboxGallery,
  })

  let baseImagePlaceholder = BaseImagePlaceholderTemplate({
    theme: 'dark-theme',
    src: image.src.url,
    srcset: image.src.url,
    alt: image.alt,
    width: image.src.width,
    height: image.src.height,
    wrapperClass: 'aspect-ratio-sixteen-nine',
    objectFitClass: 'object-contain',
  })

  let baseImageCaption = ''
  if (image.caption || image.credit) {
    let baseImageCaptionTemplate = BaseImageCaptionTemplate({
      caption: image.caption,
      credit: image.credit,
      url: image.url,
      linkText: image.linkText,
    })
    baseImageCaption = `<div class="lg:px-0 p-4 pb-0">${baseImageCaptionTemplate}</div>`
  }

  return `
  <div>
    <div class="group relative">
      ${blockImageLightbox}
      ${baseImagePlaceholder}
    </div>
    ${baseImageCaption}
  </div>
  `
}
