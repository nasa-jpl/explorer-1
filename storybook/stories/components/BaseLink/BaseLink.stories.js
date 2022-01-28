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
import { BaseLinkTemplate } from './BaseLink.js'

export default {
  title: 'Components/Base/BaseLink',
  argTypes: {
    text: {
      type: 'string',
      description: 'Link text',
    },
    variant: {
      type: 'string',
      description: 'Link variant type',
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'default', 'none'],
      },
      table: {
        defaultValue: { summary: 'default' },
      },
    },
    link: {
      type: 'string',
      description: 'Link URL',
    },
    target: {
      type: 'string',
      description: 'Link to a target ID. Overrides `externalTargetBlank`',
    },
    externalTargetBlank: {
      type: 'boolean',
      description: 'Open link in a new window.',
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    caret: {
      type: 'boolean',
      description:
        'Display the caret. Note: the `primary` variant will always display the caret. Use this option to add a caret to other variants.',
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    caretInline: {
      type: 'boolean',
      description:
        'Set to `true` to have caret wrap with text. Must use with `caret: true`. ',
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: 'false' },
      },
    },
  },
  parameters: {
    viewMode: 'docs',
    docs: {
      description: {
        component: 'Base component for links.',
      },
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Primary />
          <ArgsTable story={PRIMARY_STORY} />
          <Stories includePrimary={true} title="All buttons" />
        </>
      ),
    },
  },
}

export const PrimaryLink = BaseLinkTemplate.bind({})
PrimaryLink.storyName = 'Primary'
PrimaryLink.args = {
  text: 'Explore',
  variant: 'primary',
  link: '#',
  target: '',
  externalTargetBlank: false,
  caret: false,
  caretInline: false,
}

export const Secondary = BaseLinkTemplate.bind({})
Secondary.args = {
  text: 'Explore',
  variant: 'secondary',
  link: '#',
  target: '',
  externalTargetBlank: false,
  caret: false,
  caretInline: false,
}

export const Default_Body = BaseLinkTemplate.bind({})
Default_Body.args = {
  text: 'Explore',
  variant: 'default',
  link: '#',
  target: '',
  externalTargetBlank: false,
  caret: false,
  caretInline: false,
}

export const Unstyled = BaseLinkTemplate.bind({})
Unstyled.args = {
  text: 'Explore',
  variant: 'none',
  link: '#',
  target: '',
  externalTargetBlank: false,
  caret: false,
  caretInline: false,
}
