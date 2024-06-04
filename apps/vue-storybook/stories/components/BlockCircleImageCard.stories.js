import IconExternal from '@explorer-1/vue/src/components/Icons/IconExternal.vue'
import BlockCircleImageCard from '@explorer-1/vue/src/components/BlockCircleImageCard/BlockCircleImageCard.vue'

export default {
  title: 'Components/Blocks/BlockCircleImageCard',
  component: BlockCircleImageCard,
  argTypes: {
    imageOnRight: {
      control: {
        type: 'boolean'
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
  imageOnRight: true
}

const BlockCircleImageCardTemplate = (args) => ({
  props: Object.keys(args),
  components: { BlockCircleImageCard },
  template: `
<div class="relative max-w-xl mx-auto container">
  <BlockCircleImageCard
  :title="title"
  :label="label"
  :secondary-label="secondaryLabel"
  :image="image"
  :image-on-right="imageOnRight"
  />
</div>
`
})

const BlockCircleImageCardIconTemplate = (args) => ({
  props: Object.keys(args),
  components: { BlockCircleImageCard, IconExternal },
  template: `
  <div class="relative max-w-xl mx-auto container">
  <BlockCircleImageCard
  :title="title"
  :label="label"
  :secondary-label="secondaryLabel"
  :image="image"
  >
    <template #icon>
      <IconExternal />
    </template>
  </BlockCircleImageCard>
</div>
`
})

export const Default = BlockCircleImageCardTemplate.bind({})
Default.args = { ...BlockCircleImageCardData }

export const WithIcon = BlockCircleImageCardIconTemplate.bind({})
WithIcon.args = { ...BlockCircleImageCardData }
