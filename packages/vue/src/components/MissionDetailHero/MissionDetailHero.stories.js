import imageBgEarth from '@explorer-1/common-storybook/src/images/bg-earth-1440x810.jpg'
import imageBgPlanet from '@explorer-1/common-storybook/src/images/bg-planet-1440x810.jpg'
import imageBgStars from '@explorer-1/common-storybook/src/images/bg-stars-1440x810.jpg'
import imageInstrumentCuberrt from '@explorer-1/common-storybook/src/images/mission-cuberrt.png'
import imageInstrumentEcostress from '@explorer-1/common-storybook/src/images/mission-ecostress.png'
import imageInstrumentJason3 from '@explorer-1/common-storybook/src/images/mission-jason3.png'
import imageInstrumentOco2 from '@explorer-1/common-storybook/src/images/mission-oco2.png'
import imageInstrumentCuberrtWebP from '@explorer-1/common-storybook/src/images/mission-cuberrt.webp'
import imageInstrumentEcostressWebP from '@explorer-1/common-storybook/src/images/mission-ecostress.webp'
import imageInstrumentJason3WebP from '@explorer-1/common-storybook/src/images/mission-jason3.webp'
import imageInstrumentOco2WebP from '@explorer-1/common-storybook/src/images/mission-oco2.webp'

import MissionDetailHero from './MissionDetailHero.vue'

export default {
  title: 'WWW/MissionDetail/MissionDetailHero',
  component: MissionDetailHero,
  argTypes: {
    templateStyle: {
      control: { type: 'select', options: ['light', 'dark'] }
    }
  },
  decorators: [
    () => ({
      template: `<div id="storyDecorator" style="height:2500px"><story/></div>`
    })
  ],
  parameters: {
    html: {
      root: '#storyDecorator'
    },
    viewMode: 'canvas'
  },
  excludeStories: /.*Data$/
}

export const MissionDetailHeroData = {
  templateStyle: 'light',
  title: 'GRACE-FO',
  subtitle: 'The Gravity Recovery and Climate Experiment Follow-On',
  summary: "The GRACE missions measure variations in gravity over Earth's surface",
  missionWebsiteUrl: 'https://gracefo.jpl.nasa.gov/',
  heroFallback: {
    srcSet: 'https://picsum.photos/320/200 320w, https://picsum.photos/1920/1200 1440w',
    src: {
      url: 'https://picsum.photos/1920/1200',
      width: 1920,
      height: 1200
    },
    alt: 'The hero image'
  },
  instrumentImage: {
    webp: {
      url: imageInstrumentCuberrtWebP
    },
    src: {
      url: imageInstrumentCuberrt,
      width: 869,
      height: 700
    },
    alt: 'The instrument'
  },
  instrumentBackground: {
    image: {
      srcSet: 'https://picsum.photos/320/180 320w, https://picsum.photos/1440/810 1440w',
      src: {
        url: 'https://picsum.photos/1440/810',
        width: 1440,
        height: 810
      }
    }
  }
}

// template
const MissionDetailHeroTemplate = (args) => ({
  props: Object.keys(args),
  components: { MissionDetailHero },
  template: `<MissionDetailHero
    :title="title"
    :subtitle="subtitle"
    :summary="summary"
    :mission-website-url="missionWebsiteUrl"
    :instrument-image="instrumentImage"
    :instrument-background="instrumentBackground"
    :template-style="templateStyle"
    :hero-fallback="heroFallback"
  />`
})

// stories
export const BaseStory = {
  name: 'CubeRRT',
  args: {
    templateStyle: 'light',
    title: 'CubeRRT',
    subtitle: 'CubeSat Radiometer Radio Frequency Interference Technology Validation Mission',
    summary:
      'The main objective of the CubeRRT mission is to demonstrate the RFI mitigation technology on a flight-ready hardware in space, increasing the technology readiness level from 6 to 7.',
    missionWebsiteUrl: 'https://www.jpl.nasa.gov/cubesat/missions/cuberrt.php',
    heroImage: {
      srcSet: 'https://picsum.photos/320/200 320w, https://picsum.photos/1920/1200 1440w',
      src: {
        url: 'https://picsum.photos/1920/1200',
        width: 1920,
        height: 1200
      },
      alt: 'The hero image'
    },
    instrumentImage: {
      webp: {
        url: imageInstrumentCuberrtWebP
      },
      src: {
        url: imageInstrumentCuberrt,
        width: 869,
        height: 700
      },
      alt: 'The instrument'
    },
    instrumentBackground: {
      image: {
        srcSet: imageBgStars + ' 1440w',
        src: {
          url: imageBgStars,
          width: 1440,
          height: 810
        }
      }
    }
  }
}

export const Ecostress = {
  args: {
    templateStyle: 'light',
    title: 'ECOSTRESS',
    subtitle: 'ECOsystem Spaceborne Thermal Radiometer Experiment on Space Station',
    summary:
      'ECOSTRESS will monitor one of the most basic processes in living plants: the loss of water through the tiny pores in leaves.',
    missionWebsiteUrl: 'http://ecostress.jpl.nasa.gov/',
    heroImage: {
      srcSet: 'https://picsum.photos/320/200 320w, https://picsum.photos/1920/1200 1440w',
      src: {
        url: 'https://picsum.photos/1920/1200',
        width: 1920,
        height: 1200
      },
      alt: 'Ecostress hero image'
    },
    instrumentImage: {
      webp: {
        url: imageInstrumentEcostressWebP
      },
      src: {
        url: imageInstrumentEcostress,
        width: 1119,
        height: 700
      },
      alt: 'The instrument'
    },
    instrumentBackground: {
      image: {
        srcSet: imageBgEarth + ' 1440w',
        src: {
          url: imageBgEarth,
          width: 1440,
          height: 810
        }
      }
    }
  }
}

export const Jason3 = {
  args: {
    templateStyle: 'light',
    title: 'Jason-3',
    subtitle: null,
    summary:
      'Jason-3 will make highly detailed measurements of sea-level on Earth to gain insight into ocean circulation and climate change. ',
    missionWebsiteUrl: 'http://sealevel.jpl.nasa.gov/missions/jason3/',
    heroImage: {
      srcSet: 'https://picsum.photos/320/200 320w, https://picsum.photos/1920/1200 1440w',
      src: {
        url: 'https://picsum.photos/1920/1200',
        width: 1920,
        height: 1200
      },
      alt: 'Jason-3 hero image'
    },
    instrumentImage: {
      webp: {
        url: imageInstrumentJason3WebP
      },
      src: {
        url: imageInstrumentJason3,
        width: 1457,
        height: 700
      },
      alt: 'The instrument'
    },
    instrumentBackground: {
      image: {
        srcSet: imageBgPlanet + ' 1440w',
        src: {
          url: imageBgPlanet,
          width: 1440,
          height: 810
        }
      }
    }
  }
}

export const Oco2 = {
  args: {
    templateStyle: 'light',
    title: 'OCO-2',
    subtitle: 'Orbiting Carbon Observatory 2',
    summary:
      'OCO-2 is an Earth satellite mission designed to study the sources and sinks of carbon dioxide globally and provide scientists with a better idea of how carbon is contributing to climate change. ',
    missionWebsiteUrl: 'http://oco.jpl.nasa.gov/',
    heroImage: {
      srcSet: 'https://picsum.photos/320/200 320w, https://picsum.photos/1920/1200 1440w',
      src: {
        url: 'https://picsum.photos/1920/1200',
        width: 1920,
        height: 1200
      },
      alt: 'OCO-2 hero image'
    },
    instrumentImage: {
      webp: {
        url: imageInstrumentOco2WebP
      },
      src: {
        url: imageInstrumentOco2,
        width: 1597,
        height: 700
      },
      alt: 'The instrument'
    },
    instrumentBackground: {
      image: {
        srcSet: imageBgEarth + ' 1440w',
        src: {
          url: imageBgEarth,
          width: 1440,
          height: 810
        }
      }
    }
  }
}
export const NoBackground = {
  args: {
    templateStyle: 'light',
    title: 'GRACE-FO',
    subtitle: 'The Gravity Recovery and Climate Experiment Follow-On',
    summary: "The GRACE missions measure variations in gravity over Earth's surface",
    missionWebsiteUrl: 'https://gracefo.jpl.nasa.gov/',
    heroImage: {
      srcSet: 'https://picsum.photos/320/200 320w, https://picsum.photos/1920/1200 1440w',
      src: {
        url: 'https://picsum.photos/1920/1200',
        width: 1920,
        height: 1200
      },
      alt: 'Example hero image'
    },
    instrumentImage: {
      webp: {
        url: imageInstrumentOco2WebP
      },
      src: {
        url: imageInstrumentOco2,
        width: 1597,
        height: 700
      },
      alt: 'The instrument'
    }
  }
}

export const StaticHero = {
  args: {
    templateStyle: 'light',
    title: 'ECOSTRESS',
    subtitle: 'ECOsystem Spaceborne Thermal Radiometer Experiment on Space Station',
    summary:
      'ECOSTRESS will monitor one of the most basic processes in living plants: the loss of water through the tiny pores in leaves.',
    missionWebsiteUrl: 'http://ecostress.jpl.nasa.gov/',
    heroFallback: {
      srcSet: 'https://picsum.photos/320/200 320w, https://picsum.photos/1920/1200 1440w',
      src: {
        url: 'https://picsum.photos/1920/1200',
        width: 1920,
        height: 1200
      },
      alt: 'Ecostress hero image'
    }
  }
}
