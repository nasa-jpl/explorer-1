<template>
  <div
    class="MissionDetailStats MixedBleedGrid lg:relative lg:z-20 lg:-mt-20 lg:pl-0 lg:mb-20 pl-4 mb-12"
  >
    <h2 class="sr-only">Mission Statistics</h2>
    <div
      class="theme col-start-indent-col-2 col-end-container lg:py-12 lg:px-0 text-body-lg px-8 py-10 pr-0"
    >
      <div
        class="gap-y-10 grid grid-cols-10"
        :class="{ 'adaptive-stats-grid 2xl:grid-cols-11': showClock }"
      >
        <div class="lg:block hidden col-span-1 row-span-2"></div>
        <div
          v-if="showClock && startDateTime"
          class="lg:col-span-6 col-span-10"
        >
          <p class="label text-subtitle">{{ clockTypeLabel }}</p>
          <BaseTimer
            :target-date-time="startDateTime"
            :selected-units="['years', 'months', 'days', 'hours', 'minutes', 'seconds']"
            :countdown="clockType === 'countdown'"
          />
        </div>

        <DistanceStats
          v-if="showDistance"
          class="lg:col-span-3 col-span-10"
          :distance-type="distanceType"
          :value="distanceValue"
          value-system="imperial"
          :distance-api-urls="distanceApiUrls"
        >
          <template #label="slotProps">
            <p class="label text-subtitle">{{ slotProps.label }}</p>
          </template>
          <template #value="slotProps">
            <span class="text-stats-xl">{{ slotProps.formattedValue }}</span>
          </template>
        </DistanceStats>
        <div
          v-if="displayDate"
          class="lg:col-span-2 col-span-5"
        >
          <p class="label text-subtitle">Launch Date</p>
          <p>{{ displayDate }}</p>
        </div>
        <div
          v-if="missionTypes.length > 0"
          class="lg:col-span-2 col-span-5"
        >
          <p class="label text-subtitle">Type</p>
          {{ missionTypes.map((t) => t.missionType).join(', ') }}
        </div>
        <div
          v-if="missionTargets.length > 0"
          class="lg:col-span-2 col-span-5"
        >
          <p class="label text-subtitle">Target</p>
          {{ missionTargets.map((t) => t.target).join(', ') }}
        </div>
        <div
          v-if="status !== 'draft'"
          class="lg:col-span-2 col-span-5"
        >
          <p class="label text-subtitle">Status</p>
          {{ statusLabel }}
        </div>
      </div>
    </div>
    <div class="theme col-start-container-end col-end-bleed"></div>
  </div>
</template>
<script lang="ts">
import type { PropType } from 'vue'
import { defineComponent } from 'vue'
import DistanceStats from './DistanceStats.vue'
import type { DistanceType } from './DistanceStats.vue'
import BaseTimer from './../BaseTimer/BaseTimer.vue'

// https://github.com/nasa-jpl/www-backend/blame/develop/cms/missions/choices.py
export const statuses = {
  draft: 'Select status',
  current: 'Current',
  future: 'Future',
  proposed: 'Proposed',
  past: 'Past'
} as const
type Status = keyof typeof statuses
type StatusLabel = (typeof statuses)[Status]

export const clockTypes = {
  countdown: 'Countdown',
  time_in_orbit: 'Time in Orbit',
  time_on_mars: 'Time on Mars',
  time_to_mars: 'Time to Mars',
  time_to_dest: 'Time to Destination'
} as const
export type ClockType = keyof typeof clockTypes

/**
 * Displays mission-related metrics or metadata. All fields optional.
 */
export default defineComponent({
  name: 'MissionDetailStats',
  components: {
    BaseTimer,
    DistanceStats
  },
  props: {
    showClock: Boolean,
    clockType: {
      type: String as PropType<ClockType>,
      required: true,
      validator: (val: ClockType): boolean => Boolean(clockTypes[val])
    },
    startDateTime: String,
    displayDate: {
      type: String || null,
      required: false
    },
    missionTypes: {
      type: Array as PropType<{ missionType: string }[]>,
      required: true,
      default: () => []
    },
    missionTargets: {
      type: Array as PropType<{ target: string }[]>,
      required: true,
      default: () => []
    },
    status: {
      type: String as PropType<Status>,
      required: true,
      validator: (val: Status): boolean => Boolean(statuses[val])
    },
    showDistance: Boolean,
    distanceType: {
      type: String as PropType<DistanceType | ''>,
      required: false,
      default: ''
    },
    distanceValue: Number,
    distanceApiUrls: String
  },
  computed: {
    clockTypeLabel(): string {
      return clockTypes[this.clockType as ClockType] || this.clockType
    },
    statusLabel(): StatusLabel | Status {
      return statuses[this.status as Status] || this.status
    }
  }
})
</script>
<style lang="scss">
.MissionDetailStats {
  .adaptive-stats-grid div:nth-child(3) {
    @apply col-span-3;
  }

  .theme {
    @apply bg-gray-light text-gray-dark;
  }

  .ThemeVariantDark & .theme {
    @apply bg-dark-blue bg-opacity-75 text-white;
  }

  .label {
    @apply font-semibold mb-3 text-jpl-red-dark;
  }

  .ThemeVariantDark & .label {
    @apply text-jpl-aqua;
  }

  .legend {
    @apply text-gray-mid-dark;
  }

  .ThemeVariantDark & .legend {
    @apply text-white;
  }
}
</style>
