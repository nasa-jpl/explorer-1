import EventDetailHero from './EventDetailHero.vue'

export default {
  title: 'Components/WWW/EventDetail/EventDetailHero',
  component: EventDetailHero,
  tags: ['!autodocs'],
  argTypes: {
    constrain: {
      description: 'Constrain image to 16:9'
    }
  },
  decorators: [
    () => ({
      template: `<div id="storyRoot" class="max-w-screen-3xl mx-auto"><story/></div>`
    })
  ],
  parameters: {
    html: {
      root: '#storyRoot'
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
  }
}

// stories
export const BaseStory = {
  args: {
    image: EventDetailHeroData.heroImage,
    startDate: '11-11-2025',
    endDate: '12-02-2025'
  }
}
