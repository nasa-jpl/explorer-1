<template>
  <svg
    class="IconTime"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
  >
    <path
      d="M10 0c5.523 0 10 4.477 10 10s-4.477 10-10 10S0 15.523 0 10 4.477 0 10 0zm0 2a8 8 0 100 16 8 8 0 000-16zm1 2v6.185l2.596 2.597-1.414 1.414L9 11.014 9.013 11H9V4h2z"
      fill="currentColor"
    />
  </svg>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'IconTime',
})
</script>
<style lang="scss">
@import '@explorer-1/common/src/scss/components/IconTime';
</style>
