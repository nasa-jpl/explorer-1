import BlockListCards from './BlockListCards.vue'

export default {
  title: 'Components/Blocks/BlockListCards',
  component: BlockListCards,
  tags: ['wagtail-blocks', 'listings'],
  excludeStories: /.*Data$/
}

export const BlockListCardsData = {
  blockType: 'ListBlock',
  field: 'content_card_list',
  items: [
    {
      description:
        '<p>Morbi ullamcorper ligula sit amet finibus condimentum. Nulla et  ultricies metus. Integer tristique arcu quam, sed blandit sem porttitor  non. Donec aliquet orci at iaculis gravida. Vestibulum bibendum justo  vitae enim tempor pulvinar. Phasellus scelerisque ultrices eros, vitae  pulvinar lectus tempus convallis. In hac habitasse platea dictumst.  Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>',
      heading: 'Heading text',
      image: {
        src: {
          url: 'https://picsum.photos/320/320',
          width: '320',
          height: '320'
        }
      },
      links: [
        {
          externalLink: 'http://www.nasa.gov/',
          page: null,
          text: 'External link'
        },
        {
          externalLink: null,
          page: {
            url: '/missions/airborne-visible-infrared-imaging-spectrometer-aviris/'
          },
          text: 'Internal link'
        }
      ]
    },
    {
      description:
        '<p>Morbi ullamcorper ligula sit amet finibus condimentum. Nulla et  ultricies metus. Integer tristique arcu quam, sed blandit sem porttitor  non. Donec aliquet orci at iaculis gravida. Vestibulum bibendum justo  vitae enim tempor pulvinar. Phasellus scelerisque ultrices eros, vitae  pulvinar lectus tempus convallis. In hac habitasse platea dictumst.  Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>',
      heading: 'Heading text',
      image: {
        src: {
          url: 'https://picsum.photos/320/320',
          width: '320',
          height: '320'
        }
      },
      links: [
        {
          externalLink: null,
          page: null,
          document: {
            url: '/missions/airborne-visible-infrared-imaging-spectrometer-aviris/'
          },
          text: 'Document link'
        }
      ]
    }
  ]
}

// stories
export const BaseStory = {
  name: 'BlockListCards',
  args: {
    data: BlockListCardsData
  }
}
