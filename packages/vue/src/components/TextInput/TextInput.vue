<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
interface TextInputProps {
  inputName: string
  type?: string
  required?: boolean
  label: string
  showLabel?: boolean
  placeholder?: string
  maxlength?: string
  pattern?: string
  title?: string
  autoFocus?: boolean
  labelClass?: string
  inputClass?: string
}
// define props
const props = withDefaults(defineProps<TextInputProps>(), {
  type: 'text',
  showLabel: true,
  required: false,
  placeholder: undefined,
  autoFocus: false,
  maxlength: undefined,
  pattern: undefined,
  title: undefined,
  labelClass: undefined,
  inputClass: undefined
})
const emit = defineEmits(['input', 'esc'])

const model = defineModel({ type: String })
const TextInputRef = ref(undefined)
const isFocused = ref(false)

const inputId = computed(() => {
  return `${props.inputName}_input`
})
const labelId = computed(() => {
  return `${inputId.value}_label`
})
onMounted(() => {
  if (props.autoFocus && TextInputRef.value) {
    const inputField = TextInputRef.value as HTMLInputElement
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
      :class="props.labelClass ? props.labelClass : 'block text-subtitle text-gray-dark'"
      >{{ props.label }}
      <template v-if="props.required">
        <span class="text-error">*</span>
      </template></label
    >
    <input
      :id="inputId"
      ref="TextInputRef"
      v-model="model"
      :name="props.inputName"
      :type="props.type"
      :required="props.required"
      :title="props.title"
      :placeholder="props.placeholder"
      :maxlength="props.maxlength"
      :pattern="props.pattern"
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
    />
  </div>
</template>
