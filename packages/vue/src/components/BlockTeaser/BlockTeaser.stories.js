import BlockTeaser from './BlockTeaser.vue'

export default {
  title: 'Components/Blocks/BlockTeaser',
  component: BlockTeaser,
  excludeStories: /.*Data$/
}

export const BlockTeaserData = {
  heading: 'Perseverance',
  introduction: 'The mission marks humanity’s first step in returning samples from another planet.',
  buttonText: 'Read more',
  image: {
    full: {
      url: 'https://source.unsplash.com/pZ-XFIrJMtE/1096x400',
      width: 1096,
      height: 400
    },
    half: {
      url: 'https://source.unsplash.com/pZ-XFIrJMtE/540x400',
      width: 548,
      height: 400
    }
  },
  fullWidthImage: false,
  teaserPage: [
    {
      blockType: 'CharBlock'
    },
    {
      blockType: 'TextBlock'
    },
    {
      blockType: 'CharBlock'
    },
    {
      blockType: 'ImageChooserBlock'
    },
    {
      blockType: 'BooleanBlock'
    },
    {
      blockType: 'PageChooserBlock',
      page: {
        label: 'Asteroid Watch Overview',
        title: 'Asteroid Watch',
        url: '/asteroid-watch/'
      }
    }
  ]
  // TODO: ideal format
  // teaserPage: {
  //   url: 'https://www.jpl.nasa.gov/',
  //   label: 'Mission',
  //   title: 'Perseverance',
  // },
}

// template
const BlockTeaserTemplate = (args) => ({
  props: Object.keys(args),
  components: { BlockTeaser },
  template: `<BlockTeaser
    :heading="heading"
    :introduction="introduction"
    :buttonText="buttonText"
    :image="image"
    :full-width="fullWidthImage"
    :teaser-page="teaserPage"
  />`
})

const BlockTeaserEmptyTemplate = (args) => ({
  props: Object.keys(args),
  components: { BlockTeaser },
  template: `<BlockTeaser
    :teaser-page="teaserPage"
  />`
})

export const Default = BlockTeaserTemplate.bind({})
Default.args = {
  ...BlockTeaserData
}

export const FullWidth = BlockTeaserTemplate.bind({})
FullWidth.args = {
  ...BlockTeaserData,
  fullWidthImage: true
}

export const Empty = BlockTeaserEmptyTemplate.bind({})
Empty.args = {
  teaserPage: {
    pageType: 'Mission',
    title: 'Perseverance',
    url: '/missions/perseverance/'
  }
}
