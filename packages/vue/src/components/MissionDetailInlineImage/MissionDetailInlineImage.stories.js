import { BaseImageCaptionData } from '../BaseImageCaption/BaseImageCaption.stories.js'
import MissionDetailInlineImage from './MissionDetailInlineImage.vue'

export default {
  title: 'WWW/Components/MissionDetail/MissionDetailInlineImage',
  component: MissionDetailInlineImage,
  argTypes: {
    alignTo: {
      control: { type: 'select', options: ['left', 'right'] }
    }
  }
}

const MissionDetailInlineImageData = {
  text: `<p>Global surface mass anomalies observed by the GRACE-FO satellites. GRACE-FO provides regular (at least monthly) updates of surface mass anomalies.</p>
    <p>For more information and data access, please visit <a href="https://grace.jpl.nasa.gov" target="_blank">grace.jpl.nasa.gov</a>.</p>`,
  alignTo: 'right',
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
  }
}

// template
const MissionDetailInlineImageTemplate = (args) => ({
  props: Object.keys(args),
  components: { MissionDetailInlineImage },
  template: `<MissionDetailInlineImage :alignment="alignTo" :text="text" :image="image" />`
})

export const Default = MissionDetailInlineImageTemplate.bind({})
Default.args = MissionDetailInlineImageData
