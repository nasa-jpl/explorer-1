import { BlockInlineImageTemplate } from './BlockInlineImage'
import { BlockImageData } from '../BlockImage/BlockImage.stories'

export default {
  title: 'Components/Blocks/BlockInlineImage',
  excludeStories: /.*(Data)$/,
  parameters: {
    viewMode: 'docs',
    docs: {
      description: {
        component:
          'A BlockImage floated to one side of a BlockText. Note: The text does not wrap under the image. Includes page layout assumptions.',
      },
    },
  },
}

export const BlockInlineImageData = {
  text: `<p>Maecenas luctus finibus arcu, a sodales leo varius quis. Aenean bibendum pellentesque eros, porttitor tempus lectus elementum venenatis. Aliquam erat volutpat. Pellentesque congue sapien lacus, sit amet imperdiet diam pellentesque vitae. In egestas aliquet tellus et pulvinar.</p>
    <p>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean vestibulum eros sed erat elementum mattis. Etiam fermentum velit id libero vulputate, quis lacinia nunc consequat. Nullam maximus turpis non elementum mattis. Proin volutpat tellus et nibh suscipit posuere. </p>
    <p>Sed ipsum lorem, sodales a lacinia nec, sagittis in erat. Praesent vel est turpis. Suspendisse potenti. Vivamus quis odio ligula. Sed ornare magna elementum nibh tincidunt, non maximus felis lobortis. Cras in quam ornare, egestas nulla et, semper orci. Vivamus sed ornare ipsum. Aenean at tincidunt nunc, at euismod nibh. Integer molestie aliquam risus sed ultrices. </p>`,
  alignTo: 'right',
  image: BlockImageData.image,
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
    alt: 'Fourth image',
    caption:
      '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel porttitor urna. Maecenas at est laoreet, sagittis risus a, rutrum ipsum. Quisque tincidunt lacus nunc, dapibus facilisis felis scelerisque sit amet. </p>',
    credit: 'NASA/JPL',
    detailUrl: '/image/placeholder/',
    original: 'https://picsum.photos/id/1018/1000/1200',
    original_webp: 'https://picsum.photos/id/1018/1000/1200.webp',
    src: {
      height: 600,
      url: 'https://picsum.photos/id/1018/500/600',
      width: 500,
    },
    src_webp: 'https://picsum.photos/id/1018/500/600.webp',
  },
}
