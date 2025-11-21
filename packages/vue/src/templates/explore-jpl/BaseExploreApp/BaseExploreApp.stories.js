import BaseExploreApp from './BaseExploreApp.vue'

export default {
  title: 'Templates/ExploreJPL/BaseExploreApp',
  component: BaseExploreApp,
  parameters: {
    html: {
      root: '#storyRoot'
    },
    layout: 'fullscreen'
  },
  excludeStories: /.*(Data)$/
}

// data
export const BaseExploreAppData = {
  url: '/slug',
  breadcrumb:
    '[{"path": "/explore-app/", "title": "Explore JPL", "children": []},{"path": "/explore-app/maps/", "title": "Map", "children": []},{"path": "/explore-app/sites/", "title": "Sites", "children": []},{"path": "/explore-app/info/", "title": "Info", "children": []}]'
}

// stories
export const BaseStory = {
  name: 'BaseExploreApp',
  args: {
    data: BaseExploreAppData
  }
}
