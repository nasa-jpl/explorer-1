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
    IconExpand
  },
  methods: {
    clickHandler() {
      this.$emit('click')
    }
  }
})
</script>

<style lang="scss">
@import '@explorer-1/common/src/scss/components/BaseLightboxOpenButton';
</style>
