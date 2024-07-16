<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
interface TextAreaProps {
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

const model = defineModel()
const TextAreaRef = ref(undefined)
const isFocused = ref(false)

const inputId = computed(() => {
  return `${props.inputName}_input`
})
const labelId = computed(() => {
  return `${inputId.value}_label`
})
onMounted(() => {
  if (props.autoFocus && TextAreaRef.value) {
    const inputField = TextAreaRef.value as HTMLInputElement
    inputField.focus()
    isFocused.value = true
  }
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
      :type="props.type"
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
