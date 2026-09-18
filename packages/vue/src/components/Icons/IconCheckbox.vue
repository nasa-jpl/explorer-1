<template>
  <svg
    class="IconBase"
    xmlns="http://www.w3.org/2000/svg"
    height="24px"
    viewBox="0 -960 960 960"
    width="24px"
    fill="currentColor"
  >
    <path d="M120-120v-720h720v720H120Zm80-80h560v-560H200v560Z" />
  </svg>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'IconCheckbox'
})
</script>
<style lang="scss">
@import '@explorer-1/common/src/scss/components/IconBase';
</style>
