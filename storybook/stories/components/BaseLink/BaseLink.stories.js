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
    target:  {
      type: 'string',
      description: 'Link to a target ID',
    },
    externalTargetBlank: {
      type: 'boolean',
      description: 'External Target Blank',
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    caret: {
      type: 'boolean',
      description: 'Display caret',
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    caretInline: {
      type: 'boolean',
      description: 'Display inline caret',
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
        component:
          'Base component for links.',
      },
    },
  },
}

export const Primary = BaseLinkTemplate.bind({})
Primary.args = {
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