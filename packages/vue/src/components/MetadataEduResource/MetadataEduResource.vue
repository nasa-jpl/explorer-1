<script setup lang="ts">
import { computed } from 'vue'
import type { EduResourceCardObject } from './../../interfaces.ts'
import IconSubject from './../Icons/IconSubject.vue'
import IconProfile from './../Icons/IconProfile.vue'
import IconTime from './../Icons/IconTime.vue'
import {} from './../../utils/mixins'
import { rangeifyGrades } from './../../utils/rangeifyGrades'

interface MetadataEduResourceProps {
  resource: EduResourceCardObject
  compact?: boolean
  variant?: string
  showTime: boolean
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
    :class="{ '-compact text-sm xl:text-base': props.compact, 'text-body-lg': !props.compact }"
  >
    <div
      v-if="primarySubject"
      class="MetadataEduResourceItem"
    >
      <IconSubject
        class="MetadataEduResourceIcon text-[1.25em]"
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
.MetadataEduResource {
  @apply lg:flex lg:flex-grow;
  .MetadataEduResourceItem {
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
    .MetadataEduResourceIcon {
      @apply relative mr-3 lg:mr-2 xl:mr-3;
    }
  }

  &.-compact {
    @apply flex flex-grow flex-wrap;
    .MetadataEduResourceItem {
      @apply whitespace-nowrap;
      @apply max-w-none min-w-[4em];
      @apply mr-6 mb-0;
      &.-xlScreensOnly {
        @apply hidden xl:flex;
      }
    }
  }
}
</style>
