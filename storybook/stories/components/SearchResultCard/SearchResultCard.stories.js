import { SearchResultCardTemplate } from './SearchResultCard'

export default {
  title: 'Components/Search/SearchResultCard',
  excludeStories: /.*Data$/,
  argTypes: {
    link: {
      type: { name: 'string', required: false },
      description: '',
    },
    type: {
      type: { name: 'string', required: false },
      description: '',
    },
    topic: {
      type: { name: 'string', required: false },
      description: '',
    },
    date: {
      type: 'string',
      description: '',
      control: {
        type: 'date',
      },
    },
    title: {
      type: { name: 'string', required: false },
      description: '',
    },
    summary: {
      type: { name: 'string', required: false },
      description: 'Summary/description of the item',
    },
    image: {
      type: { name: 'object', required: false },
      description: 'Image object',
    },
    featured: {
      type: 'boolean',
      description: '',
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: 'false' },
      },
    },
  },
  decorators: [
    (Story) => `<div class="relative container mx-auto">${Story()}</div>`,
  ],
  parameters: {
    viewMode: 'docs',
    docs: {
      description: {
        component: '',
      },
    },
  },
}

export const SearchResultCardData = {
  link: '/topics/placeholder-slug-1',
  type: 'news',
  topic: 'Moon',
  date: 'May 22, 2018',
  title: 'How engineers at NASA-JPL persevered to develop a ventilator',
  summary:
    "On April 30, the Food and Drug Administration approved VITAL for a ventilator Emergency Use Authorization. Developed in just 37 days by NASA's Jet Propulsion Laboratory in response to the coronavirus pandemic, VITAL (short for Ventilator Intervention Technology Accessible Locally) wouldn't replace current hospital ventilators, which can treat a broader range of medical issues.",
  image: {
    src: {
      url: 'https://placekitten.com/490/490',
      width: 490,
      height: 490,
    },
    srcSet: 'https://placekitten.com/490/490 320w',
    alt: 'Alt text',
  },
  featured: false,
}

export const StandardResult = SearchResultCardTemplate.bind({})
StandardResult.args = SearchResultCardData

export const FeaturedResult = SearchResultCardTemplate.bind({})
FeaturedResult.args = { ...SearchResultCardData, featured: true }
