/* Swiper
 *  Configured to use any modules that are needed site-wide (SwiperCore.use([]))
 *  Custom options are defined in constants
 */

import Swiper, { Navigation, Pagination, Lazy, A11y } from 'swiper'
import swiperOptions from './_swiperOptions.js'
Swiper.use([Navigation, Lazy, A11y, Pagination])

const BaseCarouselCards = new Swiper(
  '.BaseCarouselCards .swiper',
  swiperOptions.BaseCarouselCards
)

const BlockImageCarousel = new Swiper(
  '.BlockImageCarousel .swiper',
  swiperOptions.BlockImageCarousel
)
