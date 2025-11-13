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
import { defineComponent, resolveComponent, type PropType } from 'vue'
import type { Card } from './../../interfaces.ts'
import MixinCarousel from './../MixinCarousel/MixinCarousel.vue'
import BlockLinkCard from './../BlockLinkCard/BlockLinkCard.vue'
import BlockLinkTile from './../BlockLinkTile/BlockLinkTile.vue'

export const itemTypes = {
  cards: 'BlockLinkCard',
  tiles: 'BlockLinkTile'
}

type ItemTypesKey = keyof typeof itemTypes

export default defineComponent({
  name: 'BlockLinkCarousel',
  components: {
    MixinCarousel,
    BlockLinkCard,
    BlockLinkTile
  },
  props: {
    /** Type of item used for each slide */
    itemType: {
      type: String as PropType<ItemTypesKey>,
      required: false,
      default: 'cards',
      validator: (prop: string): boolean => Object.keys(itemTypes).includes(prop)
    },
    items: {
      type: Array as PropType<Card[]>,
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
