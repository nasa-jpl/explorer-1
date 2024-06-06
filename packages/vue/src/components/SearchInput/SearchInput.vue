<template>
  <!--
    A somewhat generic component that can be used for handiling search input
    We do this in at least two places:
      * on pages (such as the search page and listing pages)
      * for site-wide search -->
  <div
    class="relative flex items-center"
    :class="{
      'border border-gray-mid': defaultColors && !underlinedInput,
      'custom-focus': underlinedInput
    }"
  >
    <div class="absolute inset-0 flex items-center">
      <IconSearch
        class="relative z-10 ml-6 text-xl"
        :class="{ 'text-gray-mid': defaultColors }"
      />
    </div>
    <div
      v-if="underlinedInput"
      class="underlinedInput ml-14 h-2px absolute inset-x-0 bottom-0 overflow-hidden text-lg text-transparent"
    >
      <span class="border-jpl-red-light absolute z-10 h-0 border-b-2 select-none">
        {{ underlinedInputValue }}
      </span>
      <span
        class="border-gray-light-mid absolute inset-x-0 z-10 h-0 border-b-2 select-none"
        :class="isFocused ? 'border-opacity-100' : 'border-opacity-50'"
      ></span>
    </div>

    <input
      ref="searchQuery"
      class="pl-14 focus:ring-2 relative z-10 w-full pr-5 text-lg bg-transparent border-0"
      :class="{
        'text-gray-dark': defaultColors,
        'py-1': underlinedInput,
        'py-4': !underlinedInput
      }"
      type="search"
      aria-label="Query"
      :value="value"
      :placeholder="placeholder"
      @keydown.esc="$emit('esc')"
      @input="$emit('input', $event.target?.value)"
      @focus="isFocused = true"
      @blur="isFocused = false"
    />
  </div>
</template>
<script lang="ts">
// @ts-nocheck
import { defineComponent } from 'vue'
import IconSearch from './../Icons/IconSearch.vue'

export default defineComponent({
  name: 'SearchInput',
  components: {
    IconSearch
  },
  props: {
    value: String,
    // used in navigation search form
    underlinedInput: {
      type: Boolean,
      default: false
    },
    // assign the same value as value (i.e. searchQuery)
    underlinedInputValue: {
      type: String || null,
      required: false,
      default: null
    },
    placeholder: {
      type: String,
      required: false
    },
    autoFocus: {
      type: Boolean,
      default: false
    },
    // note: if(underlinedInput), then the border will be overridden
    defaultColors: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      isFocused: false
    }
  },
  mounted() {
    if (this.autoFocus) {
      const inputField = this.$refs.searchQuery as HTMLElement
      inputField.focus()
      this.isFocused = true
    }
  }
})
</script>
<style lang="scss" scoped>
.custom-focus {
  input {
    outline: none;
    box-shadow: none;
  }
}
</style>
