import { BaseLinkTemplate } from '../BaseLink/BaseLink'
import { BaseHeadingTemplate } from '../BaseHeading/BaseHeading'
import { BaseImagePlaceholderTemplate } from '../BaseImagePlaceholder/BaseImagePlaceholder'

export const SearchResultCardTemplate = ({
  link,
  featured,
  type,
  topic,
  title,
  summary,
  date,
  image,
}) => {
  return BaseLinkTemplate({
    link,
    linkClass: 'block',
    wrapperClass: 'SearchResultCard',
    text: `
    ${
      !featured
        ? `
    <div class="border-gray-light-mid lg:pb-10 lg:mb-10 relative grid grid-cols-9 gap-5 pb-6 mb-6 border-b">
      ${
        type || topic
          ? `
      <div class="lg:hidden col-span-full text-subtitle">
        ${type ? `<span>${type}<span class="sr-only">.</span></span>` : ''}
        ${type && topic ? `<span class="mx-1">|</span>` : ''}
        ${
          topic
            ? `<span class="text-gray-mid-dark">${topic}<span class="sr-only">.</span></span>`
            : ''
        }
      </div>`
          : ''
      }
      <div class="sm:col-span-6 md:col-span-6 lg:col-span-7 xl:col-span-7 col-span-6">
        ${
          type || topic
            ? `
        <div class="text-subtitle lg:block hidden mb-3">
          ${type ? `<span>${type}<span class="sr-only">.</span></span>` : ''}
          ${type && topic ? `<span class="mx-1">|</span>` : ''}
          ${
            topic
              ? `<span class="text-gray-mid-dark">${topic}<span class="sr-only">.</span></span>`
              : ''
          }
        </div>`
            : ''
        }
        ${
          title
            ? BaseHeadingTemplate({
                text: title,
                size: 'h5',
                tag: 'h5',
                headingClass: 'mb-3',
              })
            : ''
        }
        ${
          summary
            ? `<p class="sm:block text-gray-mid-dark text-body-sm hidden mb-3">${summary}<span class="sr-only">.</span></p>`
            : ''
        }
        ${date ? `<p class="text-gray-mid-dark">${date}</p>` : ''}
      </div>
      ${
        image
          ? `
      <div class="SearchResultCard-image xl:pl-14 sm:col-span-3 md:col-span-3 lg:col-span-2 xl:col-span-2 col-span-3">
        ${BaseImagePlaceholderTemplate({
          theme: 'dark-theme',
          src: image.src.url,
          src_webp: image.src_webp,
          srcset: image.srcSet,
          alt: image.alt,
          width: image.src.width,
          height: image.src.height,
          imageWrapperClass: 'sm:object-cover object-cover',
          aspectRatio: 'aspect-ratio-one-one',
          objectFitClass: 'object-contain',
        })}
      </div>`
          : ''
      }
    </div>
    `
        : `
    <div class="bg-dark-blue xl:grid-cols-9 relative grid grid-cols-5 mb-10 text-white">
      <div class="xl:col-span-7 flex items-center col-span-3 p-10">
        <div class="">
          ${
            type || topic
              ? `
          <div class="text-subtitle mb-3">
            ${type ? `<span>${type}<span class="sr-only">.</span></span>` : ''}
            ${type && topic ? `<span class="mx-1">|</span>` : ''}
            ${
              topic ? `<span>${topic}<span class="sr-only">.</span></span>` : ''
            }
          </div>`
              : ''
          }
          ${
            title
              ? BaseHeadingTemplate({
                  text: title,
                  size: 'h5',
                  tag: 'h5',
                  headingClass: 'mb-4',
                })
              : ''
          }
          ${
            summary
              ? `<p class="lg:block text-body-sm hidden mb-3">${summary}</p>`
              : ''
          }
          ${date ? `<p>${date}</p>` : ''}
        </div>
      </div>
      ${
        image
          ? `
      <div class="SearchResultCard-image xl:col-span-2 col-span-2">
        <img src="${image.src.url}" width="${image.src.width}" height="${image.src.height}" alt="${image.alt}" class="object-cover w-full h-full" loading="lazy" />
      </div>
    </div>`
          : ''
      }
    `
    }

  `,
  })
}
