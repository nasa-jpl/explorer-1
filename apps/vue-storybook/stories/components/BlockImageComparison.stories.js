import BlockImageComparison from '@explorer-1/vue/src/components/BlockImageComparison/BlockImageComparison.vue'

export default {
  title: 'Components/Blocks/BlockImageComparison',
  component: BlockImageComparison,
  decorators: [
    () => ({
      template: `<div id="storyDecorator" class="container mx-auto"><story/></div>`
    })
  ],
  parameters: {
    html: {
      root: '#storyDecorator'
    }
  },
  excludeStories: /.*Data$/
}

export const BlockImageComparisonData = {
  blockType: 'ImageComparisonBlock',
  beforeImage: {
    src: {
      url: 'https://placekitten.com/800/450?image=1'
    },
    srcCropped: {
      url: 'https://placekitten.com/1320/1320?image=1'
    }
  },
  afterImage: {
    src: {
      url: 'https://placekitten.com/800/450?image=4'
    },
    srcCropped: {
      url: 'https://placekitten.com/1320/1320?image=4'
    }
  },
  caption: '<p>Catnip test subjects from the JPL Mars Cultivation Lab</p>'
}

// template
const BlockImageComparisonTemplate = (args) => ({
  props: Object.keys(args),
  components: { BlockImageComparison },
  template: `<BlockImageComparison
      :data="data"
    />`
})

// stories
export const Comparison = BlockImageComparisonTemplate.bind({})
Comparison.storyName = 'BlockImageComparison'
Comparison.args = {
  data: BlockImageComparisonData
}
