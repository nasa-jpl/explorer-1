import EventDetailHero from '@explorer-1/vue/src/components/EventDetailHero/EventDetailHero.vue'

export default {
  title: 'Components/EventDetailHero/EventDetailHero',
  component: {
    EventDetailHero
  },
  decorators: [
    () => ({
      template: `<div id="storyDecorator" class="max-w-screen-3xl mx-auto"><story/></div>`
    })
  ],
  parameters: {
    html: {
      root: '#storyDecorator'
    },
    themes: {
      clearable: false,
      list: [
        {
          name: 'FullWidthDocs',
          class: 'sbdocs-preview-full-width',
          default: true,
          visible: false
        }
      ]
    },
    viewMode: 'docs'
  },
  excludeStories: /.*Data$/
}

export const EventDetailHeroData = {
  heroImage: {
    srcSet:
      'https://source.unsplash.com/OLlj17tUZnU//320x200 320w, https://source.unsplash.com/OLlj17tUZnU/1920x1200 1440w',
    src: {
      url: 'https://source.unsplash.com/OLlj17tUZnU/1920x1200',
      width: 1920,
      height: 1200
    },
    alt: 'The hero image'
  },
  startDateSplit: {
    day: '25',
    monthAndYear: 'Jan. 2020'
  }
}

// template
const EventDetailHeroTemplate = (args) => ({
  props: Object.keys(args),
  components: { EventDetailHero },
  template: `
    <EventDetailHero :image="heroImage" :start-date-split="startDateSplit"/>`
})

// stories
export const Default = EventDetailHeroTemplate.bind({})
Default.args = { ...EventDetailHeroData }
