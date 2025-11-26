<script setup lang="ts">
import { computed } from 'vue'
import type { ContentTypeKey } from './../../interfaces.ts'
import { eduMetadataDictionary } from './../../constants'

// using borders to vertically center wonky font face
const variantMap = {
  primary: 'bg-primary border-primary',
  'primary-inverted': 'bg-gray-light-mid !text-primary-darker border-gray-light-mid',
  secondary: 'bg-secondary border-secondary',
  action: 'bg-action border-action'
} as const
type VariantMapKey = keyof typeof variantMap

const sizeMap = {
  sm: 'text-subtitle border-t-2 py-1 px-2.5',
  md: 'text-subtitle lg:text-base border-t py-1.5 px-3.5',
  lg: 'text-subtitle lg:text-lg border-t py-1.5 px-5'
} as const
type SizeMapKey = keyof typeof sizeMap

const props = defineProps({
  /**
   * The text contained in the pill. Plain text only.
   */
  text: {
    type: String,
    default: undefined
  },
  /**
   * The variant (color) of the pill
   */
  variant: {
    type: String as () => VariantMapKey,
    default: 'primary'
  },
  /**
   * The size of the pill
   */
  size: {
    type: String as () => SizeMapKey,
    default: 'md'
  },
  /**
   * Maps to EDU Resource types. Must use `ThemeEdu` to affect color.
   */
  contentType: {
    type: String as () => ContentTypeKey,
    default: undefined
  }
})

const metadataType = computed(() => {
  const validContentTypes = Object.keys(eduMetadataDictionary)
  return props.contentType && validContentTypes.includes(props.contentType)
    ? props.contentType
    : undefined
})
const metadataAttrs = computed(() => {
  if (metadataType.value) {
    return eduMetadataDictionary[metadataType.value]
  }
  return { variant: undefined, label: undefined }
})
const theText = computed(() => {
  return props.text || metadataAttrs.value.label
})
</script>
<template>
  <p
    :class="`${variantMap[metadataAttrs.variant || props.variant]} ${sizeMap[props.size]}`"
    class="ThemeVariantLight text-contrast-none inline-block text-white font-bold edu:font-extrabold rounded-full leading-tight m-0 uppercase print:border-none print:px-0"
  >
    {{ theText }}
    <span class="sr-only">.</span>
  </p>
</template>
