import { BaseButtonTemplate } from './BaseButton.js'

export default {
  title: 'Components/Base/BaseButton',
  tags: ['autodocs'],
  argTypes: {
    label: {
      type: 'string',
      description: 'Button label',
    },
    ariaLabel: {
      type: 'string',
      description:
        "ARIA label. Recommended if your button label isn't descriptive, or if it only contains an icon.",
    },
    variant: {
      type: 'string',
      description: 'Button variant type',
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'dark', 'social'],
      },
      table: {
        defaultValue: { summary: 'default' },
      },
    },
    link: {
      type: 'string',
      description: 'Button URL',
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
    compact: {
      type: 'boolean',
      description: '',
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    disabled: {
      type: 'boolean',
      description: '',
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    icon: {
      type: 'string',
      description: 'Button variant type',
      control: {
        type: 'select',
        options: [
          'next',
          'prev',
          'expand',
          'external',
          'facebook',
          'twitter',
          'instagram',
          'youtube',
          'reddit',
          'dropdown',
        ],
      },
      table: {
        defaultValue: { summary: 'none' },
      },
    },
    iconBefore: {
      type: 'boolean',
      description: 'If the icon should be positioned before the text.',
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    iconOnly: {
      type: 'boolean',
      description: 'If the button will only include an icon and no text.',
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: 'false' },
      },
    },
  },
  parameters: {
    // viewMode: 'docs',
    docs: {
      description: {
        component: 'Simple button with several style variations.',
      },
    },
  },
}

export const Default = BaseButtonTemplate.bind({})
Default.storyName = 'Primary Button'
Default.args = {
  label: 'Explore',
  variant: 'primary',
  link: '#',
  caret: false,
  compact: false,
  disabled: false,
  icon: null,
  iconBefore: false,
  iconOnly: false,
}
export const Primary_Internal_Button = BaseButtonTemplate.bind({})
Primary_Internal_Button.args = {
  label: 'Explore',
  variant: 'primary',
  link: '#',
  caret: false,
  compact: false,
  disabled: false,
}

export const Secondary_Button = BaseButtonTemplate.bind({})
Secondary_Button.args = {
  label: 'Explore',
  variant: 'secondary',
  link: '#',
  caret: false,
  compact: false,
  disabled: false,
}

export const Dark_Button = BaseButtonTemplate.bind({})
Dark_Button.args = {
  label: 'Explore',
  variant: 'dark',
  link: '#',
  caret: false,
  compact: false,
  disabled: false,
}
Dark_Button.decorators = [
  (Story) => `<div class="p-5 bg-dark-blue">${Story()}</div>`,
]

export const Primary_Icon_Button = BaseButtonTemplate.bind({})
Primary_Icon_Button.args = {
  label: 'Explore',
  variant: 'primary',
  link: '#',
  caret: false,
  compact: false,
  disabled: false,
  icon: 'next',
  iconOnly: true,
}

export const Secondary_Icon_Button = BaseButtonTemplate.bind({})
Secondary_Icon_Button.args = {
  label: 'Explore',
  variant: 'secondary',
  link: '#',
  caret: false,
  compact: false,
  disabled: false,
  icon: 'next',
  iconOnly: true,
}

export const Dark_Icon_Button = BaseButtonTemplate.bind({})
Dark_Icon_Button.args = {
  label: 'Explore',
  variant: 'dark',
  link: '#',
  caret: false,
  compact: false,
  disabled: false,
  icon: 'next',
  iconOnly: true,
}
Dark_Icon_Button.decorators = [
  (Story) => `<div class="p-5 bg-dark-blue">${Story()}</div>`,
]

export const Social_Icon_Button = () => {
  let facebook = BaseButtonTemplate({
    label: 'Facebook',
    variant: 'social',
    link: '#',
    caret: false,
    compact: true,
    disabled: false,
    icon: 'facebook',
    iconOnly: true,
    cssClass: '-facebook w-12 h-12 text-2xl mr-3',
  })
  let twitter = BaseButtonTemplate({
    label: 'X',
    variant: 'social',
    link: '#',
    caret: false,
    compact: true,
    disabled: false,
    icon: 'twitter',
    iconOnly: true,
    cssClass: '-twitter w-12 h-12 text-2xl mr-3',
  })
  let instagram = BaseButtonTemplate({
    label: 'Instagram',
    variant: 'social',
    link: '#',
    caret: false,
    compact: true,
    disabled: false,
    icon: 'instagram',
    iconOnly: true,
    cssClass: '-instagram w-12 h-12 text-2xl mr-3',
  })
  let youtube = BaseButtonTemplate({
    label: 'YouTube',
    variant: 'social',
    link: '#',
    caret: false,
    compact: true,
    disabled: false,
    icon: 'youtube',
    iconOnly: true,
    cssClass: '-youtube w-12 h-12 text-2xl mr-3',
  })
  let reddit = BaseButtonTemplate({
    label: 'Reddit',
    variant: 'social',
    link: '#',
    caret: false,
    compact: true,
    disabled: false,
    icon: 'reddit',
    iconOnly: true,
    cssClass: '-reddit w-12 h-12 text-2xl mr-3',
  })

  return `${facebook} ${twitter} ${instagram} ${youtube} ${reddit}`
}
Social_Icon_Button.decorators = [
  (Story) => `<div class="p-5 flex items-center">${Story()}</div>`,
]

export const Disabled_Button = BaseButtonTemplate.bind({})
Disabled_Button.args = {
  label: 'Explore',
  variant: 'primary',
  link: '#',
  caret: false,
  compact: false,
  disabled: true,
}

export const Disabled_Icon_Button = BaseButtonTemplate.bind({})
Disabled_Icon_Button.args = {
  label: 'Explore',
  variant: 'primary',
  link: '#',
  caret: false,
  compact: false,
  disabled: true,
  icon: 'next',
  iconOnly: true,
}
