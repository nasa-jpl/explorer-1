<template>
  <div class="BaseUnitToggle">
    <p class="sr-only">{{ formattedValue }} {{ unitConfig[selectedSystem].label }}</p>
    <slot :formatted-value="formattedValue">
      {{ formattedValue }}
    </slot>
    <fieldset
      class="text-body-xs inline-block"
      :class="{ 'lg:block': !inline }"
      aria-label="Change Unit"
    >
      <label
        class="cursor-pointer"
        :aria-label="unitConfig.imperial.label"
      >
        <input
          v-model="selectedSystem"
          class="sr-only"
          type="radio"
          value="imperial"
          @change="setSystem"
        />
        <span
          class="unit"
          aria-hidden="true"
        >
          {{ unitConfig.imperial.abbr }}
        </span>
      </label>
      <span
        class="select-none"
        aria-hidden="true"
        >|</span
      >
      <label
        class="cursor-pointer"
        :aria-label="unitConfig.metric.label"
      >
        <input
          v-model="selectedSystem"
          class="sr-only"
          type="radio"
          value="metric"
          @change="setSystem"
        />
        <span
          class="unit"
          aria-hidden="true"
        >
          {{ unitConfig.metric.abbr }}
        </span>
      </label>
    </fieldset>
  </div>
</template>
<script lang="ts">
import type { PropType } from 'vue'
import { defineComponent } from 'vue'

export type UnitSystemName = keyof UnitConfig
export type UnitName = keyof UnitPairs

/**
 * Centrally defined configuration for unit pairs, to avoid inconsistencies.
 */
export interface UnitPairs {
  MI_KM: UnitConfig
  LB_KG: UnitConfig
  G_OZ: UnitConfig
  M_FT: UnitConfig
  MS_FS: UnitConfig
}

interface UnitDetails {
  label: string
  abbr: string
  toOther: number
}

export interface UnitConfig {
  imperial: UnitDetails
  metric: UnitDetails
}

export const unitPairs: UnitPairs = {
  MI_KM: {
    imperial: {
      label: 'Miles',
      abbr: 'MI',
      toOther: 1 * 1.609344
    },
    metric: {
      label: 'Kilometers',
      abbr: 'KM',
      toOther: 1 / 1.609344
    }
  },
  LB_KG: {
    imperial: {
      label: 'Pounds',
      abbr: 'LB',
      toOther: 1 / 2.205
    },
    metric: {
      label: 'Kilograms',
      abbr: 'KG',
      toOther: 1 * 2.205
    }
  },
  G_OZ: {
    imperial: {
      label: 'Ounces',
      abbr: 'OZ',
      toOther: 1 / 0.0352739331766097
    },
    metric: {
      label: 'Grams',
      abbr: 'G',
      toOther: 1 * 0.0352739331766097
    }
  },
  M_FT: {
    imperial: {
      label: 'Feet',
      abbr: 'FT',
      toOther: 1 * 0.3048
    },
    metric: {
      label: 'Meters',
      abbr: 'M',
      toOther: 1 / 0.3048
    }
  },
  MS_FS: {
    imperial: {
      label: 'Feet per second',
      abbr: 'FT/S',
      toOther: 1 * 0.3048
    },
    metric: {
      label: 'Meters per second',
      abbr: 'M/S',
      toOther: 1 / 0.3048
    }
  }
} as const

/**
 * Toggle between equivalent units in imperial and SI systems.
 * Supports providing the value in either format, and converts into the other.
 */
export default defineComponent({
  name: 'BaseUnitToggle',
  props: {
    unitPair: {
      type: String as PropType<UnitName>,
      required: true,
      validator: (val: UnitName): boolean => Boolean(unitPairs[val])
    },
    value: {
      type: Number as PropType<number>,
      required: true
    },
    secondValue: {
      type: Number as PropType<number>,
      required: false
    },
    valueSystem: {
      type: String as PropType<UnitSystemName>,
      required: true
    },
    inline: {
      type: Boolean,
      default: false
    }
  },
  data(): { selectedSystem: UnitSystemName } {
    return {
      selectedSystem: 'imperial' as UnitSystemName
    }
  },
  computed: {
    unitConfig(): UnitConfig {
      return unitPairs[this.unitPair]
    },
    formattedValue(): string {
      // Display the value as-is if it is in the requested unit, otherwise convert it.
      let selectedValue

      if (this.secondValue) {
        selectedValue = this.valueSystem === this.selectedSystem ? this.value : this.secondValue
      } else {
        selectedValue =
          this.valueSystem === this.selectedSystem
            ? this.value
            : this.value * this.unitConfig[this.valueSystem].toOther
      }

      // By default, show values with the same precision as the format they are provided in.
      const decimals = this.value.toString().split('.')[1]?.length || 0
      return selectedValue.toLocaleString('en-US', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals
      })
    }
  },
  mounted(): void {
    if (window.localStorage && window.localStorage.getItem('selectedSystem') === 'metric') {
      this.selectedSystem = 'metric'
    }
  },
  methods: {
    setSystem(): void {
      // Will throw an error in Safari private browsing.
      try {
        if (window.localStorage) {
          window.localStorage.setItem('selectedSystem', this.selectedSystem)
        }
      } catch (e) {
        console.error(e)
      }
    }
  }
})
</script>
<style lang="scss">
.BaseUnitToggle {
  .unit {
    // - Make the clickable areas much bigger than they appear for ease of interaction.
    // - Hide the un-selected units from text selection, so copy-pasted text shows the correct unit.
    @apply inline-block pt-3 pb-2 px-1 -my-2 -mx-1 leading-relaxed select-none;

    // Make the units dimmer than the numbers, regardless of which color it’s displayed with.
    --text-opacity: 0.84;
  }

  label:first-of-type .unit {
    @apply pl-3 -ml-3;
  }

  label:last-of-type .unit {
    @apply pr-3 -mr-3;
  }

  [type='radio']:focus + .unit {
    @apply underline;
  }

  [type='radio']:checked + .unit {
    @apply font-bold select-text;

    --text-opacity: 1;
  }
}
</style>
