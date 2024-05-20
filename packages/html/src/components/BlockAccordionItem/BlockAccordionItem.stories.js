import { BlockAccordionItemTemplate } from './BlockAccordionItem'

export default {
  title: 'Components/Blocks/BlockAccordion/BlockAccordionItem',
  decorators: [
    (Story) =>
      `<div id="storyRoot" class="BlockAccordion mx-auto container">${Story()}</div>`,
  ],
  argTypes: {
    item_id: {
      type: { name: 'string', required: true },
      description: 'A unique ID for each expandable item.',
    },
    heading_level: {
      type: { name: 'string', required: false },
      description:
        'The semantic heading level for each accordion item. Usually set at the accordion group level.',
    },
    title: {
      type: { name: 'string', required: true },
    },
    body: {
      type: { name: 'string', required: true },
      description:
        'The content for the accordion item. Supports richtext. Any component could theoretically be used within an accordion item. This template uses `BlockText` as a default.',
    },
  },
  parameters: {
    html: {
      root: '#storyRoot',
    },
    viewMode: 'docs',

    docs: { inlineStories: false, iframeHeight: 250 },
  },
  excludeStories: /.*Data$/,
}

const BlockAccordionItemData = {
  heading_level: 'h2',
  item_id: 'group_id_itemIdNumber',
  title: 'Lorem ipsum dolor sit amet',
  body: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent venenatis, sapien sed mattis auctor, mauris tortor hendrerit leo, <a href="#">vestibulum pellentesque</a> ex mi sed risus.</p><p>Vestibulum auctor facilisis velit, vel consequat ipsum fermentum sed. Nulla sed eleifend arcu, porttitor commodo lorem. </p>',
}

export const AccordionItem = BlockAccordionItemTemplate.bind({})
AccordionItem.storyName = 'BlockAccordionItem'
AccordionItem.args = BlockAccordionItemData
