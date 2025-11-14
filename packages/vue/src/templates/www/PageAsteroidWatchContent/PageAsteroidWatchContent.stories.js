import { HeroMediaData } from './../../../components/HeroMedia/HeroMedia.stories'
import { AsteroidWatchWidgetData } from './../../../components/AsteroidWatchWidget/AsteroidWatchWidget.stories'
import PageAsteroidWatchContent from './PageAsteroidWatchContent.vue'

export default {
  title: 'Templates/WWW/PageAsteroidWatchContent',
  component: PageAsteroidWatchContent,
  decorators: [
    () => ({
      template: `<div id="storyRoot" class="disable-nav-offset"><story/></div>`
    })
  ],
  tags: ['!autodocs'],
  parameters: {
    layout: 'fullscreen',
    html: {
      root: '#storyRoot'
    }
  },
  excludeStories: /.*(Data)$/
}

// data
export const PageAsteroidWatchContentData = {
  url: '/asteroid-watch/next-five-approaches',
  slug: 'next-five-approaches',
  breadcrumb:
    '[{"path": "/parent/", "title": "Overview"}, {"path": "/parent/placeholder-1/", "title": "Sibling Item 1"}, {"path": "/parent/placeholder-2/", "title": "Sibling Item 2"}, {"path": "/parent/placeholder-3/", "title": "Sibling Item 3"}]',
  title: 'Next Five approaches',
  label: 'Asteroid Watch',
  heroImage: HeroMediaData.image,
  nextCloseApproaches: AsteroidWatchWidgetData.nextCloseApproaches,
  body: [
    {
      blockType: 'RichTextBlock',
      value: `<p>The Asteroid Watch dashboard tracks asteroids and comets that will make relatively close approaches to Earth. The dashboard displays the date of closest approach, approximate object diameter, relative size and distance from Earth for each encounter. The object's name is displayed by hovering over its encounter date. Clicking on the encounter date will display a Web page with details about that object.</p>`
    }
  ]
}

// template
const PageAsteroidWatchContentTemplate = (args) => ({
  props: Object.keys(args),
  components: { PageAsteroidWatchContent },
  template: `<PageAsteroidWatchContent :data="contentPage"/>`
})

// stories
export const BaseStory = {
  name: 'PageAsteroidWatchContent',
  args: {
    data: PageAsteroidWatchContentData
  }
}
