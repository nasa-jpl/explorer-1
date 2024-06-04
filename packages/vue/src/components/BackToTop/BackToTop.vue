<template>
  <BaseButton
    v-if="showBackToTop"
    variant="primary"
    class="BackToTop z-60"
    compact
    @click="scrollToTop"
  >
    <IconDropdown />
    <span class="label-text">Back to top</span>
  </BaseButton>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import _throttle from 'lodash/throttle'
import type { DebouncedFunc } from 'lodash'
import BaseButton from './../BaseButton/BaseButton.vue'
import IconDropdown from './../Icons/IconDropdown.vue'

export default defineComponent({
  name: 'BackToTop',
  components: {
    BaseButton,
    IconDropdown,
  },
  props: {
    threshold: {
      type: Number,
      required: false,
      default: 300,
    },
    scrollTo: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  data(): {
    showBackToTop: Boolean
    scrollHandler: DebouncedFunc<() => void> | null
  } {
    return {
      showBackToTop: false,
      scrollHandler: null,
    }
  },
  mounted() {
    this.scrollHandler = _throttle(this.onScroll, 100)
    window.addEventListener('scroll', this.scrollHandler, {
      passive: true,
    })
  },
  beforeDestroy() {
    if (this.scrollHandler) {
      window.removeEventListener('scroll', this.scrollHandler)
    }
  },
  methods: {
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
    },
  },
})
</script>
<style lang="scss">
@import '@explorer-1/common/src/scss/components/BackToTop';
</style>
