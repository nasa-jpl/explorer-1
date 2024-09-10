<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import type {
  ImageObject,
  PageEduResourcesObject,
  StreamfieldBlockData
} from './../../../interfaces'
import HeroMedia from './../../../components/HeroMedia/HeroMedia.vue'
import BaseLink from './../../../components/BaseLink/BaseLink.vue'
import type { BlockHeadingObject } from '../../../components/BlockHeading/BlockHeading.vue'
import BlockLinkCarousel from './../../../components/BlockLinkCarousel/BlockLinkCarousel.vue'
import LayoutHelper from './../../../components/LayoutHelper/LayoutHelper.vue'
import DetailHeadline from './../../../components/DetailHeadline/DetailHeadline.vue'
import ShareButtonsEdu from './../../../components/ShareButtonsEdu/ShareButtonsEdu.vue'
import BlockStreamfield from './../../../components/BlockStreamfield/BlockStreamfield.vue'
import BlockRelatedLinks from '../../../components/BlockRelatedLinks/BlockRelatedLinks.vue'
import MetaPanel from '../../../components/MetaPanel/MetaPanel.vue'
import MetaPanelItems from '../../../components/MetaPanelItems/MetaPanelItems.vue'
import PageEduStudentProjectSection, {
  type PageEduStudentProjectSectionProps
} from './PageEduStudentProjectSection.vue'
import NavJumpMenu from './../../../components/NavJumpMenu/NavJumpMenu.vue'
import HeroInlineMedia from './../../../components/HeroInlineMedia/HeroInlineMedia.vue'
import AboutTheAuthor from './../../../components/AboutTheAuthor/AboutTheAuthor.vue'

import { HeadingLevel } from '../../../components/BaseHeading/BaseHeading.vue'
import StudentProjectBadge from '@explorer-1/common/src/images/svg/student-project-badge.svg'

interface EduStudentProjectSectionObject extends PageEduStudentProjectSectionProps {
  type?: string
}
export interface EduStudentProjectStep {
  heading?: string
  media?: StreamfieldBlockData[]
  content?: StreamfieldBlockData[]
}

interface PageEduStudentProjectObject extends PageEduResourcesObject {
  [key: string]: any
  studentProject: {
    title: string
    urlPath: string
  }
  overview: StreamfieldBlockData[]
  overviewHeading: string
  overviewImage: ImageObject
  materials: string
  materialsHeading: string
  materialsImage: ImageObject
  steps: EduStudentProjectStep[]
  stepsHeading: string
  stepsStepsNumbering?: boolean
  customSections: any
}
interface PageEduStudentProjectProps {
  data?: PageEduStudentProjectObject
}

const props = withDefaults(defineProps<PageEduStudentProjectProps>(), {
  data: undefined
})

const { data } = reactive(props)

const PageEduStudentProjectJumpMenu = ref()

defineExpose({
  PageEduStudentProjectJumpMenu
})

const stringAsHeadingBlockData = (
  heading: HeadingLevel,
  overrideText?: string
): BlockHeadingObject => {
  return {
    blockType: 'HeadingBlock',
    heading: (overrideText || heading) as HeadingLevel,
    level: 'h2'
  }
}

const heroEmpty = computed((): boolean => {
  return data?.hero?.length === 0
})

const heroInline = computed((): boolean => {
  // heroes with interactive elements have special handling
  if (!heroEmpty.value && data?.hero) {
    // excludes VideoBlock as this will autoplay
    if (data?.hero[0].blockType === 'VideoBlock') {
      return false
    } else if (
      data?.hero[0].blockType === 'CarouselBlock' ||
      data?.hero[0].blockType === 'IframeEmbedBlock' ||
      data?.hero[0].blockType === 'VideoEmbedBlock' ||
      data?.hero[0].blockType === 'ImageComparisonBlock'
    ) {
      return true
    }
  }
  return false
})

const sectionOrder = ['top', 'overview', 'materials', 'steps', 'bottom']

// mimic HeadingBlock data shape for defined section headings
const staticSectionHeadings = computed((): { [key: string]: BlockHeadingObject } | undefined => {
  if (data) {
    const result = sectionOrder.reduce<Record<string, BlockHeadingObject>>((acc, section) => {
      // only include the heading if the section has content
      if (data[section]?.length) {
        const headingText =
          section === 'steps' ? 'Project Steps' : section.charAt(0).toUpperCase() + section.slice(1)
        acc[section] = stringAsHeadingBlockData(
          (data[`${section}Heading`] as HeadingLevel) || headingText
        )
      }
      return acc
    }, {})
    return result
  }
  return undefined
})

const keyedCustomSections = computed(
  ():
    | {
        [key: string]: StreamfieldBlockData[]
      }
    | undefined => {
    if (data) {
      const result = data.customSections.reduce(
        (
          acc: { [key: string]: StreamfieldBlockData[] },
          section: {
            heading: StreamfieldBlockData
            content: StreamfieldBlockData[]
            position: string
          }
        ) => {
          const position = section.position
          if (!acc[position]) {
            acc[position] = []
          }
          acc[position].push(section.heading)
          acc[position].push(...section.content)
          return acc
        },
        {}
      )
      return result
    }
    return undefined
  }
)

const consolidatedBlocks = computed(() => {
  // NavJumpMenu handles filtering for HeadingBlock, so we don't need to do that here
  const blocks = []
  // include custom top blocks
  if (keyedCustomSections.value && keyedCustomSections.value['top']) {
    blocks.push(...keyedCustomSections.value['top'])
  }
  // include predefined section blocks
  sectionOrder.forEach((section) => {
    if (data && data[section]) {
      if (staticSectionHeadings.value && staticSectionHeadings.value[section]) {
        blocks.push(staticSectionHeadings.value[section])
      }
      if (section !== 'materials' && section !== 'steps') {
        blocks.push(...data[section])
      } else if (section === 'steps' && data.steps?.length) {
        // get blocks in nested steps
        data.steps.forEach((item) => {
          if (item.content?.length) {
            blocks.push(...item.content)
          }
        })
      }
    }
    // include custom "after_" blocks
    if (keyedCustomSections.value && keyedCustomSections.value[`after_${section}`]) {
      blocks.push(...keyedCustomSections.value[`after_${section}`])
    }
  })
  // include custom bottom blocks
  if (keyedCustomSections.value && keyedCustomSections.value['bottom']) {
    blocks.push(...keyedCustomSections.value['bottom'])
  }
  // include body blocks
  if (data?.body?.length) {
    blocks.push(...data.body)
  }

  return blocks
})

// organize data to render with PageEduStudentProjectSection component
const consolidatedSections = computed((): EduStudentProjectSectionObject[] => {
  const sections: EduStudentProjectSectionObject[] = []
  // include custom top section
  if (keyedCustomSections.value && keyedCustomSections.value['top']) {
    sections.push({ type: 'streamfield', blocks: keyedCustomSections.value['top'] })
  }
  sectionOrder.forEach((section) => {
    if (data && data[section]) {
      sections.push({
        heading: staticSectionHeadings.value ? staticSectionHeadings.value[section] : undefined,
        blocks: section !== 'materials' && section !== 'steps' ? data[section] : undefined,
        text: section === 'materials' ? data[section] : undefined,
        steps: section === 'steps' ? data[section] : undefined
      })
    }
    // include custom "after_" sections
    if (keyedCustomSections.value && keyedCustomSections.value[`after_${section}`]) {
      sections.push({ type: 'streamfield', blocks: keyedCustomSections.value[`after_${section}`] })
    }
  })
  // include custom bottom section
  if (keyedCustomSections.value && keyedCustomSections.value['bottom']) {
    sections.push({ type: 'streamfield', blocks: keyedCustomSections.value['bottom'] })
  }
  const filteredSections = sections.filter(
    (item) => item.text || item.blocks?.length || item.steps?.length
  )

  return filteredSections
})

const studentBadge = computed(() => {
  return StudentProjectBadge
})
</script>
<template>
  <div
    v-if="data"
    class="ThemeVariantLight pt-5 lg:pt-12"
  >
    <div class="BaseGrid hidden lg:block container relative mx-auto z-20 pointer-events-none">
      <div class="absolute top-0 left-0 col-start-1 col-end-3 text-right lg:-ml-2 xl:ml-4">
        <img
          :src="studentBadge"
          alt=""
          width="200"
          height="200"
          class="block w-full h-auto"
        />
      </div>
    </div>
    <LayoutHelper
      indent="col-3"
      class="mb-10"
    >
      <DetailHeadline
        v-if="data.title"
        :title="data.title"
        label="Student Project"
        pill
        pill-color="secondary"
      />
      <ShareButtonsEdu
        v-if="data?.url"
        class="mt-4"
        :url="data.url"
        :title="data.title"
        :image="data.thumbnailImage?.original"
      />
      <div
        v-if="data?.lesson?.url"
        class="mt-8 font-bold text-body-lg"
      >
        Want to teach this?
        <BaseLink
          class="font-normal inline text-action underline hover:text-action-dark cursor-pointer"
          variant="none"
          :to="data.lesson.url"
        >
          View the Lesson Plan
        </BaseLink>
      </div>
    </LayoutHelper>

    <div class="container relative mx-auto z-20 pointer-events-none">
      <img
        :src="studentBadge"
        alt=""
        width="150"
        height="150"
        class="absolute -mt-16 sm:-mt-24 right-0 lg:hidden md:w-[185px] md:h-[185px]"
      />
    </div>
    <!-- hero media -->
    <HeroMedia
      v-if="
        !heroEmpty &&
        !heroInline &&
        data?.hero?.length &&
        (data.hero[0].blockType === 'HeroImageBlock' || data.hero[0].blockType === 'VideoBlock')
      "
      :image="data.hero[0].image"
      :video="data.hero[0].video"
      :display-caption="false"
      :caption="data.hero[0].caption"
      :credit="data.hero[0].credit"
      :constrain="data.heroConstrain"
    />
    <LayoutHelper
      v-else-if="!heroEmpty && heroInline && data.hero?.length"
      class="lg:mb-14 mb-10"
    >
      <HeroInlineMedia
        :hero-blocks="data.hero"
        :constrain="data.heroConstrain"
      />
    </LayoutHelper>

    <MetaPanel
      button="Info for Teachers"
      theme="stars"
      :class="{ 'mb-10 lg:mb-14': true }"
      :primary-subject="data.primarySubject"
      :additional-subjects="data.additionalSubjects"
      :time="data.customTime ? { time: data.customTime } : data.time"
      :standards="data.standards"
      :negative-top="!heroInline && !heroEmpty"
    >
      <template #metaInfo>
        <div :class="data?.standards ? 'border-b border-gray-light-mid' : ''">
          <div class="py-6 lg:py-8">
            <MetaPanelItems :grade-levels="data?.gradeLevels" />
            <div
              v-if="data.lesson"
              class="mt-8 font-bold text-body-s"
            >
              Want to teach this?
              <BaseLink
                class="font-normal inline text-action underline hover:text-action-dark cursor-pointer"
                variant="none"
                :to="data.lesson.url"
              >
                View the Lesson Plan
              </BaseLink>
            </div>
          </div>
        </div>
      </template>
    </MetaPanel>

    <NavJumpMenu
      ref="PageEduStudentProjectJumpMenu"
      :title="data.title"
      :blocks="consolidatedBlocks"
      dropdown-text="In this project"
    />

    <template
      v-for="(value, _key) in consolidatedSections"
      :key="_key"
    >
      <BlockStreamfield
        v-if="value.type === 'streamfield'"
        :data="value.blocks"
      />
      <PageEduStudentProjectSection
        v-else
        :heading="value.heading"
        :blocks="value.blocks"
        :steps="value.steps"
        :steps-numbering="data.stepsNumbering"
        :text="value.text"
        :image="value.image"
      />
    </template>

    <!-- streamfield blocks -->
    <BlockStreamfield
      v-if="data.body?.length"
      :data="data.body"
    />

    <!-- related links -->
    <LayoutHelper
      v-if="data.relatedLinks && data.relatedLinks.length"
      indent="col-3"
      class="lg:my-18 my-10"
    >
      <BlockRelatedLinks :data="data.relatedLinks[0]" />
    </LayoutHelper>

    <!-- related content -->
    <BlockLinkCarousel
      item-type="cards"
      class="lg:my-24 my-12 print:px-4"
      :heading="data.relatedContentHeading || 'Related Projects'"
      :items="data.relatedContent"
    />

    <LayoutHelper
      v-if="data.authors?.length"
      indent="col-3"
    >
      <AboutTheAuthor :authors="data.authors" />
    </LayoutHelper>

    <LayoutHelper
      v-if="data.lastPublishedAt"
      indent="col-3"
      class="lg:my-18 my-10"
    >
      <p class="border-t border-gray-light-mid pt-8">
        <strong>Lesson Last Updated:</strong>
        {{
          // @ts-ignore
          $filters.displayDate(data.lastPublishedAt)
        }}
      </p>
    </LayoutHelper>
  </div>
</template>
