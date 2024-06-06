<template>
  <div
    v-if="hasContent"
    class="RoboticsDetailStatsMini text-gray-dark text-body-lg sm:flex sm:text-left text-center"
    :class="allStats.length > 2 ? 'justify-between' : 'justify-start'"
  >
    <div
      v-for="(stat, i) in allStats"
      :key="i"
      class="stat sm:mb-0 mb-6"
      :class="allStats.length > 2 ? 'mr-0' : 'mr-16'"
    >
      <p class="text-subtitle text-gray-mid-dark mb-4">
        {{ stat.metricLabel }}
      </p>
      <template
        v-if="
          (stat.metricUnit === 'gram' ||
            stat.metricUnit === 'grams' ||
            stat.metricUnit === 'kilogram' ||
            stat.metricUnit === 'kilograms' ||
            stat.metricUnit === 'meter' ||
            stat.metricUnit === 'meters' ||
            stat.metricUnit === 'kilometer' ||
            stat.metricUnit === 'kilometers' ||
            stat.metricUnit === 'm/s') &&
          unitPair(stat.metricUnit)
        "
      >
        <BaseUnitToggle
          v-slot="slotProps"
          :unit-pair="unitPair(stat.metricUnit)"
          :value="parseFloat(stat.metricValue)"
          :value-system="'metric'"
        >
          <span class="text-stats-xl">{{ slotProps.formattedValue }}</span>
        </BaseUnitToggle>
      </template>
      <template v-else>
        <div>
          <p :class="{ 'text-stats-xl': !isNaN(stat.metricValue) }">
            {{ stat.metricValue }}
          </p>
          <p class="text-body-xs text-gray-mid-dark pt-3 uppercase">
            {{ unitLabel(stat.metricUnit) }}
          </p>
        </div>
      </template>
    </div>
  </div>
</template>
<script lang="ts">
// @ts-nocheck
import type { PropType } from 'vue'
import { defineComponent } from 'vue'
import {
  metricUnits,
  MetricUnit,
  MetricUnitLabel,
  AlternativeStat
} from './RoboticsDetailStats.vue'
import BaseUnitToggle from './../BaseUnitToggle/BaseUnitToggle.vue'

/**
 * Displays the first three robotics stats.
 */
export default defineComponent({
  name: 'RoboticsDetailStatsMini',
  components: {
    BaseUnitToggle
  },
  props: {
    mass: Number,
    height: Number,
    speed: Number,
    alternativeStats: {
      type: Array as PropType<AlternativeStat[]>,
      required: true
    }
  },
  computed: {
    hasContent(): boolean {
      return Boolean(this.allStats.length > 0)
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
        } else if (this.mass >= 1000) {
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
            metricLabel: 'Height',
            metricValue: this.height / 1000,
            metricUnit: 'kilometer'
          })
        } else if (this.height > 1000) {
          baseStats.push({
            metricLabel: 'Height',
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
      // only return the first three stats
      return baseStats.concat(this.alternativeStats).splice(0, 3)
    }
  },
  methods: {
    unitLabel(unit: MetricUnit): MetricUnitLabel | MetricUnit {
      return metricUnits[unit] ?? unit
    },
    unitPair(unit: string): string | null {
      if (unit === 'gram' || unit === 'grams') {
        return 'G_OZ'
      } else if (unit === 'kilogram' || unit === 'kilograms') {
        return 'LB_KG'
      } else if (unit === 'meter' || unit === 'meters') {
        return 'M_FT'
      } else if (unit === 'kilometer' || unit === 'kilometers') {
        return 'MI_KM'
      } else if (unit === 'm/s') {
        return 'MS_FS'
      }
      return null
    }
  }
})
</script>
<style lang="scss">
.RoboticsDetailStatsMini {
  > .stat {
    min-width: 5ch;
  }
}
</style>
