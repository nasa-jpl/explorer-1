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
@use 'sass:math';
@function pxToRem($pxValue) {
  // Assumes font-size for body element is a constant 16px
  @return math.div($pxValue, 16) * 1rem;
}
.PageEduLessonSection {
  @apply overflow-x-hidden;
  .PageEduProcedureSection {
    .PageEduProcedureSectionSteps {
      counter-reset: step;
    }
    .PageEduProcedureSectionSingleStep {
      li:not(:last-of-type) .BlockStreamfield {
        @apply -mb-5;
      }
    }
    ol.PageEduProcedureSectionSingleStep {
      @apply list-none indent-7 pr-4 xl:indent-0.5 xl:pr-0.5;
      text-wrap: pretty;
      > li {
        @apply relative w-full;
        counter-increment: step;
        &::before {
          @apply relative block w-[45rem] mx-auto h-0 pl-1;
          content: counter(step) '. ';
          // mimicking .text-body-lg
          font-size: pxToRem(18);
          line-height: 1.6667;
        }

        @screen sm {
          &::before {
            @apply w-[47rem];
            font-size: pxToRem(19);
          }
        }
        @screen md {
          &::before {
            @apply w-[51.5rem];
            font-size: pxToRem(20);
          }
        }
        @screen lg {
          &::before {
            @apply w-[46rem] pl-0;
            font-size: pxToRem(21);
          }
        }
        @screen xl {
          &::before {
            @apply w-[59rem];
            font-size: pxToRem(22);
          }
        }
        @screen 2xl {
          &::before {
            // @apply w-[58.5rem];
          }
        }
      }
    }
  }
}
</style>
