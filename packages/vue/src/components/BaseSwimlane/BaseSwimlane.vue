<template>
  <div
    :style="listParentStyle"
    class="BaseSwimlane"
    @mouseenter="toggleAnimation"
    @mouseleave="toggleAnimation"
  >
    <ul :style="listStyle">
      <li
        v-for="(word, index) in list"
        :key="index"
        :style="itemStyle"
        v-html="word"
      />
    </ul>
  </div>
</template>

<script lang="ts">
// @ts-nocheck
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BaseSwimlane',
  props: {
    words: {
      type: Array,
      default: () => {
        return [
          'Artists',
          'Communicators',
          'Designers',
          'Disruptors',
          'Dreamers',
          'Educators',
          'Engineers',
          'Innovators',
          'Inventors',
          'Makers',
          'Problem Solvers',
          'Roboticists',
          'Scientists',
          'Software Engineers',
          'Thinkers',
          'Visualizers'
        ]
      }
    },
    rows: {
      type: Number,
      default: 1
    },
    scale: {
      type: Number,
      default: 1
    },
    transitionDuration: {
      type: Number,
      default: 1000
    },
    transitionDelay: {
      type: Number,
      default: 500
    },
    transition: {
      type: String,
      default: 'ease-out'
    },
    pauseOnHover: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      list: [],
      listTop: 0,
      isPaused: false,
      isMovingBackwards: false
    }
  },
  computed: {
    listCount() {
      return this.list.length
    },
    fontSize() {
      // scale from 16px font size
      return 16 * this.scale
    },
    itemHeight() {
      return this.fontSize * 1.5
    },
    listHeight() {
      return this.itemHeight * this.listCount
    },
    listParentHeight() {
      return this.itemHeight * this.rows
    },
    itemStyle() {
      return `font-size: ${this.fontSize}px;
              height: ${this.itemHeight}px;`
    },
    listStyle() {
      return `height: ${this.listHeight}px;
              transition-delay: ${this.transitionDelay}ms;
              transition-duration: ${this.transitionDuration}ms;
              transition-timing-function: ${this.transition};
              will-change: transform;
              transform: translateY(${this.listTop}px)`
    },
    listParentStyle() {
      return `height: ${this.listParentHeight}px;`
    }
  },
  // update word list
  watch: {
    words(val) {
      this.list = val
    }
  },
  // copy word list
  created() {
    this.list = this.words
  },
  // initiate animation
  mounted() {
    setTimeout(this.updateState, this.transitionDelay)
  },
  methods: {
    updateState() {
      // check if enough keywords or is not paused
      if (this.listCount <= this.rows) return
      if (this.isPaused) return
      // update list state
      if (this.isMovingBackwards) {
        this.listTop += this.itemHeight
      } else {
        this.listTop -= this.itemHeight
      }
      // one way animation
      if (this.listTop < this.rows * this.itemHeight - this.listHeight) {
        this.listTop = 0
      }
      // set time out for next update
      this.timeOutId = window.setTimeout(() => {
        this.updateState()
      }, this.transitionDuration + this.transitionDelay)
    },
    // pause/resume animaiton on hover
    toggleAnimation() {
      if (this.pauseOnHover) {
        this.isPaused = !this.isPaused
        if (this.isPaused) {
          clearTimeout(this.timeOutId)
        } else {
          this.updateState()
        }
      }
    }
  }
})
</script>

<style lang="scss">
@import '@explorer-1/common/src/scss/components/BaseSwimlane';
</style>
