<script setup lang="ts">
import { computed, reactive } from 'vue'
import { camelCase } from 'lodash'
import type { ImageObject, StreamfieldBlockData } from './../../../interfaces'
import BlockHeading, {
  type BlockHeadingObject
} from './../../../components/BlockHeading/BlockHeading.vue'
import BaseHeading from './../../../components/BaseHeading/BaseHeading.vue'
import BlockText from './../../../components/BlockText/BlockText.vue'
import LayoutHelper from './../../../components/LayoutHelper/LayoutHelper.vue'
import BlockImageStandard from './../../../components/BlockImage/BlockImageStandard.vue'
import BlockStreamfield from './../../../components/BlockStreamfield/BlockStreamfield.vue'

export interface PageEduLessonSectionProps {
  heading: BlockHeadingObject
  blocks?: StreamfieldBlockData[]
  procedures?: {
    sectionHeading: string
    stepsNumbering: boolean
    steps: {
      blocks: StreamfieldBlockData[]
    }[]
  }[]
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

const { heading, blocks, image } = reactive(props)

const anchorId = computed(() => {
  return 'lesson_' + camelCase(heading.heading)
})
</script>
<template>
  <section
    :id="anchorId"
    class="PageEduLessonSection"
    :aria-label="heading.heading"
  >
    <LayoutHelper
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
        v-for="(section, index) in procedures"
        :key="index"
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
                  v-for="(step, step_index) of section.steps"
                  :key="step_index"
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
                v-for="(step, step_index) of section.steps"
                :key="step_index"
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
.PageEduProcedureSection {
  .PageEduProcedureSectionSteps {
    counter-reset: step;
  }
  .PageEduProcedureSectionSingleStep {
    li:not(:last-of-type) .BlockStreamfield {
      @apply -mb-5 lg:-mb-10;
    }
  }
  ol.PageEduProcedureSectionSingleStep {
    @apply list-none;
    > li {
      @apply relative w-full;
      counter-increment: step;
      &::before {
        @apply relative block w-[45rem] mx-auto h-0 pl-3;
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
          @apply w-[50rem];
          font-size: pxToRem(20);
        }
      }
      @screen lg {
        &::before {
          @apply w-[47rem] pl-0;
          font-size: pxToRem(21);
        }
      }
      @screen xl {
        &::before {
          @apply w-[59rem];
          font-size: pxToRem(22);
        }
      }
    }
  }
}
</style>
