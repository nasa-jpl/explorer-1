import BlockAccordion from './BlockAccordion.vue'
import { BlockStreamfieldTruncatedData } from '../BlockStreamfield/BlockStreamfield.stories'

export default {
  title: 'Components/Blocks/BlockAccordion',
  component: BlockAccordion
}

// stories
// export const BaseStory = {
//   name: 'BlockAccordion',
//   args: {
//     headingLevel: 'h5',
//     items: [
//       {
//         title: 'Title for the accordion',
//         body: BlockStreamfieldTruncatedData.body
//       },
//       {
//         title: 'Another',
//         body: BlockStreamfieldTruncatedData.body
//       },
//       {
//         title: 'Yet another',
//         body: BlockStreamfieldTruncatedData.body
//       }
//     ]
//   }
// }
// stories
export const BaseStory = {
  name: 'BlockAccordion',
  args: {
    blockType: 'AccordionBlock',
    id: 'adfef404-6eae-4938-a407-d09f37c54b0d',
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
            blocks: BlockStreamfieldTruncatedData.body
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
            blocks: BlockStreamfieldTruncatedData.body
          }
        ]
      }
    ]
  }
}
