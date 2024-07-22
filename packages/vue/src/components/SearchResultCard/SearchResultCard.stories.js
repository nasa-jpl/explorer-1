import SearchResultCard from './SearchResultCard.vue'

export default {
  title: 'Components/Search/SearchResultCard',
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
  headingLevel: 'h3',
  featured: false
}

export const BaseStory = { name: 'Standard Result', args: SearchResultCardData }

export const FeaturedResult = {
  args: { ...SearchResultCardData, featured: true }
}

export const EventResult = {
  args: {
    ...SearchResultCardData,
    isEvents: true,
    type: 'Event',
    startTime: '00:00:00-08:00',
    endTime: '23:59:59.999999-08:00',
    startDate: '2021-11-11',
    endDate: '2021-11-11',
    location: 'On lab',
    compact: false
  }
}
