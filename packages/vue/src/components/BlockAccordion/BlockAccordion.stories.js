import BlockAccordion from './BlockAccordion.vue'
import { BlockImageData } from './../BlockImage/BlockImage.stories'

export default {
  title: 'Components/Blocks/BlockAccordion',
  component: BlockAccordion,
  excludeStories: /.*Data$/
}

const AccordionItemStreamfieldData = [
  {
    blockType: 'RichTextBlock',
    value:
      '<p>Lorem ipsum <a href="/missions/test-mission/">dolor</a> sit amet, consectetur adipiscing elit. Quisque vitae justo quis justo malesuada molestie. Cras sed tincidunt dui.</p>\n'
  },
  BlockImageData,
  {
    blockType: 'RichTextBlock',
    value:
      '<p>Integer imperdiet blandit neque vitae euismod. Nulla aliquet lacus nibh,  vel tincidunt urna efficitur non. In et eros vitae ex posuere maximus  quis eget urna. Suspendisse fringilla posuere velit sit amet posuere.  Morbi malesuada bibendum vehicula. Donec faucibus ut erat ut mattis.  Suspendisse ornare, quam at placerat cursus, dolor mi lacinia nunc, eget  maximus augue nulla in dolor.</p>\n'
  }
]

export const BlockAccordionData = {
  blockType: 'AccordionBlock',
  accordionItemsHeadingLevel: '3',
  accordionItems: [
    {
      blockType: 'AccordionItemBlock',
      blocks: [
        {
          blockType: 'CharBlock',
          value: 'First Accordion Item'
        },
        {
          blockType: 'AccordionBodyStreamfieldBlock',
          blocks: AccordionItemStreamfieldData
        }
      ]
    },
    {
      blockType: 'AccordionItemBlock',
      blocks: [
        {
          blockType: 'CharBlock',
          value: 'Second Accordion Item'
        },
        {
          blockType: 'AccordionBodyStreamfieldBlock',
          blocks: AccordionItemStreamfieldData
        }
      ]
    },
    {
      blockType: 'AccordionItemBlock',
      blocks: [
        {
          blockType: 'CharBlock',
          value: 'Third Accordion Item'
        },
        {
          blockType: 'AccordionBodyStreamfieldBlock',
          blocks: AccordionItemStreamfieldData
        }
      ]
    }
  ]
}
// stories
export const BaseStory = {
  name: 'BlockAccordion',
  args: { data: BlockAccordionData }
}
