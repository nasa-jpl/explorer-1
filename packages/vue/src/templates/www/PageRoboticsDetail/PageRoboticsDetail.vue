<template>
  <div
    v-if="data"
    class="-nav-offset"
  >
    <HeroLarge
      eyebrow="Robotics at JPL"
      :title="data.title"
      :summary="data.description"
      :image="data.heroImage"
    />
    <RoboticsDetailStats
      :mass="data.mass"
      :height="data.height"
      :speed="data.speed"
      :status="data.status"
      :date="data.date"
      :animal-analog-name="data.animalAnalogName"
      :animal-analog-icon="data.animalAnalogIcon"
      :robot-destinations="data.robotDestinations"
      :alternative-stats="data.alternativeStats"
      class="mb-20"
    />
    <!-- Facts -->

    <!-- Introduction -->
    <div class="lg:BaseGrid lg:my-24 mt-18 container mx-auto mb-10">
      <div class="lg:px-0 relative col-span-8 col-start-2 px-4">
        <BaseHeading
          level="h2"
          class="mb-5"
          >About {{ data.title }}
        </BaseHeading>
        <p class="text-body-lg">
          {{ data.introduction }}
        </p>
      </div>
      <!-- facts -->
      <BlockCardGroup
        v-if="data.facts"
        class="3xl:col-end-13 xl:col-end-11 md:px-4 lg:px-0 relative col-start-2 col-end-13 px-0 mt-12"
        :facts="data.facts"
      />
    </div>

    <!-- Streamfield -->
    <BlockStreamfield :data="data.body" />

    <!-- Related Links -->
    <LayoutHelper
      v-if="data.relatedLinks && data.relatedLinks.length"
      indent="col-2"
      class="my-18"
    >
      <BlockRelatedLinks :data="data.relatedLinks[0]" />
    </LayoutHelper>

    <!-- More Robots -->
    <div
      v-if="data.moreRobots && data.moreRobots.length"
      class="bg-gray-light lg:py-24 py-12 mt-24"
    >
      <BlockLinkCarousel
        item-type="tiles"
        heading="More Robots"
        :items="data.moreRobots"
      />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import BaseHeading from './../../../components/BaseHeading/BaseHeading.vue'
import HeroLarge from './../../../components/HeroLarge/HeroLarge.vue'
import RoboticsDetailStats from './../../../components/RoboticsDetailStats/RoboticsDetailStats.vue'
import BlockCardGroup from './../../../components/BlockCardGroup/BlockCardGroup.vue'
import BlockRelatedLinks from './../../../components/BlockRelatedLinks/BlockRelatedLinks.vue'
import BlockLinkCarousel from './../../../components/BlockLinkCarousel/BlockLinkCarousel.vue'
import LayoutHelper from './../../../components/LayoutHelper/LayoutHelper.vue'
import BlockStreamfield from './../../../components/BlockStreamfield/BlockStreamfield.vue'

export default defineComponent({
  name: 'PageRoboticsDetail',
  components: {
    BaseHeading,
    HeroLarge,
    RoboticsDetailStats,
    BlockCardGroup,
    BlockRelatedLinks,
    BlockLinkCarousel,
    LayoutHelper,
    BlockStreamfield
  },
  props: {
    data: {
      type: Object,
      required: false
    }
  }
})
</script>
