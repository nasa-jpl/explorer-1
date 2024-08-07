<template>
  <button
    class="NavDropdownToggle group cursor-pointer"
    :class="{ '-active': isActivePath, '-invert': invert }"
    :aria-expanded="ariaExpanded"
    @click="clickEvent()"
    @keydown.esc="escEvent()"
  >
    <slot></slot>
  </button>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { mixinIsActivePath } from './../../utils/mixins'

export default defineComponent({
  /* Accessible dropdown toggle that emits click and keyboard events
   * Also checks if the user is on a page within the dropdown's path, if provided.
   * Used in:
   * - NavSecondaryDropdown
   * - NavMobileSecondaryDropdown
   * - NavMobileDropdown
   */

  name: 'NavDropdownToggle',
  props: {
    path: {
      type: String,
      default: undefined
    },
    ariaExpanded: {
      type: Boolean,
      default: false
    },
    invert: {
      type: Boolean,
      default: false
    }
  },
  emits: ['closeDropdown', 'toggleClicked'],
  computed: {
    isActivePath() {
      if (this.path) {
        return mixinIsActivePath(this.path)
      }
      return false
    }
  },
  methods: {
    clickEvent() {
      this.$emit('toggleClicked')
    },
    escEvent() {
      this.$emit('closeDropdown')
    }
  }
})
</script>
