<template>
  <div
    v-if="data"
    class="lg:col-span-3 sm:col-span-5 col-span-full"
  >
    <template v-if="data.link">
      <BaseLink
        variant="none"
        :target="data.linkTarget ? '_blank' : '_self'"
        :href="data.link"
        link-class="block"
      >
        <p
          v-if="data.heading"
          class="text-subtitle text-primary mb-4"
        >
          {{ data.heading }}
        </p>
      </BaseLink>
    </template>
    <template v-else>
      <p
        v-if="data.heading"
        class="text-subtitle text-primary mb-4"
      >
        {{ data.heading }}
      </p>
    </template>
    <!-- if no data, spacecraftName will be null -->
    <template v-if="data.spacecraftName">
      <p
        v-if="data.transmitTitle"
        class="text-body-sm mb-4"
      >
        {{ data.transmitTitle }}
      </p>
      <p
        v-if="data.spacecraftName"
        class="text-stats-lg"
      >
        {{ data.spacecraftName }}
      </p>
      <div class="text-gray-mid-dark flex flex-nowrap items-center justify-start mt-2 text-sm">
        <span
          v-if="data.transmitStatus === 'both' || data.transmitStatus === 'sending'"
          class="animate-pulse mr-1"
        >
          <span class="sr-only">
            {{ data.spacecraftName }} is sending to {{ data.location }}.
          </span>
          <IconArrows class="-ml-1" />
        </span>
        <span
          v-if="data.location"
          class="mr-1 mt-.5"
          aria-hidden="true"
        >
          {{ data.location }}
        </span>
        <span
          v-if="data.transmitStatus === 'both' || data.transmitStatus === 'receiving'"
          class="animate-pulse"
        >
          <span class="sr-only">
            {{ data.spacecraftName }} is receiving from {{ data.location }}.
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
<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import BaseLink from './../BaseLink/BaseLink.vue'
import IconArrows from './../Icons/IconArrows.vue'
/**
 * Displays dsn widget data. API is parsed by the backend and passed to the frontend via GraphQL.
 */

type DsnWidgetObject = {
  heading: string
  link: string
  linkTarget: string
  transmitTitle: string
  transmitStatus: string
  spacecraftName: string
  location: string
  __typename: string
}

export default defineComponent({
  name: 'DsnWidget',
  components: {
    BaseLink,
    IconArrows
  },
  props: {
    /** Backend retrieves data and passes it to the frontend as a DsnWidgetObject */
    data: {
      type: Object as PropType<DsnWidgetObject>,
      required: false,
      default: undefined
    }
  }
})
</script>
