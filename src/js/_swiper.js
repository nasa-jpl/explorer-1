/* Swiper
 *  Configured to use any modules that are needed site-wide (SwiperCore.use([]))
 *  Custom options are defined in constants
 */

import SwiperCore, { Navigation, Pagination, Lazy, A11y } from 'swiper/core'
SwiperCore.use([Navigation, Lazy, A11y, Pagination])

// define options for each component

// default options
const SwiperDefaults = new SwiperCore(
  '.BlockCarouselDefault .swiper-container',
  {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  }
)

// example of customized options
const SwiperBlockCarouselExample = new SwiperCore(
  '.BlockCarouselExample .swiper-container',
  {
    slidesPerView: 1.25,
    speed: 500,
    threshold: 20, // swipe threshold in px
    spaceBetween: 28,
    watchOverflow: true,
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    loop: false,
    preloadImages: false,
    // check swiper.js docs to learn how to use lazy loading on slide elements
    // https://swiperjs.com/api/#lazy
    lazy: {
      loadPrevNext: true,
      loadOnTransitionStart: true,
      loadPrevNextAmount: 2,
    },
    breakpoints: {
      640: {
        slidesPerView: 1.25,
      },
      768: {
        slidesPerView: 2.25,
      },
      1280: {
        slidesPerView: 3.25,
        spaceBetween: 56,
      },
    },
  }
)
