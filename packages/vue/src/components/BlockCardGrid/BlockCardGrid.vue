<template>
  <div
    v-if="cards"
    class="BlockCardGrid"
  >
    <div class="md:grid md:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-4 hidden gap-8">
      <BlockCardGridItem
        v-for="(card, index) of cards"
        :key="`item-${index}`"
        class="col-span-1"
        :type="card.type"
        :title="card.title"
        :description="card.description"
        :image="card.image"
        :link="card.link"
      />
    </div>
    <MixinCarousel
      class="md:hidden sm:px-10 sm:-ml-10 py-10 -mt-10"
      indent="col-1"
      :slides-per-view="3"
      no-links
    >
      <BlockCardGridItem
        v-for="(card, index) of cards"
        :key="index"
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
  type: string
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
    cards: {
      type: Array as PropType<CardGridItem[]>,
      required: false,
      default: undefined
    }
  }
})
</script>
