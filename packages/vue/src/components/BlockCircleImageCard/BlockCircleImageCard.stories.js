import IconExternal from './../Icons/IconExternal.vue'
import BlockCircleImageCard from './BlockCircleImageCard.vue'

export default {
  title: 'Components/Blocks/BlockCircleImageCard',
  component: BlockCircleImageCard,
  decorators: [
    () => ({
      template: `<div class="relative max-w-xl mx-auto container"><story/></div>`
    })
  ],
  argTypes: {
    imageOnRight: {
      control: {
        type: 'boolean'
      }
    }
  },
  parameters: {
    slots: {
      icon: {
        description: 'Icon slot',
        components: { IconExternal },
        template: `<IconExternal v-if="args.icon" />`
      }
    }
  },
  excludeStories: /.*Data$/
}

export const BlockCircleImageCardData = {
  title: 'First Flight of Technology for Returning Warheads from Space',
  label: 'September 20, 1956',
  secondaryLabel: 'Re-entry test vehicle program',
  image: {
    src: {
      url: 'https://picsum.photos/130/130',
      width: 130,
      height: 130
    },
    srcSet: 'https://picsum.photos/90/90 320w, https://picsum.photos/130/130 1024w',
    alt: 'Alt text for image'
  },
  imageOnRight: true,
  icon: true
}

export const Default = {
  args: {
    ...BlockCircleImageCardData,
    icon: false
  }
}

export const WithIcon = { args: BlockCircleImageCardData }
