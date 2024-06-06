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
// makes sure anchor links align with navigation's fixed overlay
.BlockAnchor {
  &::before {
    @apply block invisible pointer-events-none;

    content: ' ';
    margin-top: -83px;
    height: 83px;
    @screen lg {
      margin-top: -182px;
      height: 182px;
    }
  }
}
</style>
