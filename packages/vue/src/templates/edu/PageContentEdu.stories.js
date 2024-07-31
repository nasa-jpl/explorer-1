import { ContentPageData } from './../PageContent/PageContent.stories.js'
import PageContent from './../PageContent/PageContent.vue'

export default {
  title: 'Templates/EDU/PageContent',
  component: PageContent,
  tags: ['!autodocs'],
  decorators: [
    () => ({
      template: `<div id="storyDecorator" class="ThemeEdu"><story/></div>`
    })
  ],
  parameters: {
    html: {
      root: '#storyDecorator'
    },
    docs: {
      description: {
        component:
          'EDU uses the same `PageContent` component as WWW. The only difference is the theme class used on the site.'
      }
    }
  },
  excludeStories: /.*(Data)$/
}

// stories
export const BaseStory = {
  name: 'PageContent',
  args: {
    data: ContentPageData
  }
}
