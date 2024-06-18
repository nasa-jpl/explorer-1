<template>
  <div
    v-if="
      typeof groupKey !== 'undefined' &&
      typeof buckets !== 'undefined' &&
      bucketsLength >= 1 &&
      !hideFilterGroups.includes(groupKey)
    "
    :id="`filterGroup_${groupKey}`"
    class="border-gray-light-mid col-span-3 pb-4 mb-4 border-b"
  >
    <!-- bucket key param -->
    <legend class="md:mb-3 text-body-md mb-2 font-bold leading-normal tracking-wide">
      {{ groupTitle }}
    </legend>
    <div
      v-for="(bucket, index) in buckets"
      :key="bucket.key"
      ref="buckets"
      class="form-group form-check"
    >
      <!-- correct for zero based index -->
      <div
        v-if="!truncateFilters || index <= checkbox.checkboxLimit - 1"
        class="flex my-2"
      >
        <input
          :id="bucket.key_as_string ? generateId(bucket.key_as_string) : generateId(bucket.key)"
          v-model="filterByHandler"
          type="checkbox"
          :value="bucket.key_as_string ? bucket.key_as_string : bucket.key"
          class="text-theme-red focus:ring-2 focus:ring-jpl-red flex-shrink-0 w-5 h-5 mt-px mr-1 align-middle border rounded-none"
        />
        <!-- 'key_as_string' exists for dates to have a human readable version -->
        <label
          :for="bucket.key_as_string ? generateId(bucket.key_as_string) : generateId(bucket.key)"
          class="form-check-label pl-2 tracking-normal align-middle"
        >
          {{ prettyFilterNames(bucket.key_as_string ? bucket.key_as_string : bucket.key) }}
          <span class="text-gray-mid"> ({{ bucket.doc_count.toLocaleString() }}) </span>
        </label>
      </div>
    </div>
    <!--
      TODO: this logic could probably cleaner. It flows in the opposite way of the loop
      for making checkboxes above.
      only show button if we want to truncate the list and/or we're highter than limit
    -->

    <div v-show="truncateFilters && bucketsLength > checkbox.initialLimit">
      <button
        class="can-hover:hover:underline text-theme-red mt-2"
        :aria-expanded="!checkbox.showMore ? 'true' : 'false'"
        aria-haspopup="true"
        :aria-controls="`filterGroup_${groupKey}`"
        @click="toggleShowMoreFilters()"
      >
        {{ checkbox.showMore == false ? 'Less' : 'More' }}
      </button>
    </div>
  </div>
</template>
<script lang="ts">
// @ts-nocheck
import isEqual from 'lodash/isEqual'
export default {
  name: 'SearchFilterGroup',
  props: {
    filterBy: Array,
    buckets: null,
    hideFilterGroups: {
      type: Array,
      default: () => []
    },
    groupKey: {
      type: String,
      required: true
    },
    groupTitle: {
      type: String,
      required: false
    },
    truncateFilters: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data() {
    return {
      checkbox: {
        checkboxLimit: 4,
        showMore: true,
        initialLimit: 4
      }
    }
  },
  emits: [
    'update:filterBy'
  ],
  computed: {
    // to sync both ways parent <--> child
    // ensures accurate filter visual state when using URL query strings
    filterByHandler: {
      get() {
        return this.filterBy
      },
      set(newValue) {
        this.$emit('update:filterBy', newValue)
      }
    },
    bucketsLength() {
      return this.buckets.length
    }
  },
  watch: {
    filterBy: {
      // update URL with filter parameters
      handler(newVal, oldVal) {
        // using lodash to avoid discrepancies between comparing nested objects and arrays
        if (!isEqual(newVal, oldVal)) {
          let query = Object.assign({}, this.$route.query)
          if (newVal.length > 0) {
            query = {
              ...this.$route.query,
              [this.groupKey]: newVal.toString()
            }
          } else {
            // clear the param from the URL if no value is passed
            delete query[this.groupKey]
          }
          // using $router.push() ensures history is saved with each change to filters
          this.$router.push({ query })
        }
      }
    }
  },
  methods: {
    generateId(value) {
      let valueString = String(value)
      valueString = valueString.split(' ').join('')
      return `filter_${this.groupKey}_${valueString}`
    },
    toggleShowMoreFilters() {
      if (this.checkbox.checkboxLimit === this.checkbox.initialLimit) {
        this.checkbox.checkboxLimit = Infinity
        this.checkbox.showMore = false

        this.$nextTick(() => {
          // Focus on first new rendered checkbox in list
          this.$refs.buckets[this.checkbox.initialLimit].getElementsByTagName('input')[0].focus()
        })
      } else {
        this.checkbox.checkboxLimit = this.checkbox.initialLimit
        this.checkbox.showMore = true
      }
    },
    prettyFilterNames(key) {
      if (key === 'news.News') {
        return 'News & Features'
      }
      if (key === 'home.HomePage') {
        return 'Homepage'
      }
      if (key === 'missions.Mission') {
        return 'Missions'
      }
      if (key === 'events.EventPage') {
        return 'Events'
      }
      if (key === 'image_detail.ImageDetailPage') {
        return 'Images'
      }
      if (key === 'audio_detail.AudioIndexPage') {
        return 'Audio Index'
      }
      if (key === 'audio_detail.AudioDetailPage') {
        return 'Audio'
      }
      if (key === 'infographics.InfographicsDetailPage') {
        return 'Infographics'
      }
      if (key === 'image_detail.CuratedGalleryPage') {
        return 'Curated Gallery'
      }
      if (key === 'topics.TopicPage') {
        return 'Topics'
      }
      if (key === 'asteroid_watch.AsteroidWatchIndexPage') {
        return 'Asteroid Watch Index'
      }
      if (key === 'asteroid_watch.AsteroidWatchContentPage') {
        return 'Asteroid Watch'
      }
      if (key === 'missions.MissionsIndexPage') {
        return 'Missions Index'
      }
      if (key === 'information_pages.PageContent') {
        return 'Information pages'
      }
      if (key === 'robotics.RobotPage') {
        return 'Robots'
      }
      if (key === 'video_detail.VideoDetailPage') {
        return 'Video'
      }
      if (key === 'podcasts.PodcastPage') {
        return 'Podcasts'
      }
      if (key === 'go_pages.GoHomePage') {
        return 'Go Sites'
      }
      if (key === 'press_kits.PressKitHomePage') {
        return 'Press Kits'
      }
      if (key === 'profiles.ProfilePage') {
        return 'People'
      }
      return key
    }
  }
}
</script>
