/* Swiper
 *  Configured to use any modules that are needed site-wide (SwiperCore.use([]))
 *  Custom options are defined in constants
 */
import Swiper from 'swiper'
import { A11y, Navigation, Pagination } from 'swiper/modules'
import swiperOptions from './_swiperOptions.js'

export function initMixinCarousel() {
  return new Swiper('.MixinCarousel .swiper', {
    modules: [A11y, Navigation, Pagination],
    ...swiperOptions.MixinCarousel
  }).init()
}

export function initBlockImageCarousel() {
  return new Swiper('.BlockImageCarousel .swiper', {
    modules: [A11y, Navigation, Pagination],
    ...swiperOptions.BlockImageCarousel
  })
}
