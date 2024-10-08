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
.YearTicker {
  @apply sticky transform text-gray-light-mid translate-x-0.5 md:translate-x-0 ml-7 md:ml-8 lg:ml-30 pt-10 md:pt-5;

  // Unitless 0 isn’t supported in a `calc` operation.
  // stylelint-disable-next-line length-zero-no-unit
  --top-offset: 0px;

  font-variant-numeric: tabular-nums;
  font-weight: 900;
  line-height: 1;
  font-size: min(5rem, 25vw);
  // Secondary nav minus gap.
  top: calc(theme('spacing.16') - 1px + var(--top-offset));
  z-index: 50;

  @screen md {
    --top-offset: theme('spacing.20');

    z-index: -20;
    font-size: min(8rem, 20vw);
  }

  @screen lg {
    font-size: min(11.25rem, 10vw);
  }

  @screen xl {
    font-size: min(11.25rem, 25vw);
  }

  .header-sticky-showing & {
    // For the mobile viewport, offset by the height of the top header and NavSecondary combined.
    top: calc(theme('spacing.18') + theme('spacing.16') + var (--top-offset));
  }

  &::after {
    @apply md:hidden;

    content: '';
    position: absolute;
    z-index: -10;
    top: 2px;
    left: 0;
    width: 100%;
    height: 140px;
    pointer-events: none;
    background-image: linear-gradient(to bottom, white 90%, transparent);
  }

  > span {
    display: inline-grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    overflow: hidden;
  }

  .Digit {
    grid-area: 1 / 1 / 1 / 1;
    transition: transform var(--duration);
    transform: translateY(0);

    @media (prefers-reduced-motion: reduce) {
      transition-duration: 0.1ms;
    }
  }

  // transitions
  .digits-decrement-enter-active {
    transform: translateY(100%);
  }

  .digits-decrement-leave-active {
    transform: translateY(-100%);
  }

  .digits-increment-enter-active {
    transform: translateY(-100%);
  }

  .digits-increment-leave-active {
    transform: translateY(100%);
  }
}
</style>
