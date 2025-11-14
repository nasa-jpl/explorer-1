import BaseLink, { variants } from './BaseLink.vue'
export default {
  title: 'Components/Base/BaseLink',
  component: BaseLink,
  parameters: {
    slots: {
      default: 'Text or markup contained in the link'
    }
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: Object.keys(variants),
      description: 'Preset variants'
    },
    to: {
      description: 'If populated, a router-link will be generated. Overrides `href`'
    },
    linkClicked: {
      type: '@click emit',
      description: 'Event emitted at the root-level (globally available)'
    },
    specificLinkClicked: {
      type: '@click emit',
      description: 'Locally emitted event (includes event attributes)'
    },
    linkClass: {
      description: 'Apply classes directly to the `<a>` element.'
    },
    externalTargetBlank: {
      description: 'Autmatically sets target to `_blank` for external (non-router) links.'
    },
    exact: {
      description:
        "Maps to the `exact` prop in Nuxt's native `NuxtLink` component. If `true`, `active-class` will be applied to the link only if the current path is an exact match. Only affects router links."
    },
    usePrimaryColor: {
      type: 'boolean',
      description: "Overrides the theme's `active` color and uses the `primary` color instead."
    },
    caret: {
      description:
        'If a caret icon should be appended to the link. Set automatically when using the `primary` link variant.'
    },
    caretColor: {
      control: { type: 'text' },
      description: 'Tailwind text color class for the caret. Ex: `text-primary`'
    },
    caretWrapperClass: {
      description: 'Add classes to the caret wrapper'
    },
    caretClass: {
      description:
        "Apply classes directly to the caret. Maps to `MixinAnimationCaret`'s `arrowClass` prop."
    },
    caretInline: { description: 'Apply `inline` class to the caret wrapper' },
    caretMarginLeft: {
      description: 'Customize the left margin of the caret using Tailwind classes.'
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
