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
      :data="item"
      size="lg"
      show-calendar-chip
    />
  </div>
</template>
<style lang="scss">
@import '@explorer-1/common/src/scss/components/BlockLinkCardList';
</style>
