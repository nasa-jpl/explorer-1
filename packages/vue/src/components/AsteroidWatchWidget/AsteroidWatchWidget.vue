<template>
  <section
    v-if="theData && theData.length"
    aria-label="Next 5 Earth Approaches within 7.5 million kilometers"
    class="AsteroidWatchWidget overflow-hidden"
  >
    <div
      v-for="(item, index) in theData"
      :key="index"
      class="MixedBleedGrid lg:pl-0 pl-4"
    >
      <div
        :class="
          index === 0 ? 'bg-gray-light' : 'border-b border-gray-light-mid'
        "
        class="lg:block col-start-indent-col-2 col-end-indent-col-3 hidden"
      ></div>
      <div
        :class="
          index === 0 ? 'bg-gray-light' : 'border-b border-gray-light-mid'
        "
        class="text-gray-dark col-start-indent-col-3 col-end-container lg:py-12 lg:px-0 text-body-lg px-8 py-10 pr-0"
      >
        <div
          class="gap-y-10 lg:col-end-9 grid grid-cols-11 col-start-1 col-end-11 gap-6"
        >
          <div
            v-if="
              item.comparisonImage &&
              item.comparisonImage.image &&
              item.comparisonImage.image.src
            "
            class="lg:col-span-3 lg:row-span-2 lg:text-left gap-y-8 col-span-11 -ml-8 text-center"
          >
            <picture>
              <source
                v-if="item.comparisonImage.image.webp"
                :srcset="item.comparisonImage.image.webp.url"
                type="image/webp"
              />
              <img
                loading="lazy"
                class="mx-auto bg-white rounded-full"
                :src="item.comparisonImage.image.src.url"
                width="160"
                height="160"
                alt=""
              />
            </picture>
            <p class="text-subtitle mt-4 text-center">
              {{ item.comparisonImage.text }}
            </p>
          </div>
          <!-- size -->
          <div class="lg:col-span-3 col-span-full">
            <p class="label text-subtitle text-jpl-red">Approximate Size</p>
            <BaseUnitToggle
              v-slot="slotProps"
              :unit-pair="'M_FT'"
              :value="parseFloat(item.sizeFeet)"
              :value-system="'imperial'"
            >
              <span class="text-stats-xl">{{ slotProps.formattedValue }}</span>
            </BaseUnitToggle>
          </div>
          <!-- size -->
          <div class="lg:col-span-5 col-span-full">
            <p class="label text-subtitle text-jpl-red">
              Closest Earth Approach
            </p>
            <BaseUnitToggle
              v-slot="slotProps"
              :unit-pair="'MI_KM'"
              :value="parseFloat(item.distanceMiles)"
              :second-value="parseFloat(item.distanceKilometers)"
              :value-system="'imperial'"
            >
              <span class="text-stats-xl">{{ slotProps.formattedValue }}</span>
            </BaseUnitToggle>
          </div>
          <div v-if="item.name" class="lg:col-span-3 col-span-full">
            <p class="label text-subtitle text-jpl-red">Name</p>
            <BaseLink
              variant="none"
              :href="item.externalLink"
              external-target-blank
            >
              <span class="flex flex-nowrap items-center">
                <span>{{ item.name }}</span>
                <IconExternal class="text-jpl-red ml-3 text-lg" />
              </span>
            </BaseLink>
          </div>
          <div v-if="item.date" class="lg:col-span-4 col-span-full">
            <p class="label text-subtitle text-jpl-red">Date</p>
            {{ item.date | displayDate }}
          </div>
        </div>
      </div>
      <div
        :class="index === 0 ? 'bg-gray-light' : ''"
        class="col-start-container-end col-end-bleed sm:block hidden"
      ></div>
    </div>
  </section>
</template>
<script lang="ts">
// @ts-nocheck
import { defineComponent } from 'vue'
import BaseLink from './../BaseLink/BaseLink.vue'
import BaseUnitToggle from './../BaseUnitToggle/BaseUnitToggle.vue'
import IconExternal from './../Icons/IconExternal.vue'
// TODO: PORT - figure out how to centralize graphQL queries
import { AsteroidWatchWidgetQuery } from '@/apollo/queries/AsteroidWatchWidget'
/**
 * Displays asteroid widget data. API is parsed by the backend. Frontend retrieves via a graphQL query.
 */
export default defineComponent({
  name: 'AsteroidWatchWidget',
  components: {
    BaseLink,
    IconExternal,
    BaseUnitToggle,
  },
  props: {
    staticData: {
      type: Array,
      required: false,
    },
  },
  data() {
    return {
      fetchedData: null,
    }
  },
  async fetch() {
    const client = this.$apollo.getClient()
    const { data } = await client.query({
      query: AsteroidWatchWidgetQuery,
    })
    if (data) {
      this.fetchedData = data.AsteroidWatchContentPage.nextCloseApproaches
    }
  },
  computed: {
    theData(): object[] | null {
      if (this.fetchedData) {
        return this.fetchedData
      } else if (this.staticData) {
        return this.staticData as object[]
      }
      return null
    },
  },
})
</script>
<style lang="scss">
.AsteroidWatchWidget {
  .label {
    @apply font-semibold mb-4 text-jpl-red-dark;
  }
}
</style>
