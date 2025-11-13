import SearchResultGridItem from './SearchResultGridItem.vue'

export default {
  title: 'Components/Cards/SearchResultGridItem',
  component: SearchResultGridItem,
  tags: ['search', 'cards'],
  decorators: [
    () => ({
      template: `<div id="storyRoot" class="relative grid grid-cols-2 gap-3 lg:grid-cols-3"><story/></div>`
    })
  ],
  parameters: {
    html: {
      root: '#storyRoot'
    }
  },
  excludeStories: /.*Data$/
}

export const SearchResultGridCardData = {
  page: {
    content_type: '',
    url: '/topics/placeholder-slug-1',
    type: 'news',
    topic: 'Moon',
    date: 'May 22, 2018',
    title: 'How engineers at NASA-JPL persevered to develop a ventilator',
    image: {
      src: {
        url: 'https://picsum.photos/490/490',
        width: 490,
        height: 490
      },
      alt: 'Alt text'
    }
  },
  headingLevel: 'h2'
}

export const BaseStory = {
  name: 'Standard Result',
  args: {
    ...SearchResultGridCardData.page,
    pageContentType: SearchResultGridCardData.page.content_type
  }
}

export const NewsResult = {
  args: {
    ...SearchResultGridCardData.page,
    pageContentType: 'news_news',
    headingLevel: 'h2'
  }
}

export const MissionResult = {
  args: {
    ...SearchResultGridCardData.page,
    pageContentType: 'missions_mission',
    headingLevel: 'h2'
  }
}
export const Event = {
  args: {
    ...SearchResultGridCardData.page,
    startTime: '00:00:00-08:00',
    startDate: '2021-11-11'
  }
}
