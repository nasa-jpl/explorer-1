<script setup lang="ts">
import { reactive } from 'vue'
import type { ImageObject, StreamfieldBlockData } from './../../../interfaces'
import BaseHeading from './../../../components/BaseHeading/BaseHeading.vue'
import BlockHeading, {
  type BlockHeadingObject
} from './../../../components/BlockHeading/BlockHeading.vue'
import type { EduStudentProjectStep } from './PageEduStudentProject.vue'
import HeroInlineMedia from './../../../components/HeroInlineMedia/HeroInlineMedia.vue'
import LayoutHelper from './../../../components/LayoutHelper/LayoutHelper.vue'
import BlockInlineImage from './../../../components/BlockInlineImage/BlockInlineImage.vue'
import BlockImageStandard from './../../../components/BlockImage/BlockImageStandard.vue'
import BlockStreamfield from './../../../components/BlockStreamfield/BlockStreamfield.vue'
import { getHeadingId } from './../../../utils/getHeadingId'

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
      v-if="heading?.heading"
      indent="col-3"
      class="lg:mb-8 mb-5"
    >
      <BlockHeading
        :data="heading"
        generate-id
      />
    </LayoutHelper>

    <!-- simple richtext -->
    <BlockInlineImage
      v-if="text"
      :data="{
        text: text,
        image: image,
        alignTo: 'right'
      }"
      class="lg:mb-18 mb-10"
    />

    <LayoutHelper
      v-else-if="image"
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
        v-bind-once="{ id: step.heading ? getHeadingId(step.heading) : undefined }"
        class="PageEduStudentProjectStep lg:mb-12 mb-10 px-4 lg:px-0"
      >
        <LayoutHelper
          class="px-0 lg:px-4"
          indent="col-1"
        >
          <div
            class="ThemeVariantGray bg-gray-light px-8 py-6 md:px-10 md:py-8 lg:px-18 lg:py-16 overflow-hidden"
          >
            <template v-if="step.media?.length">
              <!-- split 50/50 -->
              <div class="lg:grid grid-cols-2 gap-6 lg:gap-10">
                <BaseHeading
                  level="h3"
                  class="lg:hidden mb-5"
                >
                  <span
                    v-if="stepsNumbering"
                    class="steps-numbering"
                    aria-hidden
                    >{{ `Step ${index + 1}:` }}</span
                  >
                  {{ step.heading }}
                </BaseHeading>
                <HeroInlineMedia
                  :hero-blocks="step.media"
                  class="order-1 mb-6 lg:mb-0"
                  :class="index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'"
                  constrain
                />
                <div
                  :class="index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'"
                  class="order-2"
                >
                  <BaseHeading
                    level="h3"
                    class="hidden lg:block mb-5"
                  >
                    <span
                      v-if="stepsNumbering"
                      class="steps-numbering"
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
                  class="steps-numbering"
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
          </div>
        </LayoutHelper>
      </li>
    </component>
  </section>
</template>
<style lang="scss">
@use 'sass:math';
@function pxToRem($pxValue) {
  // Assumes font-size for body element is a constant 16px
  @return math.div($pxValue, 16) * 1rem;
}
.PageEduStudentProjectStep {
  &:target {
    @apply scroll-mt-14;
  }
  .BlockStreamfield {
    div:last-child {
      @apply mb-0 #{!important};
    }
  }
  .caption-area {
    @apply px-0;
  }
  .steps-numbering {
    // intentionally overriding correction that occurs within ThemeVariantGray
    @apply text-jpl-red;
  }
  .LayoutHelper > div > .BlockText {
    .richtext-image {
      &.right,
      &.left {
        @apply lg:max-w-md;
      }
      &.right {
        @apply mr-0;
      }
      &.left {
        @apply ml-0;
      }
    }
  }

  .PageEduStudentProjectStep__fullWidth {
    .LayoutHelper > div > .BlockText {
      p,
      li {
        @screen lg {
          @apply mr-[10rem];
        }
        @screen xl {
          @apply mr-[14rem];
        }
      }
      table {
        p,
        li {
          @apply mr-0;
        }
      }
    }
  }
}
</style>
