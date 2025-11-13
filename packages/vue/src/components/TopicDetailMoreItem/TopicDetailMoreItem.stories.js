import TopicDetailMoreItem from './TopicDetailMoreItem.vue'
export default {
  title: 'Components/WWW/TopicDetail/TopicDetailMore/TopicDetailMoreItem',
  component: TopicDetailMoreItem,
  decorators: [
    () => ({
      template: `<div id="storyRoot" class="lg:w-1/3"><story/></div>`
    })
  ],
  parameters: {
    html: {
      root: '#storyRoot'
    }
  },
  excludeStories: /.*Data$/
}

const TopicDetailMoreItemData = {
  default: {
    __typename: 'ImageDetailPage',
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
    __typename: 'PageChooserBlock',
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
    __typename: 'ExternalLinkCard',
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
    __typename: 'VideoDetailPage',
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

// stories
export const BaseStory = {
  args: {
    data: TopicDetailMoreItemData.default
  }
}
export const PageChooser = {
  args: {
    data: TopicDetailMoreItemData.pageChooser
  }
}
export const ExternalLink = {
  args: {
    data: TopicDetailMoreItemData.externalLink
  }
}

export const Video = {
  args: {
    data: TopicDetailMoreItemData.video
  }
}

export const NoImage = {
  args: {
    data: {
      ...TopicDetailMoreItemData.externalLink,
      thumbnailImage: null
    }
  }
}
