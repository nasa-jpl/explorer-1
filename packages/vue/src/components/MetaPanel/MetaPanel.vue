<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import {
  EduResourcesGradeLevel,
  EduResourcesSubject,
  EduResourceStandardItem,
  EduResourcesTime,
  MetaPanelTheme
} from './../../interfaces'
import BaseButton from './../BaseButton/BaseButton.vue'
import IconMinus from './../Icons/IconMinus.vue'
import IconPlus from './../Icons/IconPlus.vue'
import MetaPanelAccordion from './../MetaPanelAccordion/MetaPanelAccordion.vue'
import MetaPanelItems from './../MetaPanelItems/MetaPanelItems.vue'

interface MetaPanelProps {
  /** Text for button that expands the panel */
  button?: string
  theme?: MetaPanelTheme
  primarySubject?: EduResourcesSubject
  additionalSubjects?: EduResourcesSubject[]
  gradeLevels?: EduResourcesGradeLevel[]
  time?: EduResourcesTime
  standards?: EduResourceStandardItem[]
  /** If the top of the panel should overlay the area above it */
  negativeTop?: boolean
  /** If the bottom of the panel should overlay the area below it */
  negativeBottom?: boolean
}

// define props
const props = withDefaults(defineProps<MetaPanelProps>(), {
  button: undefined,
  theme: 'primary',
  primarySubject: undefined,
  additionalSubjects: undefined,
  gradeLevels: undefined,
  time: undefined,
  standards: undefined,
  negativeTop: false,
  negativeBottom: false
})
const { button, theme, primarySubject, additionalSubjects, gradeLevels, time, standards } =
  reactive(props)

const metaPanelOpen = ref(false)

const handleMetaPanel = () => {
  metaPanelOpen.value = !metaPanelOpen.value
}

const buttonText = computed(() => {
  let text = button
  if (text) {
    if (metaPanelOpen.value) {
      text = text.replace('View', 'Hide')
    }
  }
  return text
})

const backgroundClass = computed(() => {
  let classes = 'bg-gray-light'
  if (theme === 'stars') {
    classes = 'bg-primary bg-stars bg-auto lg:bg-cover'
  }
  return classes
})
const headingClass = computed(() => {
  let classes = 'text-primary'
  if (theme === 'secondary') {
    classes = 'text-secondary'
  }
  return classes
})
const borderClass = computed(() => {
  let classes = 'border-t border-gray-light-mid'
  if (theme === 'stars') {
    classes = ''
  }
  return classes
})

interface SortedStandards {
  [key: string]: EduResourceStandardItem[]
}
const sortedStandards = computed((): SortedStandards | undefined => {
  if (standards) {
    const sorted = standards.reduce<SortedStandards>((acc, item) => {
      const type = item.standard?.type
      // Initialize array for type if it doesn't exist
      if (!acc[type]) {
        acc[type] = []
      }
      // Add item to the appropriate type array
      acc[type].push(item)
      return acc
    }, {})
    return sorted
  }
  return undefined
})

const standardsEla = computed(() => {
  return sortedStandards.value ? sortedStandards.value['ccss_english_language_arts'] : undefined
})
const standardsMath = computed(() => {
  return sortedStandards.value ? sortedStandards.value['ccss_math'] : undefined
})
const standardsNgss = computed(() => {
  return sortedStandards.value ? sortedStandards.value['ngss'] : undefined
})
const standardsIste = computed(() => {
  return sortedStandards.value ? sortedStandards.value['iste'] : undefined
})
</script>

<template>
  <section
    aria-label="Metadata"
    class="MetaPanel z-20 relative overflow-hidden"
    :class="{
      '-mt-4 lg:-mt-10 xl:-mt-14': negativeTop,
      '-mb-4 lg:-mb-10 xl:-mb-14': negativeBottom
    }"
  >
    <div class="MixedBleedGrid pl-4 lg:pl-0">
      <div
        class="col-start-container lg:col-start-indent-col-2 col-end-bleed lg:grid grid-cols-subgrid"
        :class="backgroundClass"
      >
        <div class="col-start-container lg:col-start-indent-col-2 col-end-container">
          <div class="MetaPanel-heading lg:grid grid-cols-12 col-end-container container">
            <div class="col-start-1 col-end-9 xl:col-end-9 pl-4 lg:pl-10 pr-6 py-6 lg:py-10">
              <MetaPanelItems
                :theme="theme"
                :primary-subject="primarySubject"
                :additional-subjects="additionalSubjects"
                :grade-levels="gradeLevels"
                :time="time"
              />
            </div>
            <div
              v-if="button && (standards?.length || $slots.metaInfo)"
              class="ThemeVariantLight col-start-9 col-end-13 pl-4 lg:pl-0 pt-4 pb-6 lg:pr-4 xl:pr-10 2xl:pr-0 lg:py-10 lg:text-right"
            >
              <BaseButton
                variant="secondary"
                class="MetaPanel-button"
                :aria-expanded="metaPanelOpen"
                compact
                @click="handleMetaPanel"
              >
                {{ buttonText }}
                <template #icon>
                  <IconPlus
                    v-if="!metaPanelOpen"
                    class="text-xs ml-2"
                  />
                  <IconMinus
                    v-else
                    class="text-xs ml-2"
                  />
                </template>
              </BaseButton>
            </div>
          </div>
        </div>
        <div
          v-if="standards?.length || $slots.metaInfo"
          v-show="metaPanelOpen"
          class="MetaPanel-panel col-start-container lg:col-start-indent-col-2 col-end-bleed lg:grid grid-cols-subgrid bg-gray-light pb-3 lg:pb-6"
        >
          <div
            class="container col-start-container lg:col-start-indent-col-2 col-end-container px-8 lg:px-[3rem] xl:px-[5.8rem]"
          >
            <div :class="borderClass">
              <div v-if="$slots.metaInfo">
                <slot name="metaInfo" />
              </div>
              <div
                v-if="standards?.length"
                class="pt-6 lg:pt-7"
              >
                <div
                  class="ThemeVariantGray text-subtitle mb-5"
                  :class="headingClass"
                >
                  Standards
                  <span class="sr-only">.</span>
                </div>
                <div class="w-full lg:grid grid-cols-2 lg:gap-6 xl:gap-10">
                  <div v-if="standardsEla">
                    <div class="text-base font-semibold text-gray-dark mb-4">
                      English Language Arts Standards (CCSS - ELA)
                    </div>
                    <span class="sr-only">.</span>
                    <MetaPanelAccordion
                      :standards="standardsEla"
                      class="mb-6"
                    />
                  </div>
                  <div v-if="standardsMath">
                    <div class="text-base font-semibold text-gray-dark mb-4">
                      Math Standards (CCSS - Math)
                    </div>
                    <span class="sr-only">.</span>
                    <MetaPanelAccordion
                      :standards="standardsMath"
                      class="mb-6"
                    />
                  </div>
                  <div v-if="standardsNgss">
                    <div class="text-base font-semibold text-gray-dark mb-4">
                      Science Standards (NGSS)
                    </div>
                    <span class="sr-only">.</span>
                    <MetaPanelAccordion
                      :standards="standardsNgss"
                      class="mb-6"
                    />
                  </div>
                  <div v-if="standardsIste">
                    <div class="text-base font-semibold text-gray-dark mb-4">
                      Technology Standards (ISTE)
                    </div>
                    <span class="sr-only">.</span>
                    <MetaPanelAccordion :standards="standardsIste" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss">
@import '@explorer-1/common/src/scss/components/MetaPanel';
</style>
