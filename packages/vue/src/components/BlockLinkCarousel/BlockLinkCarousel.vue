\
<template>
  <MixinCarousel
    v-if="hasContent"
    :heading="heading"
    :variant="itemType"
  >
    <!-- Slides -->
    <component
      :is="theVariantComponent"
      v-for="(item, index) in items"
      :key="index"
      :data="item"
      class="swiper-slide"
    />
  </MixinCarousel>
</template>
<script lang="ts">
import { defineComponent, resolveComponent } from 'vue'
import MixinCarousel from './../MixinCarousel/MixinCarousel.vue'
import BlockLinkCard from './../BlockLinkCard/BlockLinkCard.vue'
import BlockLinkTile from './../BlockLinkTile/BlockLinkTile.vue'

interface Variants {
  [name: string]: string
}

export const itemTypes: Variants = {
  cards: 'BlockLinkCard',
  tiles: 'BlockLinkTile'
}

export default defineComponent({
  name: 'BlockLinkCarousel',
  components: {
    MixinCarousel,
    BlockLinkCard,
    BlockLinkTile
  },
  props: {
    itemType: {
      type: String,
      required: false,
      default: 'cards',
      validator: (prop: string): boolean => Object.keys(itemTypes).includes(prop)
    },
    items: {
      type: Array,
      required: false,
      default: undefined
    },
    heading: {
      type: String,
      required: false,
      default: undefined
    }
  },
  computed: {
    theVariantComponent() {
      return resolveComponent(itemTypes[this.itemType])
    },
    hasContent() {
      if (this.items && this.items.length) {
        return true
      }
      return false
    }
  }
})
</script>
