<script setup lang="ts">
import { computed, reactive } from 'vue'
import { rangeifyGrades } from './../../utils/rangeifyGrades'
import {
  MetaPanelTheme,
  EduResourcesSubject,
  EduResourcesGradeLevel,
  EduResourcesTime
} from './../../interfaces'
import IconSubject from './../Icons/IconSubject.vue'
import IconProfile from './../Icons/IconProfile.vue'
import IconTime from './../Icons/IconTime.vue'

interface MetaPanelProps {
  theme?: MetaPanelTheme
  primarySubject?: EduResourcesSubject
  additionalSubjects?: EduResourcesSubject[]
  gradeLevels?: EduResourcesGradeLevel[]
  time?: EduResourcesTime
}

// define props
const props = withDefaults(defineProps<MetaPanelProps>(), {
  theme: 'primary',
  primarySubject: undefined,
  additionalSubjects: undefined,
  gradeLevels: undefined,
  time: undefined
})

const { theme, primarySubject, additionalSubjects, gradeLevels, time } = reactive(props)

const audience = computed(() => {
  return gradeLevels ? rangeifyGrades(gradeLevels) : undefined
})

const subjects = computed(() => {
  if (primarySubject?.subject) {
    let combinedArray = [primarySubject.subject]
    let output = undefined
    if (additionalSubjects) {
      const filteredArray = additionalSubjects.map((item) => item.subject)
      combinedArray = combinedArray.concat(filteredArray)
    }
    output = combinedArray.join(', ')
    return output
  }
  return undefined
})

const iconColor = computed(() => {
  let classes = 'text-primary'
  if (theme === 'secondary') {
    classes = 'text-secondary'
  } else if (theme === 'stars') {
    classes = 'text-white'
  }
  return classes
})
const headingColor = computed(() => {
  let classes = 'text-primary'
  if (theme === 'secondary') {
    classes = 'text-secondary'
  } else if (theme === 'stars') {
    classes = 'text-white opacity-60'
  }

  return classes
})
const textColor = computed(() => {
  let classes = 'text-gray-dark'
  if (theme === 'stars') {
    classes = 'text-white'
  }
  return classes
})
const themeVariant = computed(() => {
  let variant = 'ThemeVariantGray'
  if (theme === 'stars') {
    variant = 'ThemeVariantDark'
  }
  return variant
})
</script>

<template>
  <div
    class="MetaPanelItems md:flex gap-10"
    :class="{ 'justify-between': subjects && audience && time }"
  >
    <div
      v-if="subjects"
      class="MetaPanelItem"
    >
      <div
        class="MetaPanelItem-icon"
        :class="iconColor"
      >
        <IconSubject class="text-[2em] md:text-[2.4em]" />
      </div>
      <div>
        <div
          class="MetaPanelItem-heading"
          :class="`${themeVariant} ${headingColor}`"
        >
          Subjects
          <span class="sr-only">.</span>
        </div>
        <div
          class="MetaPanelItem-content"
          :class="textColor"
        >
          {{ subjects }}
        </div>
      </div>
    </div>
    <div
      v-if="audience"
      class="MetaPanelItem"
    >
      <div
        class="MetaPanelItem-icon"
        :class="iconColor"
      >
        <IconProfile class="text-[2.1em] md:text-[2.5em] mt-1 md:mt-0" />
      </div>
      <div>
        <div
          class="MetaPanelItem-heading"
          :class="`${themeVariant} ${headingColor}`"
        >
          Grade Levels
          <span class="sr-only">.</span>
        </div>
        <div
          class="MetaPanelItem-content"
          :class="textColor"
        >
          {{ audience }}
        </div>
      </div>
    </div>
    <div
      v-if="time?.time"
      class="MetaPanelItem"
    >
      <div
        class="MetaPanelItem-icon"
        :class="iconColor"
      >
        <IconTime class="text-[1.6em] md:text-[2em] ml-1 mt-1" />
      </div>
      <div>
        <div
          class="MetaPanelItem-heading"
          :class="`${themeVariant} ${headingColor}`"
        >
          Time Required
          <span class="sr-only">.</span>
        </div>
        <div
          class="MetaPanelItem-content"
          :class="textColor"
        >
          {{ time.time }}
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.MetaPanelItems {
  .MetaPanelItem {
    @apply flex w-full items-start mb-4 md:mb-0 w-auto;
    &:last-of-type {
      @apply mb-0;
    }
    .MetaPanelItem-icon {
      @apply mr-1 w-10 md:w-12;
    }
    .MetaPanelItem-heading {
      @apply text-subtitle text-base md:mb-[.2em] whitespace-nowrap;
    }
    .MetaPanelItem-content {
      @apply font-primary font-bold lg:text-xl;
    }
  }
}
</style>
