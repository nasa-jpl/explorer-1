import BaseLink, { variants } from './BaseLink.vue'
export default {
  title: 'Components/Base/BaseLink',
  component: BaseLink,
  parameters: {
    slots: {
      default: 'Default slot content'
    }
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: Object.keys(variants)
    }
  },
  excludeStories: /.*Data$/
}

// data
export const BaseLinkData = {
  variant: 'primary',
  to: '/',
  href: '/',
  caret: false,
  caretColor: 'text-primary',
  default: 'Link Text'
}

// stories
export const Primary = {
  args: { ...BaseLinkData }
}

export const Secondary = {
  args: { ...BaseLinkData, variant: 'secondary' }
}

export const DefaultBody = {
  args: { ...BaseLinkData, variant: 'default' }
}

export const Unstyled = {
  args: {
    ...BaseLinkData,
    variant: 'none'
  }
}
