<script setup lang="ts">
import { computed, reactive } from 'vue'
import { camelCase } from 'lodash'
import type { ImageObject, StreamfieldBlockData } from './../../../interfaces'
import BlockHeading, {
  type BlockHeadingObject
} from './../../../components/BlockHeading/BlockHeading.vue'
import type { EduStudentProjectStep } from './PageEduStudentProject.vue'
import BaseHeading from './../../../components/BaseHeading/BaseHeading.vue'
import HeroInlineMedia from './../../../components/HeroInlineMedia/HeroInlineMedia.vue'
import BlockText from './../../../components/BlockText/BlockText.vue'
import LayoutHelper from './../../../components/LayoutHelper/LayoutHelper.vue'
import BlockImageStandard from './../../../components/BlockImage/BlockImageStandard.vue'
import BlockStreamfield from './../../../components/BlockStreamfield/BlockStreamfield.vue'

export interface PageEduStudentProjectSectionProps {
  heading?: BlockHeadingObject
  blocks?: StreamfieldBlockData[]
  steps?: EduStudentProjectStep[]
  stepsNumbering?: boolean
  text?: string
  image?: ImageObject
}

const props = withDefaults(defineProps<PageEduStudentProjectSectionProps>(), {
  heading: undefined,
  blocks: undefined,
  steps: undefined,
  stepsNumbering: false,
  text: undefined,
  image: undefined
})

const { heading, blocks, image, steps, stepsNumbering, text } = reactive(props)
</script>
<template>
  <section
    class="PageEduStudentProjectSection"
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

    <!-- regular streamfield -->
    <BlockStreamfield
      v-if="blocks"
      :data="blocks"
    />

    <!-- steps -->
    <component
      :is="stepsNumbering ? 'ol' : 'ul'"
      v-else-if="steps?.length"
    >
      <li
        v-for="(step, index) in steps"
        :key="index"
        class="PageEduStudentProjectStep lg:mb-10 mb-8 px-4 lg:px-0"
      >
        <LayoutHelper
          class="bg-gray-light py-6 lg:py-14 px-4 lg:px-0"
          indent="col-2"
        >
          <template v-if="step.media?.length">
            <!-- split 50/50 -->
            <div class="lg:grid grid-cols-2 gap-6 lg:gap-10">
              <div
                :class="index % 2 === 0 ? 'order-1' : 'order-2'"
                class="mb-6 lg:mb-0"
              >
                <BaseHeading
                  level="h3"
                  class="mb-5"
                >
                  <span
                    v-if="stepsNumbering"
                    class="text-secondary"
                    aria-hidden
                    >{{ `Step ${index + 1}:` }}</span
                  >
                  {{ step.heading }}
                </BaseHeading>
                <BlockStreamfield
                  v-if="step.content"
                  :data="step.content"
                  size="medium"
                  variant="fluid"
                />
              </div>
              <HeroInlineMedia
                :hero-blocks="step.media"
                :class="index % 2 === 1 ? 'order-1' : 'order-2'"
                constrain
              />
            </div>
          </template>
          <template v-else>
            <BaseHeading
              level="h3"
              class="mb-5"
            >
              <span
                v-if="stepsNumbering"
                aria-hidden
                class="text-secondary"
                >{{ `Step ${index + 1}:` }}</span
              >
              {{ step.heading }}
            </BaseHeading>
            <BlockStreamfield
              v-if="step.content"
              class="PageEduStudentProjectStep__fullWidth"
              :data="step.content"
              size="medium"
              variant="fluid"
            />
          </template>
        </LayoutHelper>
      </li>
    </component>

    <!-- simple richtext -->
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
.PageEduStudentProjectStep {
  .BlockStreamfield {
    div:last-child {
      @apply mb-0 #{!important};
    }
  }
  .caption-area {
    @apply px-0;
  }
  .PageEduStudentProjectStep__fullWidth {
    @screen lg {
      .BlockText {
        @apply mr-[10rem];
      }
    }
    @screen xl {
      .BlockText {
        @apply mr-[14rem];
      }
    }
  }
}
</style>
