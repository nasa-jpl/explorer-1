<template>
  <div
    v-if="dialogId"
    :id="dialogId"
    ref="DialogRef"
    :aria-labelledby="headingId"
    aria-hidden="true"
    class="BlockDialog fixed top-0 left-0 z-60 flex w-full h-full overflow-auto"
  >
    <div
      class="dialog-overlay bg-gray-dark bg-opacity-90 fixed top-0 left-0 w-full h-full"
      :data-a11y-dialog-hide="overlayClose ? '' : undefined"
    ></div>
    <div class="container px-4 m-auto">
      <div
        role="document"
        class="dialog-box relative m-auto bg-white"
        :class="dialogBoxClass"
      >
        <button
          type="button"
          data-a11y-dialog-hide
          aria-label="Close dialog"
          class="button-close absolute right-0 flex-shrink-0 text-white focus:outline-none focus:ring-2"
        >
          <IconClose />
        </button>
        <slot>Content</slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import A11yDialog from 'a11y-dialog'
import IconClose from './../Icons/IconClose.vue'

export default defineComponent({
  name: 'BlockDialog',
  components: {
    IconClose
  },
  props: {
    dialogId: {
      type: String,
      required: true
    },
    headingId: {
      type: String,
      required: false,
      default: ''
    },
    overlayClose: {
      type: Boolean,
      required: false,
      default: true
    },
    dialogBoxClass: {
      type: String,
      required: false,
      default: ''
    }
  },
  emits: ['show', 'hide'],
  data(): {
    dialog: A11yDialog | null
    content: HTMLElement | null
  } {
    return {
      dialog: null,
      content: null
    }
  },
  mounted() {
    this.init()
    ;(this.dialog as A11yDialog).show()
  },
  beforeUnmount() {
    if (this.dialog) {
      this.dialog.destroy()
    }
  },
  methods: {
    init() {
      this.dialog = this.$refs.DialogRef
        ? new A11yDialog(this.$refs.DialogRef as HTMLElement)
        : null
      console.log(this.dialog)
      if (this.dialog) {
        this.dialog
          .on('show', () => {
            document.body.classList.add('overflow-hidden')
            this.$emit('show')
          })
          .on('hide', () => {
            document.body.classList.remove('overflow-hidden')
            this.$emit('hide')
          })
      }
    }
  }
})
</script>
<style lang="scss">
.BlockDialog {
  // Make sure the dialog container and all its descendants are not visible and not focusable when it is hidden.
  &[aria-hidden='true'] {
    display: none;
  }

  @media (forced-colors: active) {
    .dialog-box {
      border: 1px solid;
    }
  }

  .dialog-overlay,
  .dialog-box {
    @apply animate-fadeIn;

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  }

  // Offset by the size of the icon.
  .button-close {
    top: -2rem;
  }
}
</style>
