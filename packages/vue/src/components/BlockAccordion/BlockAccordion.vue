<script setup lang="ts">
import { reactive } from 'vue'
import { AccordionItemObject } from '../../interfaces'
import BaseAccordionItem from './../BaseAccordionItem/BaseAccordionItem.vue'

interface BlockAccordionProps {
  autoClose?: boolean
  headingLevel?: string
  items?: AccordionItemObject[]
}

// define props
const props = withDefaults(defineProps<BlockAccordionProps>(), {
  autoClose: false,
  headingLevel: 'h2',
  items: undefined
})

const { headingLevel, items } = reactive(props)
</script>
<template>
  <div class="BlockAccordion">
    <slot>
      <BaseAccordionItem
        v-for="(item, index) in items"
        :key="index"
        :heading-level="headingLevel"
        :item="item"
      />
    </slot>
  </div>
</template>
