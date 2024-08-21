<script setup lang="ts">
import type { Card } from './../../interfaces'
import BlockLinkCard from './../BlockLinkCard/BlockLinkCard.vue'

export interface BlockLinkCardListProps {
  items: Card[]
}

const props = withDefaults(defineProps<BlockLinkCardListProps>(), {
  items: undefined
})
</script>
<template>
  <div class="BlockLinkCardList">
    <!-- Slides -->
    <BlockLinkCard
      v-for="(item, index) in props.items"
      :key="index"
      class="border-b border-gray-light-mid mb-5"
      :class="{ 'pt-3': index !== 0 }"
      :data="item"
      size="lg"
    />
  </div>
</template>
<style lang="scss">
.BlockLinkCardList {
  .BlockLinkCard {
    div.bg-gray-dark.relative.mb-6 {
      @apply mb-3 #{!important};
    }
  }
}
</style>
