import { HeroFeatureTemplate } from './HeroFeature'

export default {
  title: 'Components/Heroes/HeroFeature',
  excludeStories: /.*Data$/,
  argTypes: {
    label: {
      type: { name: 'string', required: false },
      description: 'Hero header label',
    },
    cta: {
      type: { name: 'string', required: false },
      description: 'Call to action',
    },
    feature: {
      type: { name: 'array', required: false },
      description: 'An array of featured data objects',
    },
  },
  parameters: {
    viewMode: 'docs',
    docs: {
      description: {
        component: '',
      },
    },
  },
}

const HeroFeatureData = {
  label: 'Featured',
  cta: 'View',
  feature: {
    url: '/news/new-maps-open-roads-to-research/',
    title: 'Creating Robots to go Where Humans Can’t',
    image: {
      src: {
        url: 'https://picsum.photos/id/973/1800/1200',
        width: 1800,
        height: 1200,
      },
      srcSet:
        'https://picsum.photos/id/865/768/548 768w, https://picsum.photos/id/865/1024/684 1024w, https://picsum.photos/id/865/1440/770 1440w,  https://picsum.photos/id/865/1800/963 1800w',
      screenMd: {
        url: 'https://picsum.photos/id/921/800/640',
      },
      screenSm: {
        url: 'https://picsum.photos/id/247/640/900',
      },
    },
  },
}

export const Default = HeroFeatureTemplate.bind({})
Default.args = HeroFeatureData

// export const Video = HeroFeatureTemplate.bind({})
// Video.args = {
//   ...HeroFeatureData,
//   customVideo: {
//     duration: '8',
//     file: videoMp4,
//     fileExtension: 'mp4',
//     fileOgg:
//       'http://127.0.0.1:9000/media/media/NASA-Mars-Helicopter-IngenuityAnimations-7sec.ogv', // no webpack loader for ogg files
//     fileWebm: videoWebm,
//     height: null,
//     id: '1',
//     sources:
//       "[{'src': 'http://127.0.0.1:9000/media/media/NASA-Mars-Helicopter-IngenuityAnimations-7sec.mp4', 'type': 'video/mp4', 'size': 2014406}, {'src': 'http://127.0.0.1:9000/media/media/NASA-Mars-Helicopter-IngenuityAnimations-7sec.ogv', 'type': 'video/ogg', 'size': 2625393}, {'src': 'http://127.0.0.1:9000/media/media/NASA-Mars-Helicopter-IngenuityAnimations-7sec.webm', 'type': 'video/webm', 'size': 1706500}]",
//     title: 'Seals, Sea Lions, and Satellites',
//     type: '',
//     width: null,
//   },
// }
