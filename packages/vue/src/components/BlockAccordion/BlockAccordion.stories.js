import BlockAccordion from './BlockAccordion.vue'
import { BlockStreamfieldTruncatedData } from '../BlockStreamfield/BlockStreamfield.stories'

export default {
  title: 'Components/Blocks/BlockAccordion',
  component: BlockAccordion
}

// stories
export const BaseStory = {
  name: 'BlockAccordion',
  args: {
    headingLevel: 'h5',
    items: [
      {
        title: 'Title for the accordion',
        body: BlockStreamfieldTruncatedData.body
      },
      {
        title: 'Another',
        body: BlockStreamfieldTruncatedData.body
      },
      {
        title: 'Yet another',
        body: BlockStreamfieldTruncatedData.body
      }
    ]
  }
}
