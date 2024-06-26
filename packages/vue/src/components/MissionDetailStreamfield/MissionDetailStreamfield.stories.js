import { BaseImageCaptionData } from './../BaseImageCaption/BaseImageCaption.stories.js'
import { BlockIframeEmbedData } from './../BlockIframeEmbed/BlockIframeEmbed.stories.js'
import MissionDetailStreamfield from './MissionDetailStreamfield.vue'

export default {
  title: 'WWW/MissionDetail/MissionDetailStreamfield',
  component: MissionDetailStreamfield,
  excludeStories: /.*Data$/
}

export const MissionDetailStreamfieldData = {
  feature: [
    {
      blockType: 'HeadingBlock',
      heading: 'GRACE-FO Data'
    },
    {
      alignTo: 'right',
      blockType: 'InlineImageBlock',
      image: {
        ...BaseImageCaptionData,
        src: {
          height: 700,
          url: 'https://picsum.photos/700/700',
          width: 700
        },
        screenXs: {
          url: 'https://picsum.photos/320/320',
          width: 320
        },
        screenLg: {
          url: 'https://picsum.photos/1024/1024',
          width: 1024
        },
        alt: ''
      },
      text: '<p>Global surface mass anomalies observed by the GRACE-FO satellites. GRACE-FO provides regular (at least monthly) updates of surface mass anomalies.<br/></p><p>For more information and data access, please visit <a href="https://grace.jpl.nasa.gov">grace.jpl.nasa.gov</a>.</p>'
    },
    {
      blockType: 'QuoteBlock',
      attribution: 'Felix Landerer, Project Scientist',
      quote:
        'As an oceanographer myself, it never ceases to amaze me that we can map month-to-month pressure differences as small as 10 mm at the bottom of the oceans from space.”',
      quoteLink: [
        {
          externalLink: 'http://google.com',
          page: null
        }
      ]
    },
    { ...BlockIframeEmbedData }
  ]
}

export const Streamfield = { args: { data: MissionDetailStreamfieldData.feature } }
