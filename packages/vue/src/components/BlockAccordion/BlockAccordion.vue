<script setup lang="ts">
import { computed, reactive } from 'vue'
import type { AccordionItemObject, ImageBlock } from '../../interfaces'
import BaseAccordionItem from './../BaseAccordionItem/BaseAccordionItem.vue'

interface AccordionItemCharBlock {
  blockType: 'CharBlock'
  value: string
}
interface AccordionItemBlock {
  blockType: 'AccordionItemBlock'
  blocks: (AccordionBodyStreamfieldBlock | AccordionItemCharBlock)[]
}
interface RichTextBlock {
  blockType: 'RichTextBlock'
  text: string
  variant: string
}
interface AccordionBodyStreamfieldBlock {
  blockType: 'AccordionBodyStreamfieldBlock'
  blocks: (ImageBlock | RichTextBlock)[]
}

interface BlockAccordionProps {
  accordionItemsHeadingLevel: string
  accordionItems: AccordionItemBlock[]
}

// define props
const props = withDefaults(defineProps<BlockAccordionProps>(), {
  accordionItemsHeadingLevel: 'h2',
  accordionItems: undefined
})

const { accordionItemsHeadingLevel, accordionItems } = reactive(props)

const headingLevel = computed(() => {
  return `h${accordionItemsHeadingLevel}`
})

const remappedAccordionItems = computed((): AccordionItemObject[] | undefined => {
  if (accordionItems) {
    const remappedItems = accordionItems.map((item) => {
      let title = ''
      let body: (ImageBlock | RichTextBlock)[] = []

      item.blocks.forEach((block) => {
        if (block.blockType === 'CharBlock') {
          title = (block as AccordionItemCharBlock).value || ''
        } else if (block.blockType === 'AccordionBodyStreamfieldBlock') {
          body = (block as AccordionBodyStreamfieldBlock).blocks || []
        }
      })
      return {
        title,
        body
      }
    })
    return remappedItems
  }
  return undefined
})
</script>
<template>
  <div class="BlockAccordion">
    <slot>
      <BaseAccordionItem
        v-for="(item, index) in remappedAccordionItems"
        :key="index"
        :heading-level="headingLevel"
        :item="item"
      />
    </slot>
  </div>
</template>
