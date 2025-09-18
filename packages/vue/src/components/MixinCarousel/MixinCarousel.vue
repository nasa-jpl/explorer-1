<template>
  <component
    :is="noLinks ? 'div' : 'nav'"
    class="MixinCarousel w-full overflow-x-hidden"
    :class="variantClass"
    :aria-label="heading"
  >
    <div
      class="BaseGrid container overflow-x-visible"
      :class="{ 'mx-auto': center }"
    >
      <div
        v-if="heading || link"
        :class="colStart"
        class="lg:pl-0 col-start-1 col-end-13 px-4 mb-1 print:px-0"
      >
        <div class="sm:flex flex-wrap items-center justify-between">
          <h2
            v-if="heading"
            class="MixinCarousel__Heading text-h3 defaultTheme:uppercase"
          >
            {{ heading }}
          </h2>
          <BaseLink
            v-if="link"
            class="sm:block hidden"
            variant="primary"
            :to="typeof link === 'object' ? link : undefined"
            :href="typeof link != 'object' ? link : undefined"
            v-bind="$attrs"
          >
            {{ linkTitle || link }}
          </BaseLink>
        </div>
      </div>
      <div
        :class="colStart"
        class="lg:pl-0 sm:col-end-11 3xl:col-end-12 col-start-1 col-end-13 pl-4 print:pl-0 overflow-x-visible"
      >
        <!-- Slider main container -->
        <div
          ref="MixinCarousel"
          class="swiper transition-opacity duration-500 ease-in opacity-0"
        >
          <!-- Additional required wrapper -->
          <div class="swiper-wrapper">
            <slot />
          </div>
          <div
            class="swiper-navigation xl:block absolute top-0 left-0 hidden w-full ThemeVariantLight"
          >
            <div class="xl:-ml-22 top-1/2 absolute left-0 z-30 -ml-20">
              <BaseButton
                class="swiper-prev xl:text-xl"
                :aria-label="heading + ' - Previous slide'"
              >
                <template #icon>
                  <span
                    class="arrow-wrapper"
                    aria-hidden="true"
                  >
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
            <div class="xl:-mr-22 top-1/2 absolute right-0 z-30 -mr-20">
              <BaseButton
                class="swiper-next xl:text-xl"
                :aria-label="heading + ' - Next slide'"
              >
                <template #icon>
                  <span
                    class="arrow-wrapper"
                    aria-hidden="true"
                  >
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
  </component>
</template>
<script lang="ts">
// @ts-nocheck
import { defineComponent } from 'vue'
import Swiper from 'swiper'
import { A11y, Navigation } from 'swiper/modules'
import type { SwiperOptions } from 'swiper/types'
import swiperOptions from '@explorer-1/common/src/js/_swiperOptions'

import IconPrev from './../Icons/IconPrev.vue'
import IconNext from './../Icons/IconNext.vue'
import BaseLink from './../BaseLink/BaseLink.vue'
import BaseButton from './../BaseButton/BaseButton.vue'

const MixinCarouselOptions = swiperOptions.MixinCarousel

Swiper.use([Navigation, A11y])

interface Variants {
  [key: string]: string
}

export const variants: Variants = {
  cards: '-cards',
  tiles: '-tiles'
}

interface Indents {
  [key: string]: string
}

export const indents: Indents = {
  'col-1': '',
  'col-2': 'lg:col-start-2',
  'col-3': 'lg:col-start-3'
}

export default defineComponent({
  name: 'MixinCarousel',
  components: {
    BaseLink,
    BaseButton,
    IconPrev,
    IconNext
  },
  props: {
    // set to true if the carousel items don't link to anything
    noLinks: {
      type: Boolean,
      required: false,
      default: false
    },
    heading: {
      type: String,
      required: false
    },
    link: {
      type: [String, Object],
      required: false
    },
    linkTitle: {
      type: String,
      required: false
    },
    variant: {
      type: String,
      required: false,
      default: 'cards',
      validator: (prop: string): boolean => Object.keys(variants).includes(prop)
    },
    slidesPerView: {
      type: Number,
      required: false,
      default: 2
    },
    indent: {
      type: String,
      required: false,
      default: 'col-2',
      validator: (prop: string): boolean => Object.keys(indents).includes(prop)
    },
    center: {
      type: Boolean,
      required: false,
      default: true
    },
    initialSlide: {
      type: Number,
      required: false,
      default: 0
    }
  },
  data(): {
    slider: Swiper | null
    sliderOptions: SwiperOptions
  } {
    return {
      slider: null,
      // provide a few more options using props
      sliderOptions: {
        ...MixinCarouselOptions,
        initialSlide: this.initialSlide,
        watchSlidesProgress: true,
        a11y: {
          prevSlideMessage: this.heading ? this.heading + ' - Previous slide' : 'Previous slide',
          nextSlideMessage: this.heading ? this.heading + ' - Next slide' : 'Next slide',
          slideRole: 'link'
        },
        on: {
          ...MixinCarouselOptions.on,
          progress(swiper) {
            const classList = swiper.el.classList
            classList.replace('opacity-0', 'opacity-100')
            swiper.slides.forEach((slide) => {
              if (slide.classList.contains('swiper-slide-fully-visible')) {
                slide.setAttribute('aria-hidden', 'false')
                slide.setAttribute('role', 'link')
              } else {
                slide.setAttribute('role', 'presentation')
              }
            })
          }
        },
        breakpoints: {
          ...MixinCarouselOptions.breakpoints,
          1024: {
            slidesPerView: this.slidesPerView
          },
          1280: {
            slidesPerView: this.slidesPerView,
            spaceBetween: 56
          }
        }
      }
    }
  },
  computed: {
    variantClass(): string {
      return variants[this.variant]
    },
    colStart(): string {
      return indents[this.indent]
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      this.slider = new Swiper(this.$refs.MixinCarousel as HTMLElement, this.sliderOptions)
      this.slider.init()
    }
  }
})
</script>
<style lang="scss">
@import 'swiper/swiper-bundle.css';
@import '@explorer-1/common/src/scss/components/MixinCarousel';
</style>
