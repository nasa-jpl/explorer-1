import { HomepageCarouselItemData } from '../HomepageCarouselItem/HomepageCarouselItem.stories'
import HomepageCarousel from './HomepageCarousel.vue'

export default {
  title: 'WWW/Components/Homepage/HomepageCarousel',
  component: HomepageCarousel,
  excludeStories: /.*Data$/,
  parameters: {
    viewMode: 'canvas'
  }
}

export const HomepageCarouselData = [
  {
    ...HomepageCarouselItemData.item,
    externalLink: null,
    video: null,
    slideTitle: '1. NASA’s Perseverance Rover on Target to Land About 12:55 p.m. PST Today'
  },
  {
    ...HomepageCarouselItemData.item,
    page: {},
    slideTitle: '2. Another carousel slide item for homepage'
  },
  {
    ...HomepageCarouselItemData.item,
    externalLink: null,
    video: null,
    slideTitle: '3. Lorem ipsum dolor sit amet consectatur'
  },
  {
    ...HomepageCarouselItemData.item,
    page: {},
    video: null,
    slideTitle: '4. Etiam posuere posuere auctor'
  },
  {
    ...HomepageCarouselItemData.item,
    externalLink: null,
    video: null,
    slideTitle: '5. Donec ultricies faucibus erat pellentesque'
  },
  {
    ...HomepageCarouselItemData.item,
    page: {},
    video: null,
    slideTitle: '6. Praesent tristique ligula nisi, ut ornare'
  },
  {
    ...HomepageCarouselItemData.item,
    externalLink: null,
    video: null,
    slideTitle: '7. Sed a ullamcorper ex, in laoreet'
  },
  {
    ...HomepageCarouselItemData.item,
    page: {},
    video: null,
    slideTitle: '8. Morbi ac sem et elit iaculis gravida'
  },
  {
    ...HomepageCarouselItemData.item,
    page: {},
    video: null,
    slideTitle: '9. This is the second to last slide'
  },
  {
    ...HomepageCarouselItemData.item,
    page: {},
    video: null,
    slideTitle: '10. This is the very last slide'
  }
]

// replicate shuffle from pages/index.vue
const HomepageCarouselShuffledData = () => {
  const items = [...HomepageCarouselData]
  for (let i = items.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[items[i], items[j]] = [items[j], items[i]]
  }
  return items
}

// template
const HomepageCarouselTemplate = (args) => ({
  props: Object.keys(args),
  components: { HomepageCarousel },
  template: `<HomepageCarousel :duration="duration" :items="items" />`
})

// stories
export const Carousel = HomepageCarouselTemplate.bind({})
Carousel.args = {
  items: HomepageCarouselData,
  duration: 10000
}
export const Shuffled = HomepageCarouselTemplate.bind({})
Shuffled.storyName = 'Carousel with shuffled items'
Shuffled.args = {
  items: HomepageCarouselShuffledData(),
  duration: 10000
}
export const OneSlide = HomepageCarouselTemplate.bind({})
OneSlide.storyName = 'Carousel with one slide'
OneSlide.args = {
  items: [HomepageCarouselData[0]],
  duration: 10000
}
export const FewSlides = HomepageCarouselTemplate.bind({})
FewSlides.storyName = 'Carousel with few slides'
FewSlides.args = {
  items: HomepageCarouselData.slice(0, 3),
  duration: 5000
}
