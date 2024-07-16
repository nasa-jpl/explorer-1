import { BackToTopTemplate } from './BackToTop.js'

export default {
  title: 'Components/Utilities/BackToTop',
  argTypes: {
    alwaysVisible: {
      type: 'boolean',
      description:
        'Allows component to be visible regardless of the scrolling position for presentation purposes.',
      table: {
        defaultValue: { summary: 'false' }
      }
    },
    threshold: {
      type: 'number',
      description: 'Specifies the scroll position at which BackToTop becomes visible.',
      table: {
        defaultValue: { summary: '300' }
      }
    },
    scrollTo: {
      type: 'number',
      description:
        'Specifies the vertical scroll position to which the page will scroll when BackToTop is clicked.',
      table: {
        defaultValue: { summary: '0' }
      }
    },
    buttonClass: {
      type: 'string',
      description: 'Custom button CSS class.'
    }
  },
  parameters: {
    viewMode: 'docs',
    docs: {
      description: {
        component: 'Allows users to scroll back to the specified position or to the top of the page'
      }
    }
  }
}

export const Default = BackToTopTemplate.bind({})
Default.storyName = 'BackToTop'
Default.args = { alwaysVisible: true, threshold: 300, scrollTo: 0 }
