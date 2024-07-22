<template>
  <div
    v-if="data"
    class="ThemeVariantLight"
    :class="{ '-nav-offset': data.heroImage }"
  >
    <!-- hero image -->
    <HeroMedia
      v-if="data.heroImage"
      class="md:mb-12 lg:mb-18 mb-10"
      :image="data.heroImage"
      :caption="data.heroImageCaption"
      :display-caption="!data.heroImageCaption ? false : true"
    />

    <!-- page headline -->
    <LayoutHelper
      indent="col-1"
      class="3xl:px-0 lg:mt-12 px-5 mx-auto mt-5 mb-5 lg:mb-10"
    >
      <DetailHeadline
        :title="data.title"
        :publication-date="data.publicationDate"
        label="Podcast Series"
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
          class="align-end flex text-2xl font-secondary font-semibold tracking-wider"
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
            <span class="flex items-center">
              <IconList />
            </span>
          </button>
        </div>
      </div>
    </LayoutHelper>

    <LayoutHelper
      v-if="sortedSeasons && sortedSeasons.length"
      indent="col-2"
      class="border-gray-mid lg:mb-24 pt-10 mb-12 border-t"
    >
      <section aria-label="Podcast Seasons">
        <template v-if="!showGridView">
          <SearchResultCard
            v-for="season of sortedSeasons"
            :key="season.id"
            :type="season.parent.title"
            :topic="season.title"
            :url="season.url"
            :image="season.thumbnailImage"
            :title="season.subtitle"
            :summary="season.summary"
            :date="
              // @ts-ignore
              $filters.displayDate(season.firstPublishedAt)
            "
            heading-level="h2"
          />
        </template>
        <template v-else>
          <div class="md:grid grid-cols-12 gap-10">
            <div
              v-for="season of sortedSeasons"
              :key="season.id"
              class="col-span-6 lg:col-span-4"
            >
              <SearchResultGridItem
                :type="season.parent.title"
                :topic="season.title"
                :url="season.url"
                :image="season.thumbnailImage"
                :title="season.title"
                :summary="season.summary"
                :date="
                  // @ts-ignore
                  $filters.displayDate(season.firstPublishedAt)
                "
                heading-level="h2"
              />
            </div>
          </div>
        </template>
      </section>
    </LayoutHelper>

    <!-- related links -->
    <LayoutHelper
      v-if="data.relatedLinks && data.relatedLinks.length"
      indent="col-2"
      class="lg:mb-18 mb-10 -mt-5"
    >
      <BlockRelatedLinks :data="data.relatedLinks[0]" />
    </LayoutHelper>

    <div
      v-if="data.relatedPodcasts && data.relatedPodcasts.length"
      class="bg-gray-light lg:py-24 lg:mt-24 py-12 mt-12"
    >
      <BlockLinkCarousel
        item-type="tiles"
        heading="Explore Other Podcasts"
        :items="data.relatedPodcasts"
      />
    </div>
  </div>
</template>
<script>
import { defineComponent } from 'vue'
import { mapStores } from 'pinia'
import { useSearchStore } from './../../../store/search.ts'
import HeroMedia from './../../../components/HeroMedia/HeroMedia.vue'
import IconGrid from './../../../components/Icons/IconGrid.vue'
import IconList from './../../../components/Icons/IconList.vue'
import DetailHeadline from './../../../components/DetailHeadline/DetailHeadline.vue'
import SearchResultCard from './../../../components/SearchResultCard/SearchResultCard.vue'
import SearchResultGridItem from './../../../components/SearchResultGridItem/SearchResultGridItem.vue'
import LayoutHelper from './../../../components/LayoutHelper/LayoutHelper.vue'
import BlockRelatedLinks from './../../../components/BlockRelatedLinks/BlockRelatedLinks.vue'
import BlockText from './../../../components/BlockText/BlockText.vue'
import BlockLinkCarousel from './../../../components/BlockLinkCarousel/BlockLinkCarousel.vue'

export default defineComponent({
  name: 'PagePodcast',
  components: {
    HeroMedia,
    DetailHeadline,
    SearchResultCard,
    SearchResultGridItem,
    LayoutHelper,
    BlockRelatedLinks,
    BlockText,
    BlockLinkCarousel,
    IconGrid,
    IconList
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
      isGallery: true
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
    },
    sortedSeasons() {
      let seasons = null
      if (this.data && this.data.seasons) {
        seasons = this.data.seasons
        return seasons.sort((a, b) => a.seasonNumber - b.seasonNumber)
      }
      return seasons
    }
  }
})
</script>
