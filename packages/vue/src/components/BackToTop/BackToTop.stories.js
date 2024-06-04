import BackToTop from './BackToTop.vue'

export default {
  title: 'Components/Utilities/BackToTop',
  component: BackToTop
}

// template
const BackToTopTemplate = (args) => ({
  props: Object.keys(args),
  components: { BackToTop },
  template: `
    <div style="height: 2000px;"><div class="fixed">Will appear here on scroll: <BackToTop v-show="true" :threshhold="threshhold" :scroll-to="scrollTo" /></div></div>
  `
})

export const Default = BackToTopTemplate.bind({})
Default.storyName = 'BackToTop'
Default.args = {
  threshhold: 300,
  scrollTo: 0
}
