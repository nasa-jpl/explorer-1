// the base component should really be a single vue component with a "type" prop where the user can select between card and list, but this works well enough for a demo atm.

import BlockLinkCard from './BlockLinkCard.vue'

export default {
  title: 'Components/Cards/BlockLinkCard',
  component: BlockLinkCard,
  tags: ['!autodocs'],
  excludeStories: /.*Data$/,
  argTypes: {
    size: {
      control: {
        type: 'select'
      },
      options: ['sm', 'md', 'lg']
    },
    headingLevel: {
      description:
        'Change the heading level for semantic markup. This does not affect the style of the heading.',
      control: {
        type: 'select',
        options: [null, 'h1', 'h2', 'h3', 'h4', 'h5']
      }
    }
  },
  parameters: {
    html: {
      root: '#storyRoot' // to omit decorators from html output
    }
  }
}

// shared data
export const BlockLinkCardData = {
  data: {
    url: '/news/placeholder-slug-1',
    title: 'How engineers at NASA-JPL persevered to develop a ventilator',
    slug: 'placeholder-slug-1',
    label: 'Solar System',
    thumbnailImage: {
      src: {
        url: 'https://picsum.photos/512/288',
        width: 512,
        height: 288
      },
      alt: 'Alt text'
    }
  },
  headingLevel: 'h2'
}

export const BaseStory = {
  name: 'Single Item',
  decorators: [
    () => ({
      template: `<div id="storyRoot" class="relative grid grid-cols-2 gap-3"><story/></div>`
    })
  ],
  args: {
    ...BlockLinkCardData
  }
}

export const SingleItemCompactStyles = {
  decorators: [
    () => ({
      template: `<div id="storyRoot" class="relative grid grid-cols-2 gap-3"><story/></div>`
    })
  ],
  args: {
    ...BlockLinkCardData,
    headingLevel: 'h2',
    size: 'sm'
  }
}
export const Compact = {
  decorators: [
    () => ({
      template: `<div id="storyRoot" class="relative grid grid-cols-2 gap-3"><story/></div>`
    })
  ],
  name: 'Compact w/ Custom Props',
  parameters: {
    docs: {
      description: {
        story: "View this story's canvas and controls to see its usage of custom props."
      }
    }
  },
  args: {
    title: 'Lorem ipsum news title in search results',
    url: '/news/demo',
    externalLink: '',
    label: 'News',
    date: 'Sep. 23, 2010',
    thumbnailImage: {
      src: {
        url: 'https://picsum.photos/512/288',
        width: 512,
        height: 288
      },
      alt: 'Alt text'
    },
    headingLevel: 'h2',
    size: 'sm'
  }
}
export const EventItem = {
  decorators: [
    () => ({
      template: `<div id="storyRoot" class="relative grid grid-cols-2 gap-3"><story/></div>`
    })
  ],
  args: {
    ...BlockLinkCardData,
    data: {
      page: {
        ...BlockLinkCardData.data,
        __typename: 'EDUEventPage',
        startDate: '2021-11-11',
        startDatetime: '2021-11-11T00:00:00-08:00',
        endDatetime: '2021-11-11T23:59:59.999999-08:00',
        endDate: '2021-11-11',
        ongoing: false,
        eventType: 'Workshop'
      }
    }
  }
}
export const EventItemWithChip = {
  decorators: [
    () => ({
      template: `<div id="storyRoot" class="relative grid grid-cols-2 gap-3"><story/></div>`
    })
  ],
  args: {
    ...BlockLinkCardData,
    showCalendarChip: true,
    data: {
      page: {
        ...BlockLinkCardData.data,
        __typename: 'EDUEventPage',
        startDate: '2021-11-11',
        startDatetime: '2021-11-11T00:00:00-08:00',
        endDatetime: '2021-11-11T23:59:59.999999-08:00',
        endDate: '2021-11-11',
        ongoing: false,
        eventType: 'Workshop'
      }
    }
  }
}
export const EventWithDateNoTime = {
  decorators: [
    () => ({
      template: `<div id="storyRoot" class="relative grid grid-cols-2 gap-3"><story/></div>`
    })
  ],
  args: {
    ...BlockLinkCardData,
    showCalendarChip: true,

    data: {
      page: {
        ...BlockLinkCardData.data,
        __typename: 'EDUEventPage',
        startDate: '2021-11-11',
        startDatetime: null,
        endDatetime: null,
        endDate: '2021-11-12',
        ongoing: false,
        eventType: 'Workshop'
      }
    },

    startDate: 1760598000000,
    endDate: 1761894000000,
    startDatetime: "2025-10-11T00:00:00-08:00'"
  }
}
export const EduLesson = {
  decorators: [
    () => ({
      template: `<div id="storyRoot" class="relative grid grid-cols-2 gap-3"><story/></div>`
    })
  ],
  globals: { theme: 'ThemeEdu' },
  args: {
    ...BlockLinkCardData,
    size: 'sm',
    data: {
      page: {
        __typename: 'EDULessonPage',
        ...BlockLinkCardData.data,
        primarySubject: {
          subject: 'Math'
        },
        gradeLevels: [
          { gradeLevel: 'K' },
          { gradeLevel: '1' },
          { gradeLevel: '2' },
          { gradeLevel: '8' }
        ],
        time: {
          time: '1-2 hrs'
        }
      }
    }
  }
}
export const EduExplainerArticle = {
  decorators: [
    () => ({
      template: `<div id="storyRoot" class="relative grid grid-cols-2 gap-3"><story/></div>`
    })
  ],
  globals: { theme: 'ThemeEdu' },
  args: {
    ...BlockLinkCardData,
    data: {
      page: {
        __typename: 'EDUExplainerArticlePage',
        ...BlockLinkCardData.data,
        primarySubject: {
          subject: 'Engineering'
        },
        gradeLevels: [
          { gradeLevel: 'All Ages' },
          { gradeLevel: 'K' },
          { gradeLevel: '1' },
          { gradeLevel: '2' },
          { gradeLevel: '5' },
          { gradeLevel: '6' },
          { gradeLevel: '7' },
          { gradeLevel: '8' }
        ]
      }
    }
  }
}
export const LargeEduExplainerArticle = {
  globals: { theme: 'ThemeEdu' },
  args: {
    ...BlockLinkCardData,
    size: 'lg',
    data: {
      page: {
        __typename: 'EDUExplainerArticlePage',
        ...BlockLinkCardData.data,
        primarySubject: {
          subject: 'Engineering'
        },
        gradeLevels: [
          { gradeLevel: 'All Ages' },
          { gradeLevel: 'K' },
          { gradeLevel: '1' },
          { gradeLevel: '2' },
          { gradeLevel: '5' },
          { gradeLevel: '6' },
          { gradeLevel: '7' },
          { gradeLevel: '8' }
        ]
      }
    }
  }
}

export const EduCollection = {
  globals: { theme: 'ThemeEdu' },
  decorators: [
    () => ({
      template: `<div id="storyRoot" class="relative grid grid-cols-2 gap-3"><story/></div>`
    })
  ],
  args: {
    ...BlockLinkCardData,
    size: 'sm',
    useFeaturedStyles: true,
    data: {
      page: {
        __typename: 'EDUCollectionsDetailPage',
        ...BlockLinkCardData.data,
        summary:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mattis auctor magna. Quisque molestie ex metus, et aliquet nunc porttitor nec. Donec imperdiet quam dolor, ut iaculis justo ornare non. Proin finibus nulla ut lorem molestie sagittis quis ut nulla. Sed sit amet dui consectetur, aliquam tortor nec, pulvinar libero.',
        primarySubject: {
          subject: 'Engineering'
        },
        gradeLevels: [
          { gradeLevel: 'All Ages' },
          { gradeLevel: 'K' },
          { gradeLevel: '1' },
          { gradeLevel: '2' },
          { gradeLevel: '5' },
          { gradeLevel: '6' },
          { gradeLevel: '7' },
          { gradeLevel: '8' }
        ],
        time: {
          time: '1-2 hrs'
        }
      }
    }
  }
}
export const EduCollectionLarge = {
  globals: { theme: 'ThemeEdu' },
  args: {
    ...BlockLinkCardData,
    size: 'lg',
    useFeaturedStyles: true,
    data: {
      page: {
        __typename: 'EDUCollectionsDetailPage',
        ...BlockLinkCardData.data,
        summary:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mattis auctor magna. Quisque molestie ex metus, et aliquet nunc porttitor nec. Donec imperdiet quam dolor, ut iaculis justo ornare non. Proin finibus nulla ut lorem molestie sagittis quis ut nulla. Sed sit amet dui consectetur, aliquam tortor nec, pulvinar libero.',
        primarySubject: {
          subject: 'Engineering'
        },
        gradeLevels: [
          { gradeLevel: 'All Ages' },
          { gradeLevel: 'K' },
          { gradeLevel: '1' },
          { gradeLevel: '2' },
          { gradeLevel: '5' },
          { gradeLevel: '6' },
          { gradeLevel: '7' },
          { gradeLevel: '8' }
        ],
        time: {
          time: '1-2 hrs'
        }
      }
    }
  }
}

export const EduNewsItem = {
  globals: { theme: 'ThemeEdu' },
  decorators: [
    () => ({
      template: `<div id="storyRoot" class="relative grid grid-cols-2 gap-3"><story/></div>`
    })
  ],
  args: {
    ...BlockLinkCardData,
    data: {
      page: {
        ...BlockLinkCardData.data,
        __typename: 'EDUNewsPage'
      }
    },
    headingLevel: 'h2',
    size: 'sm'
  }
}

export const ExternalLink = {
  decorators: [
    () => ({
      template: `<div id="storyRoot" class="relative grid grid-cols-2 gap-3"><story/></div>`
    })
  ],
  args: {
    data: {
      __typename: 'ExternalLinkCardWithDescription',
      externalLink: 'https://nasa.gov',
      title: 'External Link',
      label: 'Dolor Sit',
      summary:
        'Cras rhoncus lorem condimentum tellus rhoncus dictum. Maecenas finibus nibh lorem, quis ornare est vulputate et. Nulla imperdiet ultrices est, ac mattis justo consequat sit amet.',
      thumbnailImage: {
        __typename: 'CustomImage',
        src: {
          __typename: 'CustomRendition',
          url: 'https://picsum.photos/512/288',
          width: '512',
          height: '288'
        }
      }
    },
    headingLevel: 'h2'
  }
}
