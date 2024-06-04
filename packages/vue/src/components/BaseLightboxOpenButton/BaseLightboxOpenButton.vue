<template>
  <div
    ref="LightboxOpenButton"
    class="BaseLightboxOpenButton"
    aria-label="Open in Lightbox"
    @click.prevent="clickHandler()"
  >
    <button
      aria-label="Open in Lightbox"
      class="BaseButton -primary -icon-only"
      @click.prevent="clickHandler()"
    >
      <span class="icon">
        <IconExpand />
      </span>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import IconExpand from './../Icons/IconExpand.vue'

export default defineComponent({
  name: 'BaseLightboxOpenButton',
  components: {
    IconExpand,
  },
  methods: {
    clickHandler() {
      this.$emit('click')
    },
  },
})
</script>

<style lang="scss">
.BaseLightboxOpenButton {
  // scoped styles for Lightbox Opener button
  @apply relative lg:absolute lg:inset-0 cursor-pointer z-10;

  .BaseButton {
    @apply -top-px -right-px absolute focus:outline-none  xl:text-xl inline-block;
  }
}
</style>
