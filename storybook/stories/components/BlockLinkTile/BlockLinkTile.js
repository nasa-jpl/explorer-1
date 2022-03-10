import { BaseLinkTemplate } from '../BaseLink/BaseLink'
import { BaseImagePlaceholderTemplate } from '../BaseImagePlaceholder/BaseImagePlaceholder'
import { IconArrowTemplate } from '../Icons/IconArrow'

export const BlockLinkTileTemplate = ({
  url,
  title,
  label,
  image,
  customClass,
  // secondaryLabel (startDate)
  // compact
  // headingLevel
}) => {
  if (!customClass) customClass = ''

  let baseImagePlaceholder = BaseImagePlaceholderTemplate({
    theme: 'dark-theme',
    noLogo: true,
    aspectRatio: 'aspect-ratio-eight-seven',
    src: image.src.url,
    srcset: image.srcset,
    alt: '',
    width: image.src.width,
    height: image.src.height,
    imageClass: 'w-full h-full',
    objectFitClass: 'object-cover',
  })
  let iconArrow = IconArrowTemplate({})

  if (label) {
    label = `
      <p class="text-subtitle mb-2">
        ${label}
        <span class="sr-only">.</span>
      </p>
    `
  } else {
    label = ''
  }

  let template = `
  <div class="relative">
    <div
      class="lg:group-hover:scale-105 min-h-66 transition-all duration-200 ease-in delay-200 transform scale-100 bg-black"
    >
      ${baseImagePlaceholder}
      <div class="gradient-overlay bg-gradient-to-b from-transparent to-black min-h-1/2 absolute inset-x-0 bottom-0"></div>
      <div class="bg-opacity-15 absolute inset-0 bg-black"></div>
    </div>
    <div class="absolute inset-x-0 bottom-0">
      <div
        class="text-contrast px-6 py-4 text-white xl:px-10 xl:py-6 lg:px-8"
      >
        ${label}
        <p class="text-xl leading-tight tracking-tight transition-all duration-200 ease-in delay-200 font-medium mb-1 lg:group-hover:mb-3 sm:text-6xl md:text-3xl xl:text-6xl">
          ${title}
        </p>
        <div class="lg:block lg:-ml-3 lg:opacity-0 lg:group-hover:ml-0 lg:group-hover:opacity-100 lg:-mb-3 relative z-20 hidden text-3xl leading-normal transition-all duration-200 ease-in delay-200">
          ${iconArrow}
        </div>
      </div>
    </div>
  </div>
  `

  let baseLink = BaseLinkTemplate({
    link: url,
    text: template,
    computedClass: 'block',
    wrapperClass: 'group ' + customClass,
  })

  return baseLink
}
