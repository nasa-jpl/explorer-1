<template>
  <div
    v-if="data"
    class="-nav-offset"
  >
    <!-- the visible rendition of this occurs further down the page, after other headings. The h1 needs to be the first heading -->
    <h1 class="sr-only">Jet Propulsion Laboratory</h1>

    <!-- main carousel -->
    <HomepageCarousel
      :duration="data.carouselSlideSpeed"
      :items="data.heroCarousel"
    />

    <!-- homepage stats -->
    <HomepageStats
      :statistics="data.statistics"
      :mission-count="data.statisticsMissionCount"
      :dsn="data.dsnWidget"
      :asteroid-watch="data.asteroidWatchWidget"
      :featured-embed="data.featuredEmbed"
    />

    <!-- featured video -->
    <HomepageEmbedBlock
      :data="data.featuredEmbed"
      class="lg:pt-8 lg:mt-12 pt-4 mt-16 -mb-5"
    />

    <!-- latest news // TODO: changed to Related Stories for EDL, need to change back to Latest News -->
    <BlockLinkCarousel
      v-if="theNews"
      item-type="cards"
      :heading="data.featuredNewsHeading || 'Latest News'"
      :items="theNews"
      class="lg:-mb-8 mt-20 -mb-3"
    />

    <!-- about JPL -->
    <template v-for="(block, index) in data.body">
      <template v-if="block.blockType == 'HomePageTeaserBlock'">
        <!-- text with optional card and cover image -->
        <HomepageTeaserBlock
          :key="index"
          class="lg:my-18 my-10"
          :data="block"
        />
      </template>
      <template v-else-if="block.blockType == 'QuoteBlock'">
        <LayoutHelper
          :key="index"
          indent="col-2"
          class="lg:my-18 my-10"
        >
          <BlockQuote :data="block" />
        </LayoutHelper>
      </template>
      <!-- blockquote -->
    </template>

    <!-- mission carousel -->
    <HomepageMissionsCarousel
      v-if="data.missionsCarousel && data.missionsCarousel.length"
      :data="data.missionsCarousel[0]"
      class="lg:my-18 my-10"
    />

    <!-- featured robot -->
    <HomepageFeaturedRobot
      v-if="data.featuredRobots && data.featuredRobots.length"
      class="lg:my-24 my-12"
      :data="data.featuredRobots[0].page"
    />

    <!-- engage -->
    <div
      v-if="data.relatedContent && data.relatedContent.length"
      class="bg-gray-light lg:py-24 lg:mt-24 py-12 mt-12"
    >
      <BlockLinkCarousel
        item-type="tiles"
        :heading="data.relatedContentHeading"
        :items="data.relatedContent"
      />
    </div>
    <!-- swimlane -->
    <SwimlaneCTA />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import HomepageCarousel from './../../../components/HomepageCarousel/HomepageCarousel.vue'
import HomepageFeaturedRobot from './../../../components/HomepageFeaturedRobot/HomepageFeaturedRobot.vue'
import HomepageTeaserBlock from './../../../components/HomepageTeaserBlock/HomepageTeaserBlock.vue'
import BlockLinkCarousel from './../../../components/BlockLinkCarousel/BlockLinkCarousel.vue'
import BlockQuote from './../../../components/BlockQuote/BlockQuote.vue'
import LayoutHelper from './../../../components/LayoutHelper/LayoutHelper.vue'
import SwimlaneCTA from './../../../components/SwimlaneCTA/SwimlaneCTA.vue'
import HomepageMissionsCarousel from './../../../components/HomepageMissionsCarousel/HomepageMissionsCarousel.vue'
import HomepageStats from './../../../components/HomepageStats/HomepageStats.vue'
import HomepageEmbedBlock from './../../../components/HomepageEmbedBlock/HomepageEmbedBlock.vue'

export default defineComponent({
  name: 'PageHomepage',
  components: {
    HomepageCarousel,
    HomepageFeaturedRobot,
    HomepageTeaserBlock,
    BlockLinkCarousel,
    BlockQuote,
    LayoutHelper,
    SwimlaneCTA,
    HomepageMissionsCarousel,
    HomepageStats,
    HomepageEmbedBlock
  },
  props: {
    data: {
      type: Object,
      required: false,
      default: undefined
    }
  },
  computed: {
    theNews(): any[] | undefined {
      // check first for featured news
      if (this.data?.featuredNews?.length) {
        return this.data.featuredNews
      } else if (this.data?.latestNews?.length) {
        return this.data.latestNews
      }
      return undefined
    }
  }
})
</script>
