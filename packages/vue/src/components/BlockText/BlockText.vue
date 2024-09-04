<template>
  <div
    class="BlockText"
    :class="computedClass"
    v-html="text"
  ></div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

interface Variants {
  [key: string]: string
}

export const variants: Variants = {
  small: 'text-body-sm -small',
  medium: 'text-body-md -medium',
  large: 'text-body-lg -large'
}

export default defineComponent({
  name: 'BlockText',
  props: {
    text: {
      type: String,
      required: false
    },
    variant: {
      type: String,
      required: false,
      default: 'large',
      validator: (prop: string): boolean => Object.keys(variants).includes(prop)
    }
  },
  computed: {
    computedClass(): string {
      return variants[this.variant]
    }
  }
})
</script>
<style lang="scss">
@import '@explorer-1/common/src/scss/components/BlockText';
.BlockText {
  .richtext-image {
    &.full-width {
      @apply mb-10 lg:mb-14;
      @apply w-full h-auto;
    }
    &.left,
    &.right {
      @apply mb-5 lg:mb-5 mx-5 lg:mx-8;
      @apply inline max-w-full sm:max-w-[50%] h-auto;
    }
    &.left {
      @apply sm:float-left ml-0;
      @apply ml-0 lg:-ml-[5.3rem] xl:-ml-[6.8rem];
      + p,
      + div {
        // clear: right;
      }
    }
    &.right {
      @apply sm:float-right mr-0;
      @apply mr-0 lg:-mr-[5.3rem] xl:-mr-[6.8rem];
      + p,
      + div {
        // clear: left;
      }
    }
    &:last-child {
      @apply mb-0;
    }
  }
  > div {
    @apply mb-10 lg:mb-14;
    iframe {
      @apply w-full h-auto aspect-video;
    }
    &:last-child {
      @apply mb-0;
    }
  }
}
</style>
