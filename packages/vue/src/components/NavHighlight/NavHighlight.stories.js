import NavHighlight from './NavHighlight.vue'

export default {
  title: 'WWW/Header & Footer/Elements/NavHighlight',
  components: {
    NavHighlight
  },
  decorators: [
    () => ({
      template: `<div id="storyDecorator" class="lg:BaseGrid container"><div class="col-span-5"><story/></div></div>`
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

export const MenuHighlightColumnData = {
  blockType: 'MenuHighlightColumn',
  label: 'Custom Label Override',
  highlight: {
    label: 'Solar System',
    title: 'Gravity Recovery and Climate Experiment Follow-On',
    url: '/missions/gravity-recovery-and-climate-experiment-follow-on-grace-fo/',
    thumbnailImage: {
      src: {
        url: 'https://source.unsplash.com/Q1p7bh3SHj8/400x225',
        width: 400,
        height: 225
      }
    }
  }
}

// templates
const NavHighlightTemplate = (args) => ({
  props: Object.keys(args),
  components: { NavHighlight },
  template: `<NavHighlight :custom-label="customLabel" :highlight="highlight" /></div>`
})

export const Default = NavHighlightTemplate.bind({})
Default.storyName = 'NavHighlight'
Default.args = {
  customLabel: MenuHighlightColumnData.label,
  highlight: MenuHighlightColumnData.highlight
}
