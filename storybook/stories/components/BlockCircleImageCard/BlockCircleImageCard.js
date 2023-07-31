import { BaseImagePlaceholderTemplate } from '../BaseImagePlaceholder/BaseImagePlaceholder'
import { BaseHeadingTemplate } from '../BaseHeading/BaseHeading'

export const BlockCircleImageCardTemplate = ({
  type = 'imageOnLeft',
  imageOnRight = false,
  title,
  label,
  secondaryLabel = '',
  image,
  customClass = '',
}) => {
  return `
  <div class="BlockCircleImageCard shadow-jpl ${
    imageOnRight ? 'imageOnRight' : ''
  } ${customClass}">
    ${BaseImagePlaceholderTemplate({
      theme: 'transparent-theme',
      src: image.src.url,
      srcset: image.srcSet,
      alt: image.alt,
      width: image.src.width,
      height: image.src.height,
      objectFitClass: 'object-cover',
      imageClass: 'rounded-full border-4 border-white',
      wrapperClass: `h-full`,
    })}
    <div class="content relative px-8 py-8">
      <div class="text-gray-dark text-subtitle mb-3">${label}</div>
      ${
        secondaryLabel
          ? `<div class="text-gray-mid-dark text-subtitle">${secondaryLabel}</div>`
          : ''
      }
      ${BaseHeadingTemplate({
        text: title,
        size: 'h5',
        tag: 'h3',
        headingClass: 'mt-3',
      })}
    </div>
  </div>
  `
}
