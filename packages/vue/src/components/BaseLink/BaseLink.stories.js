import BaseLink from './BaseLink.vue'
export default {
  title: 'Components/Base/BaseLink',
  component: BaseLink,
  parameters: {
    slots: {
      default: 'Text or markup contained in the link'
    }
  },
  argTypes: {
    // JSDoc comments for these events aren't working, so we're setting them here
    linkClicked: {
      description: 'Click event emitted at the root-level (globally available)'
    },
    specificLinkClicked: {
      description: 'Locally emitted click event (includes event attributes)'
    }
  },
  excludeStories: /.*Data$/
}

// data
export const BaseLinkData = {
  variant: 'primary',
  to: '/',
  href: '/',
  default: 'Link Text'
}

// stories
export const BaseStory = {
  name: 'Primary',
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

export const WithLeadingIcon = {
  args: {
    ...BaseLinkData,
    variant: 'primary',
    caretLeft: true
  }
}
