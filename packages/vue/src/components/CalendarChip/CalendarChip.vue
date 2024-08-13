<script setup lang="ts">
import { computed } from 'vue'
import { useThemeStore } from '../../store/theme'
import { mixinFormatSplitEventDates } from './../../utils/mixins'
const themeStore = useThemeStore()

interface CalendarChipProps {
  startDate: string
  endDate?: string
  ongoing: boolean
}

// define props
const props = withDefaults(defineProps<CalendarChipProps>(), {
  startDate: undefined,
  endDate: undefined,
  ongoing: false
})

const splitDate = computed(() => {
  if (props.startDate) {
    return mixinFormatSplitEventDates(props.startDate, props.endDate)
  }
  return undefined
})
</script>
<template>
  <div
    v-if="splitDate || ongoing"
    class="hidden md:block absolute top-0 left-0 z-10 px-4 py-4 text-center text-white bg-primary ThemeVariantLight"
  >
    <template v-if="ongoing">
      <div class="text-subtitle">Ongoing</div>
    </template>
    <template v-else-if="themeStore.isEdu && splitDate">
      <div class="font-extrabold text-6xl leading-tight tracking-wider uppercase">
        {{ splitDate.month }}
      </div>
      <div class="text-subtitle">
        {{ splitDate.year }}
      </div>
    </template>
    <template v-else>
      <div class="font-extrabold text-6xl leading-tight tracking-wider">
        {{ splitDate.day }}
      </div>
      <div class="text-subtitle">
        {{ splitDate.monthAndYear }}
      </div>
    </template>
  </div>
</template>
