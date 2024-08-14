<script setup lang="ts">
import { computed } from 'vue'
import type { Attributes } from './../../interfaces'
import { eduMetadataDictionary } from './../../constants'

// using borders to vertically center wonky font face
const variantMap: Attributes = {
  primary: 'bg-primary border-primary',
  secondary: 'bg-secondary border-secondary',
  action: 'bg-action border-action'
}

const sizeMap: Attributes = {
  sm: 'text-xs border-t-2 py-1 px-2.5',
  md: 'text-xs lg:text-base border-t py-1.5 px-3.5',
  lg: 'text-base lg:text-lg border-t pt-1.5 pb-1 px-5'
}

interface BasePillProps {
  variant?: string
  size?: string
  contentType?: string
}

// define props
const props = withDefaults(defineProps<BasePillProps>(), {
  variant: 'primary',
  size: 'md',
  contentType: undefined
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
</script>
<template>
  <p
    :class="`${variantMap[metadataAttrs.variant || props.variant]} ${sizeMap[props.size]}`"
    class="ThemeVariantLight text-contrast-none inline-block text-white font-bold edu:font-extrabold rounded-full leading-tight m-0 uppercase print:border-none print:px-0"
  >
    <template v-if="metadataAttrs.label"> {{ metadataAttrs.label }} </template>
    <template v-else> <slot /></template>
    <span class="sr-only">.</span>
  </p>
</template>
