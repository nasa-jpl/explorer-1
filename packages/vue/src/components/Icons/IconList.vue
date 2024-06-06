<template>
  <svg
    class="IconList"
    width="22"
    height="22"
    viewBox="0 0 22 22"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
  >
    <path
      d="M9 11v9H0v-9h9zm-2 2H2v5h5v-5zm12 3v2h-8v-2h8zm3-4v2H11v-2h11zM9 0v9H0V0h9zM7 2H2v5h5V2zm12 3v2h-8V5h8zm3-4v2H11V1h11z"
      fill="currentColor"
    />
  </svg>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'IconList'
})
</script>
<style lang="scss">
@import '@explorer-1/common/src/scss/components/IconList';
</style>
