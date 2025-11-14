import { MenuLinkColumnWithHeaderData } from './../NavLinkList/NavLinkList.stories'
import NavHeading from './NavHeading.vue'

export default {
  title: 'Navigation/Elements/NavHeading',
  component: NavHeading,
  decorators: [
    () => ({
      template: `<div id="storyRoot" class="p-8 bg-jpl-blue-darker edu:bg-primary-dark"><story/></div>`
    })
  ],
  parameters: {
    html: {
      root: '#storyRoot'
    },
    viewMode: 'docs'
  },
  excludeStories: /.*Data$/
}

export const BaseStory = {
  args: { data: MenuLinkColumnWithHeaderData }
}
