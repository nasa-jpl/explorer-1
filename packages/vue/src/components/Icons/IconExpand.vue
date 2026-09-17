<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IconExpand'
})
</script>
<template>
  <svg
    class="IconBase"
    xmlns="http://www.w3.org/2000/svg"
    height="24px"
    viewBox="0 -960 960 960"
    width="24px"
    fill="currentColor"
  >
    <path
      d="M120-120v-240h80v160h160v80H120Zm480 0v-80h160v-160h80v240H600ZM120-600v-240h240v80H200v160h-80Zm640 0v-160H600v-80h240v240h-80Z"
    />
  </svg>
</template>

<style lang="scss">
@import '@explorer-1/common/src/scss/components/IconBase';
</style>
