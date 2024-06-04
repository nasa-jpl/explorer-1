import TopicDetailMore from './TopicDetailMore.vue'
export default {
  title: 'WWW/Components/TopicDetail/TopicDetailMore',
  component: TopicDetailMore,
  excludeStories: /.*Data$/
}

export const TopicDetailMoreData = {
  moreAboutTopic: [
    {
      type: 'ImageDetailPage',
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
      type: 'News',
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
      type: 'News',
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
      type: 'News',
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
      type: 'News',
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
      type: 'News',
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
      type: 'News',
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
      type: 'News',
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
    {
      type: 'PageChooserBlock',
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
      type: 'ExternalLinkCard',
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

// template
const TopicDetailMoreTemplate = (args) => ({
  props: Object.keys(args),
  components: { TopicDetailMore },
  template: `<TopicDetailMore :topic="topic" :more="more" :more-curated="moreCurated"><div class="w-full p-10 bg-black text-white">Slot</div></TopicDetailMore>`
})

const TopicDetailMoreNoSpotlightTemplate = (args) => ({
  props: Object.keys(args),
  components: { TopicDetailMore },
  template: `<TopicDetailMore :topic="topic" :more="more" :more-curated="moreCurated"/>`
})

// stories
export const Default = TopicDetailMoreTemplate.bind({})
Default.args = {
  topic: 'Mars',
  more: TopicDetailMoreData.moreAboutTopic,
  moreCurated: TopicDetailMoreData.moreAboutTopicCurated
}

export const NoSpotlight = TopicDetailMoreNoSpotlightTemplate.bind({})
NoSpotlight.args = {
  topic: 'Mars',
  more: TopicDetailMoreData.moreAboutTopic,
  moreCurated: TopicDetailMoreData.moreAboutTopicCurated
}

export const ShortList = TopicDetailMoreTemplate.bind({})
ShortList.args = {
  topic: 'Mars',
  more: [],
  moreCurated: TopicDetailMoreData.moreAboutTopicCurated
}

export const NoList = TopicDetailMoreTemplate.bind({})
NoList.args = {
  topic: 'Mars',
  more: [],
  moreCurated: []
}
