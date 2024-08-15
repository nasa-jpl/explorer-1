<template>
  <section
    v-if="statistics || dsn || asteroidWatch || missionCount"
    aria-label="Featured mission statistics"
    class="HomepageStats -mt-14 relative z-20 overflow-hidden"
  >
    <div class="MixedBleedGrid lg:pl-0 pl-4">
      <div
        class="ThemeVariantGray bg-gray-light text-gray-dark col-start-container col-end-container lg:py-18 lg:px-0 text-body-lg px-8 py-10 pr-0"
      >
        <div class="gap-y-10 lg:col-end-9 grid grid-cols-12 gap-6">
          <div class="lg:block hidden"></div>
          <!-- mission count -->
          <div
            v-if="dataMissionStatsBlock"
            class="lg:col-span-2 sm:col-span-5 col-span-full"
          >
            <template v-if="dataMissionStatsBlock.link">
              <BaseLink
                variant="none"
                :target="dataMissionStatsBlock.linkTarget ? '_blank' : '_self'"
                :href="dataMissionStatsBlock.link"
                link-class="block"
              >
                <p
                  v-if="dataMissionStatsBlock.heading"
                  class="text-subtitle text-primary mb-4"
                >
                  {{ dataMissionStatsBlock.heading }}
                </p>
              </BaseLink>
            </template>
            <template v-else>
              <p
                v-if="dataMissionStatsBlock.heading"
                class="text-subtitle text-primary mb-4"
              >
                {{ dataMissionStatsBlock.heading }}
              </p>
            </template>
            <p
              v-if="dataMissionStatsBlock.title"
              class="text-body-sm mb-4"
            >
              {{ dataMissionStatsBlock.title }}
            </p>
            <p
              v-if="missionCount"
              class="text-stats-xl"
            >
              {{ missionCount }}
            </p>
          </div>
          <!-- generic stats -->
          <div
            v-if="dataGenericStatsBlock"
            class="lg:col-span-3 sm:col-span-6 col-span-full"
          >
            <template v-if="dataGenericStatsBlock.link">
              <BaseLink
                variant="none"
                :target="dataGenericStatsBlock.linkTarget ? '_blank' : '_self'"
                :href="dataGenericStatsBlock.link"
                link-class="block"
              >
                <p
                  v-if="dataGenericStatsBlock.heading"
                  class="text-subtitle text-primary mb-4"
                >
                  {{ dataGenericStatsBlock.heading }}
                </p>
              </BaseLink>
            </template>
            <template v-else>
              <p
                v-if="dataGenericStatsBlock.heading"
                class="text-subtitle text-primary mb-4"
              >
                {{ dataGenericStatsBlock.heading }}
              </p>
            </template>
            <p
              v-if="dataGenericStatsBlock.title"
              class="text-body-sm mb-4"
            >
              {{ dataGenericStatsBlock.title }}
            </p>
            <div
              v-if="
                dataGenericStatsBlock.dateDisplay === 'countdown' ||
                dataGenericStatsBlock.dateDisplay === 'time_elapsed'
              "
            >
              <BaseTimer
                :target-date-time="dataGenericStatsBlock.date"
                :countdown="dataGenericStatsBlock.dateDisplay === 'countdown'"
              />
            </div>
            <p
              v-else-if="dataGenericStatsBlock.dateDisplay === 'static'"
              class="text-stats-lg"
            >
              {{
                // @ts-ignore
                $filters.displayDate(dataGenericStatsBlock.date)
              }}
            </p>
            <template v-else-if="dataGenericStatsBlock.dateDisplay === 'live'">
              <component
                :is="hasFeaturedEmbed ? 'a' : 'div'"
                :href="hasFeaturedEmbed ? '#featuredEmbed' : null"
                class="group block"
                :class="{ 'cursor-pointer': hasFeaturedEmbed }"
                @click="playVideo"
              >
                <p class="text-stats-lg flex items-center">
                  <span class="relative flex w-3 h-3 mr-3">
                    <span
                      class="motion-safe:animate-ping bg-green absolute inline-flex w-full h-full rounded-full opacity-75"
                    ></span>
                    <span class="bg-green relative inline-flex w-3 h-3 rounded-full"></span>
                  </span>
                  <span>Watch Live</span>
                </p>
                <p class="text-gray-mid-dark flex flex-wrap mt-2 text-sm">
                  <span class="mr-1 -mb-3">Estimated:</span>
                  <span class="sm:whitespace-nowrap">
                    {{
                      // @ts-ignore
                      $filters.displayDate(dataGenericStatsBlock.date, 'DateTime')
                    }}
                    UTC
                  </span>
                </p>

                <div
                  v-if="hasFeaturedEmbed"
                  class="lg:-mb-8 can-hover:group-hover:ml-3 text-jpl-red-light text-7xl ml-0 transition-all duration-200 ease-in"
                >
                  <IconArrow />
                </div>
              </component>
            </template>
          </div>
          <!-- DSN Widget -->
          <FetchDsnWidget />
          <!-- asteroid watch -->
          <div
            v-if="asteroidWatch"
            class="lg:col-span-3 sm:col-span-6 col-span-full"
          >
            <template v-if="asteroidWatch.link">
              <BaseLink
                variant="none"
                :target="asteroidWatch.linkTarget ? '_blank' : '_self'"
                :href="asteroidWatch.link"
                link-class="block"
              >
                <p
                  v-if="asteroidWatch.heading"
                  class="text-subtitle text-primary mb-4"
                >
                  {{ asteroidWatch.heading }}
                </p>
              </BaseLink>
            </template>
            <template v-else>
              <p
                v-if="asteroidWatch.heading"
                class="text-subtitle text-primary mb-4"
              >
                {{ asteroidWatch.heading }}
              </p>
            </template>
            <p
              v-if="asteroidWatch.title"
              class="text-body-sm mb-4"
            >
              {{ asteroidWatch.title }}
            </p>
            <template v-if="asteroidWatch.asteroidApproach">
              <p
                v-if="asteroidWatch.asteroidApproach.date"
                class="text-stats-lg"
              >
                {{
                  // @ts-ignore
                  $filters.displayDate(asteroidWatch.asteroidApproach.date)
                }}
              </p>
              <BaseUnitToggle
                v-slot="slotProps"
                :unit-pair="'MI_KM'"
                :value="parseFloat(asteroidWatch.asteroidApproach.distanceMiles)"
                :second-value="parseFloat(asteroidWatch.asteroidApproach.distanceKilometers)"
                :value-system="'imperial'"
                inline
                class="text-gray-mid-dark mt-2"
              >
                <span class="text-sm"> Proximity {{ slotProps.formattedValue }} </span>
              </BaseUnitToggle>
              <BaseLink
                link-class="block"
                variant="none"
                aria-label="View the next five approaches"
                to="/asteroid-watch/next-five-approaches"
              >
                <div
                  class="lg:-mb-8 can-hover:group-hover:ml-3 text-jpl-red-light text-7xl ml-0 transition-all duration-200 ease-in"
                >
                  <IconArrow />
                </div>
              </BaseLink>
            </template>
          </div>
        </div>
      </div>
      <div class="bg-gray-light col-start-container-end col-end-bleed sm:block hidden"></div>
    </div>
  </section>
</template>
<script lang="ts">
// @ts-nocheck
import type { PropType } from 'vue'
import { defineComponent } from 'vue'
import BaseLink from './../BaseLink/BaseLink.vue'
import BaseUnitToggle from './../BaseUnitToggle/BaseUnitToggle.vue'
import BaseTimer from './../BaseTimer/BaseTimer.vue'
import IconArrow from './../Icons/IconArrow.vue'
import IconArrows from './../Icons/IconArrows.vue'
import DsnWidget from './../DsnWidget/DsnWidget.vue'
type blockObject = {
  blockType: string
}

type HomePageEmbedBlockItem = {
  display: boolean
}
type HomePageEmbedBlock = HomePageEmbedBlockItem[]

/**
 * Displays homepage stats
 */
export default defineComponent({
  name: 'HomepageStats',
  components: {
    BaseLink,
    IconArrow,
    IconArrows,
    BaseUnitToggle,
    BaseTimer,
    DsnWidget
  },
  props: {
    statistics: {
      type: Array,
      required: false
    },
    missionCount: {
      type: Number,
      required: false
    },
    dsn: {
      type: Object,
      required: false
    },
    asteroidWatch: {
      type: Object,
      required: false
    },
    // pass the featured video data to determine watch-live render behavior
    featuredEmbed: {
      type: Array as PropType<HomePageEmbedBlock>,
      required: false
    }
  },
  data(): {
    autoplayAdded: boolean
  } {
    return {
      autoplayAdded: false
    }
  },
  computed: {
    dataMissionStatsBlock(): blockObject | null {
      const data = this.filterBlocksByType('StatisticsMissionBlock')
      if (data && data.length) {
        return data[0]
      }
      return null
    },
    dataGenericStatsBlock(): blockObject | null {
      const data = this.filterBlocksByType('StatisticsGenericBlock')
      if (data && data.length) {
        return data[0]
      }
      return null
    },
    hasFeaturedEmbed(): boolean {
      if (this.featuredEmbed && this.featuredEmbed.length && this.featuredEmbed[0].display) {
        return true
      }
      return false
    }
  },
  methods: {
    playVideo() {
      if (this.hasFeaturedEmbed) {
        const featuredEmbedDiv = document.getElementById('featuredEmbed')
        if (featuredEmbedDiv) {
          featuredEmbedDiv.scrollIntoView({ behavior: 'smooth' })
          const featuredEmbedIframe = featuredEmbedDiv.querySelector('iframe') as HTMLIFrameElement
          if (featuredEmbedIframe && this.autoplayAdded === false) {
            featuredEmbedIframe.src += '&autoplay=1'
            this.autoplayAdded = true
          }
        }
      }
      return null
    },
    filterBlocksByType(blockType: string): blockObject[] | null {
      if (this.statistics) {
        const theBlocks = this.statistics as blockObject[]
        return theBlocks.filter((block: blockObject) => block.blockType === blockType)
      }
      return null
    }
  }
})
</script>
<style lang="scss">
.HomepageStats {
  .BaseTimer {
    .text-stats-xl {
      @apply leading-none;

      @screen lg {
        font-size: 2.125rem; // 34px
      }
      @screen xl {
        font-size: 2.25rem; // 36px
      }
    }

    .unit {
      @apply text-gray-mid-dark;
    }
  }

  .BaseUnitToggle {
    @apply flex items-center;

    fieldset {
      @apply pl-3;
    }

    .unit {
      @apply -mt-3;
    }
  }
}
</style>
