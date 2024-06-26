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

const InternalTemplate = `<div>
  <div class="ThemeInternal">
    <!-- BaseLink -->
    <div>
      <a
        class="group cursor-pointer -default underline text-action can-hover:hover:text-action-hover"
      >
        Internal Theme: BaseLink 
      </a>
    </div>
    <!-- /BaseLink -->
  </div>
  <div>
  <!-- BaseLink -->
    <div>
      <a
        class="group cursor-pointer -default underline text-action can-hover:hover:text-action-hover"
      >
        Default Theme: BaseLink
      </a>
    </div>
    <!-- /BaseLink -->
  </div>
</div>`

export const Internal = {
  args: {},
  render: (args) => ({
    setup() {
      return { args }
    },
    template: InternalTemplate
  })
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
