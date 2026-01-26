import BaseButton from './BaseButton.vue'

// TODO: add the rest of the button stories (icons, disabled, etc.)
export default {
  title: 'Components/Base/BaseButton',
  component: BaseButton,
  excludeStories: /.*(Data)$/,
  parameters: {
    slots: {
      default: 'The contents of the button, usually text. Override with `<template #default>`',
      iconLeft: 'Appears to the left of the `default` slot. Override with `<template #iconLeft>`',
      iconRight: 'Appears to the right of the `default` slot. Override with `<template #iconRight>`'
    },
    docs: {
      description: {
        component: 'Simple button with style variations.'
      }
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
