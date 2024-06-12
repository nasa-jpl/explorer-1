<template>
  <div
    v-if="hasContent"
    class="RoboticsDetailStats MixedBleedGrid lg:pl-0 relative z-20 pl-4 -mt-12 overflow-hidden"
  >
    <h2 class="sr-only">Robot Statistics</h2>
    <div class="lg:block bg-gray-light col-start-indent-col-2 col-end-indent-col-3 hidden"></div>
    <div
      class="bg-gray-light text-gray-dark col-start-indent-col-3 col-end-container lg:py-12 lg:px-0 text-body-lg lg:gap-x-6 gap-y-8 lg:gap-y-0 grid grid-cols-10 px-8 py-10 pr-0"
    >
      <div class="gap-y-10 lg:col-end-9 grid grid-cols-8 col-start-1 col-end-11 gap-6">
        <!-- We want to fit 3 items per row if possible, so third items only span two columns. -->
        <div
          v-for="(stat, i) in allStats"
          :key="i"
          class="col-span-4"
          :class="(i + 1) % 3 === 0 ? 'lg:col-span-2' : 'lg:col-span-3'"
        >
          <p class="label text-subtitle">{{ stat.metricLabel }}</p>
          <p>
            <span :class="{ 'text-stats-xl': !isNaN(stat.metricValue) }">
              {{ stat.metricValue }}
            </span>
            <span class="text-body-xs text-gray-mid-dark uppercase">{{
              unitLabel(stat.metricUnit)
            }}</span>
          </p>
        </div>
        <div
          v-if="status !== ''"
          class="lg:col-span-3 col-span-4"
        >
          <p class="label text-subtitle">Status</p>
          {{ status }}
        </div>
        <div
          v-if="robotDestinations.length > 0"
          class="lg:col-span-4 col-span-8"
        >
          <p class="label text-subtitle">Potential Destinations</p>
          {{ robotDestinations.map((d) => d.destination).join(', ') }}
        </div>
      </div>
      <div
        v-if="animalAnalogIcon && animalAnalogIcon.src"
        class="lg:col-span-2 lg:row-span-2 lg:text-left gap-y-8 col-span-10 -ml-8 text-center"
      >
        <picture class="block">
          <source
            :srcset="animalAnalogIcon.webp.url"
            type="image/webp"
          />
          <img
            class="lg:mx-0 mx-auto bg-white rounded-full"
            :src="animalAnalogIcon.src.url"
            width="160"
            height="160"
            alt=""
          />
        </picture>
        <p
          v-if="animalAnalogName"
          class="text-subtitle mt-4"
        >
          {{ `Animal Analog: ${animalAnalogName}` }}
        </p>
      </div>
    </div>
    <div class="bg-gray-light col-start-container-end col-end-bleed sm:block hidden"></div>
  </div>
</template>
<script lang="ts">
// @ts-nocheck
import type { PropType } from 'vue'
import { defineComponent } from 'vue'

export const metricUnits = {
  unitless: '',
  gram: 'Gram',
  grams: 'Grams',
  kilogram: 'Kilogram',
  kilograms: 'Kilograms',
  meter: 'Meter',
  meters: 'Meters',
  kilometer: 'Kilometer',
  kilometers: 'Kilometers',
  'm/s': 'm/s'
} as const
export type MetricUnit = keyof typeof metricUnits
export type MetricUnitLabel = (typeof metricUnits)[MetricUnit]

export type AlternativeStat = {
  metricLabel: string
  metricValue: number
  metricUnit: MetricUnit
}

/**
 * Displays robot-related metrics or metadata. All fields optional.
 */
export default defineComponent({
  name: 'RoboticsDetailStats',
  components: {},
  props: {
    mass: Number,
    height: Number,
    speed: Number,
    // status strings provided by https://github.com/nasa-jpl/www-backend/blob/0b2f934d0c1e3c09a52dbe42fe462f162c9f929b/cms/robotics/models.py#L262
    status: {
      type: String
    },
    animalAnalogIcon: {
      type: Object as PropType<{ src: { url: string }; webp: { url: string } } | null>
    },
    animalAnalogName: String,
    robotDestinations: {
      type: Array as PropType<{ destination: string }[]>,
      required: true
    },
    alternativeStats: {
      type: Array as PropType<AlternativeStat[]>,
      required: true
    }
  },
  computed: {
    hasContent(): boolean {
      return Boolean(
        this.allStats.length > 0 ||
          this.status !== '' ||
          this.robotDestinations.length > 0 ||
          this.animalAnalogIcon
      )
    },
    allStats(): AlternativeStat[] {
      const baseStats: AlternativeStat[] = []

      if (this.mass || this.mass === 0) {
        if (this.mass === 1) {
          baseStats.push({
            metricLabel: 'Mass',
            metricValue: this.mass,
            metricUnit: 'gram'
          })
        } else if (this.mass === 1000) {
          baseStats.push({
            metricLabel: 'Mass',
            metricValue: this.mass / 1000,
            metricUnit: 'kilogram'
          })
        } else if (this.mass > 1000) {
          baseStats.push({
            metricLabel: 'Mass',
            metricValue: this.mass / 1000,
            metricUnit: 'kilograms'
          })
        } else {
          baseStats.push({
            metricLabel: 'Mass',
            metricValue: this.mass,
            metricUnit: 'grams'
          })
        }
      }

      if (this.height || this.height === 0) {
        if (this.height === 1) {
          baseStats.push({
            metricLabel: 'Height',
            metricValue: this.height,
            metricUnit: 'meter'
          })
        } else if (this.height === 1000) {
          baseStats.push({
            metricLabel: 'Mass',
            metricValue: this.height / 1000,
            metricUnit: 'kilometer'
          })
        } else if (this.height > 1000) {
          baseStats.push({
            metricLabel: 'Mass',
            metricValue: this.height / 1000,
            metricUnit: 'kilometers'
          })
        } else {
          baseStats.push({
            metricLabel: 'Height',
            metricValue: this.height,
            metricUnit: 'meters'
          })
        }
      }

      if (this.speed || this.speed === 0) {
        baseStats.push({
          metricLabel: 'Speed',
          metricValue: this.speed,
          metricUnit: 'm/s'
        })
      }

      return baseStats.concat(this.alternativeStats)
    }
  },
  methods: {
    unitLabel(unit: MetricUnit): MetricUnitLabel | MetricUnit {
      return metricUnits[unit] ?? unit
    }
  }
})
</script>
<style lang="scss">
.RoboticsDetailStats {
  .label {
    @apply font-semibold mb-4 text-jpl-red-dark;
  }
}
</style>
