import { BaseImagePlaceholderTemplate } from '../BaseImagePlaceholder/BaseImagePlaceholder'
import { BaseHeadingTemplate } from '../BaseHeading/BaseHeading'

export const BlockCardTemplate = ({ type, title, text, image, customClass }) => {
  if (!customClass) customClass = ''

  return `
  <div class="shadow-jpl relative h-full ${customClass} ${
    !image ? 'flex items-center min-h-32' : ''
  }">
    ${
      image
        ? `
    <div class="h-auto">
      ${BaseImagePlaceholderTemplate({
        theme: 'dark-theme',
        src: image.src.url,
        srcset: image.srcSet,
        alt: image.alt,
        width: image.src.width,
        height: image.src.height,
        aspectRatio: 'aspect-ratio-sixteen-nine',
        objectFitClass: 'object-cover'
      })}
    </div>
    `
        : ''
    }
    <div class="px-6 py-6">
      <div class="text-jpl-red text-subtitle">${type}</div>
      <hr aria-hidden="true" class="bg-jpl-red text-jpl-red w-8 h-2px border-0 my-2"/>
      ${BaseHeadingTemplate({
        text: title,
        size: 'h5',
        tag: 'h3',
        headingClass: 'mt-4 mb-2'
      })}
      <p class="text-body-sm">${text}</p>
    </div>
  </div>
  `
}
