<template>
  <div
    :style="{
      transform: `translate3d(0, calc(var(--scroll-factor) * ${factor} - ${offset}px), 0)`
    }"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: `ParallaxElement`,
  props: {
    factor: {
      default: 0.25,
      type: Number
    },
    offset: {
      default: 0,
      type: Number
    }
  }
}
</script>
