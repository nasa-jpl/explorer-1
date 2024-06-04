<template>
  <div v-if="series && activeTabData" class="PodcastSeriesCarousel">
    <!-- tabs -->
    <LayoutHelper indent="col-2">
      <h2
        class="text-gray-dark text-3xl lg:text-6xl font-semibold leading-normal tracking-normal uppercase mb-2 lg:mb-5"
      >
        More {{ series.title }} Episodes
      </h2>

      <ul class="flex flex-wrap mb-6 lg:mb-10">
        <li
          v-for="(season, index) in sortedSeasons"
          :key="index"
          class="last:mr-0 w-auto mr-10 lg:flex-shrink-0"
        >
          <button
            class="text-subtitle block text-left lg:text-center lg:w-full py-2 border-b-2 text-gray-mid-dark can-hover:hover:text-gray-dark"
            :class="
              activeSeasonId === season.id
                ? 'border-jpl-red text-gray-dark'
                : 'border-white'
            "
            :aria-expanded="activeSeasonId === season.id ? 'true' : 'false'"
            @click="updateActiveTab(season.id)"
          >
            Season {{ season.seasonNumber }}
          </button>
        </li>
      </ul>
    </LayoutHelper>
    <!-- tab content -->
    <LayoutHelper indent="col-2" class="mb-4">
      <h3 v-if="activeTabData.title" class="text-h6">
        {{ activeTabData.title }}
      </h3>
    </LayoutHelper>
    <keep-alive>
      <ThumbnailCarousel
        :key="activeSeasonId"
        :initial-slide="
          activeSeasonId === initialSeasonId && initialEpisodeIndex
            ? initialEpisodeIndex
            : 0
        "
        :slides="activeTabData.episodes"
      />
    </keep-alive>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

import LayoutHelper from './../LayoutHelper/LayoutHelper.vue'
import ThumbnailCarousel from './../ThumbnailCarousel/ThumbnailCarousel.vue'

interface Episode {
  url: String
  publicationDate: any
}
interface Season {
  id: String
  seasonNumber: number
  episodes: Array<Episode>
}
export default defineComponent({
  name: 'PodcastSeriesCarousel',
  components: {
    LayoutHelper,
    ThumbnailCarousel,
  },
  props: {
    // the series data, including seasons and episode
    // check audioDetailPageQuery.js for available data
    series: {
      type: Object,
      required: false,
    },
    // Pass the id of the season that should be active. This is the id of the parent of the current episode page
    initialSeasonId: {
      type: String,
      required: false,
    },
  },
  data() {
    return {
      activeTabId: '',
    }
  },
  computed: {
    sortedSeasons(): Array<Object> | null {
      let seasons = null
      if (this.series && this.series.seasons) {
        seasons = this.series.seasons
        return seasons.sort(
          (a: Season, b: Season) => a.seasonNumber - b.seasonNumber
        )
      }
      return seasons
    },
    activeSeasonId(): string | null {
      if (this.activeTabId) {
        return this.activeTabId
      } else if (this.initialSeasonId) {
        return this.initialSeasonId
      } else if (this.series.seasons && this.series.seasons.length) {
        // default to the first one
        return this.series.seasons[0].id
      }
      return null
    },
    initialEpisodeIndex(): Number | null {
      let episodes = []
      if (this.activeSeasonId && this.$nuxt && this.$nuxt.$route.path) {
        episodes = this.series.seasons.find((o: Season) => {
          return o.id === this.activeSeasonId
        }).episodes
        return episodes.findIndex(
          (e: Episode) => (e.url as String) === this.$nuxt.$route.path
        )
      }
      return null
    },
    activeTabData(): Object {
      let season = {} as Season
      if (this.series && this.series.seasons) {
        if (this.activeSeasonId) {
          season = this.series.seasons.find((o: Season) => {
            return o.id === this.activeSeasonId
          })
        } else {
          season = this.series.seasons[0]
        }
        if (season.episodes) {
          season.episodes.sort(
            (a: Episode, b: Episode) =>
              new Date(a.publicationDate).getTime() -
              new Date(b.publicationDate).getTime()
          )
        }
      }
      return season
    },
  },
  methods: {
    updateActiveTab(id: string) {
      this.activeTabId = id
    },
  },
})
</script>
