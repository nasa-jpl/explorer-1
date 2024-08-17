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

interface PageEduLessonSectionProps {
  heading: BlockHeadingObject
  blocks?: StreamfieldBlockData[]
  procedures?: {
    procedure: StreamfieldBlockData[]
  }[]
  procedureSteps?: boolean
  text?: string
  image?: ImageObject
}

const props = withDefaults(defineProps<PageEduLessonSectionProps>(), {
  heading: undefined,
  blocks: undefined,
  procedures: undefined,
  procedureSteps: false,
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
        v-for="(item, index) in procedures"
        :key="index"
      >
        <LayoutHelper
          v-if="procedureSteps"
          indent="col-3"
          class="lg:mb-8 mb-5"
        >
          <BaseHeading level="h3">
            {{ 'Section ' + (Number(index) + 1) }}
          </BaseHeading>
        </LayoutHelper>
        <BlockStreamfield
          v-if="item?.procedure"
          :data="item.procedure"
        />
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
