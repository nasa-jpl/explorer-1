import imagePlanetJupiter from '@explorer-1/common-storybook/src/images/mission-highlights-800h-at-jupiter.png'
import imagePlanetEarth from '@explorer-1/common-storybook/src/images/mission-highlights-800h-earth-orbiting-on-earth.png'
import imageMoon from '@explorer-1/common-storybook/src/images/mission-highlights-800h-earths-moon.png'
import imageInterstellar from '@explorer-1/common-storybook/src/images/mission-highlights-800h-interstellar.jpg'
import imagePlanetMarsA from '@explorer-1/common-storybook/src/images/mission-highlights-800h-mars-orbiting.png'
import imagePlanetMarsB from '@explorer-1/common-storybook/src/images/mission-highlights-800h-on-mars.png'

import MissionDetailHighlights from '@explorer-1/vue/src/components/MissionDetailHighlights/MissionDetailHighlights.vue'
export default {
  title: 'WWW/MissionDetail/MissionHighlights',
  component: MissionDetailHighlights,
  parameters: {
    viewMode: 'canvas'
  },
  excludeStories: /.*Data$/
}

export const MissionDetailHighlightsData = {
  missionTitle: 'IRAS',
  highlightsHeading: 'Mission Timeline',
  highlightsGraphic: {
    webp: {
      url: imagePlanetEarth
    },
    src: {
      url: imagePlanetEarth,
      width: 787,
      height: 800
    },
    alt: 'Planet Earth'
  },
  showHighlightsAnimation: true,
  highlights: [
    {
      date: '1983-01-21',
      heading: 'Launch',
      highlightLink: {
        externalLink: null,
        page: {
          title: 'Color Picture from Spirit is Most Detailed View of Mars Ever Seen',
          url: '/news/from-russia-with-grace/'
        }
      },
      summary: 'A successful launch happened.'
    },
    {
      date: '1983-06-08',
      heading: null,
      highlightLink: {
        externalLink: null,
        page: {
          title: 'Color Picture from Spirit is Most Detailed View of Mars Ever Seen',
          url: '/news/from-russia-with-grace/'
        }
      },
      summary: null
    },
    {
      date: '1983-11-21',
      heading: 'End of mission',
      highlightLink: {
        externalLink: 'https://www.nasa.gov',
        page: null
      },
      summary:
        'Following a 10-month-long mission, the space telescope exhausts its cryogen and ceases operations.'
    }
  ]
}

// templates
const MissionDetailHighlightsTemplate = (args) => ({
  props: Object.keys(args),
  components: { MissionDetailHighlights },
  template: `<MissionDetailHighlights
    :animation="showHighlightsAnimation"
    :graphic="highlightsGraphic"
    :heading="highlightsHeading"
    :missionTitle="missionTitle"
    :highlights="highlights"
  />`
})

const MissionDetailHighlightsMinimalContentTemplate = (args) => ({
  props: Object.keys(args),
  components: { MissionDetailHighlights },
  template: `<MissionDetailHighlights
    :animation="showHighlightsAnimation"
    :graphic="highlightsGraphic"
    :missionTitle="missionTitle"
    :highlights="highlights"
  />`
})
const MissionDetailHighlightsNoImagesTemplate = (args) => ({
  props: Object.keys(args),
  components: { MissionDetailHighlights },
  template: `<MissionDetailHighlights
      :animation="showHighlightsAnimation"
      :heading="highlightsHeading"
      :missionTitle="missionTitle"
      :highlights="highlights"
  />`
})

// stories
export const Earth = {
  args: {
    animation: MissionDetailHighlightsData.showHighlightsAnimation,
    graphic: MissionDetailHighlightsData.highlightsGraphic,
    heading: MissionDetailHighlightsData.highlightsHeading,
    missionTitle: MissionDetailHighlightsData.missionTitle,
    highlights: MissionDetailHighlightsData.highlights
  }
}
export const Mars1 = {
  args: {
    animation: MissionDetailHighlightsData.showHighlightsAnimation,
    graphic: {
      webp: {
        url: imagePlanetMarsA
      },
      src: {
        url: imagePlanetMarsA,
        width: 787,
        height: 800
      },
      alt: 'Planet Mars'
    },
    heading: MissionDetailHighlightsData.highlightsHeading,
    missionTitle: 'InSight',
    highlights: MissionDetailHighlightsData.highlights
  }
}

export const Mars2 = {
  args: {
    animation: MissionDetailHighlightsData.showHighlightsAnimation,
    graphic: {
      webp: {
        url: imagePlanetMarsB
      },
      src: {
        url: imagePlanetMarsB,
        width: 787,
        height: 800
      },
      alt: 'Planet Mars'
    },
    heading: MissionDetailHighlightsData.highlightsHeading,
    missionTitle: MissionDetailHighlightsData.missionTitle,
    highlights: MissionDetailHighlightsData.highlights
  }
}

export const Moon = {
  args: {
    ...MissionDetailHighlightsData,
    graphic: {
      webp: {
        url: imageMoon
      },
      src: {
        url: imageMoon,
        width: 787,
        height: 800
      },
      alt: 'Planet Mars'
    }
  }
}

export const Jupiter = {
  args: {
    ...MissionDetailHighlightsData,
    graphic: {
      webp: {
        url: imagePlanetJupiter
      },
      src: {
        url: imagePlanetJupiter,
        width: 787,
        height: 800
      },
      alt: 'Planet Mars'
    }
  }
}

export const NoPlanet = {
  args: {
    ...MissionDetailHighlightsData,
    animation: false,
    graphic: {
      webp: {
        url: imageInterstellar
      },
      src: {
        url: imageInterstellar,
        width: 787,
        height: 800
      },
      alt: 'Planet Mars'
    }
  }
}

export const MinimalContent = {
  args: {
    ...MissionDetailHighlightsData,
    animation: false,
    graphic: {
      webp: {
        url: imageInterstellar
      },
      src: {
        url: imageInterstellar,
        width: 787,
        height: 800
      },
      alt: 'Planet Mars'
    },
    highlights: [
      {
        heading: 'End of mission',
        highlightLink: {
          externalLink: 'https://www.nasa.gov',
          page: null
        },
        summary:
          'Following a 10-month-long mission, the space telescope exhausts its cryogen and ceases operations.'
      }
    ]
  }
}

export const NoImages = {
  args: {
    missionTitle: 'IRAS',
    heading: 'Mission Timeline',
    animation: false,
    highlights: [
      {
        date: '1983-01-21',
        heading: 'Launch',
        highlightLink: {
          externalLink: null,
          page: {
            title: 'Color Picture from Spirit is Most Detailed View of Mars Ever Seen',
            url: '/news/from-russia-with-grace/'
          }
        },
        summary: 'A successful launch happened.'
      },
      {
        date: '1983-06-08',
        heading: null,
        highlightLink: {
          externalLink: null,
          page: {
            title: 'Color Picture from Spirit is Most Detailed View of Mars Ever Seen',
            url: '/news/from-russia-with-grace/'
          }
        },
        summary: null
      },
      {
        date: '1983-11-21',
        heading: 'End of mission',
        highlightLink: {
          externalLink: 'https://www.nasa.gov',
          page: null
        },
        summary:
          'Following a 10-month-long mission, the space telescope exhausts its cryogen and ceases operations.'
      }
    ]
  }
}
