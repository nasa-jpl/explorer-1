import { BlockImageGalleryCoverTemplate } from '../BlockImageGalleryCover/BlockImageGalleryCover'
import { BlockImageStandardTemplate } from '../BlockImage/BlockImageStandard'
import { BaseButtonTemplate } from '../BaseButton/BaseButton'

export const BlockImageCarouselTemplate = ({
  images,
  galleryCoverImage,
  fancyboxGallery,
}) => {
  let slides = ''
  if (images.length > 0) {
    for (const [index, value] of images.entries()) {
      slides += `<div class="swiper-slide">${BlockImageStandardTemplate({
        image: value,
        imageClass: 'swiper-lazy',
        imageCaptionClass: 'slide-caption',
        imageCaptionWrapperClass: 'lg:pt-3 px-4 pt-10',
        fancyboxGallery,
      })}</div>`
    }
  }

  return `
  <div class="BlockImageCarousel w-full overflow-hidden ${
    galleryCoverImage ? `BlockImageGallery max-w-screen-3xl mx-auto` : ''
  }">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        ${
          galleryCoverImage
            ? BlockImageGalleryCoverTemplate({
                label: galleryCoverImage.label,
                title: galleryCoverImage.title,
                description: galleryCoverImage.description,
                fancyboxGallery,
                image: galleryCoverImage.image,
              })
            : ''
        }
        ${slides}
      </div>
      <div class="swiper-nav lg:block absolute inset-x-0 top-0 hidden h-0 overflow-hidden">
        <div class="absolute inset-0">
          <div class="absolute bottom-0 right-0 z-10 flex">
            ${BaseButtonTemplate({
              variant: 'primary',
              cssClass: 'z-10 border-collapse px-1 py-2 swiper-prev xl:text-xl',
              icon: 'prev',
              label: 'Previous slide',
            })}
            ${BaseButtonTemplate({
              variant: 'primary',
              cssClass: 'z-10 border-collapse px-1 py-2 swiper-next xl:text-xl',
              icon: 'next',
              label: 'Next slide',
            })}
          </div>
        </div>
      </div>
      <div class="swiper-pagination swiper-dots lg:hidden absolute top-0 w-full text-center"></div>
    </div>
  </div>
  `
}
