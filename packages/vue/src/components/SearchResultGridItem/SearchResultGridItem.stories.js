import SearchResultGridItem from './SearchResultGridItem.vue'

export default {
  title: 'Components/Search/SearchResultGridItem',
  component: SearchResultGridItem,
  decorators: [
    () => ({
      template: `<div id="storyDecorator" class="relative grid grid-cols-2 gap-3 lg:grid-cols-3"><story/></div>`
    })
  ],
  argTypes: {
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
      root: '#storyDecorator'
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
