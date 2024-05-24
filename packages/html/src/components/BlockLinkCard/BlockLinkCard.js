import { BaseLinkTemplate } from '../BaseLink/BaseLink'
import { BaseImagePlaceholderTemplate } from '../BaseImagePlaceholder/BaseImagePlaceholder'
import { IconArrowTemplate } from '../Icons/IconArrow'

export const BlockLinkCardTemplate = ({
  url,
  title,
  headingLevel,
  label,
  secondaryLabel,
  image,
  customClass,
  compact
}) => {
  if (!headingLevel) headingLevel = 'p'
  if (!customClass) customClass = ''
  if (compact == undefined) {
    compact = false
  }
  let baseImagePlaceholder = BaseImagePlaceholderTemplate({
    theme: 'dark-theme',
    noLogo: true,
    aspectRatio: 'aspect-ratio-sixteen-nine',
    wrapperClass: `bg-gray-dark relative mb-6 overflow-hidden ${compact ? '' : 'lg:mb-10'}`,
    src: image.src.url,
    srcset: image.srcset,
    alt: image.alt,
    width: image.src.width,
    height: image.src.height,
    imageClass:
      'can-hover:group-hover:delay-200 can-hover:group-hover:scale-100 absolute top-0 left-0 w-full transition-all duration-200 ease-in scale-105',
    objectFitClass: 'object-cover'
  })
  let iconArrow = IconArrowTemplate({})
  let labelTemplate = ''
  if (label || secondaryLabel) {
    labelTemplate = `
      <div class="flex flex-wrap">
        <p class="text-subtitle divide-gray-mid flex divide-x ${compact ? 'mb-2' : 'mb-4'}">
          ${
            label
              ? `
          <span class="${secondaryLabel ? 'pr-2' : ''}">
            ${label}
          </span>`
              : ''
          }
          ${
            secondaryLabel
              ? `
          <span class="${label ? 'text-gray-mid-dark pl-2' : ''}">
            ${secondaryLabel}
          </span>`
              : ''
          }
          <span class="sr-only">.</span>
        </p>
      </div>
    `
  }

  let template = `
    ${baseImagePlaceholder}
    <div
      class="transition-translate can-hover:group-hover:delay-200 duration-200 ease-in ${
        compact ? 'can-hover:group-hover:-translate-y-2' : 'can-hover:group-hover:-translate-y-3'
      }"
    >
      ${labelTemplate}
      <${headingLevel} class="text-gray-dark text-xl font-medium leading-tight tracking-tight ${
        compact ? 'text-xl' : 'lg:text-3xl'
      }">
        ${title}
      </${headingLevel}>
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
    wrapperClass: 'group ' + customClass
  })

  return baseLink
}
