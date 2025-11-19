import HeroLarge from './HeroLarge.vue'
import { eduMetadataDictionary } from './../../constants'

export default {
  title: 'Components/Heroes/Large',
  component: HeroLarge,
  tags: ['heroes'],
  excludeStories: /.*Data$/,
  parameters: {
    viewMode: 'canvas'
  },
  argTypes: {
    customPill: {
      type: { name: 'string', required: false },
      description: 'Text for pill (overrides label)'
    },
    customPillType: {
      type: { name: 'string', required: false },
      control: { type: 'select' },
      options: Object.keys(eduMetadataDictionary),
      description:
        'Maps to EDU resource types. Label is replaced with a color-themed "pill." Must use with `.ThemeEdu`'
    },
    hasOverlay: {
      type: { name: 'boolean' },
      control: { type: 'boolean' },
      description:
        'If secondary nav is also on this page, more space will be added above the hero text'
    }
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
  },
  listingPageHeroImage: {
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
  },
  customPill: undefined,
  customPillType: undefined,
  hasOverlay: false
}

// stories
export const BaseStory = {
  name: 'HeroLarge',
  args: {
    label: 'Robotics at JPL',
    ...HeroLargeData,
    summary: HeroLargeData.description,
    image: HeroLargeData.heroImage
  }
}
