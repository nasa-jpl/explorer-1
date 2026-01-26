<template>
  <div
    v-if="description"
    class="MissionDetailAbout lg:BaseGrid lg:px-0 container px-4 mx-auto"
  >
    <div class="col-span-6 col-start-2 mb-3">
      <BaseHeading level="h2">{{ descriptionHeading }}</BaseHeading>
    </div>

    <div class="col-span-6 col-start-2">
      <div class="mb-10">
        <BlockText :text="description" />
      </div>
    </div>
    <div
      v-if="hasContent"
      class="col-span-3 col-start-9"
    >
      <p class="text-subtitle mb-5">
        {{ sidebarTitle }}
      </p>
      <ul class="lg:mb-5 flex flex-wrap items-start mb-3">
        <li
          v-for="(item, index) in instruments"
          :key="index"
          v-observe-visibility="{
            callback: isViewableNow,
            throttle: 0,
            once: true
          }"
          :class="animationClass"
          class="instrument justify-content-center flex-column flex items-start w-full align-middle"
        >
          <span>
            {{ item.instrument }}
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import BaseHeading from './../BaseHeading/BaseHeading.vue'
import BlockText from './../BlockText/BlockText.vue'

export interface Instrument {
  id: string
  instrument: string
}
export default defineComponent({
  name: 'MissionDetailAbout',
  components: {
    BaseHeading,
    BlockText
  },
  props: {
    descriptionHeading: {
      type: String,
      required: false,
      default: 'About the Mission'
    },
    description: {
      type: String,
      required: true,
      default: ''
    },
    instruments: {
      type: Array as PropType<Instrument[]>,
      required: false
    },
    sidebarTitle: {
      type: String,
      required: false,
      default: 'Instruments'
    }
  },
  data() {
    return {
      showAnimation: false,
      hasIntersectionObserver: true
    }
  },
  computed: {
    hasContent() {
      if (!this.instruments || this.instruments.length === 0) {
        return false
      } else {
        return true
      }
    },
    animationClass() {
      if (this.hasIntersectionObserver) {
        if (this.showAnimation) {
          return 'animated'
        }
      } else {
        return 'lifeless'
      }
      return ''
    }
  },
  mounted() {
    this.featureDetection()
  },
  methods: {
    isViewableNow(isVisible: boolean) {
      this.showAnimation = isVisible
    },
    // could eventually turn this into a mixin if we need to use it a bunch
    featureDetection() {
      if (
        !('IntersectionObserver' in window) ||
        !('IntersectionObserverEntry' in window) ||
        !('intersectionRatio' in window.IntersectionObserverEntry.prototype)
      ) {
        // intersection observer not supported
        this.hasIntersectionObserver = false
      }
    }
  }
})
</script>
<style lang="scss">
@import '@explorer-1/common/src/scss/components/MissionDetailAbout';
</style>
