import PageMaintenanceMode from './PageMaintenanceMode.vue'

export default {
  title: 'Templates/WWW/PageMaintenanceMode',
  component: PageMaintenanceMode,
  tags: ['!autodocs'],
  excludeStories: /.*Data$/,
  parameters: {
    layout: 'fullscreen'
  }
}

// stories
export const BaseStory = { name: 'PageMaintenanceMode' }
