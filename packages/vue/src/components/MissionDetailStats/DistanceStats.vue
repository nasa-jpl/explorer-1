<template>
  <div
    v-if="typeof value !== 'undefined' || distanceApiUrls"
    class="DistanceStats"
  >
    <slot name="label" :label="distanceTypeLabel">
      <p>{{ distanceTypeLabel }}</p>
    </slot>
    <p v-if="showError">Unavailable</p>
    <p v-else-if="isLoading">Loading…</p>
    <BaseUnitToggle
      v-else-if="loadedValue"
      v-slot="slotProps"
      unit-pair="MI_KM"
      :value="loadedValue"
      :value-system="loadedSystem"
    >
      <slot name="value" :formatted-value="slotProps.formattedValue">
        {{ slotProps.formattedValue }}
      </slot>
    </BaseUnitToggle>
  </div>
</template>
<script lang="ts">
import type { PropType } from 'vue'
import { defineComponent } from 'vue'
import dayjs from 'dayjs'
import BaseUnitToggle, {
  UnitSystem,
} from './../BaseUnitToggle/BaseUnitToggle.vue'

export const distanceTypes = {
  earth: 'Distance from Earth',
  mars: 'Distance traveled on Mars',
} as const
export type DistanceType = keyof typeof distanceTypes

type APIDistance = { value: number; system: UnitSystem }

type SPICEPlanetsResponse = {
  items: {
    date: string
    value: string
  }[]
  error: boolean
  units: 'KM'
}

/**
 * Map from mars.nasa.gov API endpoint URLs to our corresponding proxied path.
 */
export const supportedAPIPaths = {
  '/api/v1/missions/': {
    /**
     * Query based on mission ID only.
     * Throws an error if there is no mission ID.
     */
    getPath: (endpointURL: string, match: string): string => {
      const query = endpointURL.split(match)[1]

      if (!query) {
        console.error(endpointURL, match)
        throw new Error('Error querying /api/v1/missions/ API')
      }
      return `/api/mars${match}${query}`
    },
    /**
     * Extract the distance from the single field.
     */
    // eslint-disable-next-line camelcase
    getDistance: (data: { mi_traveled: number }): APIDistance => {
      const value = data?.mi_traveled

      if (typeof value === 'undefined') {
        console.error(data)
        throw new Error('Error processing /api/v1/missions/ data')
      }
      return {
        value: data.mi_traveled,
        system: 'imperial',
      }
    },
  },
  '/spice_data/getRangefromT1/': {
    /**
     * Query SPICE data based on a planets pair and a pair of current time + future datetime (arbitrary).
     * Fails if the endpoint URL is not of the expected format.
     */
    getPath: (endpointURL: string, match: string): string => {
      const query = endpointURL.split(match)[1]
      const queryParams = query.split('/')
      const planets = `${queryParams[0]}/${queryParams[1]}/`
      const range = [dayjs(), dayjs().add(1, 'minute')]
        // Generates the date format expected by the endpoint – ISO 8601, minus milliseconds and zero UTC offset indicator.
        .map((d) => d.toISOString().replace(/\.\d+Z$/, ''))
        .join('/')
      return `/api/mars/spice_data/getRangefromT1/${planets}${range}/1/`
    },
    /**
     * Extract a single value from a SPICE data array.
     */
    getDistance: (data: SPICEPlanetsResponse, index: number): APIDistance => {
      const value = data?.items[index]?.value
      if (data.error || data.units !== 'KM' || typeof value === 'undefined') {
        console.error(data, index)
        throw new Error('Error processing /spice_data/getRangefromT1/ data')
      }
      return {
        // Matches the rounding from the reference implementation, https://mars.nasa.gov/msl/home/.
        value: Math.round(Number(value)),
        system: 'metric',
      }
    },
  },
} as const
type SupportedAPI = keyof typeof supportedAPIPaths
type SPICEAPIConfig = typeof supportedAPIPaths['/spice_data/getRangefromT1/']
const supportedPaths = Object.keys(supportedAPIPaths) as SupportedAPI[]

// Normally this should just be `number`, but due to our usage of `@types/node`
// we need to define this in a way that is compatible with both Node and browser code.
type Timeout = ReturnType<typeof setTimeout>

/**
 * Display a distance stat – label, value, unit toggle,
 * either from a predefined value, or supported API endpoint.
 */
export default defineComponent({
  name: 'DistanceStats',
  components: {
    BaseUnitToggle,
  },
  props: {
    distanceType: {
      type: String as PropType<DistanceType | ''>,
      required: true,
      validator: (val: string): boolean =>
        val === '' || Object.keys(distanceTypes).includes(val),
    },
    value: Number,
    valueSystem: {
      type: String as PropType<UnitSystem>,
      required: false,
      default: 'imperial'
    },
    distanceApiUrls: {
      type: String,
      required: false,
      validator: (val: string): boolean =>
        supportedPaths.some((p) => val.includes(p) || val === ''),
    },
    labelClass: String,
  },
  data(): {
    apiDistance: APIDistance | null
    showError: boolean
    timeout: Timeout | null
  } {
    return {
      apiDistance: null,
      showError: false,
      timeout: null,
    }
  },
  computed: {
    distanceTypeLabel(): string {
      return (
        distanceTypes[this.distanceType as DistanceType] || this.distanceType
      )
    },
    loadedValue(): number | undefined {
      if (this.distanceApiUrls) {
        return this.apiDistance?.value || 0
      }
      return this.value
    },
    loadedSystem(): UnitSystem {
      if (this.distanceApiUrls) {
        return this.apiDistance?.system || 'imperial'
      }
      return this.valueSystem
    },
    isLoading(): boolean {
      return !!this.distanceApiUrls && this.apiDistance === null
    },
  },
  mounted() {
    if (this.distanceApiUrls) {
      this.getAPIDistance()
    }
  },
  beforeDestroy(): void {
    clearTimeout(this.timeout as Timeout)
  },
  methods: {
    /**
     * Retrieve distance data from supported API endpoints.
     */
    async getAPIDistance(): Promise<void> {
      // Wrap everything in a try…catch. All this code depends
      // on the APIs’ data formats, which may change, and should
      // be handled elegantly if possible.
      try {
        const match = supportedPaths.find((key: SupportedAPI) =>
          this.distanceApiUrls?.includes(key)
        )
        if (match && this.distanceApiUrls) {
          const apiConfig = supportedAPIPaths[match]
          const path = apiConfig.getPath(this.distanceApiUrls, match)
          const data = await this.$axios.$get(path)

          // Special treatment for SPICE data that returns an array of predicted distances for future times, in 1-sec increments.
          if (match === '/spice_data/getRangefromT1/') {
            this.updateSPICEData(apiConfig as SPICEAPIConfig, data, 0)
          } else {
            this.apiDistance = apiConfig.getDistance(data, 0)
          }
        }
      } catch (e) {
        console.error(e)
        this.showError = true
      }
    },

    /**
     * Special logic for SPICE data that can be live-updated.
     * Automatically cycles through the data array, and
     * automatically makes more requests for more data when needed.
     */
    async updateSPICEData(
      apiConfig: SPICEAPIConfig,
      data: SPICEPlanetsResponse,
      index: number
    ): Promise<void> {
      this.apiDistance = apiConfig.getDistance(data, index)
      const next = index + 1

      if (next < data?.items?.length) {
        this.timeout = setTimeout(
          this.updateSPICEData.bind(this, apiConfig, data, next),
          1000
        )
      } else if (this.distanceApiUrls) {
        const nextData = await this.$axios.$get(
          apiConfig.getPath(this.distanceApiUrls, '/spice_data/getRangefromT1/')
        )
        this.updateSPICEData(apiConfig, nextData, 0)
      }
    },
  },
})
</script>
