import MixinCarousel, { variants } from './MixinCarousel.vue'

export default {
  title: 'Mixins/MixinCarousel',
  component: MixinCarousel,
  tags: ['!autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: Object.keys(variants)
    }
  }
}

export const BaseStory = {
  name: 'BaseCarousel',
  args: {
    heading: 'Heading',
    variant: 'tiles'
  },
  render: (args) => ({
    components: { MixinCarousel },
    setup() {
      return { args }
    },
    template: `<MixinCarousel v-bind="args">
    <div v-for="(item, index) in [1, 2, 3, 4, 5, 6, 7]" :key="index" class="swiper-slide bg-gray-dark">
      <img src="https://picsum.photos/550/483" width="550" height="483" :alt="'Demo slide ' + index" data-chromatic="ignore">
    </div>
  </MixinCarousel>`
  })
}

export const BaseCarouselWLink = {
  name: 'BaseCarousel w/ Link',
  args: {
    heading: 'Heading',
    variant: 'tiles',
    link: '/placeholder',
    linkTitle: 'See more'
  },
  render: (args) => ({
    components: { MixinCarousel },
    setup() {
      return { args }
    },
    template: `<MixinCarousel v-bind="args">
    <div v-for="(item, index) in [1, 2, 3, 4, 5, 6, 7]" :key="index" class="swiper-slide">
      <img src="https://picsum.photos/550/483" width="550" height="483" alt="test slide" data-chromatic="ignore">
    </div>
  </MixinCarousel>`
  })
}
