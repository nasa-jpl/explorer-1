import { HeroLargeTemplate } from './HeroLarge'

export default {
  title: 'Components/Blocks/Heroes/Large',
  argTypes: {
    eyebrow: {
      type: { name: 'string', required: false },
      description: 'Header label'
    },
    title: {
      type: { name: 'string', required: true },
      description: 'Hero title'
    },
    summary: {
      type: { name: 'string', required: false },
      description: 'Summary/description of the hero item'
    },
    image: {
      type: { name: 'object', required: true },
      description:
        'Background image. Works best with images that have a focal point on the right side.'
    }
  },
  parameters: {
    docs: {
      description: {
        component:
          "`HeroLarge` works best with background images that have a focal point on the right side of the image. The markup and styles attempt to keep the right side of the image visible on smaller screens rather than doing a center crop. This works best in tandem with Wagtail image renditions, so it isn't foolproof, but it sets up a decent basis."
      }
    }
  }
}

export const Default = HeroLargeTemplate.bind({})
Default.storyName = 'Large'
Default.args = {
  eyebrow: 'Robotics at JPL',
  title: 'FreeClimber: LEMUR 3',
  summary:
    'Crawl, walk and even climb rock walls, this robot was designed to operate in extreme terrains.',
  image: {
    src: {
      url: 'https://picsum.photos/id/973/1800/1200',
      width: 1800,
      height: 1200
    },
    srcSet:
      'https://picsum.photos/id/865/768/548 768w, https://picsum.photos/id/865/1024/684 1024w, https://picsum.photos/id/865/1440/770 1440w,  https://picsum.photos/id/865/1800/963 1800w',
    screenMd: {
      url: 'https://picsum.photos/id/921/800/640'
    },
    screenSm: {
      url: 'https://picsum.photos/id/247/640/900'
    },
    alt: 'Robotics detail page hero image'
  }
}
