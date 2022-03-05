/* Swiper
 *  Configured to use any modules that are needed site-wide (SwiperCore.use([]))
 *  Custom options are defined in constants
 */

import Swiper, { Navigation, Pagination, Lazy, A11y } from 'swiper'
import swiperOptions from './_swiperOptions.js'

const MixinCarousel = new Swiper('.MixinCarousel .swiper', {
  modules: [Navigation, Lazy, A11y, Pagination],
  ...swiperOptions.MixinCarousel,
})

const BlockImageCarousel = new Swiper('.BlockImageCarousel .swiper', {
  modules: [Navigation, Lazy, A11y, Pagination],
  ...swiperOptions.BlockImageCarousel,
})
