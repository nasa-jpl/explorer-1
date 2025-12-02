<script setup lang="ts">
import IconBookmark from '../Icons/IconBookmark.vue'
import IconHourglass from '../Icons/IconHourglass.vue'
import IconLocation from '../Icons/IconLocation.vue'

interface MetadataStackedProps {
  location?: string
  locationIcon?: string
  wait?: string
  showMyList?: boolean
}

// define props
const props = withDefaults(defineProps<MetadataStackedProps>(), {
  location: '',
  locationIcon: '',
  wait: '',
  showMyList: false
})
</script>

<template>
  <div class="MetadataStacked inline-flex flex-col flex-start gap-2.5 text-body-md">
    <div class="flex flex-row gap-2.5 items-center self-stretch">
      <svg
        v-if="props.locationIcon === 'test'"
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
      >
        <circle
          cx="14"
          cy="14"
          r="14"
          fill="#7C6500"
        />
      </svg>
      <IconLocation
        v-else
        class="MetadataStackedIcon text-jpl-red"
      />
      <span>{{ props.location }}</span>
    </div>
    <div class="flex flex-row gap-2.5 items-center self-stretch">
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
