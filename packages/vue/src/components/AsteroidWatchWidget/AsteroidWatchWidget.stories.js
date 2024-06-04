import AsteroidWatchWidget from './AsteroidWatchWidget.vue'

export default {
  title: 'WWW/Components/AsteroidWatchWidget',
  component: AsteroidWatchWidget,
  excludeStories: /.*Data$/,
  decorators: [
    () => ({
      template: `<div id="storyDecorator" class="mt-20"><story/></div>`,
    }),
  ],
  parameters: {
    html: {
      root: '#storyDecorator', // to omit decorators from html output
    },
  },
  argTypes: {
    status: {
      control: { type: 'text' },
    },
  },
}

export const AsteroidWatchWidgetData = {
  nextCloseApproaches: [
    {
      comparisonImage: {
        image: {
          src: {
            url: 'http://127.0.0.1:9000/media/images/asteroid_watchmanagementcommandsda.2e16d0ba.fill-320x320.png',
          },
          webp: {
            url: 'http://127.0.0.1:9000/media/images/asteroid_watchmanagem.2e16d0ba.fill-320x320.format-webp.webp',
          },
        },
        text: 'BUS-SIZE',
      },
      date: '2020-12-18',
      distanceKilometers: 57100,
      distanceMiles: 35500,
      externalLink: 'https://ssd.jpl.nasa.gov/sbdb.cgi?sstr=2020%20XX3;orb=1',
      name: '(2020 XX3)',
      sizeFeet: 22,
      sizeMeters: 68,
    },
    {
      comparisonImage: {
        image: {
          src: {
            url: 'http://127.0.0.1:9000/media/images/asteroid_watchmanagementcommandsda.2e16d0ba.fill-320x320.png',
          },
          webp: {
            url: 'http://127.0.0.1:9000/media/images/asteroid_watchmanagem.2e16d0ba.fill-320x320.format-webp.webp',
          },
        },
        text: 'BUS-SIZE',
      },
      date: '2020-12-18',
      distanceKilometers: 57100,
      distanceMiles: 35500,
      externalLink: 'https://ssd.jpl.nasa.gov/sbdb.cgi?sstr=2020%20XX3;orb=1',
      name: '(2020 XX3)',
      sizeFeet: 22,
      sizeMeters: 68,
    },
    {
      comparisonImage: {
        image: {
          src: {
            url: 'http://127.0.0.1:9000/media/images/asteroid_watchmanagementcommandsda.2e16d0ba.fill-320x320.png',
          },
          webp: {
            url: 'http://127.0.0.1:9000/media/images/asteroid_watchmanagem.2e16d0ba.fill-320x320.format-webp.webp',
          },
        },
        text: 'BUS-SIZE',
      },
      date: '2020-12-18',
      distanceKilometers: 57100,
      distanceMiles: 35500,
      externalLink: 'https://ssd.jpl.nasa.gov/sbdb.cgi?sstr=2020%20XX3;orb=1',
      name: '(2020 XX3)',
      sizeFeet: 22,
      sizeMeters: 68,
    },
  ],
}

const AsteroidWatchWidgetTemplate = (args) => ({
  props: Object.keys(args),
  components: { AsteroidWatchWidget },
  template: `<AsteroidWatchWidget
    :static-data="nextCloseApproaches"
  />`,
})

export const Base = AsteroidWatchWidgetTemplate.bind({})
Base.args = { ...AsteroidWatchWidgetData }
