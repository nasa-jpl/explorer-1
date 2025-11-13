import BaseAccordionItem from './BaseAccordionItem.vue'
import { BlockStreamfieldTruncatedData } from '../BlockStreamfield/BlockStreamfield.stories'
export default {
  title: 'Components/Base/BaseAccordionItem',
  component: BaseAccordionItem,
  argTypes: {
    headingLevel: {
      type: 'string',
      control: { type: 'select' },
      options: ['h2', 'h3', 'h4', 'h5', 'h6']
    }
  }
}

// stories
export const BaseStory = {
  name: 'BaseAccordionItem',
  args: {
    headingLevel: 'h5',
    item: { title: 'Title for the accordion', body: BlockStreamfieldTruncatedData.body }
  }
}
