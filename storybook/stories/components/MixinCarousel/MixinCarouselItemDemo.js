export const MixinCarouselItemDemoTemplate = ({ title }) => {
  if (!title) title = 'Title'

  return `
    <div
      class="swiper-slide bg-gray-dark text-white text-center font-bold py-28"
    >
      <span class="uppercase">${title}</span><br />
      each slide must have class "swiper-slide"
    </div>
  `
}
