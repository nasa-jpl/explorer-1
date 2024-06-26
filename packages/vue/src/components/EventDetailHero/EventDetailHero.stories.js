import EventDetailHero from './EventDetailHero.vue'

export default {
  title: 'WWW/EventDetail/EventDetailHero',
  component: EventDetailHero,
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
    srcSet: 'https://picsum.photos/320/200 320w, https://picsum.photos/1920/1200 1440w',
    src: {
      url: 'https://picsum.photos/1920/1200',
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

// stories
export const Default = {
  args: {
    image: EventDetailHeroData.heroImage,
    startDateSplit: EventDetailHeroData.startDateSplit
  }
}
