<template>
  <svg
    class="IconCheckboxSelected"
    width="22"
    height="22"
    viewBox="0 0 22 22"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
  >
    <g fill="none" fill-rule="evenodd">
      <path fill="currentColor" fill-rule="nonzero" d="M0 0H22V22H0z" />
      <path
        d="M9.732 15.718l-4.95-4.95 1.415-1.414 3.535 3.535 7.071-7.071 1.415 1.414-8.486 8.486z"
        fill="#FFF"
      />
    </g>
  </svg>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'IconCheckboxSelected',
})
</script>
<style lang="scss">
@import '@explorer-1/common/src/scss/components/IconCheckboxSelected';
</style>
