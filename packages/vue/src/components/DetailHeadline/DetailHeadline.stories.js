import DetailHeadline, { pillColorVariants } from './DetailHeadline.vue'

export default {
  title: 'Components/Utilities/DetailHeadline',
  component: DetailHeadline,
  excludeStories: /.*Data$/,
  argTypes: {
    ariaLabel: {
      type: 'string',
      description:
        "ARIA label. Recommended if your button label isn't descriptive, or if it only contains an icon."
    },
    pillColor: {
      type: 'string',
      description: 'Color of pill',
      control: {
        type: 'select'
      },
      options: pillColorVariants,
      table: {
        defaultValue: { summary: 'primary' }
      }
    }
  }
}

export const DetailHeadlineData = {
  title: "NASA's Ingenuity Mars Helicopter Recharges Its Batteries in Flight",
  publicationDate: '2020-08-13',
  readTime: '3 min read',
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

export const Pill = {
  args: {
    ...DetailHeadlineData,
    pill: true
  }
}
