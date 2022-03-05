import { MixinCarouselTemplate } from './MixinCarousel.js'
export default {
  title: 'Components/Mixins/MixinCarousel',
  argTypes: {
    heading: {
      type: 'string',
      description: 'Heading text',
    },
    variant: {
      type: 'string',
      description:
        'Sets the vertical center of next/prev button. `-cards` will center them within a fixed height corresponding to a 16:9 area. This is useful when a slide includes an image with text below it (see `BlockLinkCarousel`). `-tiles` will center the pagination within the height of the entire slide.',
      control: {
        type: 'select',
        options: ['-cards', '-tiles'],
      },
      table: {
        defaultValue: { summary: '-cards' },
      },
    },
    cards: {
      type: { name: 'array', required: true },
      description: 'Array of slide data objects',
    },
    indent: {
      type: 'string',
      description:
        'Sets the left indent of the carousel to the start of the selected grid column.',
      control: {
        type: 'select',
        options: ['col-1', 'col-2', 'col-3'],
      },
      table: {
        defaultValue: { summary: 'col-2' },
      },
    },
    noLinks: {
      type: 'boolean',
      description:
        'If the slides are not linked to other pages, set this to `true`. This will change the wrapper element from `<nav>` to `<div>`.',
      table: {
        defaultValue: { summary: false },
      },
    },
    center: {
      type: 'boolean',
      description:
        'Whether the main part of the carousel, including its indent, should be centered within its container. Usage of `center: false` is rare but can be useful when nesting the carousel within another complex layout.',
      table: {
        defaultValue: { summary: true },
      },
    },
  },
  parameters: {
    viewMode: 'docs',
    docs: {
      inlineStories: false,
      iframeHeight: 400,
      description: {
        component:
          'A carousel mixin that is configured for multiple visible slides. Used in `BlockLinkCarousel` and `BlockCardGroup` (mobile version). Includes page layout assumptions.',
      },
    },
    themes: {
      clearable: false,
      list: [
        {
          name: 'ThemeLight',
          class: ['ThemeLight', 'sbdocs-preview-full-width'],
          color: '#ffffff',
          default: true,
        },
        {
          name: 'ThemeDark',
          class: ['ThemeDark', 'sbdocs-preview-full-width'],
          color: '#000000',
        },
      ],
    },
  },
  excludeStories: /.*Data$/,
}

export const MixinCarousel = MixinCarouselTemplate.bind({})
MixinCarousel.storyName = 'Default'
MixinCarousel.args = {
  heading: 'Heading',
  variant: '-tiles',
  cards: [
    { title: 'Title 1' },
    { title: 'Title 2' },
    { title: 'Title 3' },
    { title: 'Title 4' },
    { title: 'Title 5' },
    { title: 'Title 6' },
    { title: 'Title 7' },
  ],
  indent: 'lg:col-start-2',
  noLinks: false,
  center: true,
}

export const MixinCarouselWLink = MixinCarouselTemplate.bind({})
MixinCarouselWLink.storyName = 'MixinCarousel w/ Link'
MixinCarouselWLink.args = {
  heading: 'Heading',
  variant: '-tiles',
  link: '#',
  linkTitle: 'View all',
  cards: [
    { title: 'Title 1' },
    { title: 'Title 2' },
    { title: 'Title 3' },
    { title: 'Title 4' },
    { title: 'Title 5' },
    { title: 'Title 6' },
    { title: 'Title 7' },
  ],
  indent: 'lg:col-start-2',
  noLinks: true,
  center: true,
}
