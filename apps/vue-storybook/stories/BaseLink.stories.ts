import BaseLink, { variants } from '@explorer-1/vue/src/components/BaseLink/BaseLink.vue'
// import BaseLink, { variants } from '@explorer-1/vue/src/components/BaseLink/BaseLink.vue'
export default {
  title: 'Components/Base/BaseLink',
  component: BaseLink,
  // argTypes: {
  //   variant: {
  //     control: { type: 'select', options: Object.keys(variants) }
  //   },
  //   text: { control: { type: 'text' } }
  // },
  excludeStories: /.*Data$/
}

// data
export const BaseLinkData = {
  variant: 'primary',
  to: '/',
  href: '/',
  caret: false,
  caretColor: 'text-theme-red'
}

// templates
const BaseLinkTemplate = (args) => ({
  components: { BaseLink },
  setup() {
    return { args }
  },
  template: `<BaseLink v-bind="args">Base Link</BaseLink>`
})

// stories
export const Primary = BaseLinkTemplate.bind({})
Primary.args = { ...BaseLinkData }

export const Secondary = BaseLinkTemplate.bind({})
Secondary.args = { ...BaseLinkData, variant: 'secondary' }

export const DefaultBody = BaseLinkTemplate.bind({})
DefaultBody.args = { ...BaseLinkData, variant: 'default' }

export const Unstyled = BaseLinkTemplate.bind({})
Unstyled.args = {
  ...BaseLinkData,
  variant: 'none'
}
