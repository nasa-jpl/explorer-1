import SearchResultCard from './SearchResultCard.vue'

export default {
  title: 'Components/Cards/SearchResultCards',
  component: SearchResultCard,
  argTypes: {
    headingLevel: {
      description:
        'Change the heading level for semantic markup. This does not affect the style of the heading.',
      control: {
        type: 'select'
      },
      options: [null, 'h1', 'h2', 'h3', 'h4', 'h5']
    }
  },
  excludeStories: /.*Data$/
}

export const SearchResultCardData = {
  url: '/topics/placeholder-slug-1',
  type: 'news',
  topic: 'Moon',
  date: 'May 22, 2018',
  title: 'How engineers at NASA-JPL persevered to develop a ventilator',
  summary:
    "On April 30, the Food and Drug Administration approved VITAL for a ventilator Emergency Use Authorization. Developed in just 37 days by NASA's Jet Propulsion Laboratory in response to the coronavirus pandemic, VITAL (short for Ventilator Intervention Technology Accessible Locally) wouldn't replace current hospital ventilators, which can treat a broader range of medical issues.",
  image: {
    src: {
      url: 'https://picsum.photos/490/490',
      width: 490,
      height: 490
    },
    alt: 'Alt text'
  },
  headingLevel: 'h3'
}

export const BaseStory = { name: 'SearchResultCard', args: SearchResultCardData }

export const FeaturedResult = {
  args: { ...SearchResultCardData, featured: true }
}

export const EventCard = {
  args: {
    ...SearchResultCardData,
    isEvents: true,
    type: 'Event',
    endDate: '2028-02-26',
    endTime: '12:00:00',
    startDate: '2028-02-26',
    startTime: '08:00:00',
    startDatetime: '2028-02-26T08:00:00-08:00',
    endDatetime: '2028-02-26T12:00:00-08:00',
    location: 'On lab',
    compact: false
  }
}
export const PodcastEpisodeCard = {
  args: {
    ...SearchResultCardData,
    isPodcastSeason: true,
    type: 'Podcast',
    compact: false
  }
}

export const EduEventCard = {
  globals: { theme: 'ThemeEdu' },
  args: {
    ...SearchResultCardData,
    __typename: 'EDUEventPage',
    pageType: 'EDUEventPage',
    contentType: 'EDUEventPage',
    topic: null,
    date: null,
    isEvents: true,
    type: 'Event',
    startDate: '2021-11-11',
    endDate: '2021-11-11',
    eventType: 'Internship',
    startTime: '00:00:00-08:00',
    endTime: '23:59:59.999999-08:00',
    location: 'Hybrid',
    targetAudience: 'All ages',
    pageContentType: 'edu_events_edueventpage'
  }
}
