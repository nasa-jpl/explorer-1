<script lang="ts">
import { defineComponent } from 'vue'
import { mapStores } from 'pinia'
import { useThemeStore } from '../../store/theme'
import { eventBus } from './../../utils/eventBus'
import MixinAnimationCaret from './../MixinAnimationCaret/MixinAnimationCaret.vue'
import { isEduExternalLink } from './../../utils/isEduExternalLink'

interface Variants {
  [key: string]: string
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
    ...mapStores(useThemeStore),
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
    isEduExternal(): boolean | string {
      if (this.href) {
        return isEduExternalLink(this.href)
      }
      return ''
    },
    isExternal(): boolean {
      if (this.href) {
        if (this.themeStore.isEdu && isEduExternalLink(this.href)) {
          return true
        } else if (!this.themeStore.isEdu) {
          return true
        }
        return false
      }
      return false
    },
    theTarget(): string | undefined {
      if (this.target) {
        return this.target
      } else if (this.isExternal && this.externalTargetBlank) {
        return '_blank'
      }
      return undefined
    },
    theRel(): string | undefined {
      if (this.theTarget === '_blank') {
        return 'noopener'
      }
      return undefined
    },
    computedTo() {
      let toValue = this.to ? this.addTrailingSlash(this.to as string) : undefined
      // filter out unnecessary `/home/` prefix from wagtail default site urlPaths
      if (toValue && typeof toValue === 'string' && toValue.startsWith('/home/')) {
        toValue = toValue.replace('/home/', '/')
      }
      return toValue
    },
    computedHref() {
      let hrefValue =
        this.href && (this.href.includes('jpl.nasa.gov') || this.href.includes('localhost'))
          ? this.addTrailingSlash(this.href as string)
          : this.href
      return hrefValue
    }
  },
  methods: {
    clickEvent() {
      this.$root?.$emit('linkClicked')
      this.$emit('specificLinkClicked')
      eventBus.emit('linkClicked')
    },
    addTrailingSlash(path: string) {
      let filteredPath = path
      if (path && typeof path === 'string') {
        const isFilePath = () => {
          const afterLastSlash = path.split('/').pop()
          if (afterLastSlash && afterLastSlash.includes('.')) {
            return true
          }
          return false
        }
        const isQueryPath = path.includes('?')
        const isAnchorPath = path.includes('#')
        if (
          !isQueryPath &&
          !isAnchorPath &&
          !isFilePath() &&
          path !== '/' &&
          !path.endsWith('/') &&
          !path.startsWith('/preview')
        ) {
          // add a trailing slash if there isn't one
          filteredPath += '/'
        } else if (isQueryPath) {
          if (!path.includes('/?')) {
            // also add a trailing slash to paths with query params
            const urlParts = filteredPath.split('?')
            const pathWithSlash = `${urlParts[0]}/`
            const queryParams = urlParts[1]
            filteredPath = pathWithSlash + '?' + queryParams
          }
        } else if (isAnchorPath) {
          if (!path.includes('/#')) {
            // also add a trailing slash to paths with anchors
            const urlParts = filteredPath.split('#')
            const pathWithSlash = `${urlParts[0]}/`
            const anchor = urlParts[1]
            filteredPath = pathWithSlash + '#' + anchor
          }
        }
      }
      return filteredPath
    }
  }
})
</script>
<template>
  <div>
    <!-- annoyingly repetive due to complexities around `to` and @click.native -->
    <nuxt-link
      v-if="computedTo"
      class="group"
      :class="computedClass"
      :to="computedTo"
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
      v-else-if="computedHref"
      :href="computedHref"
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
