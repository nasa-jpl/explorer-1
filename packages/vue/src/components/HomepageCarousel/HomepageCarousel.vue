<template>
  <div
    v-if="items"
    class="HomepageCarousel max-w-screen-3xl mx-auto"
  >
    <!-- standalone "nav" just for screen readers -->
    <nav
      aria-label="Features"
      class="sr-only"
    >
      <ul>
        <li
          v-for="(item, index) in items"
          :key="index"
        >
          <BaseLink
            variant="none"
            :href="item.externalLink ? item.externalLink : undefined"
            :to="item.page && item.page.url && !item.externalLink ? item.page.url : undefined"
          >
            {{ item.slideTitle }}
          </BaseLink>
        </li>
      </ul>
    </nav>
    <div
      class="relative w-full overflow-hidden"
      role="presentation"
    >
      <div
        ref="HomepageCarouselSlider"
        class="HomepageCarouselSlider swiper"
      >
        <div class="swiper-wrapper">
          <HomepageCarouselItem
            v-for="(item, index) in items"
            :key="index"
            :item="item"
            class="swiper-slide"
          />
        </div>
        <!-- mobile pagination -->
        <div
          v-if="!onlyOneSlide"
          class="lg:hidden pb-14 absolute bottom-0 w-full"
        >
          <div class="swiper-pagination container">
            <!-- Render before swiper initializes and replaces content to prevent content shifting -->
            <template
              v-for="(_item, index) in items"
              :key="index"
            >
              <span
                :class="`swiper-pagination-bullet${
                  index === 0 ? ' swiper-pagination-bullet-active' : ''
                }`"
              ></span>
            </template>
          </div>
        </div>
        <!-- progress bar and navigation -->
        <div
          v-if="!onlyOneSlide"
          class="lg:block text-contrast absolute inset-x-0 bottom-0 z-10 hidden text-left text-white bg-black bg-opacity-50"
        >
          <!-- progress bar -->
          <div class="h-2px w-full bg-transparent">
            <transition name="load">
              <div
                v-if="slideLoaded"
                class="h-2px w-full bg-white bg-opacity-50 -translate-x-full"
                :style="`transition-duration: ${duration}ms`"
              ></div>
            </transition>
          </div>
          <!-- tabbed navigation -->
          <div
            class="HomepageCarouselTabs relative container overflow-hidden px-0 mx-auto pt-5 pb-22"
          >
            <!-- offset by one tab to allow for previous slide transitions -->
            <div class="w-full -translate-x-1/5 ml-10 pr-10 2xl:ml-0 2xl:pr-0">
              <!-- tab container width adjusts automatically according to slide count when there are less than 6 slides -->
              <div :class="tabContainerWidthClass">
                <!-- translate amount depends on tab container width, so the class is applied dynamically -->
                <div
                  class="flex flex-nowrap"
                  :class="tabTranslateClass"
                >
                  <BaseLink
                    v-for="(item, index) in tabbedItems"
                    :key="index"
                    variant="none"
                    :href="item.externalLink ? item.externalLink : undefined"
                    :to="
                      item.page && item.page.url && !item.externalLink ? item.page.url : undefined
                    "
                    external-target-blank
                    class="pr-5 flex-shrink-0 h-auto translate-x-0"
                    :class="tabWidthClass"
                    :link-class="`
                      group
                      border-opacity-30 border-r border-white
                      can-hover:hover:text-white
                      can-hover:hover:text-opacity-100
                      flex
                      items-start
                      h-full
                      px-5
                      -ml-5
                      font-semibold
                      text-base text-left text-white text-opacity-75
                      transition-all duration-200 ease-in
                      ${index === 0 ? '!text-white' : ''}
                      `"
                  >
                    <span>
                      {{ item.slideTitle }}
                    </span>
                  </BaseLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import type { Slide } from './../HomepageCarouselItem/HomepageCarouselItem.vue'
import { mixinTransparentHeader } from '../../utils/mixins'
import Swiper from 'swiper'
import { A11y, Pagination, EffectFade, Autoplay } from 'swiper/modules'
import type { SwiperOptions } from 'swiper/types'
import BaseLink from './../BaseLink/BaseLink.vue'
import HomepageCarouselItem from './../HomepageCarouselItem/HomepageCarouselItem.vue'

Swiper.use([Pagination, A11y, EffectFade, Autoplay])

export default defineComponent({
  name: 'HomepageCarousel',
  components: {
    BaseLink,
    HomepageCarouselItem
  },
  props: {
    items: {
      type: Array as PropType<Slide[]>,
      required: false
    },
    duration: {
      type: Number,
      default: 5000
    }
  },
  data(): {
    slideLoaded: boolean
    slider: Swiper | null
    sliderOptions: SwiperOptions
    tabbedItems: Slide[] | undefined
    slideToNext: Boolean
    theIndex: number
  } {
    return {
      slideLoaded: false,
      slider: null,
      sliderOptions: {
        effect: 'fade',
        slidesPerView: 1,
        speed: 500, // transition speed
        threshold: 20, // swipe threshold in px
        followFinger: false, // disables partial transitions when dragging
        longSwipesRatio: 0.01, // adjusts sensitivity for click and drag
        autoplay: {
          delay: this.duration,
          disableOnInteraction: false
        },
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        lazyPreloadPrevNext: 1,
        on: {
          transitionStart: () => {
            ;(this as any).slideLoaded = false
          },
          transitionEnd: () => {
            ;(this as any).slideLoaded = true
            ;(this as any).slideToNext = true
            ;(this as any).updateTabbedItems()
          },
          sliderMove: (swiper: Swiper) => {
            if (swiper.touches.diff > 0) {
              ;(this as any).slideToNext = false
            } else {
              ;(this as any).slideToNext = true
            }
          },
          slideChange: (swiper: Swiper) => {
            // @ts-ignore
            this.theIndex = swiper.realIndex
            ;(this as any).videoHandler(swiper)
          }
        }
      },
      theIndex: 0,
      tabbedItems: undefined,
      slideToNext: true
    }
  },
  computed: {
    onlyOneSlide(): boolean {
      return this.items?.length === 1
    },
    loopedTabs(): Array<Slide> {
      // used to "cycle" through tabbed items
      // return a looped array starting at the active slide
      const items = this.items
      // offset by one to avoid slice(0,0) in reorderedItems
      const index: number = this.theIndex ? this.theIndex + 1 : 1
      if (index && items) {
        const reorderedItems = [...items.slice(index - 1), ...items.slice(0, index)]
        return reorderedItems
      }
      return this.items as Array<Slide>
    },
    tabContainerWidthClass(): string {
      /* corresponds with how many tabs will appear in the container
       * visible tabs = number of slides - 1; (active tab is not visible), maximum of 5
       * container width = visible tabs/5 + 'w-1/5'; to account for offset that allows for previous tab transition
       * simplified = number of slides/5
       */
      if (this.items?.length === 2) {
        return 'overflow-hidden w-2/5'
      } else if (this.items?.length === 3) {
        return 'overflow-hidden w-3/5'
      } else if (this.items?.length === 4) {
        return 'overflow-hidden w-4/5'
      } else if (this.items?.length === 5) {
        return 'overflow-hidden container px-0'
      }
      return 'overflow-visible container px-0'
    },
    tabWidthClass(): string {
      if (this.items?.length === 2) {
        return 'w-1/2'
      } else if (this.items?.length === 3) {
        return 'w-1/3'
      } else if (this.items?.length === 4) {
        return 'w-1/4'
      } else if (this.items?.length === 5) {
        return 'w-1/5'
      }
      return 'w-1/5'
    },
    tabTranslateClass(): string {
      let computedClass = ''
      if (this.slideToNext) {
        if (this.items?.length === 2) {
          computedClass = '-translate-x-1/2'
        } else if (this.items?.length === 3) {
          computedClass = '-translate-x-1/3'
        } else if (this.items?.length === 4) {
          computedClass = '-translate-x-1/4'
        } else {
          computedClass = '-translate-x-1/5'
        }
      } else if (!this.slideToNext) {
        if (this.items?.length === 2) {
          computedClass = 'translate-x-1/2'
        } else if (this.items?.length === 3) {
          computedClass = 'translate-x-1/3'
        } else if (this.items?.length === 4) {
          computedClass = 'translate-x-1/4'
        } else {
          computedClass = 'translate-x-1/5'
        }
      }
      if (!this.slideLoaded) {
        computedClass += ' transform transition-transform duration-500'
      }
      return computedClass
    }
  },
  mounted() {
    mixinTransparentHeader()
    this.init()
  },
  methods: {
    init() {
      // initializes the sliders with different settings depending on slideshow length
      if (this.onlyOneSlide) {
        // only one slide, no need to loop or autoplay
        this.slider = new Swiper(this.$refs.HomepageCarouselSlider as HTMLElement, {
          ...this.sliderOptions,
          loop: false,
          autoplay: false
        })
      } else {
        this.slider = new Swiper(
          this.$refs.HomepageCarouselSlider as HTMLElement,
          this.sliderOptions
        )
      }
      this.updateTabbedItems()
      this.slideLoaded = true
      this.videoHandler(this.slider)
    },
    updateTabbedItems() {
      this.tabbedItems = this.loopedTabs
    },
    videoHandler(swiper: Swiper) {
      const indexCurrentSlide = swiper.activeIndex
      const currentVideo = this.getVideo(indexCurrentSlide, swiper)
      //  make sure video starts at the beginning once in view
      if (currentVideo) {
        currentVideo.autoplay = true
        currentVideo.load()
      }
      // pause video playback when no longer the active slide
      if (swiper.previousIndex) {
        const indexPreviousSlide = swiper.previousIndex
        const previousVideo = this.getVideo(indexPreviousSlide, swiper)
        if (previousVideo) {
          previousVideo.pause()
        }
      }
    },
    // factory function to retrieve the video element from a slide
    getVideo(index: number, swiper: Swiper): HTMLVideoElement | null {
      const slide = swiper.slides[index] as HTMLElement
      if (slide) {
        const video = slide.getElementsByTagName('video')
        if (video.length) {
          return video[0]
        }
      }
      return null
    }
  }
})
</script>
<style lang="scss">
@import 'swiper/swiper-bundle.css';

.HomepageCarousel {
  .HomepageCarouselSlider {
    .swiper-pagination {
      @apply relative text-left mx-auto pl-3;

      span {
        @apply py-2 pl-1 pr-2 h-auto w-auto bg-transparent m-0 opacity-100;

        &::before {
          content: '';
          width: 0.65rem;
          height: 0.65rem;
          @apply block rounded-full bg-white bg-opacity-40;
        }

        &.swiper-pagination-bullet-active {
          &::before {
            @apply bg-jpl-red;
          }
        }
      }
    }
  }

  .load-enter-active {
    transition: transform 500ms linear;
  }

  .load-leave-active {
    transition: none;
  }

  .load-enter-to {
    @apply translate-x-0;
  }
}
</style>
