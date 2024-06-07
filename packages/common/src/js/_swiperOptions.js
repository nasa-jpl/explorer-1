/* Swiper Options
 * Can be imported for use in other swiper instances
 */

const swiperOptions = {
  MixinCarousel: {
    init: false,
    slidesPerView: 1.25,
    speed: 500,
    threshold: 20, // swipe threshold in px
    spaceBetween: 28,
    watchOverflow: true,
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    loop: false,
    preloadImages: false,
    lazy: {
      loadPrevNext: true,
      loadOnTransitionStart: true,
      loadPrevNextAmount: 2
    },
    navigation: {
      nextEl: '.swiper-next',
      prevEl: '.swiper-prev'
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 28
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 28
      },
      1280: {
        slidesPerView: 2,
        spaceBetween: 56
      }
    },
    on: {
      init(swiper) {
        const classList = swiper.el.classList
        classList.replace('opacity-0', 'opacity-100')
      }
    }
  },
  BlockImageCarousel: {
    slidesPerView: 1,
    speed: 500,
    threshold: 20, // swipe threshold in px
    loop: false,
    preloadImages: false,
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    lazy: true,
    navigation: {
      nextEl: '.swiper-next',
      prevEl: '.swiper-prev'
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
      bulletClass: 'swiper-dot',
      bulletActiveClass: 'swiper-dot-active',
      renderBullet: function (index, className) {
        return `<button class="${className}" arial-label="Go to slide ${index}"><span></span></button>`
      }
    }
  }
}

/* Deprecation warning:
 * BaseCarouselCards is deprecated and will be removed in the next major release. Use MixinCarousel instead.
 */
Object.assign(swiperOptions, { BaseCarouselCards: swiperOptions.MixinCarousel })

export default swiperOptions
