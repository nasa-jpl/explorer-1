<template>
  <div
    v-if="items"
    class="BlockImageCarousel w-full overflow-hidden"
  >
    <div
      ref="BlockImageCarousel"
      class="swiper"
    >
      <div class="swiper-wrapper">
        <slot name="firstSlide"></slot>
        <BlockImageCarouselItem
          v-for="(item, index) in items"
          :key="index"
          :image="item.image"
          :caption="item.caption"
          :display-caption="item.displayCaption"
          :block-id="blockId"
          :show-title="showTitle"
          class="swiper-slide"
        />
      </div>
      <div class="swiper-nav lg:block absolute inset-x-0 top-0 hidden h-0 overflow-hidden z-70">
        <div class="absolute inset-0">
          <div class="absolute bottom-0 right-0 z-10 flex">
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
      <div class="swiper-dots lg:hidden absolute top-0 z-50 w-full text-center">
        <button
          v-for="(_item, index) in itemsMobileNav"
          :key="index"
          class="pointer-events-auto inline-block px-1 py-3 cursor-pointer"
          :aria-label="'Go to slide ' + (hasCover ? index : index + 1)"
          @click="slideTo(hasCover ? index : index + 1)"
        >
          <span
            class="inline-block w-3 h-3 rounded-full"
            :class="currentIndex === index ? 'bg-primary' : 'bg-gray-light-mid'"
          ></span>
        </button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import swiperOptions from '@explorer-1/common/src/js/_swiperOptions'
import Swiper from 'swiper'
import { A11y, Navigation } from 'swiper/modules'
import type { SwiperOptions } from 'swiper/types'
import type { PropType } from 'vue'
import { defineComponent } from 'vue'
import type { ImageObject } from '../../interfaces'
import BaseButton from './../BaseButton/BaseButton.vue'
import BlockImageCarouselItem from './../BlockImageCarouselItem/BlockImageCarouselItem.vue'
import IconNext from './../Icons/IconNext.vue'
import IconPrev from './../Icons/IconPrev.vue'
const BlockImageCarouselOptions = swiperOptions.BlockImageCarousel

Swiper.use([Navigation, A11y])

export default defineComponent({
  name: 'BlockImageCarousel',
  components: {
    BaseButton,
    IconPrev,
    IconNext,
    BlockImageCarouselItem
  },
  props: {
    items: {
      type: Array as PropType<Partial<ImageObject>[]>,
      required: false
    },
    itemRole: {
      type: String,
      required: false
    },
    loop: {
      type: Boolean,
      default: true
    },
    // watches this prop if parent component needs to control current slide
    slide: {
      type: Number,
      required: false
    },
    blockId: {
      type: String,
      required: false
    },
    showTitle: {
      type: Boolean,
      required: false,
      default: false
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
        ...BlockImageCarouselOptions,
        loop: this.loop,
        // this component has custom pagination
        pagination: false,
        a11y: {
          slideRole: this.itemRole as string | undefined
        },
        on: {
          slideChange: (swiper: Swiper) => {
            // See https://github.com/vuejs/vue/issues/8721.
            ;(this as any).updateIndex(swiper.realIndex)
            if (this.loop) {
              // Swap fancybox data attributes in duplicate slides to avoid duplicate thumbnails in fancybox
              // TODO: switch to fancyapp carousel for cleaner integration
              Array.prototype.forEach.call(swiper.slides, function (slide) {
                const fancyboxEl = slide.querySelector('.MixinFancybox')
                if (fancyboxEl) {
                  const fancyboxId =
                    fancyboxEl.dataset.fancybox || fancyboxEl.dataset.triggerFancybox
                  if (slide.classList.contains('swiper-slide-visible')) {
                    fancyboxEl.dataset.fancybox = fancyboxId
                    fancyboxEl.removeAttribute('data-trigger-fancybox')
                  } else if (
                    slide.classList.contains('swiper-slide-duplicate') ||
                    slide.classList.contains('swiper-slide-duplicate-next')
                  ) {
                    fancyboxEl.dataset.triggerFancybox = fancyboxId
                    fancyboxEl.removeAttribute('data-fancybox')
                  } else {
                    fancyboxEl.dataset.fancybox = fancyboxId
                    fancyboxEl.removeAttribute('data-trigger-fancybox')
                  }
                }
              })
            }
          }
        }
      }
    }
  },
  computed: {
    hasCover(): boolean {
      if (this.$slots.firstSlide) {
        return true
      }
      return false
    },
    itemsMobileNav(): Partial<ImageObject>[] | undefined {
      const navArray = this.items ? this.items.map((item) => item) : undefined
      if (navArray && this.hasCover) {
        navArray.push({ cover: 'hasCover' })
        return navArray
      }
      return navArray
    }
  },
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
      this.slider = new Swiper(this.$refs.BlockImageCarousel as HTMLElement, this.sliderOptions)
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
@import '@explorer-1/common/src/scss/components/BlockImageCarousel';
</style>
