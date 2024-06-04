// the base component should really be a single vue component with a "type" prop where the user can select between card and list, but this works well enough for a demo atm.

import BlockLinkCard from './BlockLinkCard.vue'

export default {
  title: 'Components/Blocks/BlockLinkCard',
  components: {
    BlockLinkCard
  },
  excludeStories: /.*Data$/,
  decorators: [
    () => ({
      template: `<div id="storyDecorator" class="relative grid grid-cols-2 gap-3 lg:grid-cols-3"><story/></div>`
    })
  ],
  argTypes: {
    headingLevel: {
      description:
        'Change the heading level for semantic markup. This does not affect the style of the heading.',
      control: {
        type: 'select',
        options: [null, 'h1', 'h2', 'h3', 'h4', 'h5']
      }
    }
  },
  parameters: {
    html: {
      root: '#storyDecorator' // to omit decorators from html output
    }
  }
}

// shared data
export const BlockLinkCardData = {
  card: {
    url: '/news/placeholder-slug-1',
    title: 'How engineers at NASA-JPL persevered to develop a ventilator',
    slug: 'placeholder-slug-1',
    label: 'Solar System',
    thumbnailImage: {
      src: {
        url: 'https://source.unsplash.com/Q1p7bh3SHj8/512x288',
        width: 512,
        height: 288
      },
      alt: 'Alt text'
    }
  }
}

// templates
const BlockLinkCardTemplate = (args) => ({
  props: Object.keys(args),
  components: { BlockLinkCard },
  template: `<BlockLinkCard :data="card" :heading-level="headingLevel" :compact="compact" />`
})
const BlockLinkCardCustomPropsTemplate = (args) => ({
  props: Object.keys(args),
  components: { BlockLinkCard },
  template: `<BlockLinkCard :title="title" url="url" external-link="externalLink" :label="label" :date="date" :thumbnail-image="thumbnailImage" :heading-level="headingLevel" :compact="compact" />`
})

export const SingleItem = BlockLinkCardTemplate.bind({})
SingleItem.args = {
  ...BlockLinkCardData,
  headingLevel: 'h2',
  compact: false
}

export const SingleItemCompactStyles = BlockLinkCardTemplate.bind({})
SingleItemCompactStyles.args = {
  ...BlockLinkCardData,
  headingLevel: 'h2',
  compact: true
}

export const Compact = BlockLinkCardCustomPropsTemplate.bind({})
Compact.storyName = 'Compact w/ Custom Props'
Compact.parameters = {
  docs: {
    description: {
      story: "View this story's canvas and controls to see its usage of custom props."
    }
  }
}
Compact.args = {
  title: 'Lorem ipsum news title in search results',
  url: '/news/demo',
  externalLink: '',
  label: 'News',
  date: 'Sep. 23, 2010',
  thumbnailImage: {
    src: {
      url: 'https://source.unsplash.com/Q1p7bh3SHj8/512x288',
      width: 512,
      height: 288
    },
    alt: 'Alt text'
  },
  headingLevel: 'h2',
  compact: true
}
