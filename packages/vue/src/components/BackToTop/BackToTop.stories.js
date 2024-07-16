import BackToTop from './BackToTop.vue'

export default {
  title: 'Components/Utilities/BackToTop',
  component: BackToTop
}

// template
const BackToTopTemplate = (args) => ({
  components: { BackToTop },
  setup() {
    return { args }
  },
  template: `
    <div style="height: 2000px;"><div class="fixed">Will appear here on scroll: <BackToTop v-show="true" v-bind="args" /></div></div>
  `
})

export const BaseStory = BackToTopTemplate.bind({})
BaseStory.storyName = 'BackToTop'
BaseStory.args = {
  threshhold: 300,
  scrollTo: 0
}
