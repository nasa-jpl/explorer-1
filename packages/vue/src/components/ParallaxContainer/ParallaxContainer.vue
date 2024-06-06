<template>
  <div
    :class="{ 'overflow-hidden': !overflow }"
    :style="{
      '--scroll-factor': `${data.scrollFactor * data.height}px`
    }"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: `ParallaxContainer`,
  props: {
    invert: {
      type: Boolean,
      default: false,
      required: false
    },
    overflow: {
      type: Boolean,
      default: false,
      required: false
    }
  },
  data() {
    return {
      data: {
        scrollFactor: 0,
        width: 0,
        height: 0
      },
      eventHandler: undefined
    }
  },
  mounted() {
    this.init()
  },
  beforeUnmount() {
    if (this.eventHandler) {
      window.removeEventListener(`resize`, this.eventHandler)
      window.removeEventListener(`scroll`, this.eventHandler)
    }
  },
  methods: {
    init() {
      this.calcParallax()
      this.$nextTick(() => {
        this.eventHandler = () => requestAnimationFrame(this.calcParallax)
        window.addEventListener(`resize`, this.eventHandler, false)
        window.addEventListener(`scroll`, this.eventHandler, {
          capture: false,
          passive: true
        })
      })
    },
    calcParallax() {
      const containerRect = this.$el.getBoundingClientRect()

      this.data.height = containerRect.height
      this.data.width = containerRect.width

      const viewportOffsetTop = containerRect.top
      const viewportOffsetBottom = window.innerHeight - viewportOffsetTop

      if (this.invert) {
        this.data.scrollFactor = viewportOffsetTop / (window.innerHeight + this.data.height)
      } else {
        this.data.scrollFactor = viewportOffsetBottom / (window.innerHeight + this.data.height)
      }
    }
  }
}
</script>
