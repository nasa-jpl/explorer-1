<template>
  <div class="NavMobileSecondaryDropdown relative">
    <MixinDropdownToggle
      :aria-expanded="dropdownVisible ? true : false"
      :path="item.path"
      class="w-full group cursor-pointer pl-12 flex items-center py-2 text-lg leading-tight"
      :class="{
        '-open': dropdownVisible,
      }"
      @toggleClicked="toggleDropdown()"
      @closeDropdown="closeDropdown()"
    >
      <span>{{ index === 0 ? 'Home' : item.title }}</span>
      <IconCaret class="transform rotate-90 text-sm ml-2" />
    </MixinDropdownToggle>
    <template v-if="dropdownVisible">
      <slot>
        <NavSecondaryDropdownContent
          class="relative w-full text-lg"
          :item="item"
        />
      </slot>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import IconCaret from './../Icons/IconCaret.vue'
import MixinDropdownToggle from './../MixinDropdownToggle/MixinDropdownToggle.vue'
import NavSecondaryDropdownContent from './../NavSecondary/NavSecondaryDropdownContent.vue'

export default defineComponent({
  name: 'NavMobileSecondaryDropdown',

  components: {
    IconCaret,
    MixinDropdownToggle,
    NavSecondaryDropdownContent,
  },
  props: {
    // the index from the parent v-for loop
    index: {
      type: Number,
      required: false,
    },

    // the nav item object that includes path, title, and children
    item: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      dropdownVisible: false,
    }
  },
  computed: {
    startOpen(): Boolean {
      if (this.item) {
        return this.mixinIsActivePath(this.item.path)
      }
      return false
    },
  },
  watch: {
    $route() {
      if (this.dropdownVisible) {
        this.closeDropdown()
      }
    },
  },
  mounted() {
    if (this.startOpen) {
      this.dropdownVisible = true
    }
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
  },
})
</script>
<style lang="scss">
.NavMobileSecondaryDropdown {
  .MixinDropdownToggle {
    span {
      @apply border-b border-transparent;
    }

    &.-open {
      span {
        @apply border-gray-dark font-normal;
      }
    }

    &.-active {
      span {
        @apply font-medium border-jpl-red #{!important};
      }
    }
  }
}
</style>
