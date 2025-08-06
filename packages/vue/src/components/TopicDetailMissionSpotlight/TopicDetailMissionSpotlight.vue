<template>
  <div
    v-if="data"
    class="TopicDetailMissionSpotlight max-w-screen-3xl relative mx-auto"
  >
    <div class="absolute inset-0 z-10 bg-black">
      <picture v-if="data.heroImage && data.heroImage.src">
        <source
          media="(min-width: 768px)"
          :srcset="data.heroImage.srcSet"
        />
        <source
          media="(min-width: 420px)"
          :srcset="data.heroImage.screenMd.url"
        />
        <source :srcset="data.heroImage.screenSm.url" />
        <img
          class="object-cover w-full h-full"
          :src="data.heroImage.src.url"
          :width="data.heroImage.src.width"
          :height="data.heroImage.src.height"
          :alt="data.heroImage.alt"
        />
      </picture>
    </div>
    <div class="content-wrapper lg:flex lg:items-center relative z-20 w-full h-full">
      <div
        class="bg-gradient-to-t lg:bg-gradient-to-l from-transparent-w25 lg:from-transparent xl:from-transparent-w25 to-transparent-black-75 lg:to-transparent-black-75 absolute inset-0"
      ></div>
      <div class="pb-80 lg:pb-14 relative w-full pt-8">
        <div class="lg:BaseGrid lg:pt-0 container mx-auto">
          <div
            class="lg:px-10 2xl:px-0 lg:pt-10 lg:pb-14 xl:col-end-6 col-start-1 col-end-10 px-4 pb-10"
          >
            <h2>
              <span class="text-gray-light-mid text-contrast text-subtitle block mb-3">
                {{ eyebrow }}
              </span>
              <div
                class="lg:text-9xl md:text-8xl text-7xl lg:tracking-tight lg:leading-tighter text-contrast mb-4 font-medium leading-tight text-white"
              >
                {{ data.title }}
              </div>
            </h2>
            <p
              class="text-body-lg lg:mb-10 text-contrast mb-5 font-normal leading-normal text-white"
            >
              {{ data.summary }}
            </p>
            <BaseButton
              variant="primary"
              :to="data.url"
              >Explore</BaseButton
            >
          </div>
        </div>
        <MissionDetailStatsMini
          v-if="data.showClock || data.showDistance"
          :show-clock="data.showClock"
          :show-distance="data.showDistance"
          :clock-type="data.clockType"
          :start-date-time="data.startDateTime"
          :distance-type="data.distanceType"
          :distance-value="data.distanceValue"
          :distance-api-urls="data.distanceApiUrls"
        />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import MissionDetailStatsMini from './../MissionDetailStats/MissionDetailStatsMini.vue'
import BaseButton from './../BaseButton/BaseButton.vue'

export default defineComponent({
  name: 'TopicDetailMissionSpotlight',
  components: {
    MissionDetailStatsMini,
    BaseButton
  },
  props: {
    data: {
      type: Object,
      required: false
    }
  },
  data() {
    return {
      eyebrow: 'Mission Spotlight'
    }
  }
})
</script>
<style lang="scss">
@import '@explorer-1/common/src/scss/components/TopicDetailMissionSpotlight';
</style>
