<script lang="ts">
import { defineComponent } from 'vue'
import IconExpand from './../Icons/IconExpand.vue'

export default defineComponent({
  name: 'MixinFancyboxOpenButton',
  components: {
    IconExpand
  }
})
</script>
<template>
  <div
    ref="FancyboxOpenButton"
    class="MixinFancyboxOpenButton"
    role="presentation"
  >
    <div class="BaseButton -primary -icon-only pointer-events-none">
      <span class="icon !text-4xl xl:!text-5xl">
        <IconExpand class="m-1 xl:m-1.5" />
      </span>
    </div>
  </div>
</template>

<style lang="scss">
@import '@explorer-1/common/src/scss/components/MixinFancyboxOpenButton';
</style>
