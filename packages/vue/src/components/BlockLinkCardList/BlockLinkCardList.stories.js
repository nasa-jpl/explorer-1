import BlockLinkCardList from './BlockLinkCardList.vue'

export default {
  title: 'Components/Blocks/BlockLinkCardList',
  component: BlockLinkCardList,
  tags: ['wagtail-blocks', 'listings'],
  excludeStories: /.*Data$/
}
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
  headingLevel: 'h2',
  startDate: undefined,
  endDate: undefined
}

export const BlockLinkCardCarouselData = [
  {
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
  },
  {
    page: {
      summary:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at tortor placerat, varius ante in, imperdiet dolor. Morbi vel arcu eu purus efficitur consequat sit amet vel nisi. Duis convallis volutpat scelerisque.',

      ...BlockLinkCardData.data,
      __typename: 'EDULessonPage',
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
  },
  {
    page: {
      ...BlockLinkCardData.data,
      __typename: 'EDUExplainerArticlePage',
      summary:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at tortor placerat, varius ante in, imperdiet dolor. Morbi vel arcu eu purus efficitur consequat sit amet vel nisi. Duis convallis volutpat scelerisque.',
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
  },
  {
    url: '/news/placeholder-slug-4',
    title: 'How engineers at NASA-JPL persevered to develop a ventilator',
    slug: 'placeholder-slug-4',
    summary:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at tortor placerat, varius ante in, imperdiet dolor. Morbi vel arcu eu purus efficitur consequat sit amet vel nisi. Duis convallis volutpat scelerisque.',
    label: 'Technology',
    thumbnailImage: {
      src: {
        url: 'https://picsum.photos/512/288',
        width: 512,
        height: 288
      },
      alt: 'Alt text'
    }
  }
]

// stories
export const BaseStory = {
  name: 'BlockLinkCardList',
  args: {
    items: BlockLinkCardCarouselData
  }
}
