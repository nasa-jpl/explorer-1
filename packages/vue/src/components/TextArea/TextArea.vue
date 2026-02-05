<script setup lang="ts">
import { ref, computed } from 'vue'
export interface TextAreaProps {
  inputName: string
  label: string
  cols?: number
  rows?: number
  required?: boolean
  showLabel?: boolean
  placeholder?: string
  labelClass?: string
  inputClass?: string
}
// define props
const props = withDefaults(defineProps<TextAreaProps>(), {
  cols: undefined,
  rows: 4,
  required: false,
  label: undefined,
  showLabel: true,
  placeholder: undefined,
  labelClass: undefined,
  inputClass: undefined
})
const emit = defineEmits(['input', 'esc'])

const model = defineModel({ type: String })
// @ts-ignore
const TextAreaRef = ref(undefined)
const isFocused = ref(false)

const inputId = computed(() => {
  return `${props.inputName}_input`
})
const labelId = computed(() => {
  return `${inputId.value}_label`
})
</script>
<template>
  <div>
    <label
      v-if="props.showLabel"
      :id="labelId"
      :for="inputId"
      :class="props.labelClass ? props.labelClass : 'block text-subtitle text-gray-dark mb-2'"
    >
      {{ props.label }}
      <template v-if="props.required">
        <span class="text-error">*</span>
      </template>
    </label>
    <textarea
      :id="inputId"
      ref="TextAreaRef"
      v-model="model"
      :cols="props.cols"
      :rows="props.rows"
      :name="props.inputName"
      :required="props.required"
      :placeholder="props.placeholder"
      :aria-required="props.required"
      :aria-labelledby="props.showLabel ? labelId : undefined"
      :aria-label="!props.showLabel ? props.label : undefined"
      :class="
        props.inputClass
          ? props.inputClass
          : 'border-gray-light-mid w-full px-4 py-3 border mt-2 focus:border-focus-blue focus:shadow-jpl'
      "
      @keydown.esc="emit('esc')"
      @input="emit('input', $event.target)"
      @focus="isFocused = true"
      @blur="isFocused = false"
    ></textarea>
  </div>
</template>
