import { BaseImageCaptionData } from './../BaseImageCaption/BaseImageCaption.stories'
import BlockInlineImage from './BlockInlineImage.vue'

export default {
  title: 'Components/Blocks/BlockInlineImage',
  component: BlockInlineImage,
  excludeStories: /.*(Data)$/
}

export const BlockInlineImageData = {
  block: {
    blockType: 'InlineImageBlock',
    text: `<p>Maecenas luctus finibus arcu, a sodales leo varius quis. Aenean bibendum pellentesque eros, porttitor tempus lectus elementum venenatis. Aliquam erat volutpat. Pellentesque congue sapien lacus, sit amet imperdiet diam pellentesque vitae. In egestas aliquet tellus et pulvinar.</p>
      <p>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean vestibulum eros sed erat elementum mattis. Etiam fermentum velit id libero vulputate, quis lacinia nunc consequat. Nullam maximus turpis non elementum mattis. Proin volutpat tellus et nibh suscipit posuere. </p>
      <p>Sed ipsum lorem, sodales a lacinia nec, sagittis in erat. Praesent vel est turpis. Suspendisse potenti. Vivamus quis odio ligula. Sed ornare magna elementum nibh tincidunt, non maximus felis lobortis. Cras in quam ornare, egestas nulla et, semper orci. Vivamus sed ornare ipsum. Aenean at tincidunt nunc, at euismod nibh. Integer molestie aliquam risus sed ultrices. </p>`,
    alignTo: 'right',
    image: {
      ...BaseImageCaptionData,
      alt: 'Inline image',
      src: {
        height: 500,
        url: 'https://picsum.photos/700/500',
        width: 700
      },
      original: 'https://picsum.photos/1400/1000'
    },
    displayCaption: true
  }
}

export const AlignRight = {
  args: { data: BlockInlineImageData.block }
}

export const CustomCaption = {
  args: {
    data: {
      ...BlockInlineImageData.block,
      caption: '<p>My custom caption.</p>'
    }
  }
}

export const AlignLeft = {
  args: {
    data: {
      ...BlockInlineImageData.block,
      alignTo: 'left'
    }
  }
}

export const PortraitImage = {
  args: {
    data: {
      ...BlockInlineImageData.block,
      image: {
        ...BaseImageCaptionData,
        alt: 'Inline image',
        src: {
          height: 600,
          url: 'https://picsum.photos//500/600',
          width: 500
        }
      }
    }
  }
}
