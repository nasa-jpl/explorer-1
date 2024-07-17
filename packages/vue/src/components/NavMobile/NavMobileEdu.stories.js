import { TheFooterData } from './../TheFooter/TheFooter.stories'
import NavMobile from './NavMobile.vue'

export default {
  title: 'Navigation/Headers/EDU/NavMobile',
  component: NavMobile,
  excludeStories: /.*Data$/,
  parameters: {
    viewMode: 'canvas',
    viewport: {
      defaultViewport: 'mobile2'
    },
    docs: {
      description: {
        component: 'Doesn\'t look like EDU? Be sure to select "EDU Theme" in the toolbar dropdown.'
      }
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

export const BaseStory = {
  name: 'NavMobile',
  args: {
    data: NavMobileData,
    headerVisible: true,
    scrolledUp: false,
    scrollTop: 0
  },
  render: (args) => ({
    components: { NavMobile },
    setup() {
      return { args }
    },
    template: `<NavMobile
      v-bind="args"
    />`
  })
}

export const WithSecondaryNav = {
  args: {
    data: NavMobileData,
    headerVisible: true,
    scrolledUp: false,
    scrollTop: 0,
    staticSecondaryData: NavMobileSecondaryNavData
  },
  render: (args) => ({
    components: { NavMobile },
    setup() {
      return { args }
    },
    template: `<NavMobile
      v-bind="args"
    />`
  })
}

export const WithTertiaryNav = {
  args: {
    data: NavMobileData,
    headerVisible: true,
    scrolledUp: false,
    scrollTop: 0,
    staticSecondaryData: NavMobileTertiaryNavData
  },
  render: (args) => ({
    components: { NavMobile },
    setup() {
      return { args }
    },
    template: `<NavMobile
      v-bind="args"
    />`
  })
}
