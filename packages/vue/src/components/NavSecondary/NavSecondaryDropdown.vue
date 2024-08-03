<template>
  <div
    v-click-outside="closeDropdown"
    class="NavSecondaryDropdown relative"
    :class="{
      'mr-auto': index === 0
    }"
  >
    <NavDropdownToggle
      :aria-expanded="dropdownVisible ? true : false"
      :path="item.path"
      class="font-medium border-t-2 border-transparent block px-3 py-2"
      :class="dropdownToggleClasses(index)"
      :invert="invert"
      @toggle-clicked="toggleDropdown()"
      @close-dropdown="closeDropdown()"
    >
      <span
        class="flex content-center pt-2 pb-1 mb-1 transition-colors duration-100 ease-in border-b-2 border-transparent"
        :class="dropdownButtonClasses(index)"
      >
        <span>{{ item.title }}</span>
        <IconCaret class="transform rotate-90 text-sm ml-2 pl-2 -mt-px" />
      </span>
    </NavDropdownToggle>
    <transition name="navfade">
      <div
        v-if="dropdownVisible"
        class="absolute z-60 bg-gray-light shadow-jpl w-64 text-lg"
        :class="isLast ? 'right-0' : 'left-0'"
        @click.stop
      >
        <slot>
          <NavSecondaryDropdownContent :item="item" />
        </slot>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import IconCaret from './../Icons/IconCaret.vue'
import NavDropdownToggle from './../NavDropdownToggle/NavDropdownToggle.vue'
import NavSecondaryDropdownContent from './../NavSecondary/NavSecondaryDropdownContent.vue'

export default defineComponent({
  name: 'NavSecondaryDropdown',
  components: {
    IconCaret,
    NavDropdownToggle,
    NavSecondaryDropdownContent
  },
  props: {
    // the index from the parent v-for loop
    index: {
      type: Number,
      required: false,
      default: 0
    },
    isLast: {
      type: Boolean,
      required: false,
      default: false
    },
    // the nav item object that includes path, title, and children
    item: {
      type: Object,
      required: true
    },

    invert: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  emits: ['closeDropdown', 'openDropdown'],
  data() {
    return {
      dropdownVisible: false
    }
  },
  watch: {
    $route() {
      if (this.dropdownVisible) {
        this.closeDropdown()
      }
    }
  },
  mounted() {
    // TODO: VUE3: find solution for emitting event from slot
    // https://stackoverflow.com/questions/50181858/this-root-emit-not-working-in-vue
    // TODO: find a cleaner way to do this w/o using mounted or root level events
    // scoped slots? https://github.com/vuejs/vue/issues/4332
    // this.$root?.$on('linkClicked', this.closeDropdown)
  },
  methods: {
    toggleDropdown() {
      console.log('dropdown toggled')
      if (this.dropdownVisible) {
        this.closeDropdown()
      } else {
        this.openDropdown()
      }
    },
    closeDropdown() {
      if (this.dropdownVisible) {
        this.dropdownVisible = false
        this.$emit('closeDropdown')
      }
    },
    openDropdown() {
      if (!this.dropdownVisible) {
        this.dropdownVisible = true
        this.$emit('openDropdown')
      }
    },
    isExternal(path: string): boolean {
      if (path && path.startsWith('http')) {
        return true
      }
      return false
    },
    dropdownToggleClasses(index: number) {
      return this.invert
        ? {
            'mr-auto text-white font-semibold secondary-root': index === 0,
            'text-white': index !== 0,
            '-open': this.dropdownVisible
          }
        : {
            'mr-auto text-primary font-semibold secondary-root': index === 0,
            'text-gray-dark': index !== 0,
            '-open': this.dropdownVisible
          }
    },
    dropdownButtonClasses(index: number) {
      const titleButton = this.invert
        ? 'can-hover:group-hover:border-white'
        : 'can-hover:group-hover:border-primary'
      const regularButton = this.invert
        ? 'can-hover:group-hover:border-white can-hover:group-hover:text-white'
        : 'can-hover:group-hover:border-gray-mid-dark can-hover:group-hover:text-gray-mid-dark'
      return index === 0 ? titleButton : regularButton
    }
  }
})
</script>
<style lang="scss">
.NavSecondaryDropdown {
  .NavDropdownToggle {
    &.-open {
      > span {
        @apply border-black text-gray-dark #{!important};
      }
      &.-invert {
        > span {
          @apply border-white text-white #{!important};
        }
      }
    }

    &.-active {
      > span {
        @apply font-bold text-gray-dark;
        @apply border-primary #{!important};
      }
      &.-invert {
        > span {
          @apply text-white;
          @apply border-white #{!important};
        }
      }
    }
    &:hover {
      &.-active {
        > span {
          @apply text-gray-mid-dark;
        }
        &.-invert {
          > span {
            @apply text-white;
          }
        }
      }
    }
  }
  // transitions
  .navfade-enter-to,
  .navfade-enter-active {
    @apply transition-all ease-out transform duration-200;
  }

  .navfade-leave-active,
  .navfade-leave-to {
    @apply transition-all ease-out transform duration-200;
  }

  .navfade-enter-active {
    @apply opacity-0;
    @apply -translate-y-2;
  }

  .navfade-enter-to {
    @apply opacity-100;
    @apply translate-y-0;
  }

  .navfade-leave-to {
    @apply opacity-100;
    @apply translate-y-0;
  }

  .navfade-leave-active {
    @apply opacity-0;
    @apply -translate-y-2;
  }
}
</style>
