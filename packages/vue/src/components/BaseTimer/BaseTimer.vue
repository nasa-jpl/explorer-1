<template>
  <component
    :is="diff ? 'time' : 'div'"
    class="BaseTimer whitespace-nowrap"
    :datetime="diff ? diff.toISOString() : null"
    :class="{ '-inline': inline }"
  >
    <span :hidden="!!diff">Loading…</span>
    <span
      class="transition-opacity duration-500 ease-in-out opacity-0"
      :class="{ 'opacity-100': diff, 'flex justify-between': inline }"
    >
      <span
        v-for="(unit, index) in selectedUnitsComputed"
        :key="unit"
      >
        <!-- Add a break between the date and time components, for mobile version -->
        <span
          v-if="index !== 0"
          class="text-stats-xl text-stats-separator"
          :class="{
            'block invisible -mt-6 md:inline md:visible md:mt-0':
              selectedUnitsComputed.length >= 4 && unit === 'hours'
          }"
          >&nbsp;:&nbsp;</span
        >
        <!-- Make the seconds unit left-aligned to avoid it shifting position constantly, -->
        <!-- due to the lack of equal-width numerals. -->
        <span
          class="inline-block align-top"
          :class="unit === 'seconds' ? 'text-left' : 'text-center'"
          aria-hidden="true"
        >
          <span
            class="text-stats-xl"
            :class="{ 'text-seconds': unit === 'seconds' }"
            data-chromatic="ignore"
          >
            <template v-if="countdown && isPast">00</template>
            <template v-else>{{ unitValue(unit) }}</template>
          </span>
          <br v-if="!inline" />
          <span class="unit text-body-xs uppercase">
            {{ shortLabel(unit) }}
          </span>
        </span>
      </span>
    </span>
  </component>
</template>
<script lang="ts">
import type { PropType } from 'vue'
import { defineComponent } from 'vue'
import dayjs, { type Dayjs } from 'dayjs'
import { type Duration } from 'dayjs/plugin/duration.js'

const calculateDuration = (start: Dayjs): Duration | undefined => {
  // Use round seconds so the datetime string stays valid and can be read by screen readers.
  // This also makes the timer run more reliably, as the difference is always 1 full second.
  const now = dayjs().millisecond(0)
  const max = dayjs.max(start, now)
  const min = dayjs.min(start, now)
  return max ? dayjs.duration(max.diff(min)) : undefined
}

// Based on https://day.js.org/docs/en/durations/creating#list-of-all-available-units.
export const timerUnits = {
  years: { shortLabel: 'Yrs', longLabel: 'Years' },
  months: { shortLabel: 'Mos', longLabel: 'Months' },
  days: { shortLabel: 'Days', longLabel: 'Days' },
  hours: { shortLabel: 'Hrs', longLabel: 'Hours' },
  minutes: { shortLabel: 'Mins', longLabel: 'Minutes' },
  seconds: { shortLabel: 'Secs', longLabel: 'Seconds' }
} as const
type UnitID = keyof typeof timerUnits

// Normally this should just be `number`, but due to our usage of `@types/node`
// we need to define this in a way that is compatible with both Node and browser code.
type Interval = ReturnType<typeof setInterval>

export default defineComponent({
  name: 'BaseTimer',
  props: {
    targetDateTime: {
      type: String,
      required: true
    },
    // if blank, the first three significant units will show
    selectedUnits: {
      type: Array as PropType<UnitID[]>,
      required: false,
      validator: (val: UnitID[]): boolean => val.every((v) => Boolean(timerUnits[v]))
    },
    inline: {
      type: Boolean,
      required: false,
      default: false
    },
    // if a countdown clock, then this will force it to stop at 0
    countdown: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data(): {
    diff: Duration | undefined
    interval: Interval | undefined
  } {
    return {
      diff: undefined,
      interval: undefined
    }
  },
  computed: {
    selectedUnitsComputed(): UnitID[] {
      if (!this.selectedUnits || this.selectedUnits.length === 0) {
        const unitChoices = ['years', 'months', 'days', 'hours', 'minutes', 'seconds']
        let significantUnits = [] as UnitID[]
        unitChoices.forEach((e) =>
          this.unitSignificant(e as UnitID) ? significantUnits.push(e as UnitID) : significantUnits
        )
        // if only three units (i.e. hours, minutes, seconds)
        // then do not make significant units dynamic
        // (we always want a minimum of three to show)
        if (significantUnits.length <= 3) {
          return ['hours', 'minutes', 'seconds']
        } else {
          significantUnits = significantUnits.slice(0, 3)
        }

        return significantUnits
      }
      return this.selectedUnits
    },
    isPast(): boolean {
      if (this.targetDateTime) {
        const now = dayjs(new Date())
        const start = dayjs(new Date(this.targetDateTime.replace(/\s+/g, 'T'))).millisecond(0)
        if (start.isBefore(now)) {
          return true
        }
      }
      return false
    }
  },
  mounted(): void {
    // Convert ISO8601 RFC 3339 datetime formats into a stricter format supported by Safari.
    const start = dayjs(new Date(this.targetDateTime.replace(/\s+/g, 'T'))).millisecond(0)

    this.diff = calculateDuration(start)

    // Only make the timer live-update if there are units that are going to show live changes.
    const shouldUpdate =
      this.selectedUnitsComputed.includes('seconds') ||
      this.selectedUnitsComputed.includes('minutes')
    if (shouldUpdate) {
      // Imprecise timer, but keeps performance impact very low.
      this.interval = setInterval(() => {
        this.diff = calculateDuration(start)

        const countdownTimer = this.diff?.as('seconds') === 0
        if (countdownTimer) {
          clearInterval(this.interval as Interval)
        }
      }, 1000)
    }
  },
  beforeUnmount(): void {
    clearInterval(this.interval as Interval)
  },
  methods: {
    shortLabel(unit: UnitID) {
      return timerUnits[unit]?.shortLabel || unit
    },
    longLabel(unit: UnitID) {
      return timerUnits[unit]?.longLabel || unit
    },
    unitSignificant(unit: UnitID): boolean {
      if (this.diff === null) {
        return false
      }
      const value = this.diff?.get(unit)

      if ((value && value > 0) || this.checkOtherUnits(unit)) {
        return true
      }
      return false
    },
    // TODO: make this more efficient
    checkOtherUnits(unit: UnitID): boolean {
      // necessary to check if higher units have a value, otherwise 0 values will not display when they should
      if (this.diff) {
        if (unit === 'seconds') {
          if (
            this.diff.get('minutes') > 0 ||
            this.diff.get('hours') > 0 ||
            this.diff.get('days') > 0 ||
            this.diff.get('months') > 0 ||
            this.diff.get('years') > 0
          ) {
            return true
          }
        } else if (unit === 'minutes') {
          if (
            this.diff.get('hours') > 0 ||
            this.diff.get('days') > 0 ||
            this.diff.get('months') > 0 ||
            this.diff.get('years') > 0
          ) {
            return true
          }
        } else if (unit === 'hours') {
          if (
            this.diff.get('days') > 0 ||
            this.diff.get('months') > 0 ||
            this.diff.get('years') > 0
          ) {
            return true
          }
        } else if (unit === 'days') {
          if (this.diff.get('months') > 0 || this.diff.get('years') > 0) {
            return true
          }
        } else if (unit === 'months') {
          if (this.diff.get('years') > 0) {
            return true
          }
        }
      }
      return false
    },
    unitValue(unit: UnitID) {
      if (this.diff === null) {
        return ''
      }

      const value = this.diff?.get(unit)

      // Pad a number with a leading zero.
      return value?.toString().padStart(2, '0')
    }
  }
})
</script>
<style lang="scss">
@import '@explorer-1/common/src/scss/components/BaseTimer';
</style>
