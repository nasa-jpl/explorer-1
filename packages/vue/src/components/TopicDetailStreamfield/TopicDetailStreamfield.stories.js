import { BlockImageGalleryData } from '../BlockImageGallery/BlockImageGallery.stories'
import { BlockQuoteData } from '../BlockQuote/BlockQuote.stories'
import { BlockRelatedLinksData } from '../BlockRelatedLinks/BlockRelatedLinks.stories'
import TopicDetailStreamfield from './TopicDetailStreamfield.vue'

export default {
  title: 'WWW/Components/TopicDetail/TopicDetailStreamfield',
  component: TopicDetailStreamfield,
  decorators: [
    () => ({
      template: `<div id="storyDecorator" class="absolute inset-0"><story/></div>`
    })
  ],
  parameters: {
    html: {
      root: '#storyDecorator'
    }
  },
  excludeStories: /.*(Data)$/
}

export const TopicDetailStreamfieldData = {
  body: [
    {
      blockType: 'HeadingBlock',
      heading: 'Heading Text'
    },
    BlockImageGalleryData.block,
    BlockQuoteData,
    BlockRelatedLinksData.data
  ]
}

const TopicDetailStreamfieldTemplate = (args) => ({
  props: Object.keys(args),
  components: { TopicDetailStreamfield },
  template: `<TopicDetailStreamfield :data="body" topic="Topic Name" />`
})

export const Default = TopicDetailStreamfieldTemplate.bind({})
Default.args = { ...TopicDetailStreamfieldData }
