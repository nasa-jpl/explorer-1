<template>
  <div class="NavDesktopDropdown">
    <NavDropdownToggle
      v-click-outside="closeDropdown"
      :aria-expanded="dropdownVisible ? true : false"
      class="group relative z-20 px-4 font-medium border-t-2 border-transparent"
      :class="{
        '-open': dropdownVisible
      }"
      @toggle-clicked="toggleDropdown()"
      @close-dropdown="closeDropdown()"
    >
      <span
        class="inline-block py-2 transition-colors duration-100 ease-in border-b-2"
        :class="{ hasSecondary: hasSecondary }"
      >
        <slot name="dropdownLabel">Dropdown</slot>
      </span>
    </NavDropdownToggle>

    <transition name="navfade">
      <div
        v-if="dropdownVisible"
        class="absolute inset-0 w-full"
      >
        <!-- @click.stop so the v-click-outside directive will ignore clicks inside the dropdown -->
        <div
          class="max-w-screen-3xl mx-auto"
          @click.stop
        >
          <slot></slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { eventBus } from './../../utils/eventBus'
import { mapStores } from 'pinia'
import { useHeaderStore } from './../../store/header'
import NavDropdownToggle from './../NavDropdownToggle/NavDropdownToggle.vue'

export default defineComponent({
  name: 'NavDesktopDropdown',
  components: {
    NavDropdownToggle
  },
  props: {
    parentScrolled: {
      type: Number,
      required: false,
      default: 0
    }
  },
  data() {
    return {
      dropdownVisible: false
    }
  },
  computed: {
    ...mapStores(useHeaderStore),
    hasSecondary(): boolean {
      if (this.headerStore) {
        return !this.headerStore.highlightPrimary
      }
      return false
    }
  },
  watch: {
    $route() {
      if (this.dropdownVisible) {
        this.closeDropdown()
      }
    },
    parentScrolled() {
      if (this.dropdownVisible) {
        this.closeDropdown()
      }
    }
  },
  mounted() {
    eventBus.on('linkClicked', () => this.closeDropdown())
  },
  methods: {
    toggleDropdown() {
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
    }
  }
})
</script>
<style lang="scss">
.NavDesktopDropdown {
  // pushes the dropdown below the closest parent div that has position:relative (e.g. the header)
  > div {
    &::before {
      content: '';
      @apply relative z-0 w-full h-full block;
    }
  }

  > button {
    > span {
      @apply border-transparent;
    }

    &.-open {
      > span {
        @apply border-primary edu:border-white;

        .-transparent & {
          @apply border-white;
        }

        .-transparent.-scrolled & {
          @apply border-primary edu:border-white;
        }
      }
    }
    &:hover {
      > span {
        @apply border-primary edu:border-white;

        .-transparent & {
          @apply border-white;
        }

        .-transparent.-scrolled & {
          @apply border-primary edu:border-white;
        }
      }
    }
  }
  // parent div is active
  &.-active {
    > button {
      > span {
        @apply border-primary edu:border-white font-bold;

        .-transparent & {
          @apply border-white;
        }

        .-transparent.-scrolled & {
          @apply border-primary edu:border-white;
        }

        &.hasSecondary {
          @apply border-transparent #{!important};
        }
      }
    }
  }

  // transitions
  .navfade-enter-to,
  .navfade-enter-active {
    @apply transition-all ease-out transform duration-500;
  }

  .navfade-leave-active,
  .navfade-leave-to {
    @apply transition-all ease-out transform duration-100;
  }

  .navfade-enter-active {
    @apply opacity-0 translate-y-2;
  }

  .navfade-enter-to {
    @apply opacity-100 translate-y-0;
  }

  .navfade-leave-to {
    @apply opacity-100; // translate-y-0
  }

  .navfade-leave-active {
    @apply opacity-0; // -translate-y-2
  }
}
</style>
