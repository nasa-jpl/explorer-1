/* Swiper
 * Configured to use any modules that are needed site-wide (Swiper.use([]))
 * Custom options are defined in constants
 */
import Swiper from 'swiper'
import { A11y, Navigation, Pagination } from 'swiper/modules'
import swiperOptions from '@explorer-1/common/src/js/vendors/_swiperOptions.js'

// 1. REGISTER MODULES GLOBALLY
// Swiper 9+ requires modules to be registered using Swiper.use()
Swiper.use([A11y, Navigation, Pagination])

export function initMixinCarousel() {
  // 2. Remove 'modules' option (they are registered globally) and the redundant .init() call
  return new Swiper('.MixinCarousel .swiper', {
    ...swiperOptions.MixinCarousel
  })
}

export function initBlockImageCarousel() {
  // 3. Remove 'modules' option (they are registered globally)
  return new Swiper('.BlockImageCarousel .swiper', {
    ...swiperOptions.BlockImageCarousel
  })
}
