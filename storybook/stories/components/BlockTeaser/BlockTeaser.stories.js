import { BlockTeaserTemplate } from './BlockTeaser'

export default {
  title: 'Components/Blocks/BlockTeaser',
  excludeStories: /.*Data$/,
  argTypes: {
    fullWidthImage: {
      type: 'boolean',
      description: '',
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    image: {
      type: { name: 'array', required: false },
      description: 'An array of image data',
    },
    label: {
      type: 'string',
      description: 'Teaser label',
    },
    heading: {
      type: 'string',
      description: 'Teaser heading',
    },
    introduction: {
      type: 'string',
      description: 'Teaser introductory text',
    },
    buttonText: {
      type: 'string',
      description: 'Button label',
    },
    link: {
      type: 'string',
      description: 'Button URL',
    },
  },
}

export const BlockTeaserData = {
  fullWidthImage: false,
  image: {
    full: {
      src: 'https://source.unsplash.com/pZ-XFIrJMtE/1096x400',
      src_webp: 'https://source.unsplash.com/pZ-XFIrJMtE/1096x400.webp',
      srcset: 'https://source.unsplash.com/pZ-XFIrJMtE/1096x400',
      width: 1096,
      height: 400,
    },
    half: {
      src: 'https://source.unsplash.com/pZ-XFIrJMtE/540x400',
      src_webp: 'https://source.unsplash.com/pZ-XFIrJMtE/540x400.webp',
      srcset: 'https://source.unsplash.com/pZ-XFIrJMtE/540x400',
      width: 548,
      height: 400,
    },
  },
  label: 'Asteroid Watch Overview',
  heading: 'Perseverance',
  introduction:
    'The mission marks humanity’s first step in returning samples from another planet.',
  buttonText: 'Read more',
  link: '#',
}

export const Default = BlockTeaserTemplate.bind({})
Default.args = BlockTeaserData

export const FullWidth = BlockTeaserTemplate.bind({})
FullWidth.args = {
  ...BlockTeaserData,
  fullWidthImage: true,
}

export const Empty = BlockTeaserTemplate.bind({})
Empty.args = {
  heading: 'Perseverance',
  buttonText: `Read More`,
  link: '/missions/perseverance/',
}
