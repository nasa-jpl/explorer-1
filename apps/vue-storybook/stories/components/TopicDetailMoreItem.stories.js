import TopicDetailMoreItem from '@explorer-1/vue/src/components/TopicDetailMoreItem/TopicDetailMoreItem.vue'
export default {
  title: 'Components/TopicDetail/TopicDetailMore/TopicDetailMoreItem',
  component: TopicDetailMoreItem,
  decorators: [
    () => ({
      template: `<div id="storyDecorator" class="lg:w-1/3"><story/></div>`
    })
  ],
  parameters: {
    html: {
      root: '#storyDecorator'
    }
  },
  excludeStories: /.*Data$/
}

const TopicDetailMoreItemData = {
  default: {
    type: 'ImageDetailPage',
    url: '/images/placeholder/',
    title: 'An Image Detail Page',
    date: '2020-11-12T23:56:46.346940+00:00',
    label: 'Image',
    thumbnailImage: {
      src: {
        width: '600',
        height: '400',
        url: 'https://picsum.photos/600/400'
      },
      srcSet: 'https://picsum.photos/600/400 320w, https://picsum.photos/600/400 600w,'
    }
  },
  pageChooser: {
    type: 'PageChooserBlock',
    page: {
      label: 'Mission',
      thumbnailImage: {
        src: {
          width: '600',
          height: '400',
          url: 'https://picsum.photos/600/400'
        },
        srcSet: 'https://picsum.photos/600/400 320w, https://picsum.photos/600/400 600w,'
      },
      title: 'Autonomous Sciencecraft Experiment',
      url: '/missions/autonomous-sciencecraft-experiment-ase/'
    }
  },
  externalLink: {
    type: 'ExternalLinkCard',
    date: '2020-11-03',
    title: 'Title for Link Card',
    url: 'https://nasa.gov',
    label: 'Link Label',
    thumbnailImage: {
      src: {
        width: '600',
        height: '400',
        url: 'https://picsum.photos/600/400'
      },
      srcSet: 'https://picsum.photos/600/400 320w, https://picsum.photos/600/400 600w,'
    }
  },
  video: {
    type: 'VideoDetailPage',
    url: '/video/placeholder/',
    title: 'A Video Detail Page',
    date: '2020-11-12T23:56:46.346940+00:00',
    label: 'Video',
    thumbnailImage: {
      src: {
        width: '600',
        height: '400',
        url: 'https://picsum.photos/600/400'
      },
      srcSet: 'https://picsum.photos/600/400 320w, https://picsum.photos/600/400 600w,'
    }
  }
}

// template
const TopicDetailMoreItemTemplate = (args) => ({
  props: Object.keys(args),
  components: { TopicDetailMoreItem },
  template: `<TopicDetailMoreItem :data="data" />`
})

// stories
export const Default = TopicDetailMoreItemTemplate.bind({})
Default.args = {
  data: TopicDetailMoreItemData.default
}

export const PageChooser = TopicDetailMoreItemTemplate.bind({})
PageChooser.args = {
  data: TopicDetailMoreItemData.pageChooser
}

export const ExternalLink = TopicDetailMoreItemTemplate.bind({})
ExternalLink.args = {
  data: TopicDetailMoreItemData.externalLink
}

export const Video = TopicDetailMoreItemTemplate.bind({})
Video.args = {
  data: TopicDetailMoreItemData.video
}

export const NoImage = TopicDetailMoreItemTemplate.bind({})
NoImage.args = {
  data: {
    ...TopicDetailMoreItemData.externalLink,
    thumbnailImage: null
  }
}
