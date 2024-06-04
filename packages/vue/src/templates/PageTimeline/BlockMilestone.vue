<template>
  <BlockCircleImageCard
    class="text-left flex-grow md:flex-grow-0"
    tag="button"
    type="button"
    :title="data.heading"
    :label="label"
    :secondary-label="data.milestoneLabel"
    :image="data.thumbnailImage"
    @click="handleClick(data)"
  >
    <template #icon>
      <IconExternal
        v-if="data.milestoneLink && data.milestoneLink.externalLink"
      />
      <IconPlay v-else-if="data.embed" />
    </template>
  </BlockCircleImageCard>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import IconExternal from '@/components/Icons/IconExternal.vue'
import IconPlay from '@/components/Icons/IconPlay.vue'
import BlockCircleImageCard from '@/components/BlockCircleImageCard/BlockCircleImageCard.vue'

export interface Milestone {
  id: string
  heading: string
  date: string
  displayDate?: string
  milestoneLabel?: string
  description?: string
  milestoneLinkLabel: string
  embed: {
    embed: string
  }
  milestoneLink?: {
    page?: {
      url: string
    }
    externalLink?: string
  }
  thumbnailImage?: {
    src: {
      width: number
      height: number
      url: string
    }
  }
  image?: {
    alt: string
    caption: string
    credit: string
    detailUrl?: string
    original: string
    src: {
      height: string
      width: string
      url: string
    }
  }
  backgroundImage?: {
    src: {
      height: string
      width: string
      url: string
    }
    screenMd: {
      height: string
      width: string
      url: string
    }
  }
}

export default defineComponent({
  name: 'BlockMilestone',
  components: {
    BlockCircleImageCard,
    IconExternal,
    IconPlay,
  },
  props: {
    data: {
      type: Object as PropType<Milestone>,
      required: true,
    },
    handleClick: {
      type: Function,
      required: true,
    },
  },
  computed: {
    label(): string {
      const formatDate = this.$options.filters!.displayDate
      return this.data.displayDate || formatDate(this.data.date)
    },
  },
})
</script>
