import { MixinCarouselTemplate } from '../MixinCarousel/MixinCarousel.js'
import { BlockCardTemplate } from '../BlockCard/BlockCard.js'

export const BlockCardGroupTemplate = ({ items }) => {
  let facts = ''
  if (items.length > 0) {
    for (const [index, value] of items.entries()) {
      facts += BlockCardTemplate({
        type: value.type,
        title: value.title,
        text: value.text,
        image: value.image,
      })
    }
  }
  const mobileCarousel = MixinCarouselTemplate({
    customClass: 'md:hidden sm:px-10 sm:-ml-10 py-10 -mt-10',
    variant: '-tiles',
    cards: items,
    indent: 'col-1',
    slideTemplate: 'BlockCard',
    noLinks: true,
  })

  return `
    <div class="BlockCardGroup">
      <div
        class="md:grid md:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-4 hidden gap-8"
      >
        ${facts}
      </div>
      ${mobileCarousel}
    </div>
  `
}
