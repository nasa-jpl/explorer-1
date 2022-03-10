/* Swiper
 *  Configured to use any modules that are needed site-wide (SwiperCore.use([]))
 *  Custom options are defined in constants
 */

import Swiper, { Navigation, Pagination, Lazy, A11y } from 'swiper'
import swiperOptions from './_swiperOptions.js'

/* Deprecation warning:
 * .BaseCarouselCards is deprecated and will be removed in the next major release. Use .MixinCarousel instead.
 */
const MixinCarousel = new Swiper(
  '.MixinCarousel .swiper, .BaseCarouselCards .swiper',
  {
    modules: [Navigation, Lazy, A11y, Pagination],
    ...swiperOptions.MixinCarousel,
  }
)

const BlockImageCarousel = new Swiper('.BlockImageCarousel .swiper', {
  modules: [Navigation, Lazy, A11y, Pagination],
  ...swiperOptions.BlockImageCarousel,
})
