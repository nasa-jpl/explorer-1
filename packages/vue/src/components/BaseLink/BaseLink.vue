<script lang="ts">
import { defineComponent } from 'vue'
import MixinAnimationCaret from './../MixinAnimationCaret/MixinAnimationCaret.vue'

interface Variants {
  [name: string]: string
}

export const variants: Variants = {
  primary: 'text-subtitle text-action can-hover:hover:text-action-dark',
  secondary: 'text-subtitle text-action can-hover:hover:text-action-dark',
  default: '-default underline text-action can-hover:hover:text-action-dark',
  none: ''
}
export const primaryColorVariants: Variants = {
  primary: 'text-subtitle text-primary can-hover:hover:text-primary-dark',
  secondary: 'text-subtitle text-primary can-hover:hover:text-primary-dark',
  default: '-default underline text-primary can-hover:hover:text-primary-dark',
  none: ''
}

export default defineComponent({
  // this component is useful when you need a link that can either be an 'a' or router link
  // falls back to a <div> if no url is provided
  name: 'BaseLink',
  components: {
    MixinAnimationCaret
  },
  props: {
    variant: {
      type: String,
      required: false,
      default: 'default',
      validator: (prop: string): boolean => Object.keys(variants).includes(prop)
    },
    to: {
      type: [String, Object],
      default: undefined
    },
    exact: {
      type: Boolean,
      default: false
    },
    href: {
      type: String,
      default: undefined
    },
    title: {
      type: String,
      default: undefined
    },
    ariaLabel: {
      type: String,
      default: ''
    },
    linkClass: {
      type: String,
      default: ''
    },
    // this will always override the target
    target: {
      type: String,
      required: false,
      default: undefined
    },
    // if external links should open in a new window
    externalTargetBlank: {
      type: Boolean,
      required: false,
      default: false
    },
    // the 'primary' variant will always have the caret
    caret: {
      type: Boolean,
      required: false,
      default: false
    },
    // Class applied to the overall MixinAnimationCaret component
    caretWrapperClass: {
      type: String,
      default: ''
    },
    // Class applied to the caret itself
    caretClass: {
      type: String,
      default: ''
    },
    // if caret should be displayed inline with text
    caretInline: {
      type: Boolean,
      required: false,
      default: false
    },
    // to customize the caret color. also works with group-hover
    caretColor: {
      type: String,
      required: false,
      default: ''
    },
    caretMarginLeft: {
      type: String,
      required: false,
      default: ''
    },
    usePrimaryColor: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  emits: ['linkClicked', 'specificLinkClicked'],
  computed: {
    computedVariants(): Variants {
      if (this.usePrimaryColor) {
        return primaryColorVariants
      }
      return variants
    },
    computedClass(): string {
      let classes = this.computedVariants[this.variant]
      if (this.to || this.href) {
        classes = classes + ' cursor-pointer'
      }
      if (this.linkClass) {
        classes = classes + ' ' + this.linkClass
      }
      return classes
    },
    theTarget(): string | undefined {
      if (this.target) {
        return this.target
      } else if (this.href && this.externalTargetBlank) {
        return '_blank'
      }
      return undefined
    },
    theRel(): string | undefined {
      if (this.theTarget === '_blank') {
        return 'noopener'
      }
      return undefined
    }
  },
  methods: {
    clickEvent() {
      this.$root?.$emit('linkClicked')
      this.$emit('specificLinkClicked')
    }
  }
})
</script>
<template>
  <div>
    <!-- annoyingly repetive due to complexities around `to` and @click.native -->
    <nuxt-link
      v-if="to"
      class="group"
      :class="computedClass"
      :to="to"
      :target="theTarget"
      :rel="theRel"
      :aria-label="ariaLabel"
      :title="title"
      :exact="exact"
      @click="clickEvent()"
    >
      <template v-if="caretInline && caret">
        <MixinAnimationCaret
          inline
          :class="caretWrapperClass"
          :arrow-class="caretClass"
          :color="caretColor"
          :margin-left="caretMarginLeft"
        >
          <slot></slot>
        </MixinAnimationCaret>
      </template>
      <MixinAnimationCaret
        v-else-if="variant === 'primary' || caret"
        :class="caretWrapperClass"
        :arrow-class="caretClass"
        :color="caretColor"
        :margin-left="caretMarginLeft"
      >
        <slot></slot>
      </MixinAnimationCaret>
      <template v-else>
        <slot></slot>
      </template>
    </nuxt-link>
    <a
      v-else-if="href"
      :href="href"
      class="group"
      :class="computedClass"
      :target="theTarget"
      :rel="theRel"
      :aria-label="ariaLabel"
      :title="title"
      @click="clickEvent()"
    >
      <template v-if="caretInline && caret">
        <MixinAnimationCaret
          inline
          :class="caretWrapperClass"
          :arrow-class="caretClass"
          :color="caretColor"
          :margin-left="caretMarginLeft"
        >
          <slot></slot>
        </MixinAnimationCaret>
      </template>
      <MixinAnimationCaret
        v-else-if="variant === 'primary' || caret"
        :class="caretWrapperClass"
        :arrow-class="caretClass"
        :color="caretColor"
        :margin-left="caretMarginLeft"
      >
        <slot></slot>
      </MixinAnimationCaret>
      <template v-else>
        <slot></slot>
      </template>
    </a>
  </div>
</template>
