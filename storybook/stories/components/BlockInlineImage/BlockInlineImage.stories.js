import { BlockInlineImageTemplate } from './BlockInlineImage'
import { BaseImageCaptionData } from '../BaseImageCaption/BaseImageCaption.stories.js'

export default {
  title: 'Components/Blocks/BlockInlineImage',
  excludeStories: /.*(Data)$/,
  parameters: {
    viewMode: 'docs',
    docs: {
      description: {
        component: '',
      },
    },
  },
}

export const BlockInlineImageData = {
  text: `<p>Maecenas luctus finibus arcu, a sodales leo varius quis. Aenean bibendum pellentesque eros, porttitor tempus lectus elementum venenatis. Aliquam erat volutpat. Pellentesque congue sapien lacus, sit amet imperdiet diam pellentesque vitae. In egestas aliquet tellus et pulvinar.</p>
    <p>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean vestibulum eros sed erat elementum mattis. Etiam fermentum velit id libero vulputate, quis lacinia nunc consequat. Nullam maximus turpis non elementum mattis. Proin volutpat tellus et nibh suscipit posuere. </p>
    <p>Sed ipsum lorem, sodales a lacinia nec, sagittis in erat. Praesent vel est turpis. Suspendisse potenti. Vivamus quis odio ligula. Sed ornare magna elementum nibh tincidunt, non maximus felis lobortis. Cras in quam ornare, egestas nulla et, semper orci. Vivamus sed ornare ipsum. Aenean at tincidunt nunc, at euismod nibh. Integer molestie aliquam risus sed ultrices. </p>`,
  alignTo: 'right',
  image: {
    ...BaseImageCaptionData,
    alt: 'Inline image',
    src: {
      height: 500,
      url: 'https://source.unsplash.com/NuE8Nu3otjo/700x500',
      width: 700,
    },
  },
}

export const AlignRight = BlockInlineImageTemplate.bind({})
AlignRight.args = BlockInlineImageData

export const AlignLeft = BlockInlineImageTemplate.bind({})
AlignLeft.args = {
  ...BlockInlineImageData,
  alignTo: 'left',
}

export const PortraitImage = BlockInlineImageTemplate.bind({})
PortraitImage.args = {
  ...BlockInlineImageData,
  image: {
    ...BaseImageCaptionData,
    alt: 'Inline image',
    src: {
      height: 600,
      url: 'https://source.unsplash.com/NuE8Nu3otjo/500x600',
      width: 500,
    },
  },
}
