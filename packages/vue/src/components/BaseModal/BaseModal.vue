<template>
  <div>
    <span @click="openModal()">
      <slot name="modalTrigger"> Open Modal </slot>
    </span>
    <BaseModalDialog
      v-show="showModal"
      :bg-close="bgClose"
      @close="closeModal()"
    >
      <template #modalHeader>
        <slot name="modalHeader"></slot>
      </template>
      <slot></slot>
    </BaseModalDialog>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BaseModalDialog from './../BaseModal/BaseModalDialog.vue'

export default defineComponent({
  name: 'BaseModal',
  components: {
    BaseModalDialog
  },
  props: {
    bgClose: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      showModal: false
    }
  },
  methods: {
    openModal() {
      this.showModal = true
      // prevents background scroll
      document.body.classList.add('overflow-hidden')
    },
    closeModal() {
      this.showModal = false
      document.body.classList.remove('overflow-hidden')
    }
  }
})
</script>
<style lang="scss">
// styles go here
</style>
