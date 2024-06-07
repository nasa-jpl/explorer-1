<template>
  <svg
    class="IconGrid"
    width="22"
    height="22"
    viewBox="0 0 22 22"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
  >
    <path
      d="M9 11v9H0v-9h9zm11 0v9h-9v-9h9zM7 13H2v5h5v-5zm11 0h-5v5h5v-5zM9 0v9H0V0h9zm11 0v9h-9V0h9zM7 2H2v5h5V2zm11 0h-5v5h5V2z"
      fill="currentColor"
    />
  </svg>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'IconGrid'
})
</script>
<style lang="scss">
@import '@explorer-1/common/src/scss/components/IconGrid';
</style>
