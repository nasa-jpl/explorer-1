import { BaseImagePlaceholderTemplate } from '../BaseImagePlaceholder/BaseImagePlaceholder'
import { BaseImageCaptionTemplate } from '../BaseImageCaption/BaseImageCaption'
import { BlockImageLightboxTemplate } from './BlockImageLightbox'

export const BlockImageStandardTemplate = ({
  image,
  fancyboxGallery,
  imageClass,
  imageCaptionClass,
  imageCaptionWrapperClass,
  imageFitClass,
}) => {
  let blockImageLightbox = BlockImageLightboxTemplate({
    image,
    fancyboxGallery,
  })

  let baseImagePlaceholder = BaseImagePlaceholderTemplate({
    theme: 'dark-theme',
    src: image.src.url,
    src_webp: image.src_webp,
    srcset: image.src.url,
    alt: image.alt,
    width: image.src.width,
    height: image.src.height,
    wrapperClass: '',
    aspectRatio: 'aspect-ratio-sixteen-nine',
    objectFitClass: imageFitClass ? imageFitClass : 'object-contain',
    imageClass,
  })

  let baseImageCaption = ''
  if (image.caption || image.credit) {
    let baseImageCaptionTemplate = BaseImageCaptionTemplate({
      caption: image.caption,
      credit: image.credit,
      url: image.url,
      linkText: image.linkText,
    })
    baseImageCaption = `<div class="lg:px-0 ${
      imageCaptionWrapperClass ? imageCaptionWrapperClass : `p-4 pb-0`
    }">${baseImageCaptionTemplate}</div>`
  }

  return `
  <div class="group relative">
    ${blockImageLightbox}
    ${baseImagePlaceholder}
  </div>
  ${baseImageCaption}
  ${
    imageCaptionClass == 'slide-caption'
      ? `<div class="pt-10 lg:hidden"></div>`
      : ''
  }
  `
}
