<template>
  <section
    v-if="data"
    class="HomepageMissionsCarousel ThemeVariantDark max-w-screen-3xl mx-auto overflow-hidden text-white bg-black"
  >
    <div
      class="lg:BaseGrid lg:py-24 pt-14 container flex flex-col pb-5 mx-auto"
    >
      <div class="xl:px-0 lg:col-end-8 xl:col-end-7 order-1 col-start-2 px-4">
        <p v-if="data.label" class="text-subtitle text-jpl-red-light mb-3">
          {{ data.label }}
        </p>
        <BaseHeading v-if="data.heading" level="h2" class="mb-3">
          {{ data.heading }}
        </BaseHeading>
        <p v-if="data.summary" class="text-body-md">
          {{ data.summary }}
        </p>
      </div>
      <div
        class="lg:order-2 xl:px-0 flex justify-end order-3 col-start-10 col-end-13 px-4"
      >
        <BaseLink :to="{ name: 'missions' }" variant="primary">
          All Missions
        </BaseLink>
      </div>
      <!-- Slider main container -->
      <div class="lg:order-3 order-2 col-start-2 col-end-12">
        <div
          ref="HomepageMissionsCarousel"
          class="swiper lg:mt-0 lg:mb-0 mb-14 mt-3"
        >
          <!-- Additional required wrapper -->
          <nav :aria-label="data.heading || 'Missions'" class="swiper-wrapper">
            <!-- slide -->
            <HomepageMissionsCarouselItem
              v-for="(item, index) in data.targets"
              :key="index"
              :data="item"
              class="swiper-slide"
            />
          </nav>
          <!-- swiper navigation -->
          <div
            class="swiper-navigation xl:block absolute top-0 left-0 hidden w-full"
          >
            <div class="top-1/2 absolute left-0 z-30">
              <BaseButton
                class="swiper-prev xl:text-base -ml-16"
                :aria-label="data.heading + ' - Previous slide'"
              >
                <template #icon>
                  <span class="arrow-wrapper" aria-hidden="true">
                    <span class="arrow">
                      <IconPrev />
                    </span>
                    <span class="arrow-fixed">
                      <IconPrev />
                    </span>
                  </span>
                </template>
              </BaseButton>
            </div>
            <div class="top-1/2 absolute right-0 z-30">
              <BaseButton
                class="swiper-next xl:text-base -mr-16"
                :aria-label="data.heading + ' - Next slide'"
              >
                <template #icon>
                  <span class="arrow-wrapper" aria-hidden="true">
                    <span class="arrow">
                      <IconNext />
                    </span>
                    <span class="arrow-fixed">
                      <IconNext />
                    </span>
                  </span>
                </template>
              </BaseButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
// @ts-nocheck
import { defineComponent } from 'vue'
import { Swiper, Navigation, Lazy, A11y } from 'swiper'
import type { SwiperOptions } from 'swiper'
import IconPrev from './../Icons/IconPrev.vue'
import IconNext from './../Icons/IconNext.vue'
import BaseLink from './../BaseLink/BaseLink.vue'
import BaseHeading from './../BaseHeading/BaseHeading.vue'
import BaseButton from './../BaseButton/BaseButton.vue'
import HomepageMissionsCarouselItem from './../HomepageMissionsCarousel/HomepageMissionsCarouselItem.vue'
Swiper.use([Navigation, Lazy, A11y])

export default defineComponent({
  name: 'HomepageMissionsCarousel',
  components: {
    BaseLink,
    BaseHeading,
    BaseButton,
    IconPrev,
    IconNext,
    HomepageMissionsCarouselItem,
  },
  props: {
    data: {
      type: Object,
      required: false,
    },
  },
  data(): {
    slider: Swiper | null
    sliderOptions: SwiperOptions
  } {
    return {
      slider: null,
      sliderOptions: {
        slidesPerView: 1.5,
        speed: 500,
        threshold: 20, // swipe threshold in px
        spaceBetween: 0,
        centeredSlides: true,
        loop: true,
        preloadImages: false,
        // check swiper.js docs to learn how to use lazy loading on slide elements
        // https://swiperjs.com/api/#lazy
        lazy: {
          loadPrevNext: true,
          loadOnTransitionStart: true,
          loadPrevNextAmount: 2,
        },
        navigation: {
          nextEl: '.swiper-next',
          prevEl: '.swiper-prev',
        },
        a11y: {
          prevSlideMessage: this.data.heading
            ? this.data.heading + ' - Previous slide'
            : 'Previous slide',
          nextSlideMessage: this.data.heading
            ? this.data.heading + ' - Next slide'
            : 'Next slide',
        },
        breakpoints: {
          640: {
            slidesPerView: 1.5,
          },
          768: {
            slidesPerView: 2,
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 56,
          },
        },
        on: {
          init(swiper: Swiper) {
            swiper.$el.removeClass('opacity-0')
            swiper.$el.addClass('opacity-100')
          },
        },
      },
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      this.slider = new Swiper(
        this.$refs.HomepageMissionsCarousel as HTMLElement,
        this.sliderOptions
      )
    },
  },
})
</script>
<style lang="scss">
@import 'swiper/swiper-bundle.css';

.HomepageMissionsCarousel {
  background-image: url('~@/assets/images/jpg/bg-stars-muted.jpg');
  background-size: cover;
  // container styles
  .swiper {
    @apply overflow-visible #{!important};

    .swiper-navigation {
      top: 20%;
    }

    .swiper-prev,
    .swiper-next {
      @apply -mt-1 w-auto h-auto transform -translate-y-1/2;

      &.swiper-button-disabled {
        @apply invisible;
      }
      // shared styles for the arrow animation
      &.BaseButton {
        @apply transition-none #{!important};
      }

      &.BaseButton > .label {
        @apply flex overflow-hidden;

        > .arrow-wrapper {
          @apply block relative w-full h-full overflow-hidden;

          > .arrow {
            @apply block;
          }

          > .arrow-fixed {
            @apply absolute top-0 left-0 block;
          }
        }
        @include hover {
          > .arrow-wrapper > .arrow,
          > .arrow-wrapper > .arrow-fixed {
            animation-delay: 50ms !important; // hover intent
          }
        }
      }
    }
    @screen lg {
      // specific directional animation
      .swiper-next.BaseButton > .label {
        @include hover {
          > .arrow-wrapper > .arrow {
            animation: arrow-carousel-next-anim 0.1s linear normal;
          }

          > .arrow-wrapper > .arrow-fixed {
            animation: arrow-carousel-next-fixed-anim 0.1s linear normal;
          }
        }
      }

      .swiper-prev.BaseButton > .label {
        @include hover {
          > .arrow-wrapper > .arrow {
            animation: arrow-carousel-prev-anim 0.1s linear normal;
          }

          > .arrow-wrapper > .arrow-fixed {
            animation: arrow-carousel-prev-fixed-anim 0.1s linear normal;
          }
        }
      }
    }
  }

  // fade in lazy loaded slides
  .swiper-lazy {
    @apply opacity-0;

    &.swiper-lazy-loaded {
      @apply opacity-100;
    }
  }
}
</style>
