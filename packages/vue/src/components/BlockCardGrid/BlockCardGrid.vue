<template>
  <div
    v-if="cards"
    class="BlockCardGrid"
  >
    <div
      :class="`hidden md:grid md:grid-cols-2 lg:grid-cols-3 ${compact ? ' gap-5' : '3xl:grid-cols-4 gap-8'}`"
    >
      <BlockCardGridItem
        v-for="(card, index) of cards"
        :key="`item-${index}`"
        class="col-span-1"
        :label="card.label"
        :title="card.title"
        :description="card.description"
        :image="card.image"
        :link="card.link"
      />
    </div>
    <MixinCarousel
      class="md:hidden sm:px-10 sm:-ml-10 py-10 -mt-10 overflow-x-visible"
      indent="col-1"
      :slides-per-view="3"
      no-links
    >
      <BlockCardGridItem
        v-for="(card, index) of cards"
        :key="index"
        :label="card.label"
        :title="card.title"
        :text="card.description"
        :image="card.image"
        class="swiper-slide mb-5"
      />
    </MixinCarousel>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import type { ImageObject, LinkObject } from '../../interfaces'
import BlockCardGridItem from './../BlockCardGridItem/BlockCardGridItem.vue'
import MixinCarousel from './../MixinCarousel/MixinCarousel.vue'

interface CardGridItem {
  title: string
  label: string
  description: string
  image: Partial<ImageObject>
  link?: LinkObject
}

export default defineComponent({
  name: 'BlockCardGrid',
  components: {
    MixinCarousel,
    BlockCardGridItem
  },
  props: {
    compact: {
      type: Boolean,
      default: false
    },
    cards: {
      type: Array as PropType<CardGridItem[]>,
      default: undefined
    }
  }
})
</script>
