<script setup lang="ts">
import { computed } from 'vue'
import { useThemeStore } from '../../store/theme'
import type { EventCardObject } from './../../interfaces.ts'
import BaseLink from './../BaseLink/BaseLink.vue'
import IconCalendar from './../Icons/IconCalendar.vue'
import IconTime from './../Icons/IconTime.vue'
import IconLocation from './../Icons/IconLocation.vue'
import { mixinFormatEventDates, mixinFormatEventTimeInHoursAndMinutes } from './../../utils/mixins'
const themeStore = useThemeStore()

interface MetadataEventProps {
  event: EventCardObject
  compact?: boolean
  allowBreak?: boolean
}

// define props
const props = withDefaults(defineProps<MetadataEventProps>(), {
  event: undefined,
  compact: false,
  allowBreak: false
})

const startDatetimeForFormatting = computed(() => {
  return props.event?.startDatetime || props.event?.startDate
})

const formattedEventDates = computed((): string | undefined => {
  return props.event && startDatetimeForFormatting.value
    ? mixinFormatEventDates(
        startDatetimeForFormatting.value,
        props.event.endDatetime || props.event.endDate
      )
    : undefined
})
const displayTime = computed((): string => {
  if (!props.event.customDate) {
    const time =
      props.event && startDatetimeForFormatting.value
        ? mixinFormatEventTimeInHoursAndMinutes(
            startDatetimeForFormatting.value,
            props.event.endDatetime || props.event.endDate,
            props.event.endTime
          )
        : undefined
    return time ? (themeStore.isEdu ? time.replaceAll(':00', '') : time) : ''
  }
  return ''
})
const locationName = computed(() => {
  return props.event?.locationName || props.event?.location
})
</script>
<template>
  <div
    class="MetadataEvent"
    :class="{
      '-compact text-body-sm': props.compact,
      'text-body-lg': !props.compact,
      '-allow-break': props.allowBreak
    }"
  >
    <div
      v-if="props.event.ongoing || props.event.customDate || formattedEventDates"
      class="MetadataEventItem"
    >
      <IconCalendar class="MetadataEventIcon text-[1.05em]" />
      <span>{{
        props.event.ongoing ? 'Ongoing' : props.event.customDate || formattedEventDates
      }}</span>
    </div>
    <div
      v-show="displayTime"
      class="MetadataEventItem"
    >
      <IconTime class="MetadataEventIcon text-[1.15em]" />
      <span>{{ displayTime }}</span>
    </div>
    <!--Virtual location -->
    <div
      v-if="props.event.isVirtualEvent && props.event.locationLink && !props.compact"
      itemprop="location"
      itemscope
      itemtype="https://schema.org/VirtualLocation"
      class="MetadataEventItem"
    >
      <link
        itemprop="url"
        :href="props.event.locationLink"
      />
      <meta
        itemprop="name"
        :content="locationName"
      />
      <IconLocation class="MetadataEventIcon text-[1.1em]" />
      <BaseLink
        variant="none"
        class="text-action"
        :href="props.event.locationLink"
        external-target-blank
      >
        {{ locationName }}
      </BaseLink>
    </div>
    <!-- Normal location -->
    <div
      v-else-if="locationName"
      class="MetadataEventItem"
    >
      <meta
        v-if="!props.compact"
        itemprop="location"
        :content="locationName"
      />
      <IconLocation class="MetadataEventIcon text-[1.2em]" />
      <BaseLink
        v-if="props.event.locationLink && !props.compact"
        variant="none"
        class="text-action"
        :href="props.event.locationLink"
        external-target-blank
      >
        {{ locationName }}
      </BaseLink>
      <span v-else>{{ locationName }}</span>
    </div>
  </div>
</template>
<style lang="scss">
.MetadataEvent {
  @apply lg:flex lg:flex-grow;
  .MetadataEventItem {
    @apply flex;
    @apply items-start;
    @apply mr-4 md:mr-4 xl:mr-8;
    @apply mb-5 lg:mb-7;
    @apply lg:min-w-[10rem];

    span {
      @apply text-gray-dark;
    }

    svg {
      min-width: 1.25rem;
      @apply top-0.5;
    }
    .MetadataEventIcon {
      @apply text-primary relative mr-3 lg:mr-2 xl:mr-3;
    }
  }

  &.-compact {
    @apply flex flex-grow;
    .MetadataEventItem {
      @apply max-w-none min-w-[4em];
      @apply mr-6 mb-0;
    }
    &.-allow-break {
      @apply block lg:flex;
    }
  }
}
</style>
