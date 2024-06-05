<template>
  <div class="MissionHighlightsCarousel ThemeVariantDark w-full overflow-hidden">
    <div ref="MissionHighlightsCarousel" class="swiper">
      <div class="swiper-wrapper">
        <MissionDetailHighlightsCarouselItem
          v-for="(item, index) in items"
          :key="index"
          :item="item"
          class="swiper-slide"
        />
      </div>

      <div
        class="border-jpl-red-light lg:mt-12 flex justify-between w-full mt-5 border-t"
        :class="{ hidden: items.length === 1 }"
      >
        <div class="swiper-dots -mb-2 -ml-2">
          <button
            v-for="(item, index) in items"
            :key="index"
            class="group inline-block px-2 pt-3 cursor-pointer"
            :aria-label="'Go to slide ' + (index + 1)"
            @click="slideTo(index + 1)"
          >
            <span
              class="can-hover:group-hover:bg-jpl-red-light can-hover:group-hover:opacity-100 inline-block w-3 h-3 rounded-full"
              :class="
                currentIndex === index
                  ? 'bg-jpl-red-light'
                  : 'bg-white opacity-25'
              "
            ></span>
          </button>
        </div>

        <div class="swiper-nav">
          <div class="flex justify-end w-full">
            <div class="flex">
              <BaseButton
                class="swiper-prev xl:text-base text-sm border-collapse"
                aria-label="Previous slide"
              >
                <template #icon>
                  <IconPrev />
                </template>
              </BaseButton>
              <BaseButton
                class="swiper-next xl:text-base text-sm border-collapse"
                aria-label="Next slide"
              >
                <template #icon>
                  <IconNext />
                </template>
              </BaseButton>
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
import type { Slide } from './MissionDetailHighlightsCarouselItem.vue'
import Swiper from 'swiper'
import { A11y, Navigation } from 'swiper/modules'
import type { SwiperOptions } from 'swiper/types'
import MissionDetailHighlightsCarouselItem from './MissionDetailHighlightsCarouselItem.vue'
import IconPrev from './../Icons/IconPrev.vue'
import IconNext from './../Icons/IconNext.vue'
import BaseButton from './../BaseButton/BaseButton.vue'

Swiper.use([Navigation, A11y])

export default defineComponent({
  name: 'MissionDetailHighlightsCarousel',
  components: {
    BaseButton,
    IconPrev,
    IconNext,
    MissionDetailHighlightsCarouselItem,
  },
  props: {
    items: {
      type: Array as PropType<Slide[]>,
      required: true,
      default: () => [],
    },
  },
  data(): {
    currentIndex: number
    slider: Swiper | null
    currentCaption: string
    sliderOptions: SwiperOptions
  } {
    return {
      currentIndex: 0,
      currentCaption: '',
      slider: null,
      sliderOptions: {
        slidesPerView: 1,
        speed: 500,
        threshold: 20, // swipe threshold in px
        loop: true,
        spaceBetween: 20,
        watchSlidesProgress: true,
        navigation: {
          nextEl: '.swiper-next',
          prevEl: '.swiper-prev',
        },
        on: {
          slideChange: (swiper: Swiper) => {
            ;(this as any).updateIndex(swiper.realIndex)
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
      if (this.items.length > 1) {
        this.slider = new Swiper(
          this.$refs.MissionHighlightsCarousel as HTMLElement,
          this.sliderOptions
        )
        this.currentIndex = this.slider.realIndex
      }
    },
    updateIndex(val: number) {
      this.currentIndex = val
    },
    slideTo(val: number) {
      if (this.slider) {
        this.slider.slideTo(val)
      }
    },
  },
})
</script>
<style lang="scss">
@import 'swiper/swiper-bundle.css';

.MissionHighlightsCarousel {
  .swiper {
    .swiper-prev {
      @apply mr-px;
    }

    .swiper-prev,
    .swiper-next {
      &.swiper-button-disabled {
        @apply opacity-75 cursor-default bg-none;
      }
    }
  }
}
</style>
