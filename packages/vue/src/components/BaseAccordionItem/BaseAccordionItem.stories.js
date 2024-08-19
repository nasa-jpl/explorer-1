import BaseAccordionItem from './BaseAccordionItem.vue'
import { BlockStreamfieldTruncatedData } from '../BlockStreamfield/BlockStreamfield.stories'
export default {
  title: 'Components/Base/BaseAccordionItem',
  component: BaseAccordionItem
}

// stories
export const BaseStory = {
  name: 'BaseAccordionItem',
  args: {
    headingLevel: 'h3',
    item: { title: 'Title for the accordion', body: BlockStreamfieldTruncatedData.body }
  }
}
