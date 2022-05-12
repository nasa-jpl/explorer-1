import { SearchResultCardTemplate } from './SearchResultCard'

export default {
  title: 'Components/Search/SearchResultCard',
  excludeStories: /.*Data$/,
  argTypes: {
    link: {
      type: { name: 'string', required: true },
      description: 'The URL that the card should link to',
    },
    type: {
      type: { name: 'string', required: false },
      description: 'Primary label for the item',
    },
    topic: {
      type: { name: 'string', required: false },
      description: 'Secondary label for the item',
    },
    title: {
      type: { name: 'string', required: true },
      description: '',
    },
    summary: {
      type: { name: 'string', required: false },
      description: 'Summary/description of the item',
    },
    date: {
      type: 'string',
      description: 'The date of the item (usually publication date).',
      control: {
        type: 'date',
      },
    },
    image: {
      type: { name: 'object', required: false },
      description:
        'Image thumbnail. Expand the object to see the full data structure.',
    },
    featured: {
      type: 'boolean',
      description: 'If the item should be styled as a featured result.',
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
  type: 'News',
  topic: 'Moon',
  title: 'How engineers at NASA-JPL persevered to develop a ventilator',
  summary:
    "On April 30, the Food and Drug Administration approved VITAL for a ventilator Emergency Use Authorization. Developed in just 37 days by NASA's Jet Propulsion Laboratory in response to the coronavirus pandemic, VITAL (short for Ventilator Intervention Technology Accessible Locally) wouldn't replace current hospital ventilators, which can treat a broader range of medical issues.",
  date: 'May 22, 2018',
  image: {
    src: {
      url: 'https://picsum.photos/id/1002/490/490',
      width: 490,
      height: 490,
    },
    src_webp: 'https://picsum.photos/id/1002/490/490.webp',
    srcSet: 'https://picsum.photos/id/1002/490/490 320w',
    alt: 'Alt text',
  },
  featured: false,
}

export const StandardResult = SearchResultCardTemplate.bind({})
StandardResult.args = SearchResultCardData

export const FeaturedResult = SearchResultCardTemplate.bind({})
FeaturedResult.args = { ...SearchResultCardData, featured: true }
