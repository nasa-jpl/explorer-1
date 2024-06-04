import { TheFooterData, MenuFooterPanelData } from '../TheFooter/TheFooter.stories'
import NavMobile from './NavMobile.vue'
import NavMobileDropdown from './NavMobileDropdown.vue'
import NavMobileLink from './NavMobileLink.vue'

export default {
  title: 'WWW/Header & Footer/Elements/NavMobile',
  components: {
    NavMobile
  },
  excludeStories: /.*Data$/,
  parameters: {
    viewMode: 'canvas',
    viewport: {
      defaultViewport: 'mobile2'
    }
  }
}

// data
export const NavMobileData = {
  mobileBreadcrumb:
    '{"/": [{"path": "http://www.jpl.nasa.gov/", "title": "Asteroid watch"}, {"path": "http://www.jpl.nasa.gov/", "title": "Asteroid fast facts"}, {"path": "http://www.jpl.nasa.gov/", "title": "Meteor shower viewing guide"}, {"path": "http://www.jpl.nasa.gov/", "title": "Yeoman\'s top 10"}, {"path": "http://www.jpl.nasa.gov/", "title": "Glossary of space rocks"}, {"path": "/robotics-at-jpl/", "title": "Robotics"}, {"path": "http://www.jpl.nasa.gov/", "title": "Apps"}, {"path": "/jpl-life/", "title": "JPL Life"}, {"path": "/stars-and-galaxies/", "title": "Stars and Galaxies"}, {"path": "/exoplanets/", "title": "Exoplanets"}, {"path": "/solar-system/", "title": "Solar System"}, {"path": "/asteroids/", "title": "Asteroids"}, {"path": "/comets/", "title": "Comets"}, {"path": "/technology/", "title": "Technology"}, {"path": "/mars/", "title": "Mars"}, {"path": "/earth/", "title": "Earth"}, {"path": "/climate-change/", "title": "Climate Change"}, {"path": "/earthquakes/", "title": "Earthquakes"}, {"path": "/weather/", "title": "Weather"}, {"path": "/robotics/", "title": "Robotics"}], "/missions/": [{"path": "/missions/", "title": "Current"}, {"path": "/missions/", "title": "Past"}, {"path": "/missions/", "title": "Future"}, {"path": "/missions/", "title": "Proposed"}, {"path": "/missions/", "title": "All"}], "/news/": [{"path": "/news/", "title": "All news"}, {"path": "/news/", "title": "Press kits"}, {"path": "/news/", "title": "Fact sheets"}, {"path": "/news/", "title": "Media Information"}, {"path": "/news/", "title": "JPL newsletter"}]}',
  footerNavigation: TheFooterData.footerNavigation,
  footerMoreFromJpl: TheFooterData.footerMoreFromJpl
}

const NavMobileSecondaryNavData = [
  { path: '/custom', title: 'Secondary Nav' },
  {
    path: '/custom/placeholder-1',
    title: 'First subpage'
  },
  {
    path: '/custom/placeholder-2',
    title: 'Second subpage'
  },
  {
    path: '/custom/placeholder-3',
    title: 'Third subpage'
  },
  {
    path: '/custom/placeholder-4',
    title: 'Fourth subpage'
  }
]

const NavMobileTertiaryNavData = [
  { path: '/go/test-site', title: 'Test Go Site', children: [] },
  {
    path: '/go/test-site/has-children',
    title: 'Has Children',
    children: [
      {
        path: '/go/test-site/has-children/level-3-no-children',
        title: 'Lvl 3 No Children',
        children: []
      },
      {
        path: '/go/test-site/has-children/level-3-has-children',
        title: 'Lvl 3 Has Children',
        children: [
          {
            path: '/go/test-site/has-children/level-3-has-children/level-4-no-children-1',
            title: 'Lvl 4 No Children 1',
            children: []
          },
          {
            path: '/go/test-site/has-children/level-3-has-children/level-4-no-children-2',
            title: 'Lvl 4 No Children 2',
            children: []
          }
        ]
      },
      {
        path: '/go/test-site/has-children/level-3-no-children',
        title: 'Lvl 3 No Children',
        children: []
      }
    ]
  },
  { path: '/go/test-site/no-children-1', title: 'No Children 1', children: [] },
  { path: '/go/test-site/no-children-2', title: 'No Children 2', children: [] },
  {
    path: '/go/test-site/has-children',
    title: 'Has Children',
    children: [
      {
        path: '/go/test-site/has-children/level-3-no-children',
        title: 'Lvl 3 No Children',
        children: []
      },
      {
        path: '/go/test-site/has-children/level-3-has-children',
        title: 'Lvl 3 Has Children',
        children: [
          {
            path: '/go/test-site/has-children/level-3-has-children/level-4-no-children-1',
            title: 'Lvl 4 No Children 1',
            children: []
          },
          {
            path: '/go/test-site/has-children/level-3-has-children/level-4-no-children-2',
            title: 'Lvl 4 No Children 2',
            children: []
          }
        ]
      },
      {
        path: '/go/test-site/has-children/level-3-no-children',
        title: 'Lvl 3 No Children',
        children: []
      }
    ]
  }
]
// templates
const NavMobileTemplate = (args) => ({
  props: Object.keys(args),
  components: { NavMobile },
  template: `<NavMobile
    :data="data"
    :header-visible="headerVisible"
    :scrolled-up="scrolledUp"
    :scroll-top="scrollTop"
  />`
})

const NavMobileWithSecondaryNavTemplate = (args) => ({
  props: Object.keys(args),
  components: { NavMobile },
  template: `<NavMobile
    :data="data"
    :header-visible="headerVisible"
    :scrolled-up="scrolledUp"
    :scroll-top="scrollTop"
    :static-secondary-data="staticSecondaryData"
  />`
})

const NavMobileDropdownTemplate = (args) => ({
  props: Object.keys(args),
  components: { NavMobileDropdown },
  template: `<NavMobileDropdown
    :data="data"
  />`
})

const NavMobileDropdownActiveTemplate = (args) => ({
  props: Object.keys(args),
  components: { NavMobileDropdown },
  template: `<NavMobileDropdown
    :data="data"
    class="-active"
  />`
})

const NavMobileLinkTemplate = (args) => ({
  props: Object.keys(args),
  components: { NavMobileLink },
  template: `<NavMobileLink
  :data="data"
/>`
})

export const Nav = NavMobileTemplate.bind({})
Nav.args = {
  data: NavMobileData,
  headerVisible: true,
  scrolledUp: false,
  scrollTop: 0
}

export const WithSecondaryNav = NavMobileWithSecondaryNavTemplate.bind({})
WithSecondaryNav.args = {
  data: NavMobileData,
  headerVisible: true,
  scrolledUp: false,
  scrollTop: 0,
  staticSecondaryData: NavMobileSecondaryNavData
}

export const WithTertiaryNav = NavMobileWithSecondaryNavTemplate.bind({})
WithTertiaryNav.args = {
  data: NavMobileData,
  headerVisible: true,
  scrolledUp: false,
  scrollTop: 0,
  staticSecondaryData: NavMobileTertiaryNavData
}

export const Dropdown = NavMobileDropdownTemplate.bind({})
Dropdown.args = {
  data: MenuFooterPanelData
}

export const DropdownActive = NavMobileDropdownActiveTemplate.bind({})
DropdownActive.args = {
  data: MenuFooterPanelData
}

export const DropdownSecondary = NavMobileDropdownTemplate.bind({})
DropdownSecondary.args = {
  data: NavMobileSecondaryNavData
}

export const Link = NavMobileLinkTemplate.bind({})
Link.args = {
  data: MenuFooterPanelData.links[0]
}
