<template>
  <!-- results container-->
  <ol
    id="search_results"
    aria-label="Search results"
    :class="{ 'grid grid-cols-12 gap-5': grid }"
  >
    <li
      v-for="(page, index) of results"
      :key="page.id"
      :class="{
        'md:col-span-6 lg:col-span-4 xl:col-span-3 col-span-12 gap-5': grid && !condenseGrid,
        'md:col-span-6 lg:col-span-4 col-span-12 gap-5': grid && condenseGrid
      }"
    >
      <template v-if="!grid">
        <SearchResultCard
          :is-events="isEvents"
          :is-profiles="isProfiles"
          :url="page.url"
          :type="page.type"
          :topic="page.topic"
          :image="page.image"
          :date="page.date"
          :start-date="page.startDate"
          :end-date="page.endDate"
          :start-time="page.startTime"
          :end-time="page.endTime"
          :location="page.location"
          :title="page.title"
          :summary="page.summary"
          :featured="featureFirstResult ? index === 0 && currentPage === 1 : false"
          heading-level="h2"
        />
      </template>
      <template v-else>
        <SearchResultGridItem
          :page-content-type="page.content_type"
          :url="page.url"
          :type="page.type"
          :topic="page.topic"
          :image="page.image"
          :date="page.date"
          :start-date="page.startDate"
          :end-date="page.endDate"
          :start-time="page.startTime"
          :end-time="page.endTime"
          :title="page.title"
          heading-level="h2"
        />
      </template>
    </li>
  </ol>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { ElasticSearchPage } from '../../interfaces'
// @ts-ignore
import * as dayjs from 'dayjs'
import SearchResultCard from './../SearchResultCard/SearchResultCard.vue'
import SearchResultGridItem from './../SearchResultGridItem/SearchResultGridItem.vue'

export default defineComponent({
  name: 'SearchResultsList',
  components: {
    SearchResultCard,
    SearchResultGridItem
  },
  props: {
    isEvents: {
      type: Boolean,
      default: false
    },
    isProfiles: {
      type: Boolean,
      default: false
    },
    grid: {
      type: Boolean,
      default: false
    },
    // condense the grid if the sidebar is showing
    condenseGrid: {
      type: Boolean,
      default: false
    },
    pages: [Array, Object],
    searchQueryResult: [Array, Object],
    featureFirstResult: [Boolean],
    currentPage: {
      type: Number,
      default: 1,
      required: false
    }
  },
  computed: {
    results(): ElasticSearchPage[] {
      function parseType(type: string): string {
        return type.toLowerCase().replace('.', '_')
      }
      function parseDate(date: string): string {
        return dayjs(date).format('ll')
      }
      interface Page {
        [key: string]: any
      }
      return this.pages
        ? this.pages
            .filter((page: Page) => {
              return 'url' in page._source
            })
            .map((page: Page) => {
              // helpers
              const handle = parseType(page._source.content_type[0])
              // image field is different for image detail page
              const image =
                typeof page._source[handle + '__thumbnail_image'] !== 'undefined' &&
                page._source[handle + '__thumbnail_image'] !== null
                  ? page._source[handle + '__thumbnail_image']
                  : page._source[handle + '__image']
              // date field is different for mission and event detail pages
              let date
              let topic =
                handle === 'missions_mission'
                  ? page._source[handle + '__status_filter']
                  : page._source.topic_labels_filter?.length
                    ? page._source.topic_labels_filter[0]
                    : null
              const pageType = page._source[handle + '__label']
              if (handle === 'events_eventpage') {
                date = 'Event date: ' + parseDate(page._source[handle + '__start_datetime'])
              } else if (handle === 'missions_mission') {
                date = page._source.display_date_filter
                  ? 'Launch date: ' + page._source.display_date_filter
                  : typeof page._source.publication_date_filter !== 'undefined'
                    ? 'Published: ' + parseDate(page._source.publication_date_filter)
                    : 'Published: ' + parseDate(page._source.first_published_at_filter)
              } else if (handle === 'profiles_profilepage') {
                topic = page._source[handle + '__go_site_name']
                date = null
              } else {
                date =
                  typeof page._source.publication_date_filter !== 'undefined'
                    ? parseDate(page._source.publication_date_filter)
                    : parseDate(page._source.first_published_at_filter)
              }
              page.content_type = handle
              page.id = page._id
              page.score = page._score
              page.url = page._source.url
              page.title = page._source.title
              page.type = pageType
              page.topic = topic
              // properties for event's page
              page.location =
                handle === 'events_eventpage' ? page._source[handle + '__location'] : null
              page.startDate =
                handle === 'events_eventpage' ? page._source[handle + '__start_datetime'] : null
              page.endDate =
                handle === 'events_eventpage' ? page._source[handle + '__end_datetime'] : null
              page.startTime =
                handle === 'events_eventpage' ? page._source[handle + '__start_time_string'] : null
              // properties that are different for profiles page
              page.summary =
                handle === 'profiles_profilepage'
                  ? page._source[handle + '__job_title']
                  : page._source[handle + '__summary']
              page.date = date
              if (image) {
                page.image = {
                  src: {
                    url: image.thumbnail_image
                  }
                }
              }
              return page
            })
        : undefined
    }
  }
})
</script>
