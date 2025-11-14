import BlockImageComparison from './BlockImageComparison.vue'

export default {
  title: 'Components/Blocks/BlockImageComparison',
  component: BlockImageComparison,
  decorators: [
    () => ({
      template: `<div id="storyRoot" class="container mx-auto"><story/></div>`
    })
  ],
  parameters: {
    html: {
      root: '#storyRoot'
    }
  },
  excludeStories: /.*Data$/
}

export const BlockImageComparisonData = {
  blockType: 'ImageComparisonBlock',
  beforeImage: {
    src: {
      url: 'https://picsum.photos/800/450?image=1'
    },
    srcCropped: {
      url: 'https://picsum.photos/1320/1320?image=1'
    }
  },
  afterImage: {
    src: {
      url: 'https://picsum.photos/800/450?image=4'
    },
    srcCropped: {
      url: 'https://picsum.photos/1320/1320?image=4'
    }
  },
  caption: '<p>Catnip test subjects from the JPL Mars Cultivation Lab</p>'
}

// stories
export const BaseStory = {
  name: 'BlockImageComparison',
  args: {
    data: BlockImageComparisonData
  }
}
