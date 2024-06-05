import { MenuHighlightColumnData } from './NavHighlight.stories'
import { MenuLinkColumnWithHeaderData } from './NavLinkList.stories'
import NavDesktop from '@explorer-1/vue/src/components/NavDesktop/NavDesktop.vue'
import NavDesktopTopHat from '@explorer-1/vue/src/components/NavDesktop/NavDesktopTopHat.vue'
import NavDesktopDropdown from '@explorer-1/vue/src/components/NavDesktop/NavDesktopDropdown.vue'
import NavDesktopDropdownContent from '@explorer-1/vue/src/components/NavDesktop/NavDesktopDropdownContent.vue'
import NavDesktopDropdownMore from '@explorer-1/vue/src/components/NavDesktop/NavDesktopDropdownMore.vue'

export default {
  title: 'WWW/Header & Footer/Elements/NavDesktop',
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

// templates
const NavDesktopTemplate = (args) => ({
  props: Object.keys(args),
  components: { NavDesktop },
  template: `
  <div class="absolute inset-0">
    <NavDesktop
      :data="data"
      :invert-override="invertOverride"
      :header-visible="headerVisible"
      :scrolled-up="scrolledUp"
      :scroll-top="scrollTop"
    />
  </div>`
})
const NavDesktopInvertedTemplate = (args) => ({
  props: Object.keys(args),
  components: { NavDesktop },
  template: `
  <div class="absolute inset-0">
    <div style="height:2500px" class="nav-offset">
      <NavDesktop
        :data="data"
        :invert-override="invertOverride"
        :header-visible="headerVisible"
        :scrolled-up="scrolledUp"
        :scroll-top="scrollTop"
      />
      <div v-if="invertOverride" class="-nav-offset max-w-screen-3xl mx-auto">
        <img class="w-full h-auto block" src="https://source.unsplash.com/rTZW4f02zY8/1600x900" alt="Example Hero" />
      </div>
    </div>
  </div>`
})

const NavDesktopTopHatTemplate = (args) => ({
  props: Object.keys(args),
  components: { NavDesktopTopHat },
  template: `<NavDesktopTopHat :data="data" />`
})

const NavDesktopDropdownTemplate = (args) => ({
  props: Object.keys(args),
  components: { NavDesktopDropdown, NavDesktopDropdownContent },
  template: `<div class="relative"><NavDesktopDropdown><template #dropdownLabel>Label Text</template><NavDesktopDropdownContent :data="data" /></NavDesktopDropdown></div>`
})

const NavDesktopDropdownContentTemplate = (args) => ({
  props: Object.keys(args),
  components: { NavDesktopDropdownContent },
  template: `<NavDesktopDropdownContent :data="data" />`
})

const NavDesktopDropdownMoreTemplate = (args) => ({
  props: Object.keys(args),
  components: { NavDesktopDropdownMore },
  template: `<NavDesktopDropdownMore :data="data" />`
})

export const Nav = NavDesktopTemplate.bind({})
Nav.args = {
  data: NavDesktopData,
  headerVisible: true,
  scrolledUp: false,
  scrollTop: 0,
  invertOverride: false
}
export const NavInverted = NavDesktopInvertedTemplate.bind({})
NavInverted.args = {
  data: NavDesktopData,
  headerVisible: true,
  scrolledUp: false,
  scrollTop: 0,
  invertOverride: true
}

export const TopHat = NavDesktopTopHatTemplate.bind({})
TopHat.args = { data: NavDesktopData.topHat }

export const Dropdown = NavDesktopDropdownTemplate.bind({})
Dropdown.args = { data: NavDesktopDropdownContentData }

export const DropdownContent = NavDesktopDropdownContentTemplate.bind({})
DropdownContent.args = { data: NavDesktopDropdownContentData }

export const DropdownMore = NavDesktopDropdownMoreTemplate.bind({})
DropdownMore.args = { data: NavDesktopDropdownMoreData }
