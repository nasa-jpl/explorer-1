<template>
  <button
    class="MixinDropdownToggle group cursor-pointer"
    :class="{ '-active': isActivePath }"
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

  name: 'MixinDropdownToggle',
  props: {
    path: {
      type: String,
      required: false,
    },
    ariaExpanded: {
      type: Boolean,
      required: false,
    },
  },
  methods: {
    clickEvent() {
      this.$emit('toggleClicked')
    },
    escEvent() {
      this.$emit('closeDropdown')
    },
  },
  computed: {
    isActivePath() {
      if (this.path) {
        return mixinIsActivePath(this.path)
      }
    }
  },

})
</script>
