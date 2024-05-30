<script lang="ts">
import { defineComponent } from 'vue'
import IconExpand from '@explorer-1/vue/src/components/Icons/IconExpand.vue'

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
      <span class="icon">
        <IconExpand />
      </span>
    </div>
  </div>
</template>

<style lang="scss">
.MixinFancyboxOpenButton {
  // scoped styles for Fancybox Opener button
  @apply relative lg:absolute pointer-events-none lg:inset-0 cursor-pointer z-10;

  .BaseButton {
    @apply -top-px -right-px absolute focus:outline-none xl:text-xl inline-block;
  }
}
</style>
