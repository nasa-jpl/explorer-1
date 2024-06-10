import BlockTeaser from '@explorer-1/vue/src/components/BlockTeaser/BlockTeaser.vue'

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
}

export const Default = {
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
