import React from 'react'
import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
  Stories,
  PRIMARY_STORY,
} from '@storybook/addon-docs'

import { BlockImageTemplate } from './BlockImage'
import { BlockImageFullBleedTemplate } from './BlockImageFullBleed'
import { BlockImageStandardTemplate } from './BlockImageStandard'

export default {
  title: 'Components/Blocks/BlockImage',
  argTypes: {
    fullBleed: {
      control: { type: 'boolean' },
    },
  },
  excludeStories: /.*Data$/,
  parameters: {
    viewMode: 'docs',
    docs: {
      description: {
        component: 'An image block that includes a caption and lightbox.',
      },
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Primary />
          <ArgsTable story={PRIMARY_STORY} />
          <Stories includePrimary={true} title="All BlockImage variants" />
        </>
      ),
    },
  },
}

export const BlockImageData = {
  fullBleed: false,
  image: {
    alt: 'Fourth image',
    caption:
      '<p>Aliquam finibus accumsan dapibus. In <a href="#">sagittis et sapien</a> nec vehicula. Suspendisse euismod consequat risus, vel dignissim elit scelerisque sed. Nullam elit ipsum, suscipit ut quam et, molestie aliquam leo.</p>',
    credit: 'NASA/JPL',
    url: '/image/placeholder/',
    linkText: 'Full Image Details',
    original: 'https://picsum.photos/869/700',
    src: {
      height: 700,
      url: 'https://picsum.photos/869/700',
      width: 869,
    },
    srcSet:
      'https://picsum.photos/320/258 320w, https://picsum.photos/869/700 1024w',
  },
  imageFullBleed: {
    alt: 'Fourth image',
    caption:
      '<p>Aliquam finibus accumsan dapibus. In <a href="#">sagittis et sapien</a> nec vehicula. Suspendisse euismod consequat risus, vel dignissim elit scelerisque sed. Nullam elit ipsum, suscipit ut quam et, molestie aliquam leo.</p>',
    credit: 'NASA/JPL',
    url: '/image/placeholder/',
    linkText: 'Full Image Details',
    src: {
      width: 1800,
      height: 900,
      url: 'https://picsum.photos/1800/900',
    },
  },
}

export const Standard = BlockImageStandardTemplate.bind({})
Standard.args = { image: BlockImageData.image, fullBleed: false }
Standard.parameters = {
  docs: {
    storyDescription:
      'Standard image block that has a fluid width to fill any container. Most popular variant of `BlockImage`.',
  },
}

export const FullBleed = BlockImageFullBleedTemplate.bind({})
FullBleed.args = { image: BlockImageData.imageFullBleed }
FullBleed.parameters = {
  docs: {
    storyDescription:
      'Switch to canvas view to see the full bleed version. Includes page layout assumptions and uses a max width of `max-w-screen-3xl`.',
  },
}

export const StreamfieldBlock = BlockImageTemplate.bind({})
StreamfieldBlock.args = BlockImageData
StreamfieldBlock.parameters = {
  docs: {
    storyDescription:
      'A block that allows the user to switch between standard and full bleed. This variant is used when building a framework that allows content editors to choose the layout of the image. Otherwise the Standard variant is recommended for most use-cases.',
  },
}
