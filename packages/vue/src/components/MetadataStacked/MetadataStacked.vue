<script setup lang="ts">
import IconBookmark from '../Icons/IconBookmark.vue'
import IconHourglass from '../Icons/IconHourglass.vue'
import IconLocation from '../Icons/IconLocation.vue'

const props = defineProps({
  /**
   * The text for location metadata. Plain text only.
   */
  location: {
    type: String,
    default: undefined
  },
  /**
   * The text name for the location icon. Defaults to Explorer-1 location icon. Plain text only.
   */
  locationIcon: {
    type: String,
    default: undefined
  },
  /**
   * The text for the wait time metadata. Plain text only.
   */
  wait: {
    type: String,
    default: undefined
  },
  /**
   * Controls the visibility of the Bookmark icon and its associated metadata.
   */
  showMyList: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div class="MetadataStacked inline-flex flex-col flex-start gap-2.5 text-body-md">
    <div
      v-if="props.location"
      class="flex flex-row gap-2.5 items-center self-stretch"
    >
      <img
        v-if="props.locationIcon"
        :src="props.locationIcon"
        class="w-4 h-4"
        alt=""
      />
      <IconLocation
        v-else
        class="MetadataStackedIcon text-jpl-red"
      />
      <span>{{ props.location }}</span>
    </div>
    <div
      v-if="props.wait"
      class="flex flex-row gap-2.5 items-center self-stretch"
    >
      <IconHourglass class="MetadataStackedIcon text-jpl-red" />
      <span>{{ props.wait }}</span>
    </div>
    <div
      v-if="props.showMyList"
      class="flex flex-row gap-2.5 items-center self-stretch"
    >
      <IconBookmark class="MetadataStackedIcon text-gray-mid" />
      <span class="italic">Added to my list</span>
    </div>
  </div>
</template>
