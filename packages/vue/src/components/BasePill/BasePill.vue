<script setup lang="ts">
import { computed } from 'vue'
import type { Attributes } from './../../interfaces'
import { eduMetadataDictionary } from './../../constants'

// using borders to vertically center wonky font face
const variantMap: Attributes = {
  primary: 'bg-primary border-primary',
  'primary-inverted': 'bg-gray-light-mid !text-primary-darker border-gray-light-mid',
  secondary: 'bg-secondary border-secondary',
  action: 'bg-action border-action'
}

const sizeMap: Attributes = {
  sm: 'text-xs border-t-2 py-1 px-2.5',
  md: 'text-xs lg:text-base border-t py-1.5 px-3.5',
  lg: 'text-base lg:text-lg border-t pt-1.5 pb-1 px-5'
}

interface BasePillProps {
  text?: string
  variant?: string
  size?: string
  contentType?: string
  invert?: boolean
}

// define props
const props = withDefaults(defineProps<BasePillProps>(), {
  variant: 'primary',
  size: 'md',
  contentType: undefined,
  invert: false
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
