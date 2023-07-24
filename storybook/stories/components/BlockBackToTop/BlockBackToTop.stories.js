import { BlockBackToTopTemplate } from './BlockBackToTop.js'

export default {
  title: 'Components/Blocks/BlockBackToTop',
  argTypes: {
    alwaysVisible: {
      type: 'boolean',
      description: 'Toggles visibility based on the scrolling position.',
    },
  },
  parameters: {
    viewMode: 'docs',
    docs: {
      description: {
        component: 'Allows users to scroll back to the top of the page',
      },
    },
  },
}

export const Default = BlockBackToTopTemplate.bind({})
Default.storyName = 'BlockBackToTop'
Default.args = { alwaysVisible: true }
