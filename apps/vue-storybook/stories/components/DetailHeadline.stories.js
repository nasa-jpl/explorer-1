import DetailHeadline from '@explorer-1/vue/src/components/DetailHeadline/DetailHeadline.vue'

export default {
  title: 'WWW/Components/DetailHeadline',
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
export const Default = {
  args: DetailHeadlineData
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
