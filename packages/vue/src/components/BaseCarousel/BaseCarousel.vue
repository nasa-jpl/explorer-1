<template>
  <div class="BaseCarousel w-full overflow-hidden relative">
    <div
      ref="BaseCarousel"
      class="swiper relative"
    >
      <div class="swiper-wrapper">
        <slot />
      </div>
      <div class="swiper-nav lg:block absolute bottom-0 right-0 z-100">
        <div class="relative z-10 flex">
          <BaseButton
            class="swiper-prev xl:text-xl border-collapse"
            aria-label="Previous slide"
          >
            <template #icon>
              <IconPrev />
            </template>
          </BaseButton>
          <BaseButton
            class="swiper-next xl:text-xl border-collapse"
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
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import Swiper from 'swiper'
import { A11y, Navigation } from 'swiper/modules'
import type { SwiperOptions } from 'swiper/types'
import swiperOptions from '@explorer-1/common/src/js/_swiperOptions'
import IconPrev from './../Icons/IconPrev.vue'
import IconNext from './../Icons/IconNext.vue'
import BaseButton from './../BaseButton/BaseButton.vue'
const BaseCarouselOptions = swiperOptions.BlockImageCarousel

Swiper.use([Navigation, A11y])

export default defineComponent({
  name: 'BaseCarousel',
  components: {
    BaseButton,
    IconPrev,
    IconNext
  },
  props: {
    loop: {
      type: Boolean,
      default: false
    },
    itemRole: {
      type: String,
      default: undefined
    }
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
        ...BaseCarouselOptions,
        loop: this.loop,
        // this component has custom pagination
        pagination: false,
        a11y: {
          slideRole: this.itemRole as string | undefined
        }
      }
    }
  },
  computed: {},
  watch: {
    slide(value) {
      this.slideTo(value)
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      this.slider = new Swiper(this.$refs.BaseCarousel as HTMLElement, this.sliderOptions)
      this.currentIndex = this.slider.realIndex
    },
    updateIndex(val: number) {
      this.currentIndex = val
    },
    slideTo(val: number) {
      if (this.slider) {
        this.slider.slideTo(val)
      }
    }
  }
})
</script>
<style lang="scss">
@import 'swiper/swiper-bundle.css';
.BaseCarousel {
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

  .swiper-nav {
    padding-top: 56.25%;
  }

  // .swiper-dots {
  //   padding-top: 56.25%;
  //   @apply pointer-events-none;

  //   .swiper-dot {
  //     @apply inline-block px-1 py-3 cursor-pointer pointer-events-auto;

  //     &:focus {
  //       @apply outline-none ring-1;
  //     }

  //     > span {
  //       @apply inline-block w-3 h-3 rounded-full bg-gray-light-mid;
  //     }

  //     &.swiper-dot-active {
  //       > span {
  //         @apply bg-primary;
  //       }
  //     }
  //   }
  // }
}
</style>
