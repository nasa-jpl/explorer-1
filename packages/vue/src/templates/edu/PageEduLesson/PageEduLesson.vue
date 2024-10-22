<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import type {
  ImageObject,
  PageEduResourcesObject,
  StreamfieldBlockData
} from './../../../interfaces'
import HeroMedia from './../../../components/HeroMedia/HeroMedia.vue'
import HeroLarge from './../../../components/HeroLarge/HeroLarge.vue'
import BaseLink from './../../../components/BaseLink/BaseLink.vue'
import type { BlockHeadingObject } from '../../../components/BlockHeading/BlockHeading.vue'
import BlockLinkCarousel from './../../../components/BlockLinkCarousel/BlockLinkCarousel.vue'
import LayoutHelper from './../../../components/LayoutHelper/LayoutHelper.vue'
import DetailHeadline from './../../../components/DetailHeadline/DetailHeadline.vue'
import ShareButtonsEdu from './../../../components/ShareButtonsEdu/ShareButtonsEdu.vue'
import BlockStreamfield from './../../../components/BlockStreamfield/BlockStreamfield.vue'
import BlockRelatedLinks from '../../../components/BlockRelatedLinks/BlockRelatedLinks.vue'
import MetaPanel from '../../../components/MetaPanel/MetaPanel.vue'
import PageEduLessonSection, { type PageEduLessonSectionProps } from './PageEduLessonSection.vue'
import NavJumpMenu from './../../../components/NavJumpMenu/NavJumpMenu.vue'
import HeroInlineMedia from './../../../components/HeroInlineMedia/HeroInlineMedia.vue'
import AboutTheAuthor from './../../../components/AboutTheAuthor/AboutTheAuthor.vue'
import { HeadingLevel } from '../../../components/BaseHeading/BaseHeading.vue'
import { anchorizeStreamfield } from '../../../utils/anchorizeStreamfield'

interface EduLessonSectionObject extends PageEduLessonSectionProps {
  type?: string
}
interface EduLessonProcedureBlocks {
  blocks: StreamfieldBlockData[]
}
export interface EduLessonProcedure {
  sectionHeading?: string
  steps?: EduLessonProcedureBlocks[]
  stepsNumbering?: boolean
}

interface PageEduLessonObject extends PageEduResourcesObject {
  [key: string]: any
  studentProject: {
    title: string
    url: string
  }
  overview: StreamfieldBlockData[]
  overviewHeading: string
  overviewImage: ImageObject
  materials: string
  materialsHeading: string
  materialsImage: ImageObject
  management: StreamfieldBlockData[]
  managementHeading: string
  background: StreamfieldBlockData[]
  backgroundHeading: string
  procedures: EduLessonProcedure[]
  proceduresHeading: string
  proceduresStepsNumbering: boolean
  discussion: StreamfieldBlockData[]
  discussionHeading: string
  assessment: StreamfieldBlockData[]
  assessmentHeading: string
  extensions: StreamfieldBlockData[]
  extensionsHeading: string
  techAddons: StreamfieldBlockData[]
  techAddonsHeading: string
  customSections: any
}
interface PageEduLessonProps {
  data?: PageEduLessonObject
}

const props = withDefaults(defineProps<PageEduLessonProps>(), {
  data: undefined
})

const { data } = reactive(props)

const PageEduLessonJumpMenu = ref()

defineExpose({
  PageEduLessonJumpMenu
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

const theHero = computed(() => {
  if (data?.hero?.length) {
    return data.hero[0]
  }
  return undefined
})

const heroTitle = computed((): boolean => {
  if (theHero.value) {
    // excludes VideoBlock as this will autoplay
    if (theHero.value.blockType === 'HeroTitleBlock') {
      return true
    }
  }
  return false
})

const heroInline = computed((): boolean => {
  if (theHero.value && !heroTitle.value) {
    // heroes with interactive elements have special handling
    if (
      data?.heroPosition === 'inline' ||
      theHero.value.blockType === 'CarouselBlock' ||
      theHero.value.blockType === 'IframeEmbedBlock' ||
      theHero.value.blockType === 'VideoEmbedBlock' ||
      theHero.value.blockType === 'ImageComparisonBlock'
    ) {
      return true
    }
    return false
  }
  return false
})

const sectionOrder = [
  'top',
  'overview',
  'materials',
  'management',
  'background',
  'procedures',
  'discussion',
  'assessment',
  'extensions',
  'techAddons',
  'bottom'
]

const filteredBody = computed(() => {
  return anchorizeStreamfield(data?.body) || []
})

// mimic HeadingBlock data shape for defined section headings
const staticSectionHeadings = computed((): { [key: string]: BlockHeadingObject } | undefined => {
  if (data) {
    const result = sectionOrder.reduce<Record<string, BlockHeadingObject>>((acc, section) => {
      // only include the heading if the section has content
      if (data[section]?.length) {
        const headingText =
          section === 'techAddons'
            ? 'Tech Add-ons'
            : section.charAt(0).toUpperCase() + section.slice(1)
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
          const filteredContent = anchorizeStreamfield(section.content) || []
          acc[position].push(section.heading)
          acc[position].push(...filteredContent)
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
      if (section !== 'materials' && section !== 'procedures') {
        const filteredBlocks = anchorizeStreamfield(data[section]) || []
        blocks.push(...filteredBlocks)
      } else if (section === 'procedures' && data.procedures?.length) {
        // get blocks in nested procedures
        data.procedures.forEach((item) => {
          if (item.steps?.length) {
            blocks.push(...item.steps)
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
  if (filteredBody.value) {
    blocks.push(...filteredBody.value)
  }

  return blocks
})

// organize data to render with PageEduLessonSection component
const consolidatedSections = computed((): EduLessonSectionObject[] => {
  const sections: EduLessonSectionObject[] = []
  // include custom top section
  if (keyedCustomSections.value && keyedCustomSections.value['top']) {
    sections.push({ type: 'streamfield', blocks: keyedCustomSections.value['top'] })
  }
  sectionOrder.forEach((section) => {
    if (data && data[section]) {
      sections.push({
        heading: staticSectionHeadings.value ? staticSectionHeadings.value[section] : undefined,
        blocks:
          section !== 'materials' && section !== 'procedures'
            ? anchorizeStreamfield(data[section])
            : undefined,
        text: section === 'materials' ? data[section] : undefined,
        procedures: section === 'procedures' ? data[section] : undefined,
        image: data[`${section}Image`]
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
    (item) => item.text || item.blocks?.length || item.procedures?.length
  )

  return filteredSections
})

const computedClass = computed((): string => {
  if (heroTitle.value) {
    return '-nav-offset'
  } else {
    return 'pt-5 lg:pt-12'
  }
})
</script>
<template>
  <div
    v-if="data"
    class="ThemeVariantLight"
    :class="computedClass"
  >
    <NavJumpMenu
      ref="PageEduLessonJumpMenu"
      :title="data.title"
      :blocks="consolidatedBlocks"
      dropdown-text="In this lesson"
    />

    <!-- hero title -->
    <HeroLarge
      v-if="heroTitle && theHero"
      :title="data.title"
      :image="theHero.image"
      :summary="theHero.heroSummary"
      :custom-pill-type="data.__typename"
    />

    <LayoutHelper
      indent="col-2"
      class="mb-10"
    >
      <DetailHeadline
        v-if="data.title && !heroTitle"
        :title="data.title"
        label="Lesson"
        pill
      />
      <ShareButtonsEdu
        v-if="data?.url"
        :class="heroTitle ? 'mt-10' : 'mt-4'"
        :url="data.url"
        :title="data.title"
        :image="data.thumbnailImage?.original"
      />
      <div
        v-if="data.studentProject?.url"
        class="mt-8 font-bold text-body-lg"
      >
        Find out what’s involved for students:
        <BaseLink
          class="font-normal inline text-action underline hover:text-action-dark cursor-pointer"
          variant="none"
          :to="data.studentProject?.url"
        >
          View the Project Steps
        </BaseLink>
      </div>
    </LayoutHelper>
    <MetaPanel
      button="View Standards"
      theme="primary"
      :class="{ 'mb-10 lg:mb-14': heroTitle || heroInline || data?.hero?.length === 0 }"
      :primary-subject="data.primarySubject"
      :additional-subjects="data.additionalSubjects"
      :time="data.customTime ? { time: data.customTime } : data.time"
      :grade-levels="data.gradeLevels"
      :standards="data.standards"
      :negative-bottom="(heroInline || data?.hero?.length !== 0) && !heroTitle"
    />

    <!-- hero media -->
    <HeroMedia
      v-if="
        !heroEmpty &&
        !heroTitle &&
        !heroInline &&
        theHero &&
        (theHero.blockType === 'HeroImageBlock' || theHero.blockType === 'VideoBlock')
      "
      class="md:mb-12 lg:mb-18 mb-10"
      :image="theHero.image"
      :video="theHero.video"
      :display-caption="theHero.displayCaption"
      :caption="theHero.caption"
      :credit="theHero.credit"
      :constrain="data.heroConstrain"
    />

    <LayoutHelper
      v-if="!heroEmpty && heroInline && data.hero?.length"
      class="lg:mb-22 mb-10"
    >
      <HeroInlineMedia
        :hero-blocks="data.hero"
        :constrain="data.heroConstrain"
      />
    </LayoutHelper>

    <template
      v-for="(value, _key) in consolidatedSections"
      :key="_key"
    >
      <BlockStreamfield
        v-if="value.type === 'streamfield'"
        :data="value.blocks"
      />
      <PageEduLessonSection
        v-else
        :heading="value.heading"
        :blocks="value.blocks"
        :procedures="value.procedures"
        :text="value.text"
        :image="value.image"
      />
    </template>

    <!-- streamfield blocks -->
    <BlockStreamfield
      v-if="filteredBody?.length"
      :data="filteredBody"
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
      :heading="data.relatedContentHeading || 'Related Lessons & Projects'"
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
