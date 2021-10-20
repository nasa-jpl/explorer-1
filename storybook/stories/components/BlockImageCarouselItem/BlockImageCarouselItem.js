import { BaseImagePlaceholderTemplate } from '../BaseImagePlaceholder/BaseImagePlaceholder'
import { BaseImageCaptionTemplate } from '../BaseImageCaption/BaseImageCaption'

export const BlockImageCarouselItemTemplate = ({ image }) => {
  return `
  <div>
    ${BaseImagePlaceholderTemplate({
      theme: 'dark-theme',
      src: image.src.url,
      srcset: image.srcSet,
      alt: image.alt,
      width: image.src.width,
      height: image.src.height,
      aspectRatio: 'aspect-ratio-sixteen-nine',
      objectFitClass: 'object-contain',
      imageClass: 'swiper-lazy',
    })}
    ${
      image.caption || image.credit
        ? `
    <div class="lg:px-0 lg:pt-3 px-4 pt-10">
      ${BaseImageCaptionTemplate({
        caption: image.caption,
        credit: image.credit,
        url: image.url,
        computedClass: 'slide-caption',
      })}
    </div>`
        : ''
    }
  </div>
  `
}
