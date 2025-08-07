<script setup lang="ts">
import { reactive } from 'vue'
import BaseHeading from './../../../components/BaseHeading/BaseHeading.vue'
import BlockHeading, {
  type BlockHeadingObject
} from './../../../components/BlockHeading/BlockHeading.vue'
import BlockImageStandard from './../../../components/BlockImage/BlockImageStandard.vue'
import BlockStreamfield from './../../../components/BlockStreamfield/BlockStreamfield.vue'
import BlockText from './../../../components/BlockText/BlockText.vue'
import LayoutHelper from './../../../components/LayoutHelper/LayoutHelper.vue'
import type { ImageObject, StreamfieldBlockData } from './../../../interfaces'
import type { EduLessonProcedure } from './PageEduLesson.vue'

export interface PageEduLessonSectionProps {
  heading?: BlockHeadingObject
  blocks?: StreamfieldBlockData[]
  procedures?: EduLessonProcedure[]
  text?: string
  image?: ImageObject
}

const props = withDefaults(defineProps<PageEduLessonSectionProps>(), {
  heading: undefined,
  blocks: undefined,
  procedures: undefined,
  text: undefined,
  image: undefined
})

const { heading, blocks, image, procedures, text } = reactive(props)
</script>
<template>
  <section
    class="PageEduLessonSection"
    :aria-label="heading?.heading"
  >
    <LayoutHelper
      v-if="heading"
      indent="col-3"
      class="lg:mb-8 mb-5"
    >
      <BlockHeading
        :data="heading"
        generate-id
      />
    </LayoutHelper>

    <LayoutHelper
      v-if="image"
      indent="col-2"
      class="lg:mb-8 mb-5"
    >
      <!-- image goes here -->
      <BlockImageStandard :data="image" />
    </LayoutHelper>

    <BlockStreamfield
      v-if="blocks"
      :data="blocks"
    />
    <template v-else-if="procedures?.length">
      <template
        v-for="(section, _index) in procedures"
        :key="_index"
      >
        <div class="PageEduProcedureSection">
          <LayoutHelper
            v-if="section.sectionHeading"
            indent="col-3"
            class="lg:mb-8 mb-5"
          >
            <BaseHeading level="h3">
              {{ section.sectionHeading }}
            </BaseHeading>
          </LayoutHelper>
          <div
            v-if="section.steps?.length"
            class="PageEduProcedureSectionSteps"
          >
            <template v-if="section.stepsNumbering">
              <ol class="PageEduProcedureSectionSingleStep">
                <template
                  v-for="(step, _step_index) of section.steps"
                  :key="_step_index"
                >
                  <li v-if="step.blocks?.length">
                    <BlockStreamfield
                      v-if="step?.blocks"
                      :data="step.blocks"
                    />
                  </li>
                </template>
              </ol>
            </template>
            <template v-else>
              <template
                v-for="(step, _step_index) of section.steps"
                :key="_step_index"
              >
                <BlockStreamfield
                  v-if="step.blocks?.length"
                  class="PageEduProcedureSectionSingleStep"
                  :data="step.blocks"
                />
              </template>
            </template>
          </div>
        </div>
      </template>
    </template>
    <LayoutHelper
      v-else-if="text"
      indent="col-3"
      class="lg:mb-18 mb-10"
    >
      <BlockText :text="text" />
    </LayoutHelper>
  </section>
</template>
<style lang="scss">
@import '@explorer-1/common/src/scss/templates/PageEduLessonSection';
</style>
