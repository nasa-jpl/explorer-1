import { BaseImageCaptionData } from './../BaseImageCaption/BaseImageCaption.stories'
import MissionDetailInlineImage from './MissionDetailInlineImage.vue'

export default {
  title: 'Components/WWW/MissionDetail/MissionDetailInlineImage',
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
  }
}

export const BaseStory = {
  args: {
    alignment: MissionDetailInlineImageData.alignTo,
    text: MissionDetailInlineImageData.text,
    image: MissionDetailInlineImageData.image
  }
}
