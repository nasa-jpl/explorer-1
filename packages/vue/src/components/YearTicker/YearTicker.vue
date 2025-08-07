<template>
  <div
    v-if="mounted"
    class="YearTicker"
    :style="`--duration:${duration}ms`"
  >
    <!-- One transition group per digit. -->
    <transition-group
      v-for="(digit, index) in Array.from(targetYear)"
      :key="index"
      :name="animation"
      mode="out-in"
      tag="span"
    >
      <!-- Key by digit so there can be two digits rendered at the same time. -->
      <span
        :key="digit + index"
        class="Digit"
        >{{ digit }}</span
      >
    </transition-group>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'YearTicker',
  props: {
    targetYear: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      year: this.targetYear,
      animation: 'digits-increment',
      duration: 100,
      mounted: false // Track if the component is mounted
    }
  },
  watch: {
    targetYear(newYear, oldYear) {
      this.animation = newYear > oldYear ? 'digits-increment' : 'digits-decrement'
      this.year = newYear
    }
  },
  mounted() {
    this.mounted = true // Set mounted to true after mounting
  }
})
</script>

<style lang="scss">
@import '@explorer-1/common/src/scss/components/YearTicker';
</style>
