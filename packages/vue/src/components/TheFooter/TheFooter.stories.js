import TheFooter from './TheFooter.vue'

export default {
  title: 'Navigation/Footers/External Footer',
  component: TheFooter,
  excludeStories: /.*Data$/,
  parameters: {
    docs: {
      description: {
        component:
          'This component can be used for any external footer. Its styles will change based on the theme being used.'
      }
    }
  }
}

// data
export const MenuFooterPanelData = {
  titleLink: {
    linkPage: {
      title: 'Menu Item',
      url: '/missions/'
    },
    title: null
  },
  links: [
    {
      linkPage: {
        title: 'Missions',
        url: '/missions/'
      },
      title: 'All Missions',
      path: null
    },
    {
      linkPage: {
        title: 'Missions',
        url: '/missions/'
      },
      title: 'Current Missions',
      path: null
    },
    {
      linkPage: {
        title: 'Missions',
        url: '/missions/'
      },
      title: 'Past Missions',
      path: null
    },
    {
      linkPage: null,
      title: 'External Link Test',
      path: 'https://nasa.gov'
    }
  ]
}

// combined header data // desktop and mobile
export const TheFooterData = {
  footerMoreFromJpl: [
    {
      linkPage: null,
      title: 'Careers',
      path: 'https://jpl.jobs/'
    },
    {
      linkPage: null,
      title: 'Education',
      path: 'https://jpl.nasa.gov/'
    },
    {
      linkPage: null,
      title: 'Science and Technology',
      path: 'https://scienceandtechnology.jpl.nasa.gov/'
    },
    {
      linkPage: null,
      title: 'Acquisitions',
      path: 'https://jpl.nasa.gov/'
    },
    {
      linkPage: null,
      title: 'JPL Store',
      path: 'https://jpl.nasa.gov/'
    }
  ],
  footerNavigation: [
    {
      titleLink: {
        linkPage: {
          title: 'About JPL',
          url: '/about/'
        },
        title: null
      },
      links: [
        {
          linkPage: {
            title: 'Sample Page',
            url: '/slug-placeholder/'
          },
          title: 'Who We Are',
          path: null
        },
        {
          linkPage: {
            title: 'Sample Page',
            url: '/slug-placeholder/'
          },
          title: 'Executive Council',
          path: null
        },
        {
          linkPage: {
            title: 'Sample Page',
            url: '/slug-placeholder/'
          },
          title: 'Faces of Leadership',
          path: null
        },
        {
          linkPage: {
            title: 'Sample Page',
            url: '/slug-placeholder/'
          },
          title: 'History',
          path: null
        },
        {
          linkPage: {
            title: 'Sample Page',
            url: '/slug-placeholder/'
          },
          title: 'Annual Reports',
          path: null
        },
        {
          linkPage: {
            title: 'Sample Page',
            url: '/slug-placeholder/'
          },
          title: 'Contact Us',
          path: null
        },
        {
          linkPage: {
            title: 'Sample Page',
            url: '/slug-placeholder/'
          },
          title: 'Follow JPL',
          path: null
        }
      ]
    },
    {
      titleLink: {
        linkPage: {
          title: 'Missions',
          url: '/missions/'
        },
        title: null
      },
      links: [
        {
          linkPage: {
            title: 'Sample Page',
            url: '/slug-placeholder/'
          },
          title: 'Current',
          path: null
        },
        {
          linkPage: {
            title: 'Sample Page',
            url: '/slug-placeholder/'
          },
          title: 'Past',
          path: null
        },
        {
          linkPage: {
            title: 'Sample Page',
            url: '/slug-placeholder/'
          },
          title: 'Future',
          path: null
        },
        {
          linkPage: {
            title: 'Sample Page',
            url: '/slug-placeholder/'
          },
          title: 'Proposed',
          path: null
        },
        {
          linkPage: {
            title: 'Sample Page',
            url: '/slug-placeholder/'
          },
          title: 'All',
          path: null
        }
      ]
    },
    {
      titleLink: {
        linkPage: {
          title: 'News',
          url: '/news/'
        },
        title: null
      },
      links: [
        {
          linkPage: {
            title: 'Sample Page',
            url: '/slug-placeholder/'
          },
          title: 'All News',
          path: null
        },
        {
          linkPage: {
            title: 'Sample Page',
            url: '/slug-placeholder/'
          },
          title: 'Press Kits',
          path: null
        },
        {
          linkPage: {
            title: 'Sample Page',
            url: '/slug-placeholder/'
          },
          title: 'Fact Sheets',
          path: null
        },
        {
          linkPage: {
            title: 'Sample Page',
            url: '/slug-placeholder/'
          },
          title: 'Media Information',
          path: null
        },
        {
          linkPage: {
            title: 'Sample Page',
            url: '/slug-placeholder/'
          },
          title: 'JPL Newsletter',
          path: null
        },
        {
          linkPage: {
            title: 'Sample Page',
            url: '/slug-placeholder/'
          },
          title: 'Universe Newspaper',
          path: null
        }
      ]
    },
    {
      titleLink: {
        linkPage: {
          title: 'Engage',
          url: '/engage/'
        },
        title: null
      },
      links: [
        {
          linkPage: {
            title: 'Sample Page',
            url: '/slug-placeholder/'
          },
          title: 'Events',
          path: null
        },
        {
          linkPage: {
            title: 'Sample Page',
            url: '/slug-placeholder/'
          },
          title: 'Tours',
          path: null
        },
        {
          linkPage: {
            title: 'Sample Page',
            url: '/slug-placeholder/'
          },
          title: 'Virtual Tour',
          path: null
        },
        {
          linkPage: {
            title: 'Sample Page',
            url: '/slug-placeholder/'
          },
          title: 'Lecture Series',
          path: null
        },
        {
          linkPage: {
            title: 'Sample Page',
            url: '/slug-placeholder/'
          },
          title: 'Speakers Bureau',
          path: null
        },
        {
          linkPage: {
            title: 'Sample Page',
            url: '/slug-placeholder/'
          },
          title: 'Team Competitions',
          path: null
        },
        {
          linkPage: {
            title: 'Sample Page',
            url: '/slug-placeholder/'
          },
          title: 'Special Events',
          path: null
        },
        {
          linkPage: {
            title: 'Sample Page',
            url: '/slug-placeholder/'
          },
          title: 'Individuals with Disabilities',
          path: null
        }
      ]
    },
    {
      titleLink: {
        linkPage: {
          title: 'Galleries',
          url: '/galleries/'
        },
        title: null
      },
      links: [
        {
          linkPage: {
            title: 'Sample Page',
            url: '/slug-placeholder/'
          },
          title: 'Images',
          path: null
        },
        {
          linkPage: {
            title: 'Sample Page',
            url: '/slug-placeholder/'
          },
          title: 'Video',
          path: null
        },
        {
          linkPage: {
            title: 'Sample Page',
            url: '/slug-placeholder/'
          },
          title: 'Infographics',
          path: null
        },
        {
          linkPage: {
            title: 'Sample Page',
            url: '/slug-placeholder/'
          },
          title: 'Travel Posters',
          path: null
        },
        {
          linkPage: {
            title: 'Sample Page',
            url: '/slug-placeholder/'
          },
          title: 'Podcasts',
          path: null
        }
      ]
    },
    {
      titleLink: {
        linkPage: {
          title: 'Robotics',
          url: '/robotics/'
        },
        title: null
      },
      links: [
        {
          linkPage: {
            title: 'Sample Page',
            url: '/slug-placeholder/'
          },
          title: 'Current',
          path: null
        },
        {
          linkPage: {
            title: 'Sample Page',
            url: '/slug-placeholder/'
          },
          title: 'Past',
          path: null
        },
        {
          linkPage: {
            title: 'Sample Page',
            url: '/slug-placeholder/'
          },
          title: 'Future',
          path: null
        },
        {
          linkPage: {
            title: 'Sample Page',
            url: '/slug-placeholder/'
          },
          title: 'Proposed',
          path: null
        },
        {
          linkPage: {
            title: 'Sample Page',
            url: '/slug-placeholder/'
          },
          title: 'All',
          path: null
        }
      ]
    },
    {
      titleLink: {
        linkPage: {
          title: 'Asteroid Watch',
          url: '/asteroid-watch/'
        },
        title: null
      },
      links: [
        {
          linkPage: {
            title: 'Sample Page',
            url: '/slug-placeholder/'
          },
          title: 'Overview',
          path: null
        },
        {
          linkPage: {
            title: 'Sample Page',
            url: '/slug-placeholder/'
          },
          title: 'Asteroid Fast Facts',
          path: null
        },
        {
          linkPage: {
            title: 'Sample Page',
            url: '/slug-placeholder/'
          },
          title: "Yeoman's Top 10",
          path: null
        },
        {
          linkPage: {
            title: 'Sample Page',
            url: '/slug-placeholder/'
          },
          title: 'Meteor Shower Viewing Guide',
          path: null
        },
        {
          linkPage: {
            title: 'Sample Page',
            url: '/slug-placeholder/'
          },
          title: 'Glossary of Space Rocks',
          path: null
        }
      ]
    }
  ],
  footerLinks: [
    {
      linkPage: null,
      title: 'NASA',
      path: 'https://www.nasa.gov'
    },
    {
      linkPage: null,
      title: 'Caltech',
      path: 'https://www.caltech.edu'
    },
    {
      linkPage: {
        title: 'Privacy',
        url: '/slug-placeholder/'
      },
      title: null,
      path: null
    },
    {
      linkPage: {
        title: 'Image Policy',
        url: '/slug-placeholder/'
      },
      title: null,
      path: null
    },
    {
      linkPage: {
        title: 'FAQ',
        url: '/slug-placeholder/'
      },
      title: null,
      path: null
    },
    {
      linkPage: {
        title: 'Feedback',
        url: '/slug-placeholder/'
      },
      title: null,
      path: null
    }
  ],

  relatedNasaSites: [
    {
      title: 'Basics of Spaceflight',
      path: 'https://jpl.nasa.gov'
    },
    {
      title: 'Climate Kids',
      path: 'https://jpl.nasa.gov'
    },
    {
      title: 'Earth/Global Climate Change',
      path: 'https://jpl.nasa.gov'
    },
    {
      title: 'Exoplanet Exploration',
      path: 'https://jpl.nasa.gov'
    },
    {
      title: 'Juno - Mission to Jupiter',
      path: 'https://jpl.nasa.gov'
    },
    {
      title: 'Mars Exploration',
      path: 'https://jpl.nasa.gov'
    },
    {
      title: "NASA's Eyes",
      path: 'https://jpl.nasa.gov'
    },
    {
      title: 'Solar System Exploration',
      path: 'https://jpl.nasa.gov'
    },
    {
      title: 'Space Place',
      path: 'https://jpl.nasa.gov'
    },
    {
      title: 'Spitzer Space Telescope',
      path: 'https://jpl.nasa.gov'
    },
    {
      title: 'Voyager Interstellar Moon',
      path: 'https://jpl.nasa.gov'
    },
    {
      title: 'NASA Water Cleanup',
      path: 'https://jpl.nasa.gov'
    }
  ],
  footerMeta: [
    {
      label: 'Site Managers',
      text: 'Veronica McGregor'
    },
    {
      label: 'Site Editors',
      text: 'Tony Greicius, Randal Jackson, Naomi Hartono'
    }
  ]
}

export const BaseStory = {
  args: {
    data: TheFooterData,
    commitSha: 'commit no.'
  }
}
