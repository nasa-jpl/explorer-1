import { BaseLinkTemplate } from '../BaseLink/BaseLink'
import { BaseImagePlaceholderTemplate } from '../BaseImagePlaceholder/BaseImagePlaceholder'
import { IconArrowTemplate } from '../Icons/IconArrow'

export const BlockLinkCardTemplate = ({
  url,
  title,
  label,
  image,
  customClass,
}) => {
  if (!customClass) customClass = ''

  let baseImagePlaceholder = BaseImagePlaceholderTemplate({
    theme: 'dark-theme',
    noLogo: true,
    aspectRatio: 'aspect-ratio-sixteen-nine',
    wrapperClass: 'lg:mb-10 bg-gray-dark relative mb-6 overflow-hidden',
    src: image.src.url,
    srcset: image.srcset,
    alt: image.alt,
    width: image.src.width,
    height: image.src.height,
    imageClass: '',
    objectFitClass: 'object-cover',
  })
  let iconArrow = IconArrowTemplate({})

  if (label) {
    label = `
      <p class="text-subtitle mb-4">
        ${label}
        <span class="sr-only">.</span>
      </p>
    `
  } else {
    label = ''
  }

  let template = `
    ${baseImagePlaceholder}
    <div
      class="transition-translate can-hover:group-hover:delay-200 can-hover:group-hover:-translate-y-3 duration-200 ease-in transform"
    >
      ${label}
      <p class="text-gray-dark lg:text-3xl text-xl font-medium leading-tight">
        ${title}
      </p>
    </div>
    <div
      class="can-hover:block text-jpl-red can-hover:-ml-3 can-hover:group-hover:delay-200 can-hover:opacity-0 can-hover:group-hover:ml-0 can-hover:group-hover:opacity-100 hidden -mt-1 text-2xl leading-normal transition-all duration-200 ease-in"
    >
      ${iconArrow}
    </div>
  `

  let baseLink = BaseLinkTemplate({
    link: url,
    text: template,
    computedClass: 'block pb-5',
    wrapperClass: 'group ' + customClass,
  })

  return baseLink
}
