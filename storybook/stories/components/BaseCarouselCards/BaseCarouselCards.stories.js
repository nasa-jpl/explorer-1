import { BaseCarouselCardsTemplate } from './BaseCarouselCards.js'
// import { useEffect, useGlobals } from '@storybook/addons'
// const runScript = require('../../../../src/js/_swiper.js')
// maybe this: https://github.com/storybookjs/storybook/issues/6113
export default {
  title: 'Components/Base/BaseCarouselCards',
  decorators: [
    (Story) => `<div id="storyDecorator" class="w-full">${Story()}</div>`,
  ],
  argTypes: {
    heading: {
      type: 'string',
      description: 'Heading text',
    },
    variant: {
      type: 'string',
      control: {
        type: 'select',
        options: ['-cards', '-tiles'],
      },
      table: {
        defaultValue: { summary: '-cards' },
      },
    },
    indent: {
      type: 'string',
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
      table: {
        defaultValue: { summary: false },
      },
    },
    center: {
      type: 'boolean',
      table: {
        defaultValue: { summary: true },
      },
    },
  },
  parameters: {
    html: {
      root: '#storyDecorator',
    },
    viewMode: 'canvas',
    previewTabs: {
      'storybook/docs/panel': {
        hidden: true,
      },
    },
  },
  excludeStories: /.*Data$/,
}

export const BaseCarousel = BaseCarouselCardsTemplate.bind({})
BaseCarousel.storyName = 'BaseCarouselCards'
BaseCarousel.args = {
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

export const BaseCarouselWLink = BaseCarouselCardsTemplate.bind({})
BaseCarouselWLink.storyName = 'BaseCarouselCards w/ Link'
BaseCarouselWLink.args = {
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
