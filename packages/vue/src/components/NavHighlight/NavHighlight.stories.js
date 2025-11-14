import NavHighlight from './NavHighlight.vue'

export default {
  title: 'Navigation/Elements/NavHighlight',
  component: NavHighlight,
  tags: ['navigation'],
  decorators: [
    () => ({
      template: `<div id="storyRoot" class="lg:BaseGrid container"><div class="col-span-5"><story/></div></div>`
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

export const MenuHighlightColumnData = {
  blockType: 'MenuHighlightColumn',
  label: 'Custom Label Override',
  highlight: {
    label: 'Solar System',
    title: 'Gravity Recovery and Climate Experiment Follow-On',
    url: '/missions/gravity-recovery-and-climate-experiment-follow-on-grace-fo/',
    thumbnailImage: {
      src: {
        url: 'https://picsum.photos/400/225',
        width: 400,
        height: 225
      }
    }
  }
}

export const BaseStory = {
  args: {
    customLabel: MenuHighlightColumnData.label,
    highlight: MenuHighlightColumnData.highlight
  }
}
