import { IconArrowTemplate } from '../Icons/IconArrow'
import { BaseLinkTemplate } from '../BaseLink/BaseLink'
import { MixinVideoBgTemplate } from '../MixinVideoBg/MixinVideoBg'

export const HeroSmallTemplate = ({ label, cta, url, title, image, video }) => {
  return `
  <section
    aria-label="Feature"
    class="HeroSmall ThemeVariantDark relative flex items-center overflow-hidden"
  >
    <div class="absolute inset-0 z-10 overflow-hidden bg-black">
      ${
        video
          ? MixinVideoBgTemplate({
              file: video.file,
              ogg: video.ogg,
              webm: video.webm
            })
          : image
            ? `
        <picture>
          <source media="(min-width: 768px)" srcset="${image.srcSet}" />
          <source media="(min-width: 420px)" srcset="${image.screenMd.url}" />
          <source data-srcset="${image.screenSm.url}" />
          <img
            class="object-cover w-full h-full"
            src="${image.src.url}"
            width="${image.src.width}"
            height="${image.src.height}"
            alt=""
          />
        </picture>`
            : ''
      }
    </div>
    <div class="lg:flex lg:items-end lg:relative lg:h-full z-20 w-full">
      <div class="bg-gradient-to-b lg:bg-gradient-to-bl from-transparent lg:from-transparent-w50 to-black lg:to-transparent-black-75 absolute inset-0"></div>
      <div class="px-4 lg:px-10 2xl:px-0 lg:pb-0 lg:py-0 text-contrast container relative mx-auto my-6 lg:mt-0 lg:mb-10 text-white">
        <a href="${url}" class="lg:w-1/2 xl:w-5/12 block">
          ${
            label
              ? `<p class="text-subtitle lg:mb-3 mb-2">${label}<span class="sr-only">.</span></p>`
              : ''
          }
          <p class="text-h3 font-semibold tracking-normal mb-0">
            <span class="mr-2">${title}</span>
            <span class="text-jpl-red-light lg:hidden can-hover:group-hover:ml-2 ml-0 text-4xl transition-all duration-200 ease-in">
              ${IconArrowTemplate({ customClass: 'inline' })}
            </span>
          </p>
        </a>
        ${BaseLinkTemplate({
          variant: 'primary',
          link: url,
          text: cta,
          caretWrapperClass: 'py-3',
          wrapperClass: 'lg:block hidden',
          linkClass: 'inline-block'
        })}
      </div>
    </div>
  </section>
  `
}
