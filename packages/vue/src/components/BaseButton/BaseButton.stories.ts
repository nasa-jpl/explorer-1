import BaseButton, { variants } from './BaseButton.vue'

// TODO: add the rest of the button stories (icons, disabled, etc.)
export default {
  title: 'Components/Base/BaseButton',
  component: BaseButton,
  excludeStories: /.*(Data)$/,
  tags: ['autodocs'],
  parameters: {
    slots: {
      default: 'The contents of the button, usually text. Override with `<template #default>`',
      icon: 'Appears to the right of the `default` slot. Override with `<template #icon>`',
      afterIcon: 'Appears to the right of the `icon` slot. Override with `<template #afterIcon>`'
    },
    docs: {
      description: {
        component: 'Simple button with style variations.'
      }
    }
  },
  argTypes: {
    ariaLabel: {
      type: 'string',
      description:
        "ARIA label. Recommended if your button text isn't descriptive, or if it only contains an icon."
    },
    variant: {
      type: 'string',
      description: 'Button variant type',
      control: {
        type: 'select'
      },
      options: Object.keys(variants),
      table: {
        defaultValue: { summary: 'default' }
      }
    },
    to: {
      description: 'If populated, a router-link will be generated. Overrides `href`'
    },
    click: {
      type: '@click emit'
    }
  }
}

export const BaseButtonData = {
  ariaLabel: 'Link to learn more',
  compact: false,
  disabled: false,
  to: '/',
  default: 'Button'
}

export const BaseStory = {
  name: 'Primary Button',
  args: {
    ...BaseButtonData,
    variant: 'primary'
  }
}
export const SecondaryButton = {
  args: {
    ...BaseButtonData,
    variant: 'secondary'
  }
}
export const DarkButton = {
  args: {
    ...BaseButtonData,
    variant: 'dark'
  }
  // globals: { themeVariant: 'ThemeVariantDark' }
}
