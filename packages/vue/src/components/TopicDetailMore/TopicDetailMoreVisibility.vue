<template>
  <div
    v-observe-visibility="{
      callback: visibilityChanged,
      throttle: 0,
      once: true
    }"
    class="transition-all duration-1000 ease-out transform"
    :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-32'"
  >
    <slot />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { ObserveVisibility } from 'vue-observe-visibility'

export default defineComponent({
  name: 'TopicDetailMoreVisibility',
  directives: {
    ObserveVisibility
  },
  data() {
    return {
      isVisible: false,
      hasIntersectionObserver: true
    }
  },
  mounted() {
    this.featureDetection()
  },
  methods: {
    visibilityChanged(visibility: boolean) {
      if (this.hasIntersectionObserver) {
        this.isVisible = visibility
      }
    },
    featureDetection() {
      if (
        !('IntersectionObserver' in window) ||
        !('IntersectionObserverEntry' in window) ||
        !('intersectionRatio' in window.IntersectionObserverEntry.prototype)
      ) {
        // intersection observer not supported
        this.hasIntersectionObserver = false
        this.isVisible = true
      }
    }
  }
})
</script>
