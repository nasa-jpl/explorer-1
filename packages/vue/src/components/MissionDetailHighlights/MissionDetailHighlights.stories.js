import imagePlanetJupiter from '../../.storybook/images/mission-highlights-800h-at-jupiter.png'
import imagePlanetEarth from '../../.storybook/images/mission-highlights-800h-earth-orbiting-on-earth.png'
import imageMoon from '../../.storybook/images/mission-highlights-800h-earths-moon.png'
import imageInterstellar from '../../.storybook/images/mission-highlights-800h-interstellar.jpg'
import imagePlanetMarsA from '../../.storybook/images/mission-highlights-800h-mars-orbiting.png'
import imagePlanetMarsB from '../../.storybook/images/mission-highlights-800h-on-mars.png'

import MissionDetailHighlights from './MissionDetailHighlights.vue'
export default {
  title: 'WWW/Components/MissionDetail/MissionHighlights',
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
export const Earth = MissionDetailHighlightsTemplate.bind({})
Earth.args = {
  ...MissionDetailHighlightsData
}
export const Mars1 = MissionDetailHighlightsTemplate.bind({})
Mars1.args = {
  ...MissionDetailHighlightsData,
  missionTitle: 'InSight',
  highlightsGraphic: {
    webp: {
      url: imagePlanetMarsA
    },
    src: {
      url: imagePlanetMarsA,
      width: 787,
      height: 800
    },
    alt: 'Planet Mars'
  }
}
export const Mars2 = MissionDetailHighlightsTemplate.bind({})
Mars2.args = {
  ...MissionDetailHighlightsData,
  highlightsGraphic: {
    webp: {
      url: imagePlanetMarsB
    },
    src: {
      url: imagePlanetMarsB,
      width: 787,
      height: 800
    },
    alt: 'Planet Mars'
  }
}
export const Moon = MissionDetailHighlightsTemplate.bind({})
Moon.args = {
  ...MissionDetailHighlightsData,
  highlightsGraphic: {
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
export const Jupiter = MissionDetailHighlightsTemplate.bind({})
Jupiter.args = {
  ...MissionDetailHighlightsData,
  highlightsGraphic: {
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
export const NoPlanet = MissionDetailHighlightsTemplate.bind({})
NoPlanet.args = {
  ...MissionDetailHighlightsData,
  showHighlightsAnimation: false,
  highlightsGraphic: {
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
export const MinimalContent = MissionDetailHighlightsMinimalContentTemplate.bind({})
MinimalContent.args = {
  missionTitle: 'IRAS',
  showHighlightsAnimation: false,
  highlightsGraphic: {
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

export const NoImages = MissionDetailHighlightsNoImagesTemplate.bind({})
NoImages.args = {
  missionTitle: 'IRAS',
  highlightsHeading: 'Mission Timeline',
  showHighlightsAnimation: false,
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
