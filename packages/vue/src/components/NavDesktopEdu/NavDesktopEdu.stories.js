import { MenuHighlightColumnData } from './../NavHighlight/NavHighlight.stories'
import { MenuLinkColumnWithHeaderData } from './../NavLinkList/NavLinkList.stories'
import NavDesktop from './NavDesktopEdu.vue'
import NavDesktopTopHat from './../NavDesktop/NavDesktopTopHat.vue'
import NavDesktopDropdown from './../NavDesktop/NavDesktopDropdown.vue'
import NavDesktopDropdownContent from './../NavDesktop/NavDesktopDropdownContent.vue'
import NavDesktopDropdownMore from './../NavDesktop/NavDesktopDropdownMore.vue'

export default {
  title: 'Navigation/Headers/EDU/NavDesktopEdu',
  component: NavDesktop,
  tags: ['!autodocs'],
  excludeStories: /.*Data$/,
  parameters: {
    viewMode: 'canvas',
    layout: 'fullscreen'
  }
}

export const NavDesktopTopHatData = {
  topHat: [
    {
      linkPage: {
        title: 'Home',
        url: '/'
      },
      title: 'JPL',
      path: null
    },
    {
      linkPage: null,
      title: 'Career',
      path: 'https://jpl.jobs/'
    },
    {
      linkPage: null,
      title: 'Science and Technology',
      path: 'https://scienceandtechnology.jpl.nasa.gov/'
    }
  ]
}

// combined dropdown data
export const NavDesktopDropdownContentData = {
  blockType: 'MenuPanel',
  titleLink: {
    linkPage: {
      title: 'About',
      url: '/about/'
    },
    title: null
  },
  menuColumns: [
    MenuHighlightColumnData,
    {
      blockType: 'MenuDescriptionColumn',
      description: 'Lorem ipsum dolor sit amet.',
      title: 'About'
    },
    {
      ...MenuLinkColumnWithHeaderData,
      heading: null,
      headingPage: null
    },
    {
      ...MenuLinkColumnWithHeaderData,
      heading: null,
      headingPage: null
    }
  ]
}
// combined dropdown data for "more" menu
export const NavDesktopDropdownMoreData = {
  blockType: 'MenuMorePanel',
  titleText: 'More',
  strapline:
    'JPL is a unique research facility that carries out robotic space and Earth science missions.',
  menuColumns: [
    {
      blockType: 'MenuDescriptionColumn',
      description: 'Lorem ipsum dolor sit amet.',
      title: 'About'
    },
    {
      ...MenuLinkColumnWithHeaderData,
      heading: 'More from JPL',
      headingPage: null
    },
    {
      ...MenuLinkColumnWithHeaderData,
      heading: 'Explore Topics',
      headingPage: null
    },
    {
      blockType: 'MenuMoreHighlightsColumn',
      heading: 'Discover',
      headingPage: null,
      highlights: [MenuHighlightColumnData, MenuHighlightColumnData]
    }
  ]
}

// combined header data // desktop and mobile

export const NavDesktopData = {
  breadcrumb:
    '{"/": [{"path": "http://www.jpl.nasa.gov/", "title": "Asteroid watch"}, {"path": "http://www.jpl.nasa.gov/", "title": "Asteroid fast facts"}, {"path": "http://www.jpl.nasa.gov/", "title": "Meteor shower viewing guide"}, {"path": "http://www.jpl.nasa.gov/", "title": "Yeoman\'s top 10"}, {"path": "http://www.jpl.nasa.gov/", "title": "Glossary of space rocks"}, {"path": "/robotics-at-jpl/", "title": "Robotics"}, {"path": "http://www.jpl.nasa.gov/", "title": "Apps"}, {"path": "/jpl-life/", "title": "JPL Life"}, {"path": "/stars-and-galaxies/", "title": "Stars and Galaxies"}, {"path": "/exoplanets/", "title": "Exoplanets"}, {"path": "/solar-system/", "title": "Solar System"}, {"path": "/asteroids/", "title": "Asteroids"}, {"path": "/comets/", "title": "Comets"}, {"path": "/technology/", "title": "Technology"}, {"path": "/mars/", "title": "Mars"}, {"path": "/earth/", "title": "Earth"}, {"path": "/climate-change/", "title": "Climate Change"}, {"path": "/earthquakes/", "title": "Earthquakes"}, {"path": "/weather/", "title": "Weather"}, {"path": "/robotics/", "title": "Robotics"}], "/missions/": [{"path": "/missions/", "title": "Current"}, {"path": "/missions/", "title": "Past"}, {"path": "/missions/", "title": "Future"}, {"path": "/missions/", "title": "Proposed"}, {"path": "/missions/", "title": "All"}], "/news/": [{"path": "/news/", "title": "All news"}, {"path": "/news/", "title": "Press kits"}, {"path": "/news/", "title": "Fact sheets"}, {"path": "/news/", "title": "Media Information"}, {"path": "/news/", "title": "JPL newsletter"}]}',
  ...NavDesktopTopHatData,
  primaryNavigation: [
    NavDesktopDropdownContentData,
    {
      ...NavDesktopDropdownContentData,
      titleLink: {
        linkPage: {
          title: 'Missions',
          url: '/missions/'
        },
        title: null
      },
      menuColumns: [
        MenuHighlightColumnData,
        {
          blockType: 'MenuDescriptionColumn',
          description: 'Lorem ipsum dolor sit amet.',
          title: 'Missions'
        },
        {
          ...MenuLinkColumnWithHeaderData,
          heading: null,
          headingPage: null
        },
        {
          ...MenuLinkColumnWithHeaderData,
          heading: null,
          headingPage: null
        }
      ]
    },
    {
      ...NavDesktopDropdownContentData,
      titleLink: {
        linkPage: {
          title: 'News',
          url: '/news/'
        },
        title: null
      }
    },
    {
      ...NavDesktopDropdownContentData,
      titleLink: {
        linkPage: {
          title: 'Galleries',
          url: '/galleries/'
        },
        title: null
      }
    },
    {
      ...NavDesktopDropdownContentData,
      titleLink: {
        linkPage: {
          title: 'Engage',
          url: '/engage/'
        },
        title: null
      }
    }
  ]
}

export const BaseStory = {
  name: 'NavDesktop',
  args: {
    data: NavDesktopData,
    headerVisible: true,
    scrolledUp: false,
    scrollTop: 0,
    invertOverride: false
  },
  render: (args) => ({
    components: { NavDesktop },
    setup() {
      return { args }
    },
    template: `<NavDesktop v-bind="args" />`
  })
}
