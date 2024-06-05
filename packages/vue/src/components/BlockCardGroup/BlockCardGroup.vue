<template>
  <div v-if="facts" class="BlockCardGroup">
    <div
      class="md:grid md:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-4 hidden gap-8"
    >
      <BlockCard
        v-for="(fact, index) of facts"
        :key="`fact-${index}`"
        class="col-span-1"
        :type="fact.type"
        :title="fact.title"
        :text="fact.description"
        :image="fact.image"
      />
    </div>
    <MixinCarousel
      class="md:hidden sm:px-10 sm:-ml-10 py-10 -mt-10"
      indent="col-1"
      :slides-per-view="3"
      no-links
    >
      <BlockCard
        v-for="(fact, index) of facts"
        :key="index"
        :title="fact.title"
        :text="fact.description"
        :image="fact.image"
        class="swiper-slide mb-5"
      />
    </MixinCarousel>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import type { ImageObject } from '../../interfaces'
import BlockCard from './../BlockCard/BlockCard.vue'
import MixinCarousel from './../MixinCarousel/MixinCarousel.vue'

interface Fact {
  title: string
  type: string
  description: string
  image: Partial<ImageObject>
}

export default defineComponent({
  name: 'BlockCardGroup',
  components: {
    MixinCarousel,
    BlockCard,
  },
  props: {
    facts: {
      type: Array as PropType<Fact[]>,
      required: false,
    },
  },
})
</script>
