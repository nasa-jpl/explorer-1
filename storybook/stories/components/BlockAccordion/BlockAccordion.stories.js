import { BlockAccordionTemplate } from './BlockAccordion'

export default {
  title: 'Components/Blocks/BlockAccordion',
  decorators: [
    (Story) => `<div id="storyRoot" class="mx-auto container">${Story()}</div>`,
  ],
  argTypes: {
    accordion_id: {
      type: { name: 'string', required: true },
      description:
        'A unique ID for the accordion group. This ensures multiple accordions on a page will function properly.',
    },
    heading_level: {
      type: { name: 'string', required: false },
      description: 'The semantic heading level for each accordion item.',
    },
    items: {
      type: { name: 'array', required: true },
      description: 'Array of accordion item data objects',
    },
    allow_multiple_open: {
      type: { name: 'boolean', required: false },
      description: 'If multiple items can be open simultaneously',
    },
  },
  parameters: {
    html: {
      root: '#storyRoot',
    },
    viewMode: 'docs',
    docs: {
      inlineStories: false,
      iframeHeight: 500,
      description: {
        component:
          'A block with expandable sections. Has an option to allowing multiple sections to remain open at a time.',
      },
    },
  },
  excludeStories: /.*Data$/,
}

export const BlockAccordionData = {
  accordion_id: 'accordion1',
  heading_level: 'h2',
  allow_multiple_open: true,
  items: [
    {
      item_id: 'item1',
      title: 'First accordion item',
      body: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent venenatis, sapien sed mattis auctor, mauris tortor hendrerit leo, <a href="#">vestibulum pellentesque</a> ex mi sed risus.</p><p>Vestibulum auctor facilisis velit, vel consequat ipsum fermentum sed. Nulla sed eleifend arcu, porttitor commodo lorem. </p>',
    },
    {
      item_id: 'item2',
      title: 'Second accordion item',
      body: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent venenatis, sapien sed mattis auctor, mauris tortor hendrerit leo, <a href="#">vestibulum pellentesque</a> ex mi sed risus.</p><p>Vestibulum auctor facilisis velit, vel consequat ipsum fermentum sed. Nulla sed eleifend arcu, porttitor commodo lorem. </p>',
    },
    {
      item_id: 'item3',
      title: 'Third accordion item',
      body: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent venenatis, sapien sed mattis auctor, mauris tortor hendrerit leo, <a href="#">vestibulum pellentesque</a> ex mi sed risus.</p><p>Vestibulum auctor facilisis velit, vel consequat ipsum fermentum sed. Nulla sed eleifend arcu, porttitor commodo lorem. </p>',
    },
    {
      item_id: 'item4',
      title: 'Fourth accordion item',
      body: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent venenatis, sapien sed mattis auctor, mauris tortor hendrerit leo, <a href="#">vestibulum pellentesque</a> ex mi sed risus.</p><p>Vestibulum auctor facilisis velit, vel consequat ipsum fermentum sed. Nulla sed eleifend arcu, porttitor commodo lorem. </p>',
    },
  ],
}

export const Default = BlockAccordionTemplate.bind({})
Default.storyName = 'BlockAccordion'
Default.args = BlockAccordionData
