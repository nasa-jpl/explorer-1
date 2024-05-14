import { BaseImageCaptionTemplate } from '../BaseImageCaption/BaseImageCaption'
import { MixinVideoBgTemplate } from '../MixinVideoBg/MixinVideoBg'
import { IconInfoTemplate } from '../Icons/IconInfo'
import { IconCloseTemplate } from '../Icons/IconClose'

export const HeroMediaTemplate = ({ image, video, caption, credit, url }) => {
  return `
  <div class="HeroMedia">
    <div class="bg-gray-light">
      <div class="vh-crop max-w-screen-3xl relative flex items-center mx-auto overflow-hidden">
        <div class="hero">
          ${
            image
              ? `<img class="object-cover object-center w-full h-full" ${
                  image.srcSet ? `srcset="${image.srcSet}"` : ''
                } src="${image.src.url}" width="${image.src.width}" height="${
                  image.src.height
                }" alt="${image.alt}"/>`
              : video
              ? MixinVideoBgTemplate({
                  file: video.file,
                  webm: video.webm,
                  ogg: video.ogg,
                })
              : ''
          }
        </div>
        ${
          caption
            ? `
        <div class="lg:hidden absolute bottom-0 left-0 w-full h-auto mx-auto">
          <button id="HeroMediaCaptionToggle" class="text-gray-dark flex items-center justify-center w-12 h-12 ml-auto bg-white/90 cursor-pointer focus:outline-none focus:ring-2" aria-label="Toggle caption">
            ${IconInfoTemplate({})}
            ${IconCloseTemplate({})}
          </button>
        </div>`
            : ''
        }
      </div>
      ${
        caption
          ? `<div id="HeroMediaCaption" class="max-w-screen-3xl bg-gray-light/90 lg:bg-gray-light/100 lg:block lg:pb-4 lg:px-3 xl:px-8 lg:pt-4 items-start p-4 mx-auto hidden">${BaseImageCaptionTemplate(
              { caption, credit, url, linkText: 'Full Image Details' }
            )}</div>`
          : ''
      }
    </div>
  </div>
  `
}
