<template>
  <button
    ref="lightboxCloseButton"
    aria-label="Close Lightbox"
    class="BaseLightboxCloseButton text-5xl"
    @click.prevent="clickHandler()"
  >
    <span class="icon">
      <IconCloseLightbox />
    </span>
  </button>
</template>

<script lang="ts">
// @ts-nocheck
import { defineComponent } from 'vue'
import IconCloseLightbox from './../Icons/IconCloseLightbox.vue'

export default defineComponent({
  name: 'BaseLightboxCloseButton',
  components: {
    IconCloseLightbox
  },
  mounted() {
    this.focusButton()
  },
  methods: {
    clickHandler() {
      this.$emit('click')
    },
    focusButton() {
      this.$refs.lightboxCloseButton.focus()
    }
  }
})
</script>

<style lang="scss">
@import '@explorer-1/common/src/scss/components/BaseLightboxCloseButton';
</style>
