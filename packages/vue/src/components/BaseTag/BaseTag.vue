<script setup lang="ts">
import type { Attributes } from './../../interfaces'

// using borders to vertically center wonky font face
const variantMap: Attributes = {
  primary: 'bg-primary border-primary',
  secondary: 'bg-secondary border-secondary',
  action: 'bg-action border-action'
}

const sizeMap: Attributes = {
  sm: 'text-xs uppercase border-t-2 py-1 px-2.5',
  md: 'text-xs lg:text-base capitalize border-t py-1 px-3',
  lg: 'text-base lg:text-lg capitalize border-t py-1 px-3'
}

interface BaseTagProps {
  variant?: string
  size?: string
}

// define props
const props = withDefaults(defineProps<BaseTagProps>(), {
  variant: 'primary',
  size: 'md'
})
</script>
<template>
  <p
    :class="`${variantMap[props.variant]} ${sizeMap[props.size]}`"
    class="ThemeVariantLight text-contrast-none inline-block text-white font-bold edu:font-extrabold rounded-full leading-tight m-0"
  >
    <slot />
    <span class="sr-only">.</span>
  </p>
</template>
