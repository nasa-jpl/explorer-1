<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IconLocation'
})
</script>
<template>
  <svg
    class="IconLocation"
    width="16"
    height="22"
    viewBox="0 0 16 22"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
  >
    <g
      transform="translate(-4 -1)"
      stroke="currentColor"
      stroke-width="2"
      fill="none"
    >
      <path
        d="M12 2c1.933 0 3.683.784 4.95 2.05A6.978 6.978 0 0119 9c0 2.681-2.41 6.81-7 12.43C7.41 15.81 5 11.68 5 9c0-1.933.784-3.683 2.05-4.95A6.978 6.978 0 0112 2z"
      />
      <circle cx="12" cy="9" r="3" />
    </g>
  </svg>
</template>
<style lang="scss">
@import '@explorer-1/common/src/scss/components/IconLocation';
</style>
