<template>
  <div v-if="data" class="-nav-offset">
    <HeroLarge :title="data.title" :image="data.heroImage" has-overlay />

    <!-- secondary nav -->
    <NavSecondary :breadcrumb="data.breadcrumb" class="z-30" has-intro />

    <!-- Body Streamfield -->
    <BlockStreamfield class="lg:mt-24 mt-18" :data="data.body" />

    <!-- Related News -->
    <BlockLinkCarousel
      item-type="cards"
      class="lg:my-24 my-12"
      heading="Latest News"
      :items="data.latestAsteroidNews"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import NavSecondary from '@/components/NavSecondary/NavSecondary.vue'
import HeroLarge from '@/components/HeroLarge/HeroLarge.vue'
import BlockStreamfield from '@/components/BlockStreamfield/BlockStreamfield.vue'
import BlockLinkCarousel from '@/components/BlockLinkCarousel/BlockLinkCarousel.vue'

export default defineComponent({
  name: 'PageAsteroidWatchIndex',
  components: {
    NavSecondary,
    HeroLarge,
    BlockStreamfield,
    BlockLinkCarousel,
  },
  props: {
    data: {
      type: Object,
      required: false,
    },
  },
})
</script>
