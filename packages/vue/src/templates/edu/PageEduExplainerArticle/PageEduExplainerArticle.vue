<script lang="ts">
import { defineComponent } from 'vue'
import HeroMedia from './../../../components/HeroMedia/HeroMedia.vue'
import BlockLinkCarousel from './../../../components/BlockLinkCarousel/BlockLinkCarousel.vue'
import BlockText from './../../../components/BlockText/BlockText.vue'
import LayoutHelper from './../../../components/LayoutHelper/LayoutHelper.vue'
import DetailHeadline from './../../../components/DetailHeadline/DetailHeadline.vue'
import ShareButtonsEdu from './../../../components/ShareButtonsEdu/ShareButtonsEdu.vue'
import BlockStreamfield from './../../../components/BlockStreamfield/BlockStreamfield.vue'
import BlockRelatedLinks from '../../../components/BlockRelatedLinks/BlockRelatedLinks.vue'
import NavJumpMenu from './../../../components/NavJumpMenu/NavJumpMenu.vue'
import HeroInlineMedia from './../../../components/HeroInlineMedia/HeroInlineMedia.vue'

export default defineComponent({
  name: 'PageEduExplainerArticle',
  components: {
    HeroMedia,
    HeroInlineMedia,
    LayoutHelper,
    DetailHeadline,
    ShareButtonsEdu,
    BlockStreamfield,
    BlockLinkCarousel,
    BlockRelatedLinks,
    BlockText,
    NavJumpMenu
  },
  props: {
    data: {
      type: Object,
      required: false,
      default: undefined
    }
  },
  computed: {
    heroEmpty(): boolean {
      return (this.data?.hero || []).length === 0
    },
    heroInline(): boolean {
      if (!this.heroEmpty) {
        if (this.data?.hero[0].blockType === 'VideoBlock') {
          return false
        } else if (
          this.data?.heroPosition === 'inline' ||
          this.data?.hero[0].blockType === 'CarouselBlock' ||
          this.data?.hero[0].blockType === 'VideoEmbedBlock'
        ) {
          return true
        }
      }
      return false
    },
    computedClass(): string {
      if (this.heroInline || this.heroEmpty) {
        return 'pt-5 lg:pt-12'
      } else if (!this.heroInline) {
        return '-nav-offset'
      }
      return ''
    }
  }
})
</script>
<template>
  <div
    v-if="data"
    class="ThemeVariantLight"
    :class="computedClass"
    itemscope
    itemtype="http://schema.org/Article"
  >
    <!-- schema.org -->
    <meta
      v-if="data.thumbnailImage && data.thumbnailImage.original"
      itemprop="image"
      :content="data.thumbnailImage.original"
    />

    <!-- hero image -->
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

    <!-- news headline and author -->
    <LayoutHelper
      indent="col-2"
      class="mb-10"
    >
      <DetailHeadline
        :title="data.title"
        :read-time="data.readTime"
        :publication-date="data.publicationDate"
        :publication-time="data.publicationTime"
        :author="data.author"
        label="Explainer Article"
        pill-color="secondary"
        schema
        pill
      />
      <ShareButtonsEdu
        v-if="data?.url"
        class="mt-4"
        :url="data.url"
        :title="data.title"
        :image="data.thumbnailImage?.original"
      />
    </LayoutHelper>

    <NavJumpMenu
      :title="data.title"
      :blocks="data.body"
      :enabled="data.showJumpMenu"
      dropdown-text="In this article"
    />
    <!-- inline hero content -->

    <LayoutHelper
      v-if="!heroEmpty && heroInline"
      indent="col-2"
      class="lg:mb-22 mt-10 mb-10"
    >
      <HeroInlineMedia
        :hero-blocks="data.hero"
        :constrain="data.heroConstrain"
      />
    </LayoutHelper>

    <LayoutHelper
      v-if="data.topper"
      indent="col-3"
      class="lg:mb-8 mb-5"
    >
      <BlockText
        v-if="data.topper"
        class="lg:mb-8 mb-5 px-4 lg:px-0"
        :text="data.topper"
      />
    </LayoutHelper>

    <!-- streamfield blocks -->
    <BlockStreamfield
      itemprop="articleBody"
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
      :heading="data.relatedContentHeading"
      :items="data.relatedContent"
    />
  </div>
</template>
