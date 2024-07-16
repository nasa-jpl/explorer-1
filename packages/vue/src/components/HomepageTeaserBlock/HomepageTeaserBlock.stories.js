import HomepageTeaserBlock from './HomepageTeaserBlock.vue'

export default {
  title: 'WWW/Homepage/HomepageTeaserBlock',
  component: HomepageTeaserBlock,
  excludeStories: /.*(Data|Decorator)$/,
  parameters: {
    viewMode: 'canvas'
  }
}

// template
const HomepageTeaserBlockTemplate = (args) => ({
  props: Object.keys(args),
  components: { HomepageTeaserBlock },
  template: `<HomepageTeaserBlock :data="block" />`
})

// data
export const HomepageTeaserBlockData = {
  block: {
    blockType: 'HomePageTeaserBlock',
    coverImage: {
      alt: 'JPL Campus',
      src: {
        width: 1024,
        height: 306,
        url: 'https://picsum.photos/1024/306'
      },
      screenXs: {
        url: 'https://picsum.photos/320/180', // 16:9
        width: 320
      },
      screenMd: {
        url: 'https://picsum.photos/768/432', // narrower
        width: 768
      },
      screenTwoxl: {
        url: 'https://picsum.photos/1440/430', // narrower
        width: 1440
      }
    },
    heading: 'Jet Propulsion Laboratory',
    paragraph: `<p>Have you been awed by views of desolate Martian Valleys, swirling storms above Jupiter, and the icy blades ringing Saturn? Then you have journeyed with NASA JPL spacecraft and rovers.</p>
      <p>Our missions have flown to every planet and the Sun in a quest to understand our place in the universe, and to search for the possibility of life beyond Earth. </p>`,
    link: {
      text: 'More about JPL',
      document: null,
      page: {
        url: '/about/'
      },
      externalLink: null
    },
    card: [
      {
        heading: 'Virtual Tour',
        description:
          'Lorem ipsum dolor sit amet elec, consectetur adipiscing elit nunc aliquam quis eros.',
        image: {
          src: {
            height: 400,
            url: 'https://picsum.photos/800/400',
            width: 800
          },
          srcSet: 'https://picsum.photos/400/200 320w, https://picsum.photos/800/400 1024w'
        },
        link: {
          text: 'Take the tour',
          document: null,
          page: null,
          externalLink: 'https://www.jpl.nasa.gov'
        }
      }
    ]
  }
}

// stories
export const BaseStory = HomepageTeaserBlockTemplate.bind({})
BaseStory.storyName = 'Teaser Block'
BaseStory.args = {
  ...HomepageTeaserBlockData
}

export const NoImage = HomepageTeaserBlockTemplate.bind({})
NoImage.args = {
  block: {
    ...HomepageTeaserBlockData.block,
    coverImage: null
  }
}
