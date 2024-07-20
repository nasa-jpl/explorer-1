<template>
  <div
    v-if="data"
    class="-nav-offset"
  >
    <div :class="theTheme">
      <MissionDetailHero
        :title="data.title"
        :subtitle="data.subtitle"
        :summary="data.summary"
        :template-style="data.templateStyle"
        :mission-website-url="data.missionWebsiteUrl"
        :instrument-image="data.instrumentImage"
        :instrument-background="data.instrumentBackground"
        :hero-fallback="data.heroImage"
      />
      <MissionDetailStats
        :show-clock="data.showClock"
        :show-distance="data.showDistance"
        :clock-type="data.clockType"
        :start-date-time="data.startDateTime"
        :distance-type="data.distanceType"
        :distance-value="data.distanceValue"
        :distance-api-urls="data.distanceApiUrls"
        :display-date="data.displayDate"
        :mission-types="data.missionTypes"
        :mission-targets="data.missionTargets"
        :status="data.status"
      />
      <MissionDetailAbout
        class="py-10"
        :description-heading="data.descriptionHeading"
        :description="data.description"
        :instruments="data.instruments"
      />
      <!-- 3D model -->
      <MissionDetailHighlights
        v-if="data.highlights && data.highlights.length"
        :animation="data.showHighlightsAnimation"
        :graphic="data.highlightsGraphic"
        :heading="data.highlightsHeading"
        :mission-title="data.title"
        :highlights="data.highlights"
      />
      <!-- Mission Streamfield (text and image, blockquote) -->
      <MissionDetailStreamfield
        v-if="data.feature && data.feature.length"
        class="pt-10"
        :class="{ 'pb-10': data.templateStyle === 'dark' }"
        :data="data.feature"
      />
    </div>
    <!-- Related Pages, data returned only if a topic is assigned -->
    <BlockLinkCarousel
      item-type="cards"
      class="lg:mt-24 mt-18 lg:mb-18 mb-10"
      :heading="moreAboutTopicHeading"
      :items="data.relatedPages"
    />
    <!-- Related Links -->
    <LayoutHelper
      v-if="data.relatedLinks && data.relatedLinks.length"
      indent="col-2"
      class="lg:mb-18 mb-10"
    >
      <BlockRelatedLinks :data="data.relatedLinks[0]" />
    </LayoutHelper>
    <!-- Other Missions -->
    <div
      v-if="data.otherMissions && data.otherMissions.length"
      class="bg-gray-light lg:py-24 lg:mt-24 py-12 mt-12"
    >
      <BlockLinkCarousel
        item-type="tiles"
        heading="Explore Other Missions"
        :items="data.otherMissions"
      />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import MissionDetailHighlights from './../../../components/MissionDetailHighlights/MissionDetailHighlights.vue'
import MissionDetailHero from './../../../components/MissionDetailHero/MissionDetailHero.vue'
import MissionDetailAbout from './../../../components/MissionDetailAbout/MissionDetailAbout.vue'
import MissionDetailStats from './../../../components/MissionDetailStats/MissionDetailStats.vue'
import MissionDetailStreamfield from './../../../components/MissionDetailStreamfield/MissionDetailStreamfield.vue'
import BlockRelatedLinks from './../../../components/BlockRelatedLinks/BlockRelatedLinks.vue'
import BlockLinkCarousel from './../../../components/BlockLinkCarousel/BlockLinkCarousel.vue'
import LayoutHelper from './../../../components/LayoutHelper/LayoutHelper.vue'

interface dataShape {
  templateStyle: string
}
export default defineComponent({
  name: 'PageMissionDetail',
  components: {
    MissionDetailHighlights,
    MissionDetailHero,
    MissionDetailAbout,
    MissionDetailStats,
    MissionDetailStreamfield,
    BlockRelatedLinks,
    BlockLinkCarousel,
    LayoutHelper
  },
  props: {
    data: {
      type: Object,
      required: false
    }
  },
  computed: {
    theTheme() {
      if ((this.data as dataShape).templateStyle === 'dark') {
        return 'ThemeVariantDark bg-black'
      }
      return 'ThemeVariantLight'
    },
    moreAboutTopicHeading() {
      const { topicLabels } = this.data
      if (!topicLabels || topicLabels.length === 0) {
        return 'More'
      }
      if (topicLabels.length === 1) {
        return `More about ${topicLabels[0]}`
      }
      const last = topicLabels[topicLabels.length - 1]
      const firsts = topicLabels.slice(0, topicLabels.length - 1).join(', ')
      return `More about ${firsts} and ${last}`
    }
  }
})
</script>
