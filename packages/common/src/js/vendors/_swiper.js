/* Swiper
 * Configured to use any modules that are needed site-wide (Swiper.use([]))
 * Custom options are defined in constants
 */
import Swiper from 'swiper'
import { A11y, Navigation, Pagination } from 'swiper/modules'
import swiperOptions from './_swiperOptions.js'

// Register modules globally
Swiper.use([A11y, Navigation, Pagination])

export function initMixinCarousel() {
  return new Swiper('.MixinCarousel .swiper', {
    ...swiperOptions.MixinCarousel
  })
}

export function initBlockImageCarousel() {
  return new Swiper('.BlockImageCarousel .swiper', {
    ...swiperOptions.BlockImageCarousel
  })
}
