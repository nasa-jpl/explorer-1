import BlockQuote from './BlockQuote.vue'

export default {
  title: 'Components/Blocks/BlockQuote',
  component: BlockQuote,
  excludeStories: /.*Data$/,
  parameters: {
    viewMode: 'docs',
    docs: {
      description: {
        component:
          'A big, fancy pull quote, with optional attribution and link. Can also be used for non-quotation callouts.'
      }
    }
  }
}

// shared data
export const BlockQuoteData = {
  blockType: 'QuoteBlock',
  quote:
    "“A nice thing about it is it doesn't shatter. If impacted, it bends rather than breaks and still has good optical properties”",
  attribution: 'Amy Ross, Spacesuit Designer',
  quoteLink: [
    {
      externalLink: '',
      page: {
        url: '/'
      }
    }
  ],
  thumbnail: {
    src: 'https://picsum.photos/80/80',
    alt: 'An image'
  }
}

// template
const BlockQuoteTemplate = (args) => ({
  components: { BlockQuote },
  setup() {
    return { args }
  },
  template: `<BlockQuote v-bind="args" />`
})

export const Default = BlockQuoteTemplate.bind({})
Default.args = {
  data: {
    quote: BlockQuoteData.quote,
    attribution: BlockQuoteData.attribution,
    quoteLink: []
  }
}
export const WithImage = BlockQuoteTemplate.bind({})
WithImage.args = {
  data: {
    quote: BlockQuoteData.quote,
    attribution: BlockQuoteData.attribution,
    thumbnail: BlockQuoteData.thumbnail
  }
}
export const ExternalLinkedAttribution = BlockQuoteTemplate.bind({})
ExternalLinkedAttribution.args = {
  data: {
    quote: BlockQuoteData.quote,
    attribution: BlockQuoteData.attribution,
    quoteLink: [
      {
        externalLink: 'https://www.jpl.nasa.gov'
      }
    ]
  }
}
export const ImageWithLocalLinkedAttribution = BlockQuoteTemplate.bind({})
ImageWithLocalLinkedAttribution.args = {
  data: BlockQuoteData
}
export const NoAttribution = BlockQuoteTemplate.bind({})
NoAttribution.args = {
  data: {
    quote: BlockQuoteData.quote
  }
}
