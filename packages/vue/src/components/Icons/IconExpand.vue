<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IconExpand'
})
</script>
<template>
  <svg
    class="IconExpand"
    width="60"
    height="60"
    viewBox="0 0 60 60"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
  >
    <path
      d="M48 37v11H37v-2h9v-9h2zm-34 0v9h9v2H12V37h2zm9-25v2h-9v9h-2V12h11zm25 0v11h-2v-9h-9v-2h11z"
      fill="currentColor"
      fill-rule="evenodd"
    />
  </svg>
</template>

<style lang="scss">
@import '@explorer-1/common/src/scss/components/IconExpand';
</style>
