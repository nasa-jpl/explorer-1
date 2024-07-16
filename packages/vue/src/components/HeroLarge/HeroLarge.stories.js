import HeroLarge from './HeroLarge.vue'

export default {
  title: 'Components/Heroes/HeroLarge',
  component: HeroLarge,
  excludeStories: /.*Data$/,
  parameters: {
    viewMode: 'canvas'
  }
}

export const HeroLargeData = {
  title: 'FreeClimber: LEMUR 3',
  description:
    'Crawl, walk and even climb rock walls, this robot was designed to operate in extreme terrains.',
  heroImage: {
    // beach
    src: {
      url: 'https://picsum.photos/id/973/1800/1200',
      width: 1800,
      height: 1200
    },
    // lake
    srcSet:
      'https://picsum.photos/id/865/768/548 768w, https://picsum.photos/id/865/1024/684 1024w, https://picsum.photos/id/865/1440/770 1440w,  https://picsum.photos/id/865/1800/963 1800w',
    // jungle
    screenMd: {
      url: 'https://picsum.photos/id/921/800/640'
    },
    // desert
    screenSm: {
      url: 'https://picsum.photos/id/247/640/900'
    },
    alt: 'Robotics detail page hero image'
  }
}

// stories
export const BaseStory = {
  name: 'HeroLarge',
  args: {
    eyebrow: 'Robotics at JPL',
    ...HeroLargeData,
    image: HeroLargeData.heroImage
  }
}
