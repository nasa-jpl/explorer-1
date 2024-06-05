<template>
  <div class="MissionDetailStatsMini MixedBleedGrid">
    <div class="theme col-start-bleed col-end-container-start"></div>
    <div class="col-start-container col-end-container text-body-lg">
      <div class="grid grid-cols-12">
        <div
          v-if="showClock && startDateTime"
          class="theme-inner lg:col-span-4 xl:col-span-4 2xl:col-span-3 sm:col-span-7 col-span-11"
        >
          <p class="text-jpl-aqua text-subtitle mb-3">
            {{ clockTypeLabel }}
          </p>
          <BaseTimer
            :target-date-time="startDateTime"
            :countdown="clockType === 'countdown'"
          />
        </div>

        <DistanceStats
          v-if="showDistance"
          class="theme-inner lg:col-span-4 xl:col-span-4 2xl:col-span-3 sm:col-span-7 col-span-11"
          :distance-type="distanceType as DistanceType"
          :value="distanceValue"
          value-system="imperial"
          :distance-api-urls="distanceApiUrls"
        >
          <template #label="slotProps">
            <p class="text-jpl-aqua text-subtitle mb-3">
              {{ slotProps.label }}
            </p>
          </template>
          <template #value="slotProps">
            <span class="text-stats-xl">{{ slotProps.formattedValue }}</span>
          </template>
        </DistanceStats>
        <div class="lg:block hidden col-span-1"></div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import type { PropType } from 'vue'
import { defineComponent } from 'vue'
import DistanceStats from './DistanceStats.vue'
import type { DistanceType } from './DistanceStats.vue'
import { clockTypes, ClockType } from './MissionDetailStats.vue'
import BaseTimer from './../BaseTimer/BaseTimer.vue'

/**
 * Displays mission-related metrics or metadata. All fields optional.
 */
export default defineComponent({
  name: 'MissionDetailStatsMini',
  components: {
    BaseTimer,
    DistanceStats,
  },
  props: {
    showClock: Boolean,
    clockType: {
      type: String as PropType<ClockType>,
      required: true,
      validator: (val: ClockType): boolean => Boolean(clockTypes[val]),
    },
    startDateTime: String,
    showDistance: Boolean,
    distanceType: {
      type: String as PropType<DistanceType | ''>,
    },
    distanceValue: Number,
    distanceApiUrls: String,
  },
  computed: {
    clockTypeLabel(): string {
      return clockTypes[this.clockType as ClockType] || this.clockType
    },
  },
})
</script>
<style lang="scss">
.MissionDetailStatsMini {
  .theme,
  .theme-inner {
    @apply bg-dark-blue bg-opacity-75 text-white;
  }
  // different padding left for first child, which is dynamic
  .theme-inner {
    @apply pl-10 pb-10;
    @screen lg {
      @apply py-10 pl-0;
    }

    &:first-child {
      @apply pt-10;
      @screen lg {
        @apply pl-10;
      }
      @screen 2xl {
        @apply pl-0;
      }
    }
  }

  .legend {
    @apply text-white;
  }
}
</style>
