<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import { uniqueId } from 'lodash'
import type {
  ImageObject,
  PageEduResourcesObject,
  StreamfieldBlockData
} from './../../../interfaces'
import HeroMedia from './../../../components/HeroMedia/HeroMedia.vue'
import BaseLink from './../../../components/BaseLink/BaseLink.vue'
import BaseImagePlaceholder from './../../../components/BaseImagePlaceholder/BaseImagePlaceholder.vue'
import BlockImageCarousel from './../../../components/BlockImageCarousel/BlockImageCarousel.vue'
import BlockImageComparison from './../../../components/BlockImageComparison/BlockImageComparison.vue'
import BlockLinkCarousel from './../../../components/BlockLinkCarousel/BlockLinkCarousel.vue'
import LayoutHelper from './../../../components/LayoutHelper/LayoutHelper.vue'
import DetailHeadline from './../../../components/DetailHeadline/DetailHeadline.vue'
import BlockImageStandard from './../../../components/BlockImage/BlockImageStandard.vue'
import ShareButtonsEdu from './../../../components/ShareButtonsEdu/ShareButtonsEdu.vue'
import BlockStreamfield from './../../../components/BlockStreamfield/BlockStreamfield.vue'
import BlockIframeEmbed from '../../../components/BlockIframeEmbed/BlockIframeEmbed.vue'
import BlockRelatedLinks from '../../../components/BlockRelatedLinks/BlockRelatedLinks.vue'
import MetaPanel from '../../../components/MetaPanel/MetaPanel.vue'
import PageEduLessonSection from './PageEduLessonSection.vue'
import NavJumpMenu from './../../../components/NavJumpMenu/NavJumpMenu.vue'

interface PageEduLessonObject extends PageEduResourcesObject {
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
  procedures: StreamfieldBlockData[]
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
  body: StreamfieldBlockData[]
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

const stringAsHeadingBlockData = (heading) => {
  return {
    blockType: 'HeadingBlock',
    heading: heading,
    level: 'h2',
    id: `lesson_heading_${uniqueId()}`
  }
}

const heroEmpty = computed((): boolean => {
  return (data?.hero || []).length === 0
})

const heroInline = computed((): boolean => {
  if (!heroEmpty.value) {
    if (data?.hero[0].blockType === 'VideoBlock') {
      return false
    } else if (
      data?.heroPosition === 'inline' ||
      data?.hero[0].blockType === 'CarouselBlock' ||
      data?.hero[0].blockType === 'VideoEmbedBlock'
    ) {
      return true
    }
  }
  return false
})

const computedClass = computed((): string => {
  if (heroInline.value || heroEmpty) {
    return 'pt-5 lg:pt-12'
  } else if (!heroInline.value) {
    return '-nav-offset'
  }
  return ''
})

const sectionOrder = [
  'overview',
  'materials',
  'management',
  'background',
  'procedures',
  'discussion',
  'assessment',
  'extensions',
  'techAddons'
]

const sectionHeadings = computed(() => {
  const result = sectionOrder.reduce((acc, section) => {
    acc[section] = stringAsHeadingBlockData(
      data[`${section}Heading`],
      section.charAt(0).toUpperCase() + section.slice(1)
    )
    return acc
  }, {})
  return result
})

const consolidateBlocks = (sections) => {
  const blocks = []
  sections.forEach((section) => {
    if (data[section]) {
      blocks.push(sectionHeadings.value[section])
      if (section !== 'materials' && section !== 'procedures') {
        blocks.push(...data[section])
      } else if (section === 'procedures') {
        // handle nested streamfields in procedures
        data.procedures.forEach((item) => {
          blocks.push(...item.procedure)
        })
      }
    }
  })
  return blocks
}

const consolidatedSections = computed(() => {
  const sections = []
  sectionOrder.forEach((section) => {
    if (data[section]) {
      sections.push({
        heading: sectionHeadings.value[section],
        blocks: section !== 'materials' && section !== 'procedures' ? data[section] : undefined,
        text: section === 'materials' ? data[section] : undefined,
        procedures: section === 'procedures' ? data[section] : undefined,
        procedureSteps: section === 'procedures' ? data.proceduresStepsNumbering : false
      })
    }
  })
  return sections
})

const consolidatedBlocks = computed(() => {
  return consolidateBlocks(sectionOrder)
})
</script>
<template>
  <div
    v-if="data"
    class="ThemeVariantLight"
    :class="computedClass"
  >
    <LayoutHelper
      indent="col-2"
      class="mb-10"
    >
      <DetailHeadline
        :title="data.title"
        label="Lesson"
        pill
      />
      <ShareButtonsEdu
        v-if="data?.url"
        class="mt-4"
        :url="data.url"
        :title="data.title"
        :image="data.thumbnailImage?.original"
      />
      <p
        v-if="data.studentProject"
        class="mt-8 font-bold text-body-lg"
      >
        Find out what’s involved for students:
        <BaseLink
          class="font-normal inline text-action underline hover:text-action-dark cursor-pointer"
          :to="data.studentProject.urlPath"
          variant="none"
        >
          View the Project Steps
        </BaseLink>
      </p>
    </LayoutHelper>

    <MetaPanel
      button="View Standards"
      :primary-subject="data.primarySubject"
      :additional-subjects="data.additionalSubjects"
      :time="data.time"
      :grade-levels="data.gradeLevels"
      :standards="data.standards"
      negative-bottom
    />

    <!-- hero media -->
    <HeroMedia
      v-if="
        !heroEmpty &&
        !heroInline &&
        (data.hero[0].blockType === 'HeroImageBlock' || data.hero[0].blockType === 'VideoBlock')
      "
      class="md:mb-12 lg:mb-18 mb-10"
      :image="data.hero[0].image"
      :video="data.hero[0].video"
      :display-caption="data.hero[0].displayCaption"
      :caption="data.hero[0].caption"
      :credit="data.hero[0].credit"
      :constrain="data.heroConstrain"
    />

    <!-- TODO: put this in a component (exclude layout though) -->
    <LayoutHelper
      v-if="!heroEmpty && heroInline"
      class="lg:mb-22 mb-10"
    >
      <BlockImageStandard
        v-if="data.hero[0].blockType === 'HeroImageBlock'"
        :data="data.hero[0].imageInline"
        :display-caption="data.hero[0].displayCaption"
        :caption="data.hero[0].caption"
        :constrain="data.heroConstrain"
      />
      <BlockImageCarousel
        v-else-if="data.hero[0].blockType === 'CarouselBlock'"
        :items="data.hero[0].blocks"
        :block-id="data.hero[0].id"
      />
      <BlockIframeEmbed
        v-else-if="data.hero[0].blockType === 'IframeEmbedBlock'"
        :data="data.hero[0]"
      />
      <BlockVideo
        v-else-if="data.hero[0].blockType === 'VideoBlock'"
        :data="data.hero[0]"
        autoplay
      />
      <BaseImagePlaceholder
        v-else-if="data.hero[0].blockType === 'VideoEmbedBlock'"
        aspect-ratio="16:9"
        dark-mode
      >
        <div v-html="data.hero[0].embed.embed"></div>
      </BaseImagePlaceholder>
      <BlockImageComparison
        v-else-if="data.hero[0].blockType === 'ImageComparisonBlock'"
        :data="data.hero[0]"
      />
    </LayoutHelper>

    <NavJumpMenu
      ref="PageEduLessonJumpMenu"
      :title="data.title"
      :blocks="consolidatedBlocks"
      :enabled="true"
    />

    <template
      v-for="(value, key) in consolidatedSections"
      :key="key"
    >
      <PageEduLessonSection
        :heading="value.heading"
        :blocks="value.blocks"
        :procedures="value.procedures"
        :procedure-steps="value.procedureSteps"
        :text="value.text"
        :image="value.image"
      />
    </template>

    <!-- streamfield blocks -->
    <BlockStreamfield :data="data.body" />

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
      :heading="data.relatedContentHeading"
      :items="data.relatedContent"
    />
  </div>
</template>
