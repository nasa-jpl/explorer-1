<script lang="ts">
/**
 * This mixin appends an animated caret to a line of text or to more complex HTML markup.
 * When implemented, it must be wrapped by a link element with CSS class `group` to ensure that the animation is triggered by hovering over the link.
 * See the `BaseLink` primary variant for an implementation example. */

import { defineComponent } from 'vue'
import IconCaret from './../Icons/IconCaret.vue'

export default defineComponent({
  name: 'MixinAnimationCaret',
  components: {
    IconCaret
  },
  props: {
    /** Use when wrapped in a parent component. Appends to classes applied to .`MixinAnimationCaret`.
     * Use-case example: BaseLink and grandparent component needs to pass a class
     */
    passedWrapperClass: {
      type: String || null,
      required: false,
      default: ''
    },
    /** Modify spacing around the caret itself with TailwindCSS classes */
    arrowClass: {
      type: String,
      required: false,
      default: ''
    },
    /** Default color class. Use TailwindCSS classes */
    color: {
      type: String,
      required: false,
      default: 'text-primary'
    },
    /** Default margin left class. Use TailwindCSS classes */
    marginLeft: {
      type: String,
      default: 'ml-1',
      required: false
    },
    /** Default margin right class. Only appled when  when Only Use TailwindCSS classes */
    marginRight: {
      type: String,
      default: 'mr-1',
      required: false
    },
    /** Appends .caret-inline to .MixinAnimationCaret */
    inline: {
      type: Boolean,
      default: false,
      required: false
    },
    /** Modify the caret icon and animation to appear on the left of the slot text */
    caretLeft: {
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
  <span v-if="!caretLeft"
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
  <span v-else
    class="MixinAnimationCaret MixinAnimationCaretReverse"
    :class="computedClass"
  >
    <span
      class="arrow-wrapper"
      :class="[arrowClass, color, marginRight]"
      aria-hidden="true"
    >
      <span class="arrow right-0">
        <IconCaret />
      </span>
      <span class="arrow-fixed right-0">
        <IconCaret />
      </span>
    </span>
    <span>
      <slot></slot>
    </span>
  </span>
</template>
<style lang="scss">
@import '@explorer-1/common/src/scss/components/MixinAnimationCaret';
</style>
