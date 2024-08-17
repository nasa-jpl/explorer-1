<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
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

const stringAsHeadingBlockData = (heading, index) => {
  return {
    blockType: 'HeadingBlock',
    heading: heading,
    level: 'h2',
    index
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

const overviewHeading = computed(() => {
  return stringAsHeadingBlockData(data.overviewHeading || 'Overview', 0)
})
const materialsHeading = computed(() => {
  return stringAsHeadingBlockData(data.materialsHeading || 'Materials', 1)
})
const managementHeading = computed(() => {
  return stringAsHeadingBlockData(data.managementHeading || 'Management', 2)
})
const backgroundHeading = computed(() => {
  return stringAsHeadingBlockData(data.backgroundHeading || 'Background', 3)
})
const proceduresHeading = computed(() => {
  return stringAsHeadingBlockData(data.proceduresHeading || 'Procedures', 4)
})
const discussionHeading = computed(() => {
  return stringAsHeadingBlockData(data.discussionHeading || 'Discussion', 5)
})
const assessmentHeading = computed(() => {
  return stringAsHeadingBlockData(data.assessmentHeading || 'Assessment', 6)
})
const extensionsHeading = computed(() => {
  return stringAsHeadingBlockData(data.extensionsHeading || 'Extensions', 7)
})
const techAddonsHeading = computed(() => {
  return stringAsHeadingBlockData(data.techAddonsHeading || 'Tech Addons', 8)
})

// TODO get consistent index numbers if some sections are missing. hmmmmmm
const headingBlocks = computed(() => {
  const headings = []
  if (data.overview) headings.push(overviewHeading.value)
  if (data.materials) headings.push(materialsHeading.value)
  if (data.management) headings.push(managementHeading.value)
  if (data.background) headings.push(backgroundHeading.value)
  if (data.procedures) headings.push(proceduresHeading.value)
  if (data.discussion) headings.push(discussionHeading.value)
  if (data.assessment) headings.push(assessmentHeading.value)
  if (data.extensions) headings.push(extensionsHeading.value)
  if (data.techAddons) headings.push(techAddonsHeading.value)
  return headings
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
      :blocks="headingBlocks"
      :enabled="true"
    />

    <PageEduLessonSection
      v-if="data.overview"
      :index="1"
      :heading="overviewHeading"
      :blocks="data.overview"
      :image="data.overviewImage"
    />

    <PageEduLessonSection
      v-if="data.materials"
      :heading="materialsHeading"
      :text="data.materials"
      :image="data.materialsImage"
    />

    <PageEduLessonSection
      v-if="data.management"
      :index="2"
      :heading="managementHeading"
      :blocks="data.management"
    />

    <PageEduLessonSection
      v-if="data.background"
      :heading="backgroundHeading"
      :blocks="data.background"
    />

    <PageEduLessonSection
      v-if="data.procedures"
      :heading="proceduresHeading"
      :procedures="data.procedures"
      :procedure-steps="data.proceduresStepsNumbering"
    />

    <PageEduLessonSection
      v-if="data.discussion"
      :heading="discussionHeading"
      :blocks="data.discussion"
    />

    <PageEduLessonSection
      v-if="data.assessment"
      :heading="assessmentHeading"
      :blocks="data.assessment"
    />

    <PageEduLessonSection
      v-if="data.extensions"
      :heading="extensionsHeading"
      :blocks="data.extensions"
    />

    <PageEduLessonSection
      v-if="data.techAddons"
      :heading="techAddonsHeading"
      :blocks="data.techAddons"
    />

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
