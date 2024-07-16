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
      url: 'https://picsum.photos/1096/400',
      width: 1096,
      height: 400
    },
    half: {
      url: 'https://picsum.photos/540/400',
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
}

export const BaseStory = {
  args: {
    ...BlockTeaserData
  }
}

export const FullWidth = {
  args: {
    ...BlockTeaserData,
    fullWidth: true
  }
}

export const Empty = {
  args: {
    teaserPage: {
      pageType: 'Mission',
      title: 'Perseverance',
      url: '/missions/perseverance/'
    }
  }
}
