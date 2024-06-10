import BlockKeyPoints from '@explorer-1/vue/src/components/BlockKeyPoints/BlockKeyPoints.vue'

export default {
  title: 'Components/Blocks/BlockKeyPoints',
  component: BlockKeyPoints,
  excludeStories: /.*Data$/
}

export const BlockKeyPointsData = {
  blockType: 'KeyPointBlock',
  heading: 'Key Points',
  listItem: [
    {
      text: '<p>Understanding how greenhouse gases will affect clouds is crucial to forecasting climate change.</p><p>But current computer climate models can’t handle the high resolution needed to simulate cloud dynamics worldwide.</p>'
    },
    {
      text: '<p>A recent study suggests that if greenhouse gases raise the atmosphere’s temperature enough, stratocumulus clouds could disappear, causing a large spike in global temperature.</p>'
    }
  ]
}

// stories
export const KeyPoints = {
  name: 'BlockKeyPoints',
  args: {
    data: BlockKeyPointsData
  }
}
