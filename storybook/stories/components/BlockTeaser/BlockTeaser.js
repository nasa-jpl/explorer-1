import { BaseImageTemplate } from '../BaseImage/BaseImage'
import { BaseButtonTemplate } from '../BaseButton/BaseButton'

export const BlockTeaserTemplate = ({
  fullWidthImage,
  image,
  label,
  heading,
  introduction,
  buttonText,
  link,
}) => {
  let theHeading = ''
  if (heading) {
    let headingSize = label ? 'h3' : 'h2'
    theHeading =
      `<${headingSize} class="text-h4 lg:mt-2 mt-3 tracking-normal">` +
      heading +
      `</${headingSize}>`
  }
  image = image && fullWidthImage ? image.full : image ? image.half : ''

  return `
  <div class="BlockTeaser bg-gray-light lg:grid lg:grid-cols-10 relative" style="${
    image ? `min-height: ${image.height}px;` : ''
  }">
    ${
      fullWidthImage
        ? `<div class="lg:block bg-gradient-to-l from-transparent-w50 to-transparent-black-50 absolute inset-0 z-10 hidden"></div>`
        : ''
    }
    ${
      image
        ? BaseImageTemplate({
            src: image.src,
            srcset: image.srcset,
            alt: '',
            width: image.width,
            height: image.height,
            imageClass: `cover-bg${fullWidthImage ? ' -full' : ''}`,
            objectFitClass: 'object-contain',
          })
        : ''
    }
    <div class="${
      image && fullWidthImage
        ? 'relative lg:text-white lg:text-contrast z-20'
        : ''
    } grid lg:col-start-2 lg:col-end-5 px-10 lg:px-0 lg:py-16 py-8">
      <div class="my-auto">
        ${
          label
            ? `<h2 class="text-subtitle font-semibold">` + label + `</h2>`
            : ''
        }
        ${theHeading}
        ${
          introduction
            ? `<p class="text-body-md lg:mt-2 mt-4">` + introduction + `</p>`
            : ''
        }
        ${BaseButtonTemplate({
          variant: 'primary',
          link,
          cssClass: 'mt-8',
          label: buttonText,
        })}
      </div>
    </div>
  </div>
  `
}
