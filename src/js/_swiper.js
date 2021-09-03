/* Swiper
 *  Configured to use any modules that are needed site-wide (SwiperCore.use([]))
 *  Custom options are defined in constants
 */

import swiperOptions from './_swiperOptions.js'

import SwiperCore, { Navigation, Pagination, Lazy, A11y } from 'swiper/core'
SwiperCore.use([Navigation, Lazy, A11y, Pagination])

const BaseCarouselCards = new SwiperCore(
  '.BaseCarouselCards .swiper-container',
  swiperOptions.BaseCarouselCards
)

const BlockImageCarousel = new SwiperCore(
  '.BlockImageCarousel .swiper-container',
  swiperOptions.BlockImageCarousel
)
