import { MenuHighlightColumnData } from './../NavHighlight/NavHighlight.stories'
import { MenuLinkColumnWithHeaderData } from './../NavLinkList/NavLinkList.stories'
import NavDesktop from './NavDesktop.vue'
import NavDesktopTopHat from './NavDesktopTopHat.vue'
import NavDesktopDropdown from './NavDesktopDropdown.vue'
import NavDesktopDropdownContent from './NavDesktopDropdownContent.vue'
import NavDesktopDropdownMore from './NavDesktopDropdownMore.vue'

export default {
  title: 'Navigation/Headers/WWW/NavDesktop',
  component: NavDesktop,
  excludeStories: /.*Data$/,
  parameters: {
    viewMode: 'canvas'
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
    },
    NavDesktopDropdownMoreData
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

export const NavInverted = {
  args: {
    data: NavDesktopData,
    headerVisible: true,
    scrolledUp: false,
    scrollTop: 0,
    invertOverride: true
  },
  render: (args) => ({
    components: { NavDesktop },
    setup() {
      return { args }
    },
    template: `<div class="absolute inset-0">
  <div style="height:2500px" class="nav-offset bg-jpl-blue-darker">
    <NavDesktop v-bind="args" />
    <div v-if="invertOverride" class="-nav-offset max-w-screen-3xl mx-auto">
      <img class="w-full h-auto block" src="https://picsum.photos/1600/900" alt="Example Hero" />
    </div>
  </div>
</div>`
  })
}

export const TopHat = {
  args: { data: NavDesktopData.topHat },
  render: (args) => ({
    components: { NavDesktopTopHat },
    setup() {
      return { args }
    },
    template: `<NavDesktopTopHat v-bind="args" />`
  })
}

export const Dropdown = {
  args: { data: NavDesktopDropdownContentData },
  render: (args) => ({
    components: { NavDesktopDropdown, NavDesktopDropdownContent },
    setup() {
      return { args }
    },
    template: `<div class="relative"><NavDesktopDropdown><template #dropdownLabel>Label Text</template><NavDesktopDropdownContent v-bind="args" /></NavDesktopDropdown></div>`
  })
}

export const DropdownContent = {
  args: { data: NavDesktopDropdownContentData },
  render: (args) => ({
    components: { NavDesktopDropdownContent },
    setup() {
      return { args }
    },
    template: `<NavDesktopDropdownContent v-bind="args" />`
  })
}

export const DropdownMore = {
  args: { data: NavDesktopDropdownMoreData },
  render: (args) => ({
    components: { NavDesktopDropdownMore },
    setup() {
      return { args }
    },
    template: `<NavDesktopDropdownMore v-bind="args" />`
  })
}
