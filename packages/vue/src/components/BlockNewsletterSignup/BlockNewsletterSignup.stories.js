import BlockNewsletterSignup from './BlockNewsletterSignup.vue'

export default {
  title: 'Components/Blocks/BlockNewsletterSignup',
  component: BlockNewsletterSignup,
  excludeStories: /.*Data$/
}

export const BlockNewsletterSignupData = {
  blockType: 'NewsletterSignupBlock',
  title: 'Get the JPL Newsletter',
  description:
    'From Mars to the Milky Way—never miss a discovery! Delivered straight to your inbox.',
  buttonText: 'Sign Up'
}

export const BaseStory = {
  args: {
    data: BlockNewsletterSignupData
  }
}
