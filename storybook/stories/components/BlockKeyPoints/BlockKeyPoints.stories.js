import { BlockKeyPointsTemplate } from './BlockKeyPoints'

export default {
  title: 'Components/Blocks/BlockKeyPoints',
  excludeStories: /.*Data$/,
  parameters: {
    viewMode: 'docs',
    docs: {
      description: {
        component: '',
      },
    },
  },
}

export const BlockKeyPointsData = {
  heading: 'Key Points',
  listItem: [
    {
      text: '<p>Understanding how greenhouse gases will affect clouds is crucial to forecasting climate change.</p><p>But current computer climate models can’t handle the high resolution needed to simulate cloud dynamics worldwide.</p>',
    },
    {
      text: '<p>A recent study suggests that if greenhouse gases raise the atmosphere’s temperature enough, stratocumulus clouds could disappear, causing a large spike in global temperature.</p>',
    },
  ],
}

export const KeyPoint = BlockKeyPointsTemplate.bind({})
KeyPoint.storyName = 'BlockKeyPoints'
KeyPoint.args = BlockKeyPointsData
