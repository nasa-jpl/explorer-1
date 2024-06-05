import SearchResultGridItem from '@explorer-1/vue/src/components/SearchResultGridItem/SearchResultGridItem.vue'

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

// templates
const SearchResultGridCardTemplate = (args) => ({
  props: Object.keys(args),
  components: { SearchResultGridItem },
  template: `
    <SearchResultGridItem
    :page-content-type="page.content_type"
    :url="page.url"
    :type="page.type"
    :topic="page.topic"
    :image="page.image"
    :date="page.date"
    :title="page.title"
    :summary="page.summary"
    :heading-level="headingLevel"
  />
  `
})

export const StandardResult = SearchResultGridCardTemplate.bind({})
StandardResult.args = SearchResultGridCardData

export const NewsResult = SearchResultGridCardTemplate.bind({})
NewsResult.args = {
  page: { ...SearchResultGridCardData.page, content_type: 'news_news' },
  headingLevel: 'h2'
}

export const MissionResult = SearchResultGridCardTemplate.bind({})
MissionResult.args = {
  page: { ...SearchResultGridCardData.page, content_type: 'missions_mission' },
  headingLevel: 'h2'
}
