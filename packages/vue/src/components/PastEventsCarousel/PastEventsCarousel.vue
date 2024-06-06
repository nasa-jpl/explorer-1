<template>
  <MixinCarousel
    v-if="hasContent"
    heading="Past Events"
    variant="cards"
    :link="{
      name: 'events',
      query: {
        event_status: 'Past events',
        sortBy: 'eventStartDateLatest',
        page: '1'
      }
    }"
    link-title="View all past events"
    indent="col-1"
    v-on="$listeners"
  >
    <!-- Slides -->
    <BlockLinkCard
      v-for="(page, index) in results"
      :key="index"
      :url="page.url"
      :title="page.title"
      :thumbnail-image="page.image"
      :start-date="page.startDate"
      :end-date="page.endDate"
      class="swiper-slide"
    />
  </MixinCarousel>
</template>
<script lang="ts">
// @ts-nocheck
import { defineComponent } from 'vue'
import type { ElasticSearchPage } from '../../interfaces'
import MixinCarousel from './../MixinCarousel/MixinCarousel.vue'
import BlockLinkCard from './../BlockLinkCard/BlockLinkCard.vue'

export default defineComponent({
  name: 'PastEventsCarousel',
  components: {
    MixinCarousel,
    BlockLinkCard
  },
  data() {
    return {
      pages: []
    }
  },
  async fetch() {
    this.pages = []
    const params = {
      query: '',
      content_type: 'events.EventPage',
      event_status: ['Past events'],
      sort: 'eventStartDateLatest',
      page: 0,
      size: 10
    }
    const searchData = await this.$axios.$get(`_search/`, { params })
    this.pages = searchData.hits.hits
  },

  computed: {
    hasContent() {
      if (this.pages && this.pages.length) {
        return true
      }
      return false
    },
    results(): ElasticSearchPage[] {
      function parseType(type: string): string {
        return type.toLowerCase().replace('.', '_')
      }
      return this.pages
        .filter((page: ElasticSearchPage) => {
          return 'url' in page._source
        })
        .map((page: ElasticSearchPage) => {
          // helpers
          const handle = parseType(page._source.content_type[0])
          const image = page._source[handle + '__thumbnail_image']
          page.url = page._source.url
          page.title = page._source.title
          page.startDate = page._source[handle + '__start_datetime']
          page.endDate = page._source[handle + '__end_datetime']
          if (image) {
            page.image = {
              src: {
                url: image.thumbnail_image
              }
            }
          }
          return page
        })
    }
  }
})
</script>
