import { BlockKeyPointsData } from './../../components/BlockKeyPoints/BlockKeyPoints.stories'
import { EventDetailHeroData } from './../../components/EventDetailHero/EventDetailHero.stories'
import { EventsBlockLinkCarouselData } from './../../components/BlockLinkCarousel/BlockLinkCarousel.stories'
import PageEventDetail from './PageEventDetail.vue'

export default {
  title: 'Templates/PageEventDetail',
  component: PageEventDetail,
  parameters: {
    html: {
      root: '#storyDecorator'
    },
    layout: 'fullscreen'
  },
  excludeStories: /.*Data$/
}

// stories
export const BaseStory = {
  args: {
    data: {
      id: '285',
      title: 'Becoming a nasa engineer',
      slug: 'becoming-a-nasa-engineer',
      url: '/events/becoming-a-nasa-engineer',
      startDate: '2022-01-23',
      startDatetime: '2022-01-23T17:00:00-08:00',
      startTime: '17:00:00',
      endDate: '2022-01-25',
      endDatetime: '2022-01-25T23:00:00-08:00',
      endTime: '23:00:00',
      isAllDay: false,
      timezone: 'PST',
      label: 'Events',
      location: 'Webcast',
      registerLink: [],
      heroImage: {
        ...EventDetailHeroData.heroImage
      },
      thumbnailImage: {
        alt: '',
        original: 'https://picsum.photos/512/288'
      },
      body: [
        BlockKeyPointsData,
        {
          blockType: 'RichTextBlock',
          value:
            '<p>Lorem ipsum <a href="/missions/test-mission/">dolor</a> sit amet, consectetur adipiscing elit. Quisque vitae justo quis justo malesuada molestie. Cras sed tincidunt dui.</p><p>Integer imperdiet blandit neque vitae euismod. Nulla aliquet lacus nibh,  vel tincidunt urna efficitur non. In et eros vitae ex posuere maximus  quis eget urna. Suspendisse fringilla posuere velit sit amet posuere.  Morbi malesuada bibendum vehicula. Donec faucibus ut erat ut mattis.  Suspendisse ornare, quam at placerat cursus, dolor mi lacinia nunc, eget  maximus augue nulla in dolor.</p>\n'
        }
      ],
      moreEvents: [...EventsBlockLinkCarouselData],
      speakers: [
        {
          host: 'host',
          id: '1',
          internalLink: null,
          name: 'Varoujan Gorjian',
          title: 'Splitzer Research Scientest, JPL'
        },
        {
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
      ],
      relatedLinks: [
        {
          blockType: 'RelatedLinksBlock',
          heading: 'Webcast',
          links: [
            {
              document: null,
              externalLink: 'http://www.google.com',
              page: null,
              text: 'Watch the event live on YouTube'
            },
            {
              document: null,
              externalLink: 'http://www.google.com',
              page: null,
              text: 'Watch the event live on Ustream'
            }
          ]
        }
      ]
    }
  }
}
