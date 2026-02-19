<template>
  <div
    v-if="data"
    class="bg-star-pattern bg-black"
  >
    <section
      class="HomepageMissionsCarousel ThemeVariantDark max-w-screen-3xl mx-auto overflow-hidden text-white bg-black bg-stars select-none"
    >
      <div class="lg:BaseGrid lg:py-24 pt-14 container flex flex-col pb-5 mx-auto">
        <div class="xl:px-0 lg:col-end-8 xl:col-end-7 order-1 col-start-2 px-4">
          <p
            v-if="data.label"
            class="text-subtitle text-primary edu:text-white mb-3"
          >
            {{ data.label }}
          </p>
          <BaseHeading
            v-if="data.heading"
            level="h2"
            class="mb-3"
          >
            {{ data.heading }}
          </BaseHeading>
          <p
            v-if="data.summary"
            class="text-body-lg"
          >
            {{ data.summary }}
          </p>
        </div>
        <div class="lg:order-2 xl:px-0 flex justify-end order-3 col-start-10 col-end-13 px-4">
          <BaseLink
            to="/missions/"
            variant="primary"
          >
            {{ `All Missions` }}
          </BaseLink>
        </div>
        <!-- Slider main container -->
        <div class="lg:order-3 order-2 col-start-2 col-end-12">
          <div
            ref="HomepageMissionsCarousel"
            class="swiper lg:mt-0 lg:mb-0 mb-14 mt-3"
          >
            <!-- Additional required wrapper -->
            <nav
              :aria-label="data.heading || 'Missions'"
              class="swiper-wrapper"
            >
              <!-- slide -->
              <HomepageMissionsCarouselItem
                v-for="(item, index) in data.targets"
                :key="index"
                :data="item"
                class="swiper-slide"
              />
            </nav>
            <!-- swiper navigation -->
            <div class="swiper-navigation xl:block absolute top-0 left-0 hidden w-full">
              <div class="top-1/2 absolute left-0 z-30">
                <BaseButton
                  class="swiper-prev xl:text-base -ml-16"
                  :aria-label="data.heading + ' - Previous slide'"
                >
                  <template #iconRight>
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
              <div class="top-1/2 absolute right-0 z-30">
                <BaseButton
                  class="swiper-next xl:text-base -mr-16"
                  :aria-label="data.heading + ' - Next slide'"
                >
                  <template #iconRight>
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
    </section>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import Swiper from 'swiper'
import { A11y, Navigation } from 'swiper/modules'
import type { SwiperOptions } from 'swiper/types'
import IconPrev from './../Icons/IconPrev.vue'
import IconNext from './../Icons/IconNext.vue'
import BaseLink from './../BaseLink/BaseLink.vue'
import BaseHeading from './../BaseHeading/BaseHeading.vue'
import BaseButton from './../BaseButton/BaseButton.vue'
import HomepageMissionsCarouselItem from './../HomepageMissionsCarousel/HomepageMissionsCarouselItem.vue'

Swiper.use([Navigation, A11y])

export default defineComponent({
  name: 'HomepageMissionsCarousel',
  components: {
    BaseLink,
    BaseHeading,
    BaseButton,
    IconPrev,
    IconNext,
    HomepageMissionsCarouselItem
  },
  props: {
    data: {
      type: Object,
      required: false,
      default: undefined
    }
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
        navigation: {
          nextEl: '.swiper-next',
          prevEl: '.swiper-prev'
        },
        a11y: {
          slideRole: this.itemRole as unknown as string | undefined
        },
        breakpoints: {
          640: {
            slidesPerView: 1.5
          },
          768: {
            slidesPerView: 2
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 56
          }
        },
        on: {
          init(swiper) {
            const classList = swiper.el.classList
            classList.replace('opacity-0', 'opacity-100')
          }
        }
      }
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
    }
  }
})
</script>
<style lang="scss">
@import '@explorer-1/common/src/scss/components/HomepageMissionsCarousel';
</style>
