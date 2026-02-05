import PageSiteExploreApp from './PageSiteExploreApp.vue'

export default {
  title: 'Templates/ExploreJPL/PageSiteExploreApp',
  component: PageSiteExploreApp,
  tags: ['!autodocs'],
  parameters: {
    html: {
      root: '#storyRoot'
    },
    layout: 'fullscreen'
  },
  excludeStories: /.*(Data)$/
}

// data
export const ExploreAppSitePageData = {
  url: '/slug',
  title: 'Sites',
  displayLabel: 'Explore JPL',
  showShareLinks: false,
  body: []
}

// stories
export const BaseStory = {
  args: {
    data: ExploreAppSitePageData
  }
}
