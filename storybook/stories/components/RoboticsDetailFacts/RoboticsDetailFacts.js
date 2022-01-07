import { BaseCarouselCardsTemplate } from '../BaseCarouselCards/BaseCarouselCards.js'
import { RoboticsDetailFactsItemTemplate } from '../RoboticsDetailFactsItem/RoboticsDetailFactsItem.js'

export const RoboticsDetailFactsTemplate = ({ items }) => {
  let facts = ''
  if (items.length > 0) {
    for (const [index, value] of items.entries()) {
      facts += RoboticsDetailFactsItemTemplate({
        type: value.type,
        title: value.title,
        text: value.text,
        image: value.image,
      })
    }
  }
  const mobileCarousel = BaseCarouselCardsTemplate({
    customClass: 'md:hidden sm:px-10 sm:-ml-10 py-10 -mt-10',
    variant: '-tiles',
    cards: items,
    indent: 'col-1',
    slideTemplate: 'RoboticsDetailFactsItem',
    noLinks: true,
  })

  return `
    <div class="RoboticsDetailFacts">
      <div
        class="md:grid md:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-4 hidden gap-8"
      >
        ${facts}
      </div>
      ${mobileCarousel}
    </div>
  `
}
