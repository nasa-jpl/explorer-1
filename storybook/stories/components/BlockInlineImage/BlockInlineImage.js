import { BlockTextTemplate } from '../BlockText/BlockText'
import { BaseImagePlaceholderTemplate } from '../BaseImagePlaceholder/BaseImagePlaceholder'
import { BaseImageCaptionTemplate } from '../BaseImageCaption/BaseImageCaption'

export const BlockInlineImageTemplate = ({ alignTo, text, image }) => {
  let align =
    alignTo == 'right' ? 'col-start-8 lg:order-2' : 'col-start-1 lg:order-1'
  let textAlignTo =
    alignTo == 'right' ? 'col-start-3 lg:order-1' : 'col-start-6 lg:order-2'
  let blockText = `<div class="flex col-span-5 ${textAlignTo}">${BlockTextTemplate(
    { text }
  )}</div>`

  // TODO: Add Fancybox lightbox option
  let lightboxTemplate = ``

  let baseImagePlaceholder = BaseImagePlaceholderTemplate({
    theme: 'dark-theme',
    template: lightboxTemplate,
    src: image.src.url,
    srcset: image.src.url,
    alt: image.alt,
    width: image.src.width,
    height: image.src.height,
    objectFitClass: 'w-full h-auto object-contain',
  })
  let baseImageCaption = BaseImageCaptionTemplate({
    caption: image.caption,
    credit: image.credit,
    url: image.url,
    linkText: image.linkText,
    computedClass: ' lg:mt-3 mt-2',
  })
  let template = `
  <div class="BlockInlineImage lg:BaseGrid container mx-auto">
    <div class="lg:mb-0 lg:w-full sm:w-xl lg:mt-0 lg:pr-4 2xl:pr-0 col-span-5 mx-auto mt-8 mb-8 ${align}">
      ${baseImagePlaceholder}
      ${baseImageCaption}
    </div>
    ${blockText}
  </div>
  `

  return template
}
