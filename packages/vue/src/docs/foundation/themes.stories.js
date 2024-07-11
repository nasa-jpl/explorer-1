import DynamicTokens from './DynamicTokens.vue'

export default {
  title: 'Foundation/Themes',
  component: DynamicTokens,
  tags: ['!autodocs']
}

export const DynamicTokenStory = {
  name: 'Dynamic Tokens',
  args: {}
}

const AdaptiveTextTemplate = `<p class="p-4">
  <a class="cursor-pointer font-bold text-action can-hover:hover:text-action-hover">
    Lorem ipsum dolor sit amet
  </a>
  </p>`

export const AdaptiveText = {
  args: {},
  render: (args) => ({
    setup() {
      return { args }
    },
    template: AdaptiveTextTemplate
  })
}
