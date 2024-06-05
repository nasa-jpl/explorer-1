import { BaseImageCaptionData } from './BaseImageCaption.stories.js'
import { BlockIframeEmbedData } from './BlockIframeEmbed.stories.js'
import MissionDetailStreamfield from '@explorer-1/vue/src/components/MissionDetailStreamfield/MissionDetailStreamfield.vue'

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
          url: 'https://source.unsplash.com/NuE8Nu3otjo/700x700',
          width: 700
        },
        screenXs: {
          url: 'https://source.unsplash.com/NuE8Nu3otjo/320x320',
          width: 320
        },
        screenLg: {
          url: 'https://source.unsplash.com/NuE8Nu3otjo/1024x1024',
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

const MissionDetailStreamfieldTemplate = (args) => ({
  props: Object.keys(args),
  components: { MissionDetailStreamfield },
  template: `<MissionDetailStreamfield :data="feature" />`
})

export const Streamfield = MissionDetailStreamfieldTemplate.bind({})
Streamfield.args = { ...MissionDetailStreamfieldData }
