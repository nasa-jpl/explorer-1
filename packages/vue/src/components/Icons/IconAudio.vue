<template>
  <svg
    class="IconAudio"
    width="60"
    height="60"
    viewBox="0 0 60 60"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
  >
    <path
      d="M22 29v2a8 8 0 1016 0v-2h2v2c0 5.185-3.946 9.448-8.999 9.95L31 46h4v2H25v-2h4v-5.05c-4.962-.492-8.857-4.612-8.996-9.67L20 31v-2h2zm2-8l.004-.225A6 6 0 0136 21v10a6 6 0 11-12 0V21z"
      fill="currentColor"
      fill-rule="evenodd"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'IconAudio'
})
</script>
<style lang="scss">
@import '@explorer-1/common/src/scss/components/IconAudio';
</style>
