import { MixinCarouselTemplate } from '../MixinCarousel/MixinCarousel.js'
import { BlockCardTemplate } from '../BlockCard/BlockCard.js'

export const BlockCardGroupTemplate = ({ items }) => {
  function renderCards(items, isMobile) {
    let cards = ''
    if (items.length > 0) {
      for (const [index, value] of items.entries()) {
        cards += BlockCardTemplate({
          type: value.type,
          title: value.title,
          text: value.text,
          image: value.image,
          customClass: isMobile ? 'swiper-slide md:mb-0 mb-5' : ''
        })
      }
    }
    return cards
  }
  const cards = renderCards(items, false)
  const cardsMobile = renderCards(items, true)

  const mobileCarousel = MixinCarouselTemplate({
    customClass: 'md:hidden sm:px-10 sm:-ml-10 py-10 -mt-10',
    variant: '-tiles',
    slot: cardsMobile,
    indent: 'col-1',
    slideTemplate: 'BlockCard',
    noLinks: true
  })

  return `
    <div class="BlockCardGroup">
      <div
        class="md:grid md:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-4 hidden gap-8"
      >
        ${cards}
      </div>
      ${mobileCarousel}
    </div>
  `
}
