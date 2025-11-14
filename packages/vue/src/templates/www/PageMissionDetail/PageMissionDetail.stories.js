import { MissionDetailHighlightsData } from './../../../components/MissionDetailHighlights/MissionDetailHighlights.stories.js'
import { MissionDetailStatsData } from './../../../components/MissionDetailStats/MissionDetailStats.stories.js'
import { MissionDetailAboutData } from './../../../components/MissionDetailAbout/MissionDetailAbout.stories.js'
import { MissionDetailStreamfieldData } from './../../../components/MissionDetailStreamfield/MissionDetailStreamfield.stories.js'
import {
  BlockLinkCardCarouselData,
  BlockLinkTileCarouselData
} from './../../../components/BlockLinkCarousel/BlockLinkCarousel.stories.js'
import { BlockRelatedLinksData } from './../../../components/BlockRelatedLinks/BlockRelatedLinks.stories.js'
import PageMissionDetail from './PageMissionDetail.vue'

export default {
  title: 'Templates/WWW/PageMissionDetail',
  component: PageMissionDetail,
  tags: ['!autodocs'],
  decorators: [
    () => ({
      template: `<div id="storyRoot" class="disable-nav-offset"><story/></div>`
    })
  ],
  parameters: {
    layout: 'fullscreen',
    html: {
      root: '#storyRoot'
    }
  },
  excludeStories: /.*(Data)$/
}

// stories
export const BaseStory = {
  name: 'Dark Template',
  args: {
    data: {
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
      thumbnailImage: 'https://picsum.photos/400/200',
      missionWebsiteUrl: 'http://oco.jpl.nasa.gov/',
      topicLabels: ['Stars and Galaxies', 'Exoplanets'],
      heroImage: {
        srcSet: 'https://https://picsum.photos/320/200 320w, https://picsum.photos/1920/1200 1440w',
        src: {
          url: 'https://picsum.photos/1920/1200',
          width: 1920,
          height: 1200
        },
        alt: 'OCO-2 hero image'
      },
      instrumentImage: {
        webp: {
          url: '/public/images/mission-oco2.webp'
        },
        src: {
          url: '/public/images/mission-grace-fo-75.webp',
          width: 1597,
          height: 700
        },
        alt: 'The instrument'
      },
      instrumentBackground: {
        image: {
          srcSet: '/public/images/bg-earth-1440x810.jpg' + ' 1440w',
          src: {
            url: '/public/images/bg-earth-1440x810.jpg',
            width: 1440,
            height: 810
          }
        }
      }
    }
  }
}

export const LightTemplateWithHero = {
  args: {
    data: {
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
        srcSet: 'https://picsum.photos/320/320 320w, https://picsum.photos/1920/1200 1440w',
        src: {
          url: 'https://picsum.photos/1920/1200',
          width: 1920,
          height: 1200
        },
        alt: 'The hero image'
      },
      instrumentImage: null,
      instrumentBackground: null
    }
  }
}

export const LightTemplateNoBackground = {
  args: {
    data: {
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
        srcSet: 'https://picsum.photos/320/320 320w, https://picsum.photos/1920/1200 1440w',
        src: {
          url: 'https://picsum.photos/1920/1200',
          width: 1920,
          height: 1200
        },
        alt: 'The hero image'
      },
      instrumentImage: {
        webp: {
          url: '/public/images/mission-oco2.webp'
        },
        src: {
          url: '/public/images/mission-grace-fo-75.webp',
          width: 1597,
          height: 700
        },
        alt: 'The instrument'
      },
      instrumentBackground: null
    }
  }
}

// stories
export const GraceFO = {
  args: {
    data: {
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
      thumbnailImage: 'https://picsum.photos/400/200',
      missionWebsiteUrl: 'http://gracefo.jpl.nasa.gov/',
      heroImage: {
        srcSet: 'https://picsum.photos/320/320 320w, https://picsum.photos/1920/1200 1440w',
        src: {
          url: 'https://picsum.photos/1920/1200',
          width: 1920,
          height: 1200
        },
        alt: 'GRACE-FO hero image'
      },
      instrumentImage: {
        webp: {
          url: '/public/images/mission-grace-fo-75.webp'
        },
        src: {
          url: '/public/images/mission-grace-fo.png',
          width: 1597,
          height: 700
        },
        alt: 'The instrument'
      },
      instrumentBackground: {
        image: {
          srcSet: '/public/images/bg-earth-1440x810.jpg' + ' 1440w',
          src: {
            url: '/public/images/bg-earth-1440x810.jpg',
            width: 1440,
            height: 810
          }
        }
      }
    }
  }
}
