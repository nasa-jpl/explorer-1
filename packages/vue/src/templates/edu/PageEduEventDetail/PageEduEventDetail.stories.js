import { BlockKeyPointsData } from './../../../components/BlockKeyPoints/BlockKeyPoints.stories'
import { BlockLinkCardCarouselData } from './../../../components/BlockLinkCarousel/BlockLinkCarousel.stories.js'
import { EventsBlockLinkCarouselData } from './../../../components/BlockLinkCarousel/BlockLinkCarousel.stories'
import PageEduEventDetail from './PageEduEventDetail.vue'

export default {
  title: 'Templates/EDU/PageEduEventDetail',
  component: PageEduEventDetail,
  tags: ['!autodocs'],
  parameters: {
    html: {
      root: '#storyDecorator'
    },
    layout: 'fullscreen'
  },
  excludeStories: /.*Data$/
}

const PageEduEventDetailData = {
  id: '285',
  title: 'Becoming a NASA engineer',
  slug: 'becoming-a-nasa-engineer',
  url: '/events/becoming-a-nasa-engineer',
  timezone: 'PST',
  startDate: '2024-08-08',
  startDatetime: '2024-08-08T14:00:00-07:00',
  startTime: '15:00:00',
  endDate: '2024-08-08',
  endDatetime: '2024-08-08T22:00:00-07:00',
  endTime: '22:00:00',
  ongoing: false,
  eventType: 'Workshop',
  topper: '<p data-block-key="yecrn">Event topper</p>',
  summary:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et luctus nisi. Maecenas vel turpis sem. Nullam ultricies nulla quis nisi faucibus eleifend. In turpis ante, blandit nec dapibus tempor, posuere at erat. In justo quam, imperdiet at hendrerit eget, imperdiet ut orci. ',
  locationName: 'Webcast',
  locationLink: 'https://www.nasa.gov',
  registerLink: [
    {
      document: null,
      externalLink: 'https://nasa.gov',
      page: null,
      text: 'Registration Link'
    }
  ],
  eventImage: {
    __typename: 'CustomImage',
    srcSet:
      'https://picsum.photos/720/420 320w, https://picsum.photos/720/420 640w, https://picsum.photos/720/420 720w',
    original: 'https://picsum.photos/720/420',
    src: {
      __typename: 'CustomRendition',
      url: 'https://picsum.photos/720/420',
      width: '720',
      height: '420'
    },
    title: 'Marine Picks First Public Mars Global Surveyor Image',
    alt: '',
    caption:
      '<p data-block-key="y00sz">A close-up view of part of the area imaged by Mars Global Surveyor for its public request program.</p>',
    credit: 'Credit',
    detailUrl: null
  },
  heroConstrain: false,
  thumbnailImage: {
    alt: '',
    original: 'https://picsum.photos/512/288'
  },
  targetAudience: 'All ages',

  body: [
    BlockKeyPointsData,
    {
      blockType: 'RichTextBlock',
      value:
        '<p>Lorem ipsum <a href="/missions/test-mission/">dolor</a> sit amet, consectetur adipiscing elit. Quisque vitae justo quis justo malesuada molestie. Cras sed tincidunt dui.</p><p>Integer imperdiet blandit neque vitae euismod. Nulla aliquet lacus nibh,  vel tincidunt urna efficitur non. In et eros vitae ex posuere maximus  quis eget urna. Suspendisse fringilla posuere velit sit amet posuere.  Morbi malesuada bibendum vehicula. Donec faucibus ut erat ut mattis.  Suspendisse ornare, quam at placerat cursus, dolor mi lacinia nunc, eget  maximus augue nulla in dolor.</p>\n'
    }
  ],
  relatedEvents: EventsBlockLinkCarouselData,
  speakers: [
    {
      speaker: {
        host: 'host',
        id: '1',
        internalLink: null,
        name: 'Varoujan Gorjian',
        title: 'Splitzer Research Scientest, JPL'
      }
    },
    {
      speaker: {
        host: 'co-host',
        id: '2',
        image: {
          alt: '',
          src: {
            height: '450',
            url: 'https://picsum.photos/560/560',
            width: '450'
          }
        },
        internalLink: null,
        name: 'Robert Hurt',
        title: 'Splitzer visualisation'
      }
    }
  ],
  relatedLinks: [
    {
      blockType: 'RelatedLinksBlock',
      heading: 'Related Links',
      links: [
        {
          document: null,
          externalLink: 'http://www.google.com',
          page: null,
          text: 'Lorem ipsum dolor'
        },
        {
          document: null,
          externalLink: 'http://www.google.com',
          page: null,
          text: 'Sit amet consectatur'
        }
      ]
    }
  ],
  relatedContent: [...BlockLinkCardCarouselData, ...EventsBlockLinkCarouselData]
}
// stories
export const BaseStory = {
  name: 'PageEduEventDetail',
  args: { data: PageEduEventDetailData }
}

export const NoTimes = {
  args: {
    data: {
      ...PageEduEventDetailData,
      endDate: '2024-08-10',
      endDatetime: '2024-08-10T23:59:59.999999-07:00',
      endTime: null,
      startDate: '2024-08-08',
      startDatetime: null,
      startTime: null
    }
  }
}
export const CustomDate = {
  args: {
    data: {
      ...PageEduEventDetailData,
      startDate: '2024-08-08',
      startDatetime: null,
      startTime: null,
      endDate: '2024-08-08',
      endDatetime: '2024-08-08T22:00:00-07:00',
      endTime: null,
      customDate: 'Custom date information',
      ongoing: false
    }
  }
}

export const MultiDayEvent = {
  args: {
    data: {
      ...PageEduEventDetailData,
      startDate: '2024-08-08',
      endDate: '2024-08-12',
      startDatetime: '2024-08-08T11:00:00-07:00',
      startTime: '15:00:00',
      endDatetime: '2024-08-12T22:00:00-07:00'
    }
  }
}

export const Ongoing = {
  args: {
    data: {
      ...PageEduEventDetailData,
      ongoing: true
    }
  }
}
