<script setup lang="ts">
import { ref, onMounted } from 'vue'
import IconSearch from './../Icons/IconSearch.vue'

interface SearchInputProps {
  underlinedInput?: boolean
  underlinedInputValue?: string
  placeholder?: string
  autoFocus?: boolean
  defaultColors?: boolean
  withButton?: boolean
}

// define props
const props = withDefaults(defineProps<SearchInputProps>(), {
  underlinedInput: false,
  underlinedInputValue: undefined,
  placeholder: '',
  autoFocus: false,
  defaultColors: true,
  withButton: false
})

const emit = defineEmits(['input', 'esc', 'submit'])

const model = defineModel()
const isFocused = ref(false)
const searchQueryRef = ref(undefined)

onMounted(() => {
  if (props.autoFocus && searchQueryRef.value) {
    const inputField = searchQueryRef.value as HTMLElement
    inputField.focus()
    isFocused.value = true
  }
})
</script>
<template>
  <!--
    A somewhat generic component that can be used for handling search input
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
      ref="searchQueryRef"
      v-model="model"
      class="pl-14 h-full focus:ring-2 relative z-10 w-full px-5 text-sm md:text-base lg:text-lg bg-transparent border-0"
      :class="{
        'text-gray-dark': defaultColors,
        'py-1': underlinedInput,
        'py-3.5 lg:py-6': !underlinedInput
      }"
      type="search"
      aria-label="Query"
      :placeholder="placeholder"
      @keydown.esc="emit('esc')"
      @keydown.enter="emit('submit')"
      @input="emit('input', $event.target)"
      @focus="isFocused = true"
      @blur="isFocused = false"
    />
    <button
      v-if="withButton"
      class="hover:cursor-pointer bg-action p-4 lg:p-5 border border-white"
      @click="emit('submit')"
    >
      <IconSearch class="relative z-10 text-xl sm:text-2xl lg:text-3xl text-white" />
    </button>
  </div>
</template>
<style lang="scss" scoped>
.custom-focus {
  input {
    outline: none;
    box-shadow: none;
  }
}
</style>
