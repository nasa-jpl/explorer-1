<template>
  <div class="TopicDetailMore max-w-screen-3xl relative mx-auto">
    <template v-if="theData && theData.length">
      <div class="lg:BaseGrid mt-18 lg:px-0 container px-4 mx-auto mb-12">
        <h2 class="text-h3 text-gray-dark col-span-11 col-start-2">More About {{ topic }}</h2>
      </div>
      <template
        v-for="(item, index) in theData"
        :key="index"
      >
        <TopicDetailMoreVisibility>
          <div class="md:BaseGrid lg:px-0 container px-4 mx-auto">
            <TopicDetailMoreItem
              class="md:max-w-none md:mx-0 lg:mb-0 max-w-lg row-span-1 mx-auto mb-10"
              :class="gridPlacement(index)"
              :data="item"
            />
          </div>
          <!-- show slot contents after fourth item -->
          <template v-if="index === 3 && $slots.default">
            <TopicDetailMoreVisibility class="lg:my-28 my-16">
              <slot />
            </TopicDetailMoreVisibility>
          </template>
        </TopicDetailMoreVisibility>
      </template>
    </template>
    <!-- if no moreAbout data or if the data is less then 4 cards, show the slot at the end -->
    <template v-if="$slots.default && (!theData || theData.length < 4)">
      <div :class="{ 'mt-16 lg:mt-28': theData.length }">
        <slot />
      </div>
    </template>

    <!-- TODO: modify search to filter all by topic. Right now this only uses topic title as the search terms -->
    <!-- TODO: modify "to" to use a route object. Had to change to string to work with BaseButton which needs refactoring to accommodate a route object -->
    <div class="flex justify-center">
      <BaseButton
        class="lg:mt-18 mt-10"
        :aria-label="'More ' + topic"
        variant="secondary"
        :to="`/search?topics=${topic}`"
      >
        More
        <template #iconRight><IconCaret class="ml-1 text-sm" /></template>
      </BaseButton>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import type { Card } from '../../interfaces'
import BaseButton from './../BaseButton/BaseButton.vue'
import IconCaret from './../Icons/IconCaret.vue'
import TopicDetailMoreVisibility from './../TopicDetailMore/TopicDetailMoreVisibility.vue'
import TopicDetailMoreItem from './../TopicDetailMoreItem/TopicDetailMoreItem.vue'

export default defineComponent({
  name: 'TopicDetailMore',
  components: {
    BaseButton,
    IconCaret,
    TopicDetailMoreVisibility,
    TopicDetailMoreItem
  },
  props: {
    topic: {
      type: String,
      required: false,
      default: 'Topic'
    },
    more: {
      type: Array as PropType<Card[]>,
      required: false
    },
    moreCurated: {
      type: Array as PropType<Card[]>,
      required: false
    }
  },
  computed: {
    theData(): Card[] {
      // combining the two and returning the first 8
      let arr: Card[] = []
      if (this.moreCurated && this.more) {
        arr = this.moreCurated.concat(this.more)
      } else if (this.more) {
        arr = this.more
      }
      return arr.slice(0, 8)
    }
  },
  methods: {
    gridPlacement(index: number) {
      if (index === 0) {
        return 'col-start-2 col-span-6'
      } else if (index === 1) {
        return 'lg:col-start-9 lg:col-span-4 md:col-start-6 md:col-span-6 lg:-mt-28'
      } else if (index === 2) {
        return 'lg:col-start-4 lg:col-span-4 md:col-start-2 md:col-span-6 lg:-mt-28'
      } else if (index === 3) {
        return 'lg:col-start-9 lg:col-span-4 md:col-start-6 md:col-span-6  lg:-mt-28'
      } else if (index === 4) {
        if (!this.$slots.default) {
          return 'col-start-2 col-span-6 lg:-mt-28'
        }
        return 'col-start-2 col-span-6'
      } else if (index === 5) {
        return 'lg:col-start-6 lg:col-span-6 md:col-start-6 md:col-span-6 lg:mt-28'
      } else if (index === 6) {
        return 'lg:col-start-1 lg:col-span-4 md:col-start-2 md:col-span-6 lg:-mt-28'
      } else if (index === 7) {
        return 'lg:col-start-6 lg:col-span-4 md:col-start-6 md:col-span-6 lg:-mt-28'
      }
      return ''
    }
  }
})
</script>
