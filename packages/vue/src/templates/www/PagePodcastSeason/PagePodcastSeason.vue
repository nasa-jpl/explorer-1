<template>
  <div
    v-if="data"
    class="ThemeVariantLight PagePodcastSeason"
    :class="{ '-nav-offset': data.featuredEpisode }"
  >
    <!-- hero image -->
    <div class="max-w-screen-3xl md:mb-12 lg:mb-18 mx-auto mb-10">
      <HeroMedium
        v-if="data.featuredEpisode"
        :custom-label="data.label"
        :feature="data.featuredEpisode"
        :custom-image="data.listingPageHeroImage"
        cta="Listen Now"
      />
    </div>

    <!-- page headline -->
    <LayoutHelper
      indent="col-1"
      class="3xl:px-0 lg:mt-12 px-5 mx-auto mt-5 mb-5 lg:mb-10"
    >
      <DetailHeadline
        :title="data.title"
        :publication-date="data.publicationDate"
        label="Podcast Season"
        schema
      />
      <BlockText
        v-if="data.summary"
        :text="data.summary"
        variant="medium"
        class="lg:w-2/3 mt-5"
      />
    </LayoutHelper>

    <LayoutHelper>
      <div class="col-span-12 pb-2 justify-end flex flex-row pr-0.5">
        <!-- toggle gallery view -->
        <div
          v-if="allowGridView"
          class="align-end flex text-2xl"
        >
          <button
            class="lg:ml-6"
            :class="
              showGridView
                ? 'text-theme-red cursor-default'
                : 'text-gray-mid can-hover:hover:text-theme-red-hover cursor-pointer'
            "
            :aria-label="showGridView ? 'Grid View (enabled)' : 'Grid View'"
            :disabled="showGridView"
            @click="
              isGallery
                ? searchStore.updateGridViewForPodcasts(true)
                : searchStore.updateGridView(true)
            "
          >
            <span class="flex items-center">
              <IconGrid />
            </span>
          </button>
          <button
            class="ml-3"
            :class="
              !showGridView
                ? 'text-theme-red cursor-default'
                : 'text-gray-mid can-hover:hover:text-theme-red-hover cursor-pointer'
            "
            :aria-label="!showGridView ? 'List View (enabled)' : 'List View'"
            :disabled="!showGridView"
            @click="
              isGallery
                ? searchStore.updateGridViewForPodcasts(false)
                : searchStore.updateGridView(false)
            "
          >
            <span class="flex items-center flip-horizontal">
              <IconList />
            </span>
          </button>
        </div>
      </div>
    </LayoutHelper>

    <LayoutHelper
      v-if="data.episodes && data.episodes.length"
      indent="col-2"
      class="border-gray-mid lg:mb-24 pt-10 mb-12 border-t"
    >
      <section aria-label="Podcast Episodes">
        <template v-if="!showGridView">
          <SearchResultCard
            v-for="episode of data.episodes"
            :key="episode.id"
            :type="episode.series.title"
            :topic="data.title"
            :url="episode.url"
            :image="episode.thumbnailImage"
            :title="episode.title"
            :summary="episode.summary"
            :media="episode.uploadedMedia ? episode.uploadedMedia.file : null"
            :date="$filters.displayDate(episode.publicationDate)"
            :is-podcast-season="isPodcastSeason"
            heading-level="h2"
          />
        </template>
        <template v-else>
          <div class="md:grid grid-cols-12 gap-10">
            <div
              v-for="episode of data.episodes"
              :key="episode.id"
              class="col-span-6 lg:col-span-4"
            >
              <SearchResultGridItem
                :type="episode.title"
                :url="episode.url"
                :image="episode.thumbnailImage"
                :title="episode.title"
                :summary="episode.summary"
                :date="$filters.displayDate(episode.firstPublishedAt)"
                heading-level="h2"
              />
            </div>
          </div>
        </template>
      </section>
    </LayoutHelper>
  </div>
</template>
<script>
import { defineComponent } from 'vue'
import { mapStores } from 'pinia'
import { useSearchStore } from '../../../store/search'
import HeroMedium from './../../../components/HeroMedium/HeroMedium.vue'
import IconGrid from './../../../components/Icons/IconGrid.vue'
import IconList from './../../../components/Icons/IconList.vue'
import SearchResultGridItem from './../../../components/SearchResultGridItem/SearchResultGridItem.vue'
import SearchResultCard from './../../../components/SearchResultCard/SearchResultCard.vue'
import LayoutHelper from './../../../components/LayoutHelper/LayoutHelper.vue'
import BlockText from './../../../components/BlockText/BlockText.vue'
import DetailHeadline from './../../../components/DetailHeadline/DetailHeadline.vue'

export default defineComponent({
  name: 'PagePodcastSeason',
  components: {
    HeroMedium,
    SearchResultCard,
    SearchResultGridItem,
    IconGrid,
    IconList,
    LayoutHelper,
    BlockText,
    DetailHeadline
  },
  props: {
    data: {
      type: Object,
      required: false
    }
  },
  data() {
    return {
      allowGridView: true,
      defaultShowGridView: false,
      isGallery: false,
      isPodcastSeason: true
    }
  },
  computed: {
    ...mapStores(useSearchStore),
    showGridView() {
      if (this.isGallery) {
        if (this.searchStore.showGridViewForPodcasts !== undefined) {
          return this.searchStore.showGridViewForPodcasts
        }
      } else if (this.searchStore.showGridView !== undefined) {
        return this.searchStore.showGridView
      }
      return this.defaultShowGridView
    }
  }
})
</script>

<style lang="scss">
@import '@explorer-1/common/src/scss/templates/PagePodcastSeason';
</style>
