import { BlockVideoEmbedData } from './../../../components/BlockVideoEmbed/BlockVideoEmbed.stories'
import { HeroMediaData } from './../../../components/HeroMedia/HeroMedia.stories'
import PageTimeline from './PageTimeline.vue'

export default {
  title: 'Templates/WWW/PageTimeline',
  component: PageTimeline,
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

const description =
  '<p>Lorem ipsum <a href="/missions/test-mission/">dolor</a> sit amet, consectetur adipiscing elit. Quisque vitae justo quis justo malesuada molestie. Cras sed tincidunt dui.</p><p>Integer imperdiet blandit neque vitae euismod. Nulla aliquet lacus nibh,  vel tincidunt urna efficitur non. In et eros vitae ex posuere maximus  quis eget urna. Suspendisse fringilla posuere velit sit amet posuere.  Morbi malesuada bibendum vehicula. Donec faucibus ut erat ut mattis.  Suspendisse ornare, quam at placerat cursus, dolor mi lacinia nunc, eget  maximus augue nulla in dolor.</p>'

const milestoneImages = () => {
  return {
    thumbnailImage: {
      alt: '',
      src: {
        height: '122',
        width: '122',
        url: `https://picsum.photos/122/122`
      }
    },
    image: {
      alt: '',
      caption: '',
      credit: '',
      detailUrl: null,
      original: `https://picsum.photos/1024/768`,
      src: {
        height: '1024',
        width: '768',
        url: `https://picsum.photos/1024/768`
      }
    },
    backgroundImage: {
      screenMd: {
        height: '480',
        width: '480',
        url: `https://picsum.photos/480/480`
      },
      src: {
        height: '346',
        width: '346',
        url: `https://picsum.photos/480/480`
      }
    }
  }
}

// data
export const PageTimelineData = {
  url: '/timeline',
  title: 'Timeline',
  slug: 'timeline',
  seoTitle: '',
  searchDescription: '',
  heroTitle: 'Dare Mighty Things',
  heroSummary: 'Reaching for the stars since 1936',
  summary: 'The entire JPL timeline',
  heroImage: HeroMediaData.image,
  milestones: [
    {
      id: '7535b4d1-e803-49dd-ad06-8925912464af',
      heading: 'First Likely Quake Detected on Another Planet',
      date: '2019-04-06',
      displayDate: '',
      description,
      embed: null,
      milestoneLabel: 'InSight',
      milestoneLink: {
        externalLink: 'https://mars.nasa.gov/insight/',
        page: null
      },
      milestoneLinkLabel: 'Find out more'
    },
    {
      id: '87f35d0d-eb57-4cd7-9408-80f86d85d5b7',
      heading: 'First CubeSats Fly by Another Planet',
      date: '2018-11-26',
      displayDate: '',
      description,
      embed: BlockVideoEmbedData.data.embed,
      milestoneLabel: 'Mars Cube One',
      milestoneLink: {
        externalLink: '',
        page: {
          url: '/missions/mars-cube-one-marco'
        }
      },
      milestoneLinkLabel: ''
    },
    {
      date: '2018-07-01',
      description: '',
      displayDate: 'July 2018',
      heading: 'First Production of the Fifth State of Matter in Orbit',
      id: '1d0a97f3',
      milestoneLabel: 'Cold Atom Lab',
      milestoneLink: {
        externalLink: 'https://mars.nasa.gov/insight/',
        page: null
      },
      milestoneLinkLabel: ''
    },
    {
      date: '2018-06-13',
      description: '',
      heading: 'First Laser Ranging Between Spacecraft',
      id: 'd1c9ed60',
      milestoneLabel: 'GRACE-FO'
    },
    {
      date: '2017-09-15',
      description: '',
      heading: 'First Mission to Plunge Into the Saturn Atmosphere',
      id: 'daa83876',
      milestoneLabel: 'Cassini'
    },
    {
      date: '2017-04-26',
      description: '',
      heading: 'First Spacecraft to Dive Between Saturn and Its Rings',
      id: '73ad9435',
      milestoneLabel: 'Cassini'
    },
    {
      date: '2017-02-22',
      description: '',
      heading: 'First System of Seven Earth-Sized Planets Around a Single Star Revealed',
      id: 'f36997e8',
      milestoneLabel: 'Spitzer Space Telescope'
    },
    {
      date: '2016-07-04',
      description: '',
      heading: 'First Solar-Powered Spacecraft at Jupiter',
      id: 'c5e7b2af',
      milestoneLabel: 'Juno'
    },
    {
      date: '2015-03-06',
      description: '',
      heading:
        'First Spacecraft to Visit a Dwarf Planet and First Spacecraft to Orbit Two Planetary Destinations',
      id: '59a8d5e5',
      milestoneLabel: 'Dawn'
    },
    {
      date: '2014-10-08',
      description: '',
      heading: 'First Discovery of an Ultraluminous Pulsar',
      id: 'e4500d70',
      milestoneLabel: 'NuSTAR'
    },
    {
      date: '2014-08-06',
      description: '',
      heading: 'First High-Precision Global Measurements of Carbon Dioxide',
      id: '87206691',
      milestoneLabel: 'OCO-2'
    },
    {
      date: '2013-02-08',
      description: '',
      heading: 'First Drilling into Another Planet to Collect a Sample',
      id: '0ab43d2b',
      milestoneLabel: 'Curiosity'
    },
    {
      date: '2012-12-05',
      description: '',
      heading: 'First High-Resolution Gravity Map of the Moon',
      id: '4a178b45',
      milestoneLabel: 'GRAIL'
    },
    {
      date: '2012-08-25',
      description: '',
      heading: 'First Spacecraft to Enter Interstellar Space',
      id: '3b7c9c60',
      milestoneLabel: 'Voyager 1'
    },
    {
      date: '2012-08-06',
      description: '',
      heading: 'First Skycrane Landing',
      id: '90ffa91a',
      milestoneLabel: 'Curiosity'
    },
    {
      date: '2012-06-28',
      description: '',
      heading: 'First Focused Images of the High-Energy Universe from an Orbiting Telescope',
      id: 'b801408e',
      milestoneLabel: 'NuSTAR'
    },
    {
      date: '2012-01-01',
      description: '',
      heading: 'First Twin “Formation-Flying” Spacecraft at Another World',
      id: 'a386414e',
      milestoneLabel: 'GRAIL'
    },
    {
      date: '2011-12-20',
      description: '',
      heading: 'First Detection of Earth-Sized Exoplanet',
      id: '02f4df67',
      milestoneLabel: 'Kepler'
    },
    {
      date: '2011-07-27',
      description: '',
      heading: 'First Detection of Earth Trojan Asteroid',
      id: '37ff871d',
      milestoneLabel: 'WISE'
    },
    {
      date: '2011-07-15',
      description: '',
      heading: 'First Protoplanet Orbiter',
      id: '848bb4c2',
      milestoneLabel: 'Dawn'
    },
    {
      date: '2006-01-15',
      description: '',
      heading: 'First Comet Sample',
      id: '424c570d',
      milestoneLabel: 'Stardust'
    },
    {
      date: '2005-07-04',
      description: '',
      heading: 'First Spacecraft to Impact Comet',
      id: '4a2b202f',
      milestoneLabel: 'Deep Impact'
    },
    {
      date: '2005-03-22',
      description: '',
      heading: 'First Direct Detection of Light From Exoplanet',
      id: '5064dde5',
      milestoneLabel: 'Spitzer Space Telescope'
    },
    {
      date: '2005-02-16',
      description: '',
      heading: "First Hint of an Ocean at Saturn's Moon Enceladus",
      id: '1cc9a0d1',
      milestoneLabel: 'Cassini'
    },
    {
      date: '2002-04-04',
      description: '',
      heading: 'First Measurements of Earth’s Shifting Water',
      id: '758f9682',
      milestoneLabel: 'GRACE'
    },
    {
      date: '2000-02-11',
      description: '',
      heading: 'First Topographic Map of Earth From Space',
      id: '7ea09b84',
      milestoneLabel: 'Shuttle Radar Topography'
    },
    {
      date: '1998-10-24',
      description: '',
      heading: 'First Ion Engine on Planetary Spacecraft',
      id: 'd57840b3',
      milestoneLabel: 'Deep Space 1'
    },
    {
      date: '1997-07-04',
      description: '',
      heading: 'First Planetary Rover',
      id: '796db599',
      milestoneLabel: 'Mars Pathfinder'
    },
    {
      date: '1995-12-08',
      description: '',
      heading: 'First Jupiter Orbiter',
      id: '88a05805',
      milestoneLabel: 'Galileo'
    },
    {
      date: '1993-05-25',
      description: '',
      heading: "First Mission to Use 'Aerobraking' and Crash Intentionally Into a Planet",
      id: '7530694f',
      milestoneLabel: 'Magellan'
    },
    {
      date: '1991-10-29',
      description: '',
      heading: 'First Asteroid Flyby',
      id: 'b8caa01d',
      milestoneLabel: 'Galileo'
    },
    {
      date: '1958-01-31',
      description: '',
      heading: "America's First Satellite",
      id: 'cbc6dc47',
      milestoneLabel: 'Explorer 1'
    },
    {
      date: '1956-09-20',
      description: '',
      heading: 'First Flight of Technology for Returning Warheads from Space',
      id: 'e0109329',
      milestoneLabel: 'Re-Entry Test Vehicle Program'
    },
    {
      date: '1943-11-20',
      description: '',
      heading: 'First Use of the Name "Jet Propulsion Laboratory"',
      id: '4a8737af'
    },
    {
      date: '1939-01-01',
      description: '',
      displayDate: 'January, 1939',
      heading: "JPL's First Project for the U.S. Army",
      id: '5be71fe7'
    },
    {
      date: '1936-10-31',
      description: '',
      heading: 'First Rocket Tests by Founders of What Would Become the Jet Propulsion Laboratory',
      id: 'e56a3c21'
    }
  ].map((m) => ({ ...m, ...milestoneImages() }))
}

// stories
export const BaseStory = {
  name: 'PageTimeline',
  args: {
    data: PageTimelineData
  }
}
