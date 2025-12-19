<script setup lang="ts">
/** A row of metadata icons and text that displays key information about a post. Specifically for use with ThemeEdu */

import { computed } from 'vue'
import type { EduResourceCardObject, MetaPanelTheme } from './../../interfaces.ts'
import EduSubjectIcon from './../EduSubjectIcon/EduSubjectIcon.vue'
import IconProfile from './../Icons/IconProfile.vue'
import IconTime from './../Icons/IconTime.vue'
import { rangeifyGrades } from './../../utils/rangeifyGrades'

interface MetadataEduResourceProps {
  resource: EduResourceCardObject
  /** If compact styling should be used */
  compact?: boolean
  /** Use primary or secondary theme colors */
  variant?: MetaPanelTheme
  /** If time commitment should be displayed */
  showTime?: boolean
}

// define props
const props = withDefaults(defineProps<MetadataEduResourceProps>(), {
  resource: undefined,
  compact: false,
  showTime: false,
  variant: 'primary'
})

const iconClass = computed(() => {
  return props.variant === 'primary' ? 'text-primary' : 'text-secondary'
})
const primarySubject = computed(() => {
  return props.resource?.primarySubject?.subject
})
const audience = computed(() => {
  return rangeifyGrades(props.resource?.gradeLevels)
})
const time = computed(() => {
  let time = props.resource?.time?.time
  if (time && props.compact) {
    time = time.replace('Under ', '<')
  }
  return time
})
</script>
<template>
  <div
    class="MetadataEduResource"
    :class="{
      '-compact text-xs xl:text-sm font-secondary': props.compact,
      'text-body-lg': !props.compact
    }"
  >
    <div
      v-if="primarySubject"
      class="MetadataEduResourceItem"
    >
      <EduSubjectIcon
        :subject="primarySubject"
        class="MetadataEduResourceIcon text-[.85em] -mt-px"
        :class="iconClass"
      />
      <span>
        {{ primarySubject }}
      </span>
    </div>
    <div
      v-if="audience"
      class="MetadataEduResourceItem"
    >
      <IconProfile
        class="MetadataEduResourceIcon text-[1.3em]"
        :class="iconClass"
      />
      <span>{{ audience }}</span>
    </div>
    <div
      v-if="time && showTime"
      class="MetadataEduResourceItem"
      :class="primarySubject && audience && time ? '-xlScreensOnly' : ''"
    >
      <IconTime
        class="MetadataEduResourceIcon text-[1.15em]"
        :class="iconClass"
      />
      <span>{{ time }}</span>
    </div>
  </div>
</template>
<style lang="scss">
@import '@explorer-1/common/src/scss/components/MetadataEduResource';
</style>
