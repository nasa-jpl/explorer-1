import { BlockImageFullBleedTemplate } from './BlockImageFullBleed'
import { BlockImageStandardTemplate } from './BlockImageStandard'

export const BlockImageTemplate = ({ fullBleed, image, fancyboxGallery }) => {
  if (fullBleed) {
    return BlockImageFullBleedTemplate({ image, fancyboxGallery })
  } else {
    return `
    <div class="BaseGrid container mx-auto">
      <div class="lg:col-start-2 lg:col-end-12 col-start-1 col-end-13 lg:px-0 px-4 relative">
        ${BlockImageStandardTemplate({ image, fancyboxGallery })}
      </div>
    </div>
    `
  }
}
