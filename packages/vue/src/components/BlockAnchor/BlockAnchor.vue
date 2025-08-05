<template>
  <span
    v-if="data && data.anchorId"
    :id="data.anchorId"
    class="BlockAnchor"
  ></span>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BlockAnchor',
  props: {
    data: {
      type: Object,
      required: false
    }
  }
})
</script>

<style lang="scss">
@import '@explorer-1/common/src/scss/components/BlockAnchor.scss';
</style>
