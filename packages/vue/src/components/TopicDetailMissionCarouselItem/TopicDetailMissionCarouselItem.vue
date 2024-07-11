<template>
  <nuxt-link
    v-if="data"
    :to="data.url"
    class="TopicDetailMissionCarouselItem ThemeVariantLight group block cursor-pointer"
  >
    <div
      class="can-hover:group-hover:scale-105 relative transition-transform duration-200 ease-in transform scale-100"
    >
      <div class="min-h-66 bg-black">
        <BaseImagePlaceholder
          v-if="data.thumbnailImage && data.thumbnailImage.src"
          aspect-ratio="7:8"
          dark-mode
          no-logo
        >
          <BaseImage
            :src="data.thumbnailImage.src.url"
            :width="data.thumbnailImage.src.width"
            :height="data.thumbnailImage.src.height"
            alt=""
            object-fit-class="cover"
            image-class="w-full h-full"
            loading="lazy"
          />
        </BaseImagePlaceholder>
        <div
          class="gradient-overlay bg-gradient-to-b from-transparent to-black min-h-1/2 absolute inset-x-0 bottom-0"
        ></div>
      </div>
      <div class="absolute inset-x-0 bottom-0">
        <div class="text-contrast p-4 text-white">
          <p
            v-if="data.title"
            class="mb-1 text-xl font-semibold leading-tight"
          >
            {{ data.title }}
          </p>
          <p
            v-if="data.status || data.showClock"
            class="text-subtitle text-jpl-blue-light"
          >
            <span class="sr-only">.</span>
            <template v-if="data.showClock">
              {{ clockTypeLabel || data.status }}
            </template>
            <template v-else>
              {{ data.status }}
            </template>
            <span class="sr-only">.</span>
          </p>
        </div>
        <MissionDetailStatsMicro
          v-if="data.showClock"
          class="-mt-1"
          :show-clock="data.showClock"
          :clock-type="data.clockType"
          :start-date-time="data.startDateTime"
        />
      </div>
    </div>
  </nuxt-link>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { clockTypes } from '../MissionDetailStats/MissionDetailStats.vue'
import type { ClockType } from '../MissionDetailStats/MissionDetailStats.vue'
import type { PropType } from 'vue'
import type { ImageObject } from '../../interfaces'
import MissionDetailStatsMicro from './../MissionDetailStats/MissionDetailStatsMicro.vue'
import BaseImage from './../BaseImage/BaseImage.vue'
import BaseImagePlaceholder from './../BaseImagePlaceholder/BaseImagePlaceholder.vue'

export interface Slide {
  clockType: ClockType
  showClock: boolean
  startDateTime: string
  status: string
  thumbnailImage: Partial<ImageObject>
  title: string
  url: string
}

export default defineComponent({
  name: 'TopicDetailMissionCarouselItem',
  components: {
    MissionDetailStatsMicro,
    BaseImage,
    BaseImagePlaceholder
  },
  props: {
    data: {
      type: Object as PropType<Slide>,
      required: false
    }
  },
  computed: {
    clockTypeLabel(): string {
      return clockTypes[this.data?.clockType as ClockType] || this.data?.clockType
    }
  }
})
</script>
