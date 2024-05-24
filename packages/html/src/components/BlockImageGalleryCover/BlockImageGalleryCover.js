import { BlockImageStandardTemplate } from '../BlockImage/BlockImageStandard'

export const BlockImageGalleryCoverTemplate = ({
  label,
  title,
  description,
  fancyboxGallery,
  image
}) => {
  return `
  <div class="swiper-slide group">
    <div>
      <div class="bg-gradient-to-b from-transparent-w50 to-black absolute inset-0 z-10">
        <div class="text-contrast lg:p-20 flex items-end w-full h-full p-10 text-white">
          <div class="w-full">
            ${label ? `<p class="text-subtitle mb-3">${label}</p>` : ''}
            <h2 class="text-h2">${title}</h2>
            ${
              description
                ? `<p class="sm:block text-body-lg lg:w-2/3 xl:w-1/2 hidden mt-5">${description}</p>`
                : ''
            }
          </div>
        </div>
      </div>
      ${BlockImageStandardTemplate({
        image,
        fancyboxGallery,
        imageClass: 'swiper-lazy',
        imageFitClass: 'object-cover'
      })}
    </div>
  </div>
  `
}
