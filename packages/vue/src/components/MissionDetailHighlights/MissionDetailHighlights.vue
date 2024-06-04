<template>
  <div
    class="MissionDetailHighlights lg:pt-0 lg:overflow-visible relative w-full pt-12 mb-10 overflow-hidden text-white bg-black"
    :class="
      graphic && animation
        ? 'lg:mb-36 min-h-mission-highlights'
        : 'pb-12 lg:mb-18'
    "
  >
    <div class="max-w-screen-3xl relative mx-auto overflow-hidden">
      <div
        class="mission-highlights-content lg:BaseGrid lg:px-0 container relative z-20 px-4 mx-auto"
      >
        <div
          class="xl:col-start-6 lg:py-36 lg:col-start-7 xl:col-end-11 lg:col-end-12 relative"
        >
          <div class="relative z-10 w-full">
            <BaseHeading level="h2" class="mb-8">
              {{ heading || 'Mission Highlights' }}
            </BaseHeading>
            <div class="slides relative overflow-hidden">
              <MissionDetailHighlightsCarousel :items="highlights" />
            </div>
          </div>
        </div>
        <!-- screen to keep carousel area legible when there is a background image -->
        <div
          v-if="!animation && graphic"
          class="lg:flex lg:col-start-5 lg:col-end-12 absolute inset-0 flex hidden"
        >
          <div
            class="bg-gradient-to-t lg:bg-gradient-to-r from-transparent to-black height-full w-1/2"
          ></div>
        </div>
        <!-- /screen -->
      </div>
      <!-- non-animated image -->
      <div
        v-if="!animation && graphic && graphic.src"
        class="lg:absolute inset-0 z-10 w-full"
      >
        <div
          class="lg:block bg-gradient-to-t from-transparent to-black sm:h-40 absolute inset-x-0 top-0 z-20 hidden h-20"
        ></div>
        <div
          class="lg:block bg-gradient-to-b from-transparent to-black sm:h-40 absolute inset-x-0 bottom-0 z-20 hidden h-20"
        ></div>
        <div
          class="lg:absolute lg:mt-0 lg:flex lg:-ml-24 xl:-ml-20 3xl:ml-0 lg:w-3xl lg:inset-y-0 lg:left-0 relative z-10 items-center w-full -mt-24"
        >
          <div class="lg:max-w-none relative max-w-2xl mx-auto">
            <div
              class="bg-gradient-to-t from-transparent to-black sm:h-10 absolute inset-x-0 top-0 h-40"
            ></div>
            <div
              class="bg-gradient-to-b from-transparent to-black sm:h-10 absolute inset-x-0 bottom-0 h-40"
            ></div>
            <div
              class="bg-gradient-to-l from-transparent to-black lg:w-64 absolute inset-y-0 left-0 w-20"
            ></div>
            <div
              class="bg-gradient-to-r from-transparent to-black lg:w-64 absolute inset-y-0 right-0 w-20"
            ></div>
            <picture class="block">
              <source :srcset="graphic.webp.url" type="image/webp" />
              <img
                class="object-contain"
                :src="graphic.src.url"
                :srcset="graphic.srcSet"
                :width="graphic.src.width"
                :height="graphic.src.height"
                :alt="graphic.alt"
              />
            </picture>
          </div>
        </div>
      </div>
      <!-- / non-animated image -->
    </div>

    <div
      v-if="animation"
      v-observe-visibility="{
        callback: visibilityChanged,
        throttle: 300,
        once: false,
      }"
      class="lg:absolute relative inset-0"
    >
      <div
        class="mission-highlights-animation-container pt-14 relative max-w-screen-xl mx-auto"
      >
        <div
          class="mission-highlights-spherical-body -translate-x-3/7 xl:-translate-x-1/2 lg:w-3xl lg:max-w-3xl relative inset-0 w-full max-w-xl transform"
        >
          <div
            v-if="graphic && graphic.src"
            class="lg:absolute relative inset-x-0 top-0 z-10"
          >
            <picture>
              <source :srcset="graphic.webp.url" type="image/webp" />
              <img
                ref="MissionDetailHighlightsImage"
                class="lg:absolute relative w-full -mt-3"
                :src="graphic.src.url"
                :srcset="graphic.srcSet"
                :width="graphic.src.width"
                :height="graphic.src.height"
                :alt="graphic.alt"
              />
            </picture>
          </div>
          <div
            class="mission-highlights-lines transition-opacity duration-300 ease-linear"
            :class="animationClasses"
          >
            <div
              class="mission-highlights-path text-jpl-red-light absolute inset-x-0 top-0 left-0 z-20"
            >
              <svg
                class="w-auto h-auto transition-opacity duration-200"
                :class="[animationInView ? 'opacity-100' : 'opacity-0']"
                viewBox="0 0 771 500"
                aria-hidden="true"
              >
                <g fill="none" fill-rule="evenodd">
                  <path
                    ref="missionHighlightsPath"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-dasharray="6,10"
                    d="M386,1C598.25,1,770,177.27,770,395.11"
                  />
                </g>
              </svg>
            </div>
            <div
              ref="missionHighlightsMovingDot"
              class="mission-highlights-dot absolute top-0 z-30"
            >
              <div
                class="border-jpl-red-light sm:w-26 sm:h-26 absolute top-0 left-0 flex items-center justify-center w-12 h-12 transform -translate-x-1/2 -translate-y-1/2 bg-transparent border-2 rounded-full"
              >
                <div class="bg-jpl-red-light w-3 h-3 rounded-full"></div>
              </div>
              <div
                v-if="missionTitle"
                ref="missionHighlightsTitle"
                class="sm:mt-16 relative mt-10 text-white transform -translate-x-1/2 opacity-0"
              >
                {{ missionTitle }}
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
import _throttle from 'lodash/throttle'
import type { DebouncedFunc } from 'lodash'
import anime from 'animejs'
import { ObserveVisibility } from 'vue-observe-visibility'
import MissionDetailHighlightsCarousel from './MissionDetailHighlightsCarousel.vue'
import BaseHeading from './../BaseHeading/BaseHeading.vue'

export default defineComponent({
  name: 'MissionDetailHighlights',
  components: {
    BaseHeading,
    MissionDetailHighlightsCarousel,
  },
  directives: {
    ObserveVisibility,
  },
  props: {
    missionTitle: {
      type: String,
      required: true,
    },
    animation: {
      type: Boolean,
      required: false,
      default: false,
    },
    graphic: {
      type: Object,
      required: false,
    },
    heading: {
      type: String,
      required: false,
    },
    highlights: {
      type: Array,
      required: false,
    },
  },
  data(): {
    isLoaded: boolean
    animationInView: boolean
    resizeHandler: DebouncedFunc<() => void> | null
  } {
    return {
      isLoaded: false,
      animationInView: false,
      resizeHandler: null,
    }
  },
  computed: {
    animationClasses(): string {
      let classes = ''
      if (this.animationInView && this.isLoaded) {
        classes = classes + ' opacity-100'
      } else {
        classes = classes + ' opacity-0'
      }
      if (!this.graphic) {
        classes = classes + ' relative -filler'
      } else {
        classes = classes + ' absolute inset-0'
      }
      return classes
    },
  },
  watch: {
    isLoaded() {
      if (this.animation && this.animationInView) {
        this.animate()
      }
    },
  },
  mounted() {
    this.init()
  },
  methods: {
    visibilityChanged(isVisible: boolean) {
      this.animationInView = isVisible
      if (this.animationInView && this.isLoaded && this.animation) {
        this.resizeHandler = _throttle(this.onResize, 70)
        window.addEventListener('resize', this.resizeHandler, false)
        this.animate()
      } else if (this.resizeHandler) {
        window.removeEventListener('resize', this.resizeHandler)
      }
    },
    animate() {
      this.drawLine()
      this.lineFollower()
    },
    drawLine() {
      anime({
        targets: this.$refs.missionHighlightsPath,
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 2000,
        delay(_: HTMLElement, i: number) {
          return i * 250
        },
        direction: 'alternate',
        loop: false,
      })
    },
    lineFollower() {
      const path = anime.path(this.$refs.missionHighlightsPath as SVGElement)
      const tl = anime.timeline()
      tl.add({
        targets: this.$refs.missionHighlightsMovingDot,
        translateX: path('x'),
        translateY: path('y'),
        easing: 'easeInOutSine',
        duration: 2000,
        loop: false,
      })
      tl.add({
        targets: this.$refs.missionHighlightsTitle,
        easing: 'easeInOutSine',
        duration: 250,
        opacity: ['0', '1'],
        loop: false,
      })
    },
    onResize() {
      if (this.animationInView) {
        this.animate()
      }
    },
    init() {
      if (this.animation && this.$refs.MissionDetailHighlightsImage) {
        const img = this.$refs.MissionDetailHighlightsImage as HTMLImageElement
        if (!img) {
          this.isLoaded = true
        }
        if (img.complete) {
          this.isLoaded = true
        } else {
          const onLoad = () => {
            this.isLoaded = true
            img.removeEventListener('load', onLoad)
          }
          img.addEventListener('load', onLoad, false)
        }
      } else {
        this.isLoaded = true
      }
    },
  },
})
</script>
<style lang="scss">
.MissionDetailHighlights {
  &.min-h-mission-highlights {
    min-height: 38rem;
  }

  .mission-highlights-lines.-filler {
    padding-top: 60%;
    @screen lg {
      @apply pt-0;
    }
  }
}
</style>
