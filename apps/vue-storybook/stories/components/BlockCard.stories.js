import BlockCard from '@explorer-1/vue/src/components/BlockCard/BlockCard.vue'

export default {
  title: 'Components/Blocks/BlockCard',
  component: BlockCard,
  excludeStories: /.*Data$/
}

export const BlockCardData = {
  type: 'Factoid',
  title: 'Nimble Limbs',
  description: 'The robot has four limbs, each with seven degrees of freedom.',
  image: {
    alt: 'Fourth image',
    src: {
      height: 400,
      url: 'https://picsum.photos/800/400',
      width: 800
    },
    srcSet: 'https://picsum.photos/400/200 320w, https://picsum.photos/800/400 1024w'
  }
}

const BlockCardTemplate = (args) => ({
  props: Object.keys(args),
  components: { BlockCard },
  template: `
  <div class="relative grid grid-cols-4 gap-4">
    <BlockCard
      :type="type"
      :title="title"
      :text="description"
      :image="image"
    />
  </div>`
})

export const Item = BlockCardTemplate.bind({})
Item.storyName = 'BlockCard'
Item.args = { ...BlockCardData }
