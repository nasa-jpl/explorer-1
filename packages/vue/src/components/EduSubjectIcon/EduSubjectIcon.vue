<script setup lang="ts">
import { computed, reactive } from 'vue'
import IconEduArt from '../Icons/IconEduArt.vue'
import IconEduEngineering from '../Icons/IconEduEngineering.vue'
import IconEduEnglishLanguageArts from '../Icons/IconEduEnglishLanguageArts.vue'
import IconEduMathematics from '../Icons/IconEduMathematics.vue'
import IconEduScience from '../Icons/IconEduScience.vue'
import IconEduTechnology from '../Icons/IconEduTechnology.vue'

interface EduSubjectIconProps {
  subject: string
}

// define props
const props = withDefaults(defineProps<EduSubjectIconProps>(), {
  subject: 'science'
})

const normalizedSubject = computed(() => {
  return subject.toLowerCase()
})
const theIcon = computed(() => {
  let component = undefined
  switch (normalizedSubject.value) {
    case 'art':
    case 'arts':
      component = IconEduArt
      break
    case 'english':
    case 'english language arts':
      component = IconEduEnglishLanguageArts
      break
    case 'engineering':
      component = IconEduEngineering
      break
    case 'math':
    case 'mathematics':
      component = IconEduMathematics
      break
    case 'science':
      component = IconEduScience
      break
    case 'technology':
      component = IconEduTechnology
      break
  }
  return component
})
const { subject } = reactive(props)
</script>
<template>
  <component :is="theIcon"></component>
</template>
