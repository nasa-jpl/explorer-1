<script lang="ts">
import { defineComponent } from 'vue'
import HeroMedia from './../../../components/HeroMedia/HeroMedia.vue'
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

export default defineComponent({
  name: 'PageEduResourceArticle',
  components: {
    HeroMedia,
    LayoutHelper,
    DetailHeadline,
    BlockImageStandard,
    BlockIframeEmbed,
    ShareButtonsEdu,
    BlockStreamfield,
    BlockImageCarousel,
    BlockImageComparison,
    BlockLinkCarousel,
    BlockRelatedLinks
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
          this.data?.hero[0].blockType === 'CarouselBlock'
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
        :publication-date="data.publicationDate"
        :publication-time="data.publicationTime"
        :author="data.author"
        :label="data.displayLabel"
        schema
      />
      <share-buttons-edu
        v-if="data?.url"
        class="mt-4"
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

    <!-- summary and topper -->
    <LayoutHelper
      indent="col-3"
      class="lg:mb-8 mb-5"
    >
      <p
        class="text-body-lg font-semibold"
        itemprop="abstract"
      >
        {{ data.summary }}
      </p>
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
      class="lg:my-24 my-12"
      :heading="data.relatedContentHeading"
      :items="data.relatedContent"
    />
  </div>
</template>
