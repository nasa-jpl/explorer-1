<template>
  <div
    v-if="series && activeTabData"
    class="PodcastSeriesCarousel"
  >
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
            :class="activeSeasonId === season.id ? 'border-jpl-red text-gray-dark' : 'border-white'"
            :aria-expanded="activeSeasonId === season.id ? 'true' : 'false'"
            @click="updateActiveTab(season.id)"
          >
            Season {{ season.seasonNumber }}
          </button>
        </li>
      </ul>
    </LayoutHelper>
    <!-- tab content -->
    <LayoutHelper
      indent="col-2"
      class="mb-4"
    >
      <h3
        v-if="activeTabData.title"
        class="text-h6"
      >
        {{ activeTabData.title }}
      </h3>
    </LayoutHelper>
    <keep-alive>
      <ThumbnailCarousel
        :key="activeSeasonId"
        :initial-slide="
          activeSeasonId === initialSeasonId && initialEpisodeIndex ? initialEpisodeIndex : 0
        "
        :slides="activeTabData.episodes as Partial<Slide>[]"
      />
    </keep-alive>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'
import type { PropType } from 'vue'
import type { ImageObject } from '../../interfaces'
import LayoutHelper from './../LayoutHelper/LayoutHelper.vue'
import ThumbnailCarousel from './../ThumbnailCarousel/ThumbnailCarousel.vue'

const route = useRoute()

interface Slide {
  url: string
  title: string
  thumbnailImage: Partial<ImageObject>
}

interface Episode {
  url: string
  title: string
  publicationDate: any
  thumbnailImage: Partial<ImageObject>
}

interface ActiveTab {
  title?: string
  episodes?: Episode[] | Season
}

interface Season {
  id: string
  url?: string
  title?: string
  seasonNumber?: number
  episodes?: Episode[]
}

interface Series {
  id: string
  title?: string
  url?: string
  seasons?: Season[]
}
export default defineComponent({
  name: 'PodcastSeriesCarousel',
  components: {
    LayoutHelper,
    ThumbnailCarousel
  },
  props: {
    // the series data, including seasons and episode
    // check audioDetailPageQuery.js for available data
    series: {
      type: Object as PropType<Series>,
      required: false
    },
    // Pass the id of the season that should be active. This is the id of the parent of the current episode page
    initialSeasonId: {
      type: String,
      required: false
    }
  },
  data() {
    return {
      activeTabId: ''
    }
  },
  computed: {
    sortedSeasons(): Season[] | undefined {
      let seasons = undefined
      if (this.series && this.series.seasons) {
        seasons = this.series.seasons
        // @ts-expect-error seasons is an array
        seasons = seasons.toSorted((a: Season, b: Season) => {
          if (a.seasonNumber && b.seasonNumber) {
            return a.seasonNumber - b.seasonNumber
          }
        })
        return seasons
      }
      return seasons
    },
    activeSeasonId(): string | undefined {
      if (this.activeTabId) {
        return this.activeTabId
      } else if (this.initialSeasonId) {
        return this.initialSeasonId
      } else if (this.series?.seasons?.length) {
        // default to the first one
        return this.series.seasons[0].id
      }
      return undefined
    },
    initialEpisodeIndex(): number | null {
      let episodes: Episode[] | undefined = undefined
      if (this.series?.seasons && this.activeSeasonId && route?.path) {
        episodes = this.series.seasons.find((o: Season) => {
          return o.id === this.activeSeasonId
        })?.episodes
        return episodes
          ? episodes.findIndex((e: Episode) => (e.url as String) === route.path)
          : null
      }
      return null
    },
    activeTabData(): ActiveTab | Season | undefined {
      let season
      if (this.series?.seasons?.length) {
        if (this.activeSeasonId) {
          season = this.series.seasons.find((o: Season) => {
            return o.id === this.activeSeasonId
          })
        } else {
          season = this.series.seasons[0]
        }
        if (season?.episodes?.length) {
          let episodes: Episode[] = season.episodes
          // @ts-expect-error episodes is an array
          episodes = episodes.toSorted((a: Episode, b: Episode) => {
            if (a.publicationDate && b.publicationDate) {
              return new Date(a.publicationDate).getTime() - new Date(b.publicationDate).getTime()
            }
          })
          season = {
            ...season,
            episodes: episodes
          }
        }
      }
      return season
    }
  },
  methods: {
    updateActiveTab(id: string) {
      this.activeTabId = id
    }
  }
})
</script>
