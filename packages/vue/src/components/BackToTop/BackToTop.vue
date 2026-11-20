<template>
  <BaseButton
    v-if="showBackToTop"
    variant="primary"
    class="BackToTop z-60"
    :class="{ '-icon-only': iconOnly }"
    :compact="!iconOnly"
    @click="scrollToTop"
  >
    <template #iconRight>
      <IconDropdown class="text-base transform rotate-180" />
    </template>
    <span class="label-text">Back to top</span>
  </BaseButton>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import _throttle from 'lodash/throttle.js'
import type { DebouncedFunc } from 'lodash'
import BaseButton from './../BaseButton/BaseButton.vue'
import IconDropdown from './../Icons/IconDropdown.vue'

export default defineComponent({
  name: 'BackToTop',
  components: {
    BaseButton,
    IconDropdown
  },
  props: {
    /**
     * Threshold (px) of when the button should appear
     */
    threshold: {
      type: Number,
      required: false,
      default: 300
    },
    /**
     * Pixel offset when scrolling to the top
     */
    scrollTo: {
      type: Number,
      required: false,
      default: 0
    }
  },
  emits: ['click'],
  data(): {
    /**
     * Dynamically altered value that determines when the button should appear
     */
    showBackToTop: Boolean
    scrollHandler: DebouncedFunc<() => void> | null
    iconOnly: Boolean
    mediaQuery: MediaQueryList | null
  } {
    return {
      showBackToTop: false,
      scrollHandler: null,
      iconOnly: false,
      mediaQuery: null
    }
  },
  mounted() {
    this.scrollHandler = _throttle(this.onScroll, 100)
    window.addEventListener('scroll', this.scrollHandler, {
      passive: true
    })
    this.mediaQuery = window.matchMedia('(min-width: 640px)')
    this.onBreakpointChange()
    this.mediaQuery.addEventListener('change', this.onBreakpointChange)
  },
  beforeUnmount() {
    if (this.scrollHandler) {
      window.removeEventListener('scroll', this.scrollHandler)
    }
    this.mediaQuery?.removeEventListener('change', this.onBreakpointChange)
  },
  methods: {
    onBreakpointChange() {
      this.iconOnly = !this.mediaQuery?.matches
    },
    onScroll() {
      this.showBackToTop = window.scrollY > this.threshold
      // De-register the scroll event listener, so the button always shows
      // and we don’t run scroll listeners for little value.
      if (this.showBackToTop && this.scrollHandler) {
        window.removeEventListener('scroll', this.scrollHandler)
      }
    },
    scrollToTop() {
      window.scrollTo({ top: this.scrollTo, behavior: 'smooth' })
      this.$emit('click')
    }
  }
})
</script>
<style lang="scss">
@import '@explorer-1/common/src/scss/components/BackToTop';
</style>
