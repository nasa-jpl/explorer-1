import { BaseImagePlaceholderTemplate } from '../BaseImagePlaceholder/BaseImagePlaceholder'
import { BaseImageCaptionTemplate } from '../BaseImageCaption/BaseImageCaption'
import { BlockImageLightboxTemplate } from './BlockImageLightbox'

export const BlockImageFullBleedTemplate = ({ image, fancyboxGallery }) => {
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
    wrapperClass: 'aspect-ratio-sixteen-nine lg:aspect-ratio-two-one',
    objectFitClass: 'object-cover',
  })

  let baseImageCaption = ''
  if (image.caption || image.credit) {
    let baseImageCaptionTemplate = BaseImageCaptionTemplate({
      caption: image.caption,
      credit: image.credit,
      url: image.url,
      linkText: image.linkText,
    })
    baseImageCaption = `<div class="max-w-screen-3xl p-4 pb-0 mx-auto">${baseImageCaptionTemplate}</div>`
  }

  return `
  <div>
    <div class="bg-gray-light">
      <div class="max-w-screen-3xl mx-auto group relative">
        ${blockImageLightbox}
        ${baseImagePlaceholder}
      </div>
    </div>
    ${baseImageCaption}
  </div>
  `
}
