<script setup lang="ts">
import { computed } from 'vue'
import type { Attributes } from './../../interfaces'

interface LabelObject {
  label: string
  variant: string
}
interface labelDictionaryInterface {
  [EDUExplainerArticlePage: string]: LabelObject
}
const labelDictionary: labelDictionaryInterface = {
  EDUExplainerArticlePage: {
    label: 'Explainer Article',
    variant: 'secondary'
  }
}

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

const label = computed(() => {
  return props.contentType && labelDictionary[props.contentType]
    ? labelDictionary[props.contentType]?.label
    : undefined
})
</script>
<template>
  <p
    :class="`${variantMap[label && props.contentType ? labelDictionary[props.contentType]?.variant : props.variant]} ${sizeMap[props.size]}`"
    class="ThemeVariantLight text-contrast-none inline-block text-white font-bold edu:font-extrabold rounded-full leading-tight m-0 uppercase print:border-none print:px-0"
  >
    <template v-if="!label">
      <slot>{{ label }}</slot>
    </template>
    <template v-else>
      {{ label }}
    </template>
    <span class="sr-only">.</span>
  </p>
</template>
