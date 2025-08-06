<script lang="ts">
import { defineComponent } from 'vue'
import HeroMedia from './../../../components/HeroMedia/HeroMedia.vue'
import HeroLarge from './../../../components/HeroLarge/HeroLarge.vue'
import BlockLinkCarousel from './../../../components/BlockLinkCarousel/BlockLinkCarousel.vue'
import BlockText from './../../../components/BlockText/BlockText.vue'
import LayoutHelper from './../../../components/LayoutHelper/LayoutHelper.vue'
import DetailHeadline from './../../../components/DetailHeadline/DetailHeadline.vue'
import ShareButtonsEdu from './../../../components/ShareButtonsEdu/ShareButtonsEdu.vue'
import BlockStreamfield from './../../../components/BlockStreamfield/BlockStreamfield.vue'
import BlockRelatedLinks from '../../../components/BlockRelatedLinks/BlockRelatedLinks.vue'
import NavJumpMenu from './../../../components/NavJumpMenu/NavJumpMenu.vue'
import HeroInlineMedia from './../../../components/HeroInlineMedia/HeroInlineMedia.vue'
import AboutTheAuthor from './../../../components/AboutTheAuthor/AboutTheAuthor.vue'
import { anchorizeStreamfield } from './../../../utils/anchorizeStreamfield'

export default defineComponent({
  name: 'PageEduExplainerArticle',
  components: {
    AboutTheAuthor,
    HeroMedia,
    HeroInlineMedia,
    LayoutHelper,
    DetailHeadline,
    ShareButtonsEdu,
    BlockStreamfield,
    BlockLinkCarousel,
    BlockRelatedLinks,
    BlockText,
    NavJumpMenu,
    HeroLarge
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
      return this.data?.hero?.length === 0
    },
    theHero() {
      if (this.data?.hero?.length) {
        return this.data.hero[0]
      }
      return undefined
    },
    heroTitle(): boolean {
      if (this.theHero) {
        // excludes VideoBlock as this will autoplay
        if (this.theHero.blockType === 'HeroTitleBlock') {
          return true
        }
      }
      return false
    },
    heroInline(): boolean {
      if (this.theHero && !this.heroTitle) {
        // heroes with interactive elements have special handling
        if (
          this.data?.heroPosition === 'inline' ||
          this.theHero.blockType === 'CarouselBlock' ||
          this.theHero.blockType === 'IframeEmbedBlock' ||
          this.theHero.blockType === 'VideoEmbedBlock' ||
          this.theHero.blockType === 'ImageComparisonBlock'
        ) {
          return true
        }
        return false
      }
      return false
    },
    filteredBody() {
      // adds anchors to headings within RichTextBlock
      return anchorizeStreamfield(this.data?.body)
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
    class="ThemeVariantLight PageEduExplainerArticle"
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

    <NavJumpMenu
      v-if="data.showJumpMenu"
      :title="data.title"
      :blocks="filteredBody"
      dropdown-text="In this article"
    />

    <!-- hero title -->
    <HeroLarge
      v-if="heroTitle && theHero"
      :title="data.title"
      :image="theHero.image"
      :summary="theHero.heroSummary"
      :custom-pill-type="data.__typename"
    />
    <!-- hero image -->
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

    <!-- news headline and author -->
    <LayoutHelper
      indent="col-2"
      class="mb-10"
    >
      <DetailHeadline
        v-if="!heroTitle"
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
        :class="heroTitle ? 'mt-10' : 'mt-4'"
        :url="data.url"
        :title="data.title"
        :image="data.thumbnailImage?.original"
      />
    </LayoutHelper>
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
      :heading="data.relatedContentHeading"
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
        <strong>Explainer Article Last Updated:</strong>
        {{
          // @ts-ignore
          $filters.displayDate(data.lastPublishedAt)
        }}
      </p>
    </LayoutHelper>
  </div>
</template>
<style lang="scss">
@import '@explorer-1/common/src/scss/templates/PageEduExplainerArticle';
</style>
