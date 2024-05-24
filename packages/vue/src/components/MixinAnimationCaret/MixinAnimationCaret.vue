<script lang="ts">
import { defineComponent } from 'vue'
import IconCaret from './../Icons/IconCaret.vue'

export default defineComponent({
  name: 'MixinAnimationCaret',
  components: {
    IconCaret
  },
  props: {
    // when wrapped in a parent component i.e. BaseLink and grandparent component needs to pass a class
    // appended to classes applied to .MixinAnimationCaret
    passedWrapperClass: {
      type: String || null,
      required: false,
      default: ''
    },
    // to modify spacing around the caret itself
    arrowClass: {
      type: String,
      required: false,
      default: ''
    },
    // default color class
    color: {
      type: String,
      required: false,
      default: 'text-theme-red'
    },
    // default margin left class
    marginLeft: {
      type: String,
      default: 'ml-1',
      required: false
    },
    // appends .caret-inline .MixinAnimationCaret
    inline: {
      type: Boolean,
      default: false,
      required: false
    }
  },
  computed: {
    computedClass(): string {
      let classes = ''
      if (this.passedWrapperClass) {
        classes = classes + ' ' + this.passedWrapperClass
      }
      if (this.inline) {
        classes = classes + ' caret-inline'
      }
      return classes
    }
  }
})
</script>
<template>
  <span
    class="MixinAnimationCaret"
    :class="computedClass"
  >
    <span>
      <slot></slot>
    </span>
    <span
      class="arrow-wrapper"
      :class="[arrowClass, color, marginLeft]"
      aria-hidden="true"
    >
      <span class="arrow">
        <IconCaret />
      </span>
      <span class="arrow-fixed">
        <IconCaret />
      </span>
    </span>
  </span>
</template>
<style lang="scss">
@import '@explorer-1/common/src/scss/components/MixinAnimationCaret';
</style>
