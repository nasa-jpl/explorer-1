import BaseHeading from './BaseHeading.vue'
import IconArrows from './../Icons/IconArrows.vue'
import IconLocation from './../Icons/IconLocation.vue'
import IconUser from './../Icons/IconUser.vue'

export default {
  title: 'Components/Base/BaseHeading',
  component: BaseHeading,
  parameters: {
    slots: {
      default: 'The contents of the heading, usually text. Override with `<template #default>`'
    },
    docs: {
      description: {
        component:
          'Base component for headings. Allows for retaining semantic markup while varying the text size.'
      }
    }
  }
}

// stories
export const BaseStory = {
  name: 'H1',
  args: { size: 'h1', level: 'h1', default: 'Heading 1' }
}

export const H2 = {
  name: 'H2',
  args: { size: 'h2', level: 'h2', default: 'Heading 2' }
}
export const H3 = {
  name: 'H3',
  args: { size: 'h3', level: 'h3', default: 'Heading 3' }
}
export const H4 = {
  name: 'H4',
  args: { size: 'h4', level: 'h4', default: 'Heading 4' }
}
export const H5 = {
  name: 'H5',
  args: { size: 'h5', level: 'h5', default: 'Heading 5' }
}
export const H6 = {
  name: 'H6',
  args: { size: 'h6', level: 'h6', default: 'Heading 6' }
}

const TemplateHeadingsWithIcons = (args) => ({
  components: { BaseHeading, IconArrows, IconLocation, IconUser },
  setup() {
    return { args }
  },
  template:
    '<div><BaseHeading v-bind="args"><IconArrows class="inline" /> {{ args.default }}</BaseHeading><BaseHeading class="mt-8" v-bind="args"><IconLocation class="inline" /> {{ args.default }}</BaseHeading></div><BaseHeading class="mt-8" v-bind="args"><IconUser class="inline" /> {{ args.default }}</BaseHeading>'
})

export const HeadingsWithIcons = TemplateHeadingsWithIcons.bind({})
HeadingsWithIcons.args = { size: 'h3', level: 'h3', default: 'Heading 3 with Icon' }
HeadingsWithIcons.parameters = {
  docs: {
    description: {
      story: 'Example of overriding the default slot to include an icon component.'
    }
  }
}
