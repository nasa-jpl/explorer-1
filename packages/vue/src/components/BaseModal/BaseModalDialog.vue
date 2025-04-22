<template>
  <div
    class="bg-gray-dark fixed top-0 left-0 z-50 flex w-full h-full overflow-auto bg-opacity-75"
    @click="bgCloseModal"
  >
    <div
      class="relative w-full max-w-xl p-8 m-auto bg-white"
      @click.stop
    >
      <BaseHeading
        v-if="$slots.modalHeader"
        level="h2"
        size="h3"
        class="border-gray-light-mid pb-4 mb-4 border-b"
      >
        <slot name="modalHeader"></slot>
      </BaseHeading>
      <slot><div>Default content</div></slot>
      <div class="text-right">
        <BaseButton
          class="mt-4"
          @click="closeModal"
        >
          close
        </BaseButton>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BaseButton from './../BaseButton/BaseButton.vue'
import BaseHeading from './../BaseHeading/BaseHeading.vue'

export default defineComponent({
  name: 'BaseModalDialog',
  components: {
    BaseButton,
    BaseHeading
  },
  props: {
    bgClose: {
      type: Boolean,
      default: false
    }
  },
  emits: ['close'],
  methods: {
    closeModal() {
      this.$emit('close')
    },
    bgCloseModal() {
      if (this.bgClose) {
        this.closeModal()
      }
    }
  }
})
</script>
