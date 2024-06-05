<template>
  <div v-if="hasContent" class="TopicDetailMissionCarousel overflow-hidden">
    <div class="MixedBleedGrid 2xl:pl-0 pl-5 mb-10">
      <div
        class="col-start-indent-col-2 2xl:col-start-indent-col-3 col-end-bleed bg-gray-light lg:pl-0 lg:py-10 py-8 pl-5"
      >
        <!-- TODO: on mission listings page, use query params to filter search -->
        <MixinCarousel
          heading="Missions"
          variant="tiles"
          class="pb-5"
          :center="false"
          :slides-per-view="3"
          :link="relatedMissionsLinkUrl ? relatedMissionsLinkUrl : undefined"
          :link-title="relatedMissionsLinkText"
        >
          <!-- Slides -->
          <TopicDetailMissionCarouselItem
            v-for="(item, index) in items"
            :key="index"
            :data="item"
            class="swiper-slide"
          />
        </MixinCarousel>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import type { Slide } from './../TopicDetailMissionCarouselItem/TopicDetailMissionCarouselItem.vue'
import MixinCarousel from './../MixinCarousel/MixinCarousel.vue'
import TopicDetailMissionCarouselItem from './../TopicDetailMissionCarouselItem/TopicDetailMissionCarouselItem.vue'

export default defineComponent({
  name: 'TopicDetailMissionCarousel',
  components: {
    MixinCarousel,
    TopicDetailMissionCarouselItem,
  },
  props: {
    relatedMissionsLinkUrl: {
      type: String,
      required: false,
    },
    relatedMissionsLinkText: {
      type: String,
      required: false,
    },
    items: {
      type: Array as PropType<Slide[]>,
      required: false,
    },
  },
  computed: {
    hasContent() {
      if (this.items && this.items.length) {
        return true
      }
      return false
    },
  },
})
</script>
