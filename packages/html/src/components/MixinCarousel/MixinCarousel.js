import { MixinCarouselItemDemoTemplate } from './MixinCarouselItemDemo.js'
import { BaseLinkTemplate } from '../BaseLink/BaseLink.js'
import { IconNextTemplate } from '../Icons/IconNext'
import { IconPrevTemplate } from '../Icons/IconPrev'

export const MixinCarouselTemplate = ({
  noLinks,
  heading,
  link,
  linkTitle,
  variant,
  items,
  indent,
  center,
  customClass,
  slot
}) => {
  // set defaults
  if (!variant) variant = '-cards'
  if (!heading) heading = ''
  if (!linkTitle) linkTitle = ''
  if (!customClass) customClass = ''
  if (!items) items = ''

  // create element type based on noLinks
  let element = 'nav'
  if (noLinks) element = 'div'

  // create colStart class based on indent
  let colStart = 'lg:col-start-2'
  if (indent == 'col-1') colStart = ''
  else if (indent == 'col-2') colStart = 'lg:col-start-2'
  else if (indent == 'col-3') colStart = 'lg:col-start-3'

  // create centerClass based on center boolean
  let centerClass = 'mx-auto'
  if (center) centerClass = 'mx-auto'
  else if (center === false) centerClass = ''

  // default rendering of slides if items are provided.
  // generally, components using MixinCarousel will pre-render all slides and pass them via the `slot` variable
  // for example usage, see BlockLinkCarousel and BlockCardGroup
  if (!slot && items) {
    slot = ''
    if (items.length > 0) {
      for (const [index, value] of items.entries()) {
        slot += `${MixinCarouselItemDemoTemplate({
          title: value.title
        })}`
      }
    }
  }
  const headingTemplate = `
  <div
    class="lg:pl-0 col-start-1 col-end-13 px-4 mb-1 ${colStart}"
  >
    <div class="sm:flex flex-wrap items-center justify-between">
      ${
        heading.length > 0
          ? `<h2
          class="font-primary text-gray-dark lg:text-6xl text-3xl font-semibold leading-normal tracking-normal uppercase"
        >
          ${heading}
        </h2>`
          : ''
      }
      ${
        link
          ? BaseLinkTemplate({
              wrapperClass: 'sm:block hidden',
              text: linkTitle,
              variant: 'primary',
              link: link
            })
          : ''
      }
    </div>
  </div>
  `

  return `
  <${element}
    class="MixinCarousel w-full overflow-x-hidden ${variant} ${customClass}"
    aria-label="${heading}"
  >
    <div class="BaseGrid container overflow-x-visible ${centerClass}">
      ${heading || link ? headingTemplate : ''}
      <div
        class="lg:pl-0 sm:col-end-11 3xl:col-end-12 col-start-1 col-end-13 pl-4 overflow-x-visible  ${colStart}"
      >
        <!-- Slider main container -->
        <div
          class="swiper transition-opacity duration-500 ease-in opacity-0"
        >
          <!-- Additional required wrapper -->
          <div class="swiper-wrapper">
            ${slot}
          </div>
          <div class="swiper-navigation xl:block absolute top-0 left-0 hidden w-full">
            <div class="xl:-ml-22 top-1/2 absolute left-0 z-30 -ml-20">
              <button
                aria-label="${heading} - Previous slide"
                class="BaseButton text-contrast-none swiper-prev xl:text-xl -primary -icon-only inline-block"
              >
                <span class="label block">
                  <span class="arrow-wrapper" aria-hidden="true">
                    <span class="arrow">
                      ${IconPrevTemplate({})}
                    </span>
                    <span class="arrow-fixed">
                      ${IconPrevTemplate({})}
                    </span>
                  </span>
                </span>
              </button>
            </div>

            <div class="xl:-mr-22 top-1/2 absolute right-0 z-30 -mr-20">
              <button
                aria-label="${heading} - Next slide"
                class="BaseButton text-contrast-none swiper-next xl:text-xl -primary -icon-only inline-block"
              >
                <span class="label block">
                  <span class="arrow-wrapper" aria-hidden="true">
                    <span class="arrow">
                      ${IconNextTemplate({})}
                    </span>
                    <span class="arrow-fixed">
                      ${IconNextTemplate({})}
                    </span>
                  </span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </${element}>
  `
}
