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

export interface MetadataEventProps {
  event: EventCardObject
  compact?: boolean
  allowBreak?: boolean
  showLocation?: boolean
  showTime?: boolean
}

// define props
const props = withDefaults(defineProps<MetadataEventProps>(), {
  event: undefined,
  compact: false,
  allowBreak: false,
  showLocation: true,
  showTime: true
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
  if (!props.event.customDate && props.event.startTime && props.event.endTime) {
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
const location = computed(() => {
  if (props.event?.location) {
    return props.event?.location
  } else if (props.compact) {
    let text = 'Hybrid'
    let virtual = props.event.isVirtualEvent
    let inPerson = props.event.isInPersonEvent
    if (props.event?.isVirtualEvent && props) {
      if (virtual && !inPerson) {
        text = 'Online'
      } else if (!virtual && inPerson) {
        text = 'In-person'
      }
    }
    return text
  } else {
    return props.event?.locationName
  }
})
</script>
<template>
  <div
    class="MetadataEvent"
    :class="{
      '-compact text-xs xl:text-sm font-secondary': props.compact,
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
      v-show="displayTime && showTime"
      class="MetadataEventItem"
    >
      <IconTime class="MetadataEventIcon text-[1.15em]" />
      <span>{{ displayTime }}</span>
    </div>
    <!--Virtual location -->
    <template v-if="showLocation">
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
          :content="location"
        />
        <IconLocation class="MetadataEventIcon text-[1.1em]" />
        <BaseLink
          variant="none"
          class="text-action"
          :href="props.event.locationLink"
          external-target-blank
        >
          {{ location }}
        </BaseLink>
      </div>
      <!-- Normal location -->
      <div
        v-else-if="location"
        class="MetadataEventItem"
      >
        <meta
          v-if="!props.compact"
          itemprop="location"
          :content="location"
        />
        <IconLocation class="MetadataEventIcon text-[1.2em]" />
        <BaseLink
          v-if="props.event.locationLink && !props.compact"
          variant="none"
          class="text-action"
          :href="props.event.locationLink"
          external-target-blank
        >
          {{ location }}
        </BaseLink>
        <span v-else>{{ location }}</span>
      </div>
    </template>
  </div>
</template>
<style lang="scss">
@import '@explorer-1/common/src/scss/components/MetadataEvent';
</style>
