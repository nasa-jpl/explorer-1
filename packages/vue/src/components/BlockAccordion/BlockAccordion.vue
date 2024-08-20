<script setup lang="ts">
import { computed, reactive } from 'vue'
import type { AccordionItemObject, ImageBlock } from '../../interfaces'
import BaseAccordionItem from './../BaseAccordionItem/BaseAccordionItem.vue'

interface AccordionItemCharBlock {
  blockType: 'CharBlock'
  value: string
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
interface AccordionItemBlock {
  blockType: 'AccordionItemBlock'
  blocks: (AccordionBodyStreamfieldBlock | AccordionItemCharBlock)[]
}
export interface AccordionBlockObject {
  accordionItemsHeadingLevel: string
  accordionItems: AccordionItemBlock[]
}
interface BlockAccordionProps {
  data: AccordionBlockObject
}

// define props
const props = withDefaults(defineProps<BlockAccordionProps>(), {
  data: undefined
})

const { data } = reactive(props)

const headingLevel = computed(() => {
  return data ? `h${data?.accordionItemsHeadingLevel}` : undefined
})

const remappedAccordionItems = computed((): AccordionItemObject[] | undefined => {
  if (data?.accordionItems) {
    const remappedItems = data.accordionItems.map((item) => {
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
    <BaseAccordionItem
      v-for="(item, index) in remappedAccordionItems"
      :key="index"
      :heading-level="headingLevel"
      :item="item"
    />
  </div>
</template>
