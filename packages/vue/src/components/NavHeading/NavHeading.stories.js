import { MenuLinkColumnWithHeaderData } from './../NavLinkList/NavLinkList.stories'
import NavHeading from './NavHeading.vue'

export default {
  title: 'WWW/Header & Footer/Elements/NavHeading',
  component: NavHeading,
  decorators: [
    () => ({
      template: `<div id="storyDecorator" class="p-8 bg-jpl-blue-darker"><story/></div>`
    })
  ],
  parameters: {
    html: {
      root: '#storyDecorator'
    },
    viewMode: 'docs'
  },
  excludeStories: /.*Data$/
}

export const BaseStory = {
  args: { data: MenuLinkColumnWithHeaderData }
}
