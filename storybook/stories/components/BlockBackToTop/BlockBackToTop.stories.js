import { BlockBackToTopTemplate } from './BlockBackToTop.js'

export default {
  title: 'Components/Blocks/BlockBackToTop',
  argTypes: {
    alwaysVisible: {
      type: 'boolean',
      description: 'Toggles visibility based on the scrolling position.',
    },
    threshold: {
      type: 'number',
      description:
        'Specifies the scroll position at which BackToTop becomes visible. Defaults to 300',
    },
    scrollTo: {
      type: 'number',
      description:
        'Specifies the vertical scroll position to which the page will scroll when BackToTop is clicked. Defaults to 0',
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
Default.args = { alwaysVisible: true, threshold: 300, scrollTo: 0 }
