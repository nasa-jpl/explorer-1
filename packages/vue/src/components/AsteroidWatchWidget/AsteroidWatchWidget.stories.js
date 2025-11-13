import AsteroidWatchWidget from './AsteroidWatchWidget.vue'

export default {
  title: 'Components/WWW/AsteroidWatchWidget',
  component: AsteroidWatchWidget,
  excludeStories: /.*Data$/,
  decorators: [
    () => ({
      template: `<div id="storyRoot" class="mt-20"><story/></div>`
    })
  ],
  parameters: {
    html: {
      root: '#storyRoot' // to omit decorators from html output
    }
  }
}

export const AsteroidWatchWidgetData = {
  nextCloseApproaches: [
    {
      name: '(2008 YN2)',
      date: '2024-06-05',
      sizeFeet: 61,
      sizeMeters: 19,
      distanceMiles: 2500000,
      distanceKilometers: 4020000,
      externalLink: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=2008%20YN2&view=VOP',
      comparisonImage: {
        image: {
          webp: {
            url: 'https://d2pn8kiwq2w21t.cloudfront.net/images/asteroid_watchmanagem.2e16d0ba.fill-320x320.format-webp_mp07rlQ.webp',
            __typename: 'CustomRendition'
          },
          src: {
            url: 'https://d2pn8kiwq2w21t.cloudfront.net/images/asteroid_watchmanagementcommandsda.2e16d0ba.fill-320x320_5YFe2jp.png',
            __typename: 'CustomRendition'
          },
          __typename: 'CustomImage'
        },
        text: 'HOUSE-SIZE',
        __typename: 'AsteroidSizeComparison'
      },
      __typename: 'AsteroidApproach'
    },
    {
      name: '(2024 JR17)',
      date: '2024-06-05',
      sizeFeet: 260,
      sizeMeters: 80,
      distanceMiles: 4600000,
      distanceKilometers: 7400000,
      externalLink: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=2024%20JR17&view=VOP',
      comparisonImage: {
        image: {
          webp: {
            url: 'https://d2pn8kiwq2w21t.cloudfront.net/images/asteroid_watchmanagem.2e16d0ba.fill-320x320.format-webp_miCwBak.webp',
            __typename: 'CustomRendition'
          },
          src: {
            url: 'https://d2pn8kiwq2w21t.cloudfront.net/images/asteroid_watchmanagementcommandsda.2e16d0ba.fill-320x320_XtfVXBr.png',
            __typename: 'CustomRendition'
          },
          __typename: 'CustomImage'
        },
        text: 'BUILDING-SIZE',
        __typename: 'AsteroidSizeComparison'
      },
      __typename: 'AsteroidApproach'
    },
    {
      name: '(2021 LW3)',
      date: '2024-06-06',
      sizeFeet: 270,
      sizeMeters: 82,
      distanceMiles: 2310000,
      distanceKilometers: 3710000,
      externalLink: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=2021%20LW3&view=VOP',
      comparisonImage: {
        image: {
          webp: {
            url: 'https://d2pn8kiwq2w21t.cloudfront.net/images/asteroid_watchmanagem.2e16d0ba.fill-320x320.format-webp_miCwBak.webp',
            __typename: 'CustomRendition'
          },
          src: {
            url: 'https://d2pn8kiwq2w21t.cloudfront.net/images/asteroid_watchmanagementcommandsda.2e16d0ba.fill-320x320_XtfVXBr.png',
            __typename: 'CustomRendition'
          },
          __typename: 'CustomImage'
        },
        text: 'BUILDING-SIZE',
        __typename: 'AsteroidSizeComparison'
      },
      __typename: 'AsteroidApproach'
    },
    {
      name: '(2024 LA)',
      date: '2024-06-07',
      sizeFeet: 77,
      sizeMeters: 24,
      distanceMiles: 1120000,
      distanceKilometers: 1800000,
      externalLink: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=2024%20LA&view=VOP',
      comparisonImage: {
        image: {
          webp: {
            url: 'https://d2pn8kiwq2w21t.cloudfront.net/images/asteroid_watchmanagem.2e16d0ba.fill-320x320.format-webp_frsqFOl.webp',
            __typename: 'CustomRendition'
          },
          src: {
            url: 'https://d2pn8kiwq2w21t.cloudfront.net/images/asteroid_watchmanagementcommandsda.2e16d0ba.fill-320x320_QiuTjYV.png',
            __typename: 'CustomRendition'
          },
          __typename: 'CustomImage'
        },
        text: 'AIRPLANE-SIZE',
        __typename: 'AsteroidSizeComparison'
      },
      __typename: 'AsteroidApproach'
    },
    {
      name: '(2024 KA1)',
      date: '2024-06-07',
      sizeFeet: 95,
      sizeMeters: 29,
      distanceMiles: 1170000,
      distanceKilometers: 1880000,
      externalLink: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=2024%20KA1&view=VOP',
      comparisonImage: {
        image: {
          webp: {
            url: 'https://d2pn8kiwq2w21t.cloudfront.net/images/asteroid_watchmanagem.2e16d0ba.fill-320x320.format-webp_frsqFOl.webp',
            __typename: 'CustomRendition'
          },
          src: {
            url: 'https://d2pn8kiwq2w21t.cloudfront.net/images/asteroid_watchmanagementcommandsda.2e16d0ba.fill-320x320_QiuTjYV.png',
            __typename: 'CustomRendition'
          },
          __typename: 'CustomImage'
        },
        text: 'AIRPLANE-SIZE',
        __typename: 'AsteroidSizeComparison'
      },
      __typename: 'AsteroidApproach'
    }
  ]
}

export const BaseStory = {
  args: AsteroidWatchWidgetData
}
