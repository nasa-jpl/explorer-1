import React from 'react'
import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
  Stories,
  PRIMARY_STORY,
} from '@storybook/addon-docs'
import { BaseHeadingTemplate } from './BaseHeading'

export default {
  title: 'Components/Base/BaseHeading',
  argTypes: {
    text: {
      type: 'string',
    },
    size: {
      type: { name: 'string', required: true },
      description: 'The display size of the heading.',
      control: {
        type: 'select',
        options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      },
      table: {
        defaultValue: { summary: 'h3' },
      },
    },
    tag: {
      type: { name: 'string', required: false },
      description:
        'The semantic heading tag if different from the display size (ex: a heading looks like an `h4`, but semantically, it is an `h1`.',
      control: {
        type: 'select',
        options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      },
    },
  },
  parameters: {
    viewMode: 'docs',
    docs: {
      description: {
        component:
          'Base component for headings. Allows for different sizes with html tags for semantic markup.',
      },
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Primary />
          <ArgsTable story={PRIMARY_STORY} />
          <Stories includePrimary={true} title="All heading levels" />
        </>
      ),
    },
  },
}

export const H1 = BaseHeadingTemplate.bind({})
H1.args = { text: 'Heading 1', size: 'h1', tag: 'h1' }

export const H2 = BaseHeadingTemplate.bind({})
H2.args = { text: 'Heading 2', size: 'h2', tag: 'h2' }

export const H3 = BaseHeadingTemplate.bind({})
H3.args = { text: 'Heading 3', size: 'h3', tag: 'h3' }

export const H4 = BaseHeadingTemplate.bind({})
H4.args = { text: 'Heading 4', size: 'h4', tag: 'h4' }

export const H5 = BaseHeadingTemplate.bind({})
H5.args = { text: 'Heading 5', size: 'h5', tag: 'h5' }

export const H6 = BaseHeadingTemplate.bind({})
H6.args = { text: 'Heading 6', size: 'h6', tag: 'h6' }
