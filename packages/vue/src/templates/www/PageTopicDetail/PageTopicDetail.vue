<template>
  <div
    v-if="data"
    class="-nav-offset"
  >
    <div class="lg:mb-24 mb-12">
      <HeroLarge
        class="relative z-10"
        :eyebrow="data.parentDisplayTitle"
        :title="data.displayTitle"
        :summary="data.strapline"
        :image="data.heroImage"
      />
      <TopicDetailMissionCarousel
        v-if="data.title || data.featuredMissions"
        class="lg:-mt-28 relative z-20 -mt-20"
        :related-missions-link-url="data.relatedMissionsLinkUrl"
        :related-missions-link-text="data.relatedMissionsLinkText"
        :items="data.featuredMissions"
      />
      <!-- as is, if description is blank it may actually have '\n' in it -->
      <LayoutHelper
        v-if="data.description.length > 2"
        indent="col-3"
        class="description lg:my-18 my-10"
      >
        <BaseHeading
          v-if="data.descriptionHeading"
          level="h2"
          class="mb-5"
        >
          {{ data.descriptionHeading }}
        </BaseHeading>
        <BlockText :text="data.description" />
      </LayoutHelper>

      <LayoutHelper
        v-if="data.leadNewsItem"
        indent="col-2"
        class="lg:mt-24 lg:mb-18 mt-16 mb-10"
      >
        <BlockTeaser
          label="Feature"
          :heading="data.leadNewsItem.title"
          button-text="Read more"
          :image="data.leadNewsItem.thumbnailImage"
          :full-width="false"
          :teaser-page="data.leadNewsItem"
        />
      </LayoutHelper>

      <TopicDetailStreamfield
        :data="data.body"
        :topic="data.title"
      />

      <TopicDetailMore
        v-if="
          (data.moreAboutTopic && data.moreAboutTopic.length) ||
          (data.moreAboutTopicCurated && data.moreAboutTopicCurated.length) ||
          data.missionHighlight
        "
        class="mb-20"
        :topic="data.title"
        :more="data.moreAboutTopic"
        :more-curated="data.moreAboutTopicCurated"
      >
        <TopicDetailMissionSpotlight
          v-if="data.missionHighlight"
          :data="data.missionHighlight"
        />
      </TopicDetailMore>
    </div>

    <div
      v-if="data.relatedTopics && data.relatedTopics.length"
      class="bg-gray-light lg:py-24 py-12"
    >
      <BlockLinkCarousel
        item-type="tiles"
        :heading="data.relatedTopicsHeading"
        :items="data.relatedTopics"
      />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import HeroLarge from './../../../components/HeroLarge/HeroLarge.vue'
import TopicDetailMissionCarousel from './../../../components/TopicDetailMissionCarousel/TopicDetailMissionCarousel.vue'
import TopicDetailMissionSpotlight from './../../../components/TopicDetailMissionSpotlight/TopicDetailMissionSpotlight.vue'
import TopicDetailMore from './../../../components/TopicDetailMore/TopicDetailMore.vue'
import LayoutHelper from './../../../components/LayoutHelper/LayoutHelper.vue'
import BaseHeading from './../../../components/BaseHeading/BaseHeading.vue'
import BlockText from './../../../components/BlockText/BlockText.vue'
import BlockTeaser from './../../../components/BlockTeaser/BlockTeaser.vue'
import TopicDetailStreamfield from './../../../components/TopicDetailStreamfield/TopicDetailStreamfield.vue'
import BlockLinkCarousel from './../../../components/BlockLinkCarousel/BlockLinkCarousel.vue'

export default defineComponent({
  name: 'PageTopicDetail',
  components: {
    HeroLarge,
    TopicDetailMissionCarousel,
    TopicDetailMissionSpotlight,
    TopicDetailMore,
    LayoutHelper,
    BaseHeading,
    BlockText,
    BlockTeaser,
    TopicDetailStreamfield,
    BlockLinkCarousel
  },
  props: {
    data: {
      type: Object,
      required: false
    }
  }
})
</script>
