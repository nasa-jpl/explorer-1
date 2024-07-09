import { BaseImagePlaceholderTemplate } from '../BaseImagePlaceholder/BaseImagePlaceholder'

export const NavInternalHighlightTemplate = ({ title, description, image, link, ariaLabel }) => {
  // set defaults
  if (!title) title = ''
  if (!description) description = ''
  if (!image) image = {}
  if (!link) link = ''
  if (!ariaLabel) ariaLabel = ''

  return `<div class="NavInternalHighlight mb-6 lg:mb-0 lg:w-5/6">
    ${
      title
        ? `<p class="font-normal text-2xl lg:text-xl xl:text-2xl mb-4">
        ${title}
      </p>`
        : ''
    }
    ${
      description
        ? `<p class="text-sm leading-relaxed ${image ? 'mb-4 lg:mb-6' : ''}">
        ${description}
      </p>`
        : ''
    }
    ${
      image && image.src && link
        ? `
        <a
            class="block group cursor-hover text-jpl-teal-dark can-hover:hover:jpl-teal font-medium lg:font-normal"
            href="${link}"
            ${ariaLabel ? `aria-label="${ariaLabel}"` : ''}
          >
        `
        : ''
    }
    ${
      image && image.src
        ? `${BaseImagePlaceholderTemplate({
            wrapperClass: 'hidden lg:block bg-gray-dark relative overflow-hidden',
            theme: 'dark-theme',
            aspectRatio: 'aspect-ratio-sixteen-nine',
            noLogo: true,
            objectFitClass: 'object-cover',
            imageClass:
              'can-hover:group-hover:delay-200 can-hover:group-hover:scale-100 absolute top-0 left-0 w-full transition-all duration-200 ease-in scale-105',
            src: image.src,
            width: image.width,
            height: image.height,
            alt: image.alt
          })}
          ${
            link
              ? `<span class="block lg:hidden">
                    ${title}
                </span>
              </a>`
              : ''
          }`
        : ''
    }
  </div>
  `
}
