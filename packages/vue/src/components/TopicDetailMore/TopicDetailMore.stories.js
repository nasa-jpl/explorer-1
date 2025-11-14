import TopicDetailMore from './TopicDetailMore.vue'
export default {
  title: 'Components/WWW/TopicDetail/TopicDetailMore',
  component: TopicDetailMore,
  tags: ['listings'],
  excludeStories: /.*Data$/
}

export const TopicDetailMoreData = {
  moreAboutTopic: [
    {
      __typename: 'ImageDetailPage',
      date: '2020-11-12T23:56:46.346940+00:00',
      label: 'Image',
      thumbnailImage: {
        src: {
          width: '600',
          height: '400',
          url: 'https://picsum.photos/600/400'
        },
        srcSet: 'https://picsum.photos/600/400 320w, https://picsum.photos/600/400 600w,'
      },
      title: 'My Image Detail',
      url: '/images/my-image-detail/'
    },
    {
      __typename: 'News',
      date: '2004-01-03T08:00:00+00:00',
      label: 'News',
      thumbnailImage: {
        src: {
          width: '600',
          height: '400',
          url: 'https://picsum.photos/600/400'
        },
        srcSet: 'https://picsum.photos/600/400 320w, https://picsum.photos/600/400 600w,'
      },
      title: 'Mars Exploration Rover Spirit Mission Status',
      url: '/news/tiny-measurement-gives-big-boost-to-planet-hunt/'
    },
    {
      __typename: 'News',
      date: '2003-05-27T07:00:00+00:00',
      label: 'News',
      thumbnailImage: {
        src: {
          width: '600',
          height: '400',
          url: 'https://picsum.photos/600/400'
        },
        srcSet: 'https://picsum.photos/600/400 320w, https://picsum.photos/600/400 600w,'
      },
      title: 'Theatre in the Rectangle',
      url: '/news/theatre-in-the-rectangle/'
    },
    {
      __typename: 'News',
      date: '2003-05-21T07:00:00+00:00',
      label: 'News',
      thumbnailImage: {
        src: {
          width: '600',
          height: '400',
          url: 'https://picsum.photos/600/400'
        },
        srcSet: 'https://picsum.photos/600/400 320w, https://picsum.photos/600/400 600w,'
      },
      title: 'Frozen Light: Cool NASA Research Holds Promise',
      url: '/news/frozen-light-cool-nasa-research-holds-promise/'
    },
    {
      __typename: 'News',
      date: '2003-05-20T07:00:00+00:00',
      label: 'News',
      thumbnailImage: {
        src: {
          width: '600',
          height: '400',
          url: 'https://picsum.photos/600/400'
        },
        srcSet: 'https://picsum.photos/600/400 320w, https://picsum.photos/600/400 600w,'
      },
      title: 'Newly Discovered Star May Be Third-Closest',
      url: '/news/newly-discovered-star-may-be-third-closest/'
    },
    {
      __typename: 'News',
      date: '2003-05-06T07:00:00+00:00',
      label: 'News',
      thumbnailImage: {
        src: {
          width: '600',
          height: '400',
          url: 'https://picsum.photos/600/400'
        },
        srcSet: 'https://picsum.photos/600/400 320w, https://picsum.photos/600/400 600w,'
      },
      title: 'Galaxy Evolution Explorer Mission Status',
      url: '/news/galaxy-evolution-explorer-mission-status/'
    },
    {
      __typename: 'News',
      date: '2003-04-28T07:00:00+00:00',
      label: 'News',
      thumbnailImage: {
        src: {
          width: '600',
          height: '400',
          url: 'https://picsum.photos/600/400'
        },
        srcSet: 'https://picsum.photos/600/400 320w, https://picsum.photos/600/400 600w,'
      },
      title: 'Galaxy Evolution Explorer On Its Way',
      url: '/news/galaxy-evolution-explorer-on-its-way/'
    },
    {
      __typename: 'News',
      date: '2003-04-22T07:00:00+00:00',
      label: 'News',
      thumbnailImage: {
        src: {
          width: '600',
          height: '400',
          url: 'https://picsum.photos/600/400'
        },
        srcSet: 'https://picsum.photos/600/400 320w, https://picsum.photos/600/400 600w,'
      },
      title: 'Galaxy Evolution Explorer Looks Back in Time',
      url: '/news/galaxy-evolution-explorer-looks-back-in-time/'
    }
  ],
  moreAboutTopicCurated: [
    {
      __typename: 'PageChooserBlock',
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
    {
      __typename: 'PageChooserBlock',
      page: {
        date: '2004-01-04T08:00:00+00:00',
        label: 'News',
        thumbnailImage: {
          src: {
            width: '600',
            height: '400',
            url: 'https://picsum.photos/600/400'
          },
          srcSet: 'https://picsum.photos/600/400 320w, https://picsum.photos/600/400 600w,'
        },
        title: 'Mars Exploration Rover Spirit Mission Status',
        url: '/news/archaeologists-dig-space/'
      }
    },
    {
      __typename: 'ExternalLinkCard',
      date: '2020-11-03',
      label: 'Link Label',
      thumbnailImage: {
        src: {
          width: '600',
          height: '400',
          url: 'https://picsum.photos/600/400'
        },
        srcSet: 'https://picsum.photos/600/400 320w, https://picsum.photos/600/400 600w,'
      },
      title: 'Title for Link Card',
      url: 'https://nasa.gov'
    }
  ]
}

// stories
export const BaseStory = {
  args: {
    topic: 'Mars',
    more: TopicDetailMoreData.moreAboutTopic,
    moreCurated: TopicDetailMoreData.moreAboutTopicCurated
  },
  render: (args) => ({
    setup() {
      return { args }
    },
    components: { TopicDetailMore },
    template: `<TopicDetailMore v-bind="args"><div class="w-full p-10 bg-black text-white">Slot for Mission Spotlight</div></TopicDetailMore>`
  })
}

export const NoSpotlight = {
  args: {
    topic: 'Mars',
    more: TopicDetailMoreData.moreAboutTopic,
    moreCurated: TopicDetailMoreData.moreAboutTopicCurated
  }
}

export const ShortList = {
  args: {
    topic: 'Mars',
    more: [],
    moreCurated: TopicDetailMoreData.moreAboutTopicCurated
  }
}

export const NoList = {
  args: {
    topic: 'Mars',
    more: [],
    moreCurated: []
  }
}
