<template>
  <div v-if="theData" class="lg:col-span-3 sm:col-span-5 col-span-full">
    <template v-if="theData.link">
      <BaseLink
        variant="none"
        :target="theData.linkTarget ? '_blank' : '_self'"
        :href="theData.link"
        link-class="block"
      >
        <p v-if="theData.heading" class="text-subtitle text-jpl-red mb-4">
          {{ theData.heading }}
        </p>
      </BaseLink>
    </template>
    <template v-else>
      <p v-if="theData.heading" class="text-subtitle text-jpl-red mb-4">
        {{ theData.heading }}
      </p>
    </template>
    <!-- if no data, spacecraftName will be null -->
    <template v-if="theData.spacecraftName">
      <p v-if="theData.transmitTitle" class="text-body-sm mb-4">
        {{ theData.transmitTitle }}
      </p>
      <p v-if="theData.spacecraftName" class="text-stats-lg">
        {{ theData.spacecraftName }}
      </p>
      <div
        class="text-gray-mid-dark flex flex-nowrap items-center justify-start mt-2 text-sm"
      >
        <span
          v-if="
            theData.transmitStatus === 'both' ||
            theData.transmitStatus === 'sending'
          "
          class="animate-pulse mr-1"
        >
          <span class="sr-only">
            {{ theData.spacecraftName }} is sending to {{ theData.location }}.
          </span>
          <IconArrows class="-ml-1" />
        </span>
        <span v-if="theData.location" class="mr-1" aria-hidden="true">
          {{ theData.location }}
        </span>
        <span
          v-if="
            theData.transmitStatus === 'both' ||
            theData.transmitStatus === 'receiving'
          "
          class="animate-pulse"
        >
          <span class="sr-only">
            {{ theData.spacecraftName }} is receiving from
            {{ theData.location }}.
          </span>
          <IconArrows />
        </span>
      </div>
    </template>
    <template v-else>
      <p class="text-body-sm">Data currently unavailable</p>
    </template>
  </div>
</template>
<script>
import { defineComponent } from 'vue'
import BaseLink from './../BaseLink/BaseLink.vue'
import IconArrows from './../Icons/IconArrows.vue'
import { dsnWidgetQuery } from '@/apollo/queries/dsnWidgetQuery'
/**
 * Displays dsn widget data. API is parsed by the backend. Frontend retrieves via a graphQL query.
 */
export default defineComponent({
  name: 'DsnWidget',
  components: {
    BaseLink,
    IconArrows,
  },
  props: {
    staticData: {
      type: Object,
      required: false,
    },
  },
  data() {
    return {
      fetchedData: null,
    }
  },
  async fetch() {
    await this.$apollo
      .watchQuery({
        query: dsnWidgetQuery,
        fetchPolicy: 'no-cache',
        pollInterval: 60000,
      })
      .subscribe({
        next: ({ data }) => {
          if (data) {
            this.fetchedData = data.homePage.dsnWidget
          }
        },
      })
  },
  computed: {
    theData() {
      if (this.fetchedData) {
        return this.fetchedData
      } else if (this.staticData) {
        return this.staticData
      }
      return null
    },
  },
  mounted() {
    if (this.$fetchState && !this.$fetchState.pending) {
      this.$fetch()
    }
  },
})
</script>
