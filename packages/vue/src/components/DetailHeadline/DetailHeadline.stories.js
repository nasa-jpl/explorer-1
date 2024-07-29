import DetailHeadline from './DetailHeadline.vue'

export default {
  title: 'Components/Utilities/DetailHeadline',
  component: DetailHeadline,
  excludeStories: /.*Data$/
}

export const DetailHeadlineData = {
  title: "NASA's Ingenuity Mars Helicopter Recharges Its Batteries in Flight",
  publicationDate: '2020-08-13',
  author: {
    name: 'Jane Platt',
    organization: 'JPL'
  },
  topics: [
    {
      title: 'Mars',
      url: '/topics/mars'
    },
    {
      title: 'Rover',
      url: '/topics/rover'
    }
  ]
}

// stories
export const BaseStory = {
  args: DetailHeadlineData
}

export const MultipleAuthors = {
  args: {
    ...DetailHeadlineData,
    author: [
      {
        author: {
          name: 'Author Name',
          organization: 'Organization'
        }
      },
      {
        author: {
          name: 'Another Author',
          organization: 'Organization'
        }
      }
    ]
  }
}

export const NoAuthor = {
  args: {
    title: "NASA's Ingenuity Mars Helicopter Recharges Its Batteries in Flight",
    publicationDate: '2020-08-13',
    topics: [
      {
        title: 'Mars',
        url: '/topics/mars'
      },
      {
        title: 'Rover',
        url: '/topics/rover'
      }
    ]
  }
}
