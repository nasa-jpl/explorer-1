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

<script>
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
.BaseLightboxCloseButton {
  @apply bg-black z-50 px-px text-right w-full mb-auto;
  @screen 2xl {
    @apply w-auto -mr-20 -mt-5;
  }
}
</style>
