import BaseAccordionItem from './BaseAccordionItem.vue'
export default {
  title: 'Components/Base/BaseAccordionItem',
  component: BaseAccordionItem,
  argTypes: {
    headingLevel: {
      type: 'string',
      control: { type: 'select' },
      options: ['h2', 'h3', 'h4', 'h5', 'h6']
    },
    accordionItemOpened: {
      type: '@click emit',
      description: 'Fires when an item is opened'
    },
    accordionItemClosed: {
      type: '@click emit',
      description: 'Fires when an item is closed'
    },
    header: {
      type: 'html',
      control: { type: 'none' },
      description:
        'The entire clickable area of the item, including `heading`. Override with `<template #header>`. Will need to reconstruct `handleClick()` behavior.'
    },
    heading: {
      type: 'html',
      control: { type: 'none' },
      description:
        'Just the heading text within the item header. Override with `<template #heading>`'
    },
    default: {
      type: 'html',
      control: { type: 'none' },
      description:
        'The entire contents of expanded item, including `panelContents`. Override with `<template #default>`. Will need to reconstruct `aria-labelledby` attributes.'
    },
    panelContents: {
      type: { name: 'html', required: true },
      control: { type: 'none' },
      description:
        'Contents of expanded accordion item. There is no default template. Override with `<template #panelContents>`'
    }
  }
}

// stories
export const BaseStory = {
  name: 'BaseAccordionItem',
  args: {
    headingLevel: 'h5',

    item: {
      title: 'Title for the accordion',
      body: [{ text: 'No default body template. Customize with the `panelContents` slot.' }]
    },

    header: '<h3>Test</h3>'
  }
}
