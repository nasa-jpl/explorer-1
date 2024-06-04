import imageBgEarth from '../../.storybook/images/bg-earth-1440x810.jpg'
import imageInstrumentOco2WebP from '../../.storybook/images/mission-oco2.webp'
import imageInstrumentOco2 from '../../.storybook/images/mission-oco2.png'
import imageInstrumentGraceFOWebP from '../../.storybook/images/mission-grace-fo-75.webp'
import imageInstrumentGraceFO from '../../.storybook/images/mission-grace-fo.png'
import { MissionDetailHighlightsData } from '../MissionDetailHighlights/MissionDetailHighlights.stories.js'
import { MissionDetailStatsData } from '../MissionDetailStats/MissionDetailStats.stories.js'
import { MissionDetailAboutData } from '../MissionDetailAbout/MissionDetailAbout.stories.js'
import { MissionDetailStreamfieldData } from '../MissionDetailStreamfield/MissionDetailStreamfield.stories.js'
import {
  BlockLinkCardCarouselData,
  BlockLinkTileCarouselData
} from '../BlockLinkCarousel/BlockLinkCarousel.stories.js'
import { BlockRelatedLinksData } from '../BlockRelatedLinks/BlockRelatedLinks.stories.js'
import PageMissionDetail from './PageMissionDetail.vue'

export default {
  title: 'WWW/Layouts/PageMissionDetail',
  component: PageMissionDetail,
  decorators: [
    () => ({
      template: `<div id="storyDecorator" class="absolute inset-0 disable-nav-offset"><story/></div>`
    })
  ],
  parameters: {
    html: {
      root: '#storyDecorator'
    },
    viewMode: 'canvas'
  },
  excludeStories: /.*(Data)$/
}

// template
const PageMissionDetailTemplate = (args) => ({
  props: Object.keys(args),
  components: { PageMissionDetail },
  template: `<PageMissionDetail :data="mission"/>`
})

// stories
export const DarkTemplate = PageMissionDetailTemplate.bind({})
DarkTemplate.args = {
  mission: {
    ...MissionDetailStatsData,
    ...MissionDetailHighlightsData,
    ...MissionDetailStreamfieldData,
    ...MissionDetailAboutData,
    relatedLinks: [BlockRelatedLinksData.data],
    relatedPages: BlockLinkCardCarouselData,
    otherMissions: BlockLinkTileCarouselData,
    slug: 'oco-2',
    templateStyle: 'dark',
    title: 'OCO-2',
    subtitle: 'Orbiting Carbon Observatory 2',
    summary:
      'OCO-2 is an Earth satellite mission designed to study the sources and sinks of carbon dioxide globally and provide scientists with a better idea of how carbon is contributing to climate change. ',
    thumbnailImage: 'https://placekitten.com/400/200',
    missionWebsiteUrl: 'http://oco.jpl.nasa.gov/',
    topicLabel: 'Topic Label',
    heroImage: {
      srcSet:
        'https://source.unsplash.com/OLlj17tUZnU//320x200 320w, https://source.unsplash.com/OLlj17tUZnU/1920x1200 1440w',
      src: {
        url: 'https://source.unsplash.com/OLlj17tUZnU/1920x1200',
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

export const LightTemplateWithHero = PageMissionDetailTemplate.bind({})
LightTemplateWithHero.args = {
  mission: {
    ...MissionDetailStatsData,
    ...MissionDetailHighlightsData,
    ...MissionDetailStreamfieldData,
    ...MissionDetailAboutData,
    relatedLinks: [BlockRelatedLinksData.data],
    relatedPages: BlockLinkCardCarouselData,
    otherMissions: BlockLinkTileCarouselData,
    slug: 'oco-2',
    templateStyle: 'light',
    title: 'OCO-2',
    subtitle: 'Orbiting Carbon Observatory 2',
    summary:
      'OCO-2 is an Earth satellite mission designed to study the sources and sinks of carbon dioxide globally and provide scientists with a better idea of how carbon is contributing to climate change. ',
    missionWebsiteUrl: 'http://oco.jpl.nasa.gov/',
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
    instrumentImage: null,
    instrumentBackground: null
  }
}
LightTemplateWithHero.parameters = { storyshots: false }

export const LightTemplateNoBackground = PageMissionDetailTemplate.bind({})
LightTemplateNoBackground.args = {
  mission: {
    ...MissionDetailStatsData,
    ...MissionDetailHighlightsData,
    ...MissionDetailStreamfieldData,
    ...MissionDetailAboutData,
    relatedLinks: [BlockRelatedLinksData.data],
    relatedPages: BlockLinkCardCarouselData,
    otherMissions: BlockLinkTileCarouselData,
    slug: 'oco-2',
    templateStyle: 'light',
    title: 'OCO-2',
    subtitle: 'Orbiting Carbon Observatory 2',
    summary:
      'OCO-2 is an Earth satellite mission designed to study the sources and sinks of carbon dioxide globally and provide scientists with a better idea of how carbon is contributing to climate change. ',
    missionWebsiteUrl: 'http://oco.jpl.nasa.gov/',
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
    instrumentBackground: null
  }
}
LightTemplateNoBackground.parameters = { storyshots: false }

// stories
export const GraceFO = PageMissionDetailTemplate.bind({})
GraceFO.args = {
  mission: {
    showClock: true,
    showDistance: false,
    clockType: 'time_in_orbit',
    startDateTime: '2018-10-22 10:04:21+01:00',
    distanceType: 'earth',
    distanceValue: 4986444,
    distanceApiUrls: '',
    displayDate: 'Oct. 22, 2018',
    missionTypes: [{ missionType: 'Orbiters' }],
    missionTargets: [{ target: 'Earth' }],
    status: 'current',
    ...MissionDetailHighlightsData,
    highlightsHeading: 'Mission Highlights',
    highlights: [
      {
        date: '2018-11-01',
        heading: 'GRACE-FO Resumes Data Collection',
        summary:
          'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam sagittis orci purus, in luctus ex volutpat sit amet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam sagittis orci purus, in luctus ex volutpat sit amet.'
      }
    ],
    feature: [
      {
        blockType: 'QuoteBlock',
        quote:
          "“A nice thing about it is it doesn't shatter. If impacted, it bends rather than breaks and still has good optical properties”",
        attribution: 'Amy Ross, Spacesuit Designer'
      }
    ],
    relatedLinks: [
      {
        links: [
          {
            text: 'Mission Website',
            document: '',
            page: '',
            externalLink: 'http://gracefo.jpl.nasa.gov/'
          }
        ]
      }
    ],
    relatedPages: BlockLinkCardCarouselData,
    otherMissions: BlockLinkTileCarouselData,
    slug: 'grace-fo',
    templateStyle: 'dark',
    title: 'GRACE-FO',
    subtitle: 'Gravity Recovery and Climate Experiment Follow-On',
    summary:
      'The Gravity Recovery and Climate Experiment Follow-on (GRACE-FO) mission is a partnership between NASA and the German Research Centre for Geosciences (GFZ).',
    thumbnailImage: 'https://placekitten.com/400/200',
    missionWebsiteUrl: 'http://gracefo.jpl.nasa.gov/',
    heroImage: {
      srcSet:
        'https://source.unsplash.com/OLlj17tUZnU//320x200 320w, https://source.unsplash.com/OLlj17tUZnU/1920x1200 1440w',
      src: {
        url: 'https://source.unsplash.com/OLlj17tUZnU/1920x1200',
        width: 1920,
        height: 1200
      },
      alt: 'GRACE-FO hero image'
    },
    instrumentImage: {
      webp: {
        url: imageInstrumentGraceFOWebP
      },
      src: {
        url: imageInstrumentGraceFO,
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
