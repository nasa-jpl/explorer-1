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
        :topics="data.getTopicsForDisplay"
        schema
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

    <!-- share buttons -->
    <LayoutHelper
      indent="col-2"
      class="lg:mb-0 relative mb-8"
    >
      <ShareButtons
        :title="data.title"
        :url="data.url"
      />
    </LayoutHelper>

    <!-- summary and topper -->
    <LayoutHelper
      indent="col-3"
      class="lg:mb-8 mb-5"
      :class="{ 'lg:min-h-28': socialAdjustment }"
    >
      <BlockText
        v-if="data.topper && data.topper.length > 2"
        class="lg:mb-8 mb-5"
        :text="data.topper"
      />
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

    <!-- media contacts and release number -->
    <LayoutHelper
      v-if="(data.mediaContacts && data.mediaContacts.length > 0) || data.releaseNumber"
      indent="col-3"
      class="lg:my-18 my-10"
    >
      <NewsDetailMediaContact :contacts="data.mediaContacts" />
      <p
        v-if="data.releaseNumber"
        class="text-body-sm text-gray-mid-dark"
      >
        {{ data.releaseNumber }}
      </p>
    </LayoutHelper>

    <!-- extras -->
    <BlockLinkCarousel
      item-type="cards"
      class="mt-24"
      :heading="data.hasRelatedNews ? 'Related News' : 'Latest News'"
      :items="data.getRelatedOrLatestNews"
    />
    <div
      v-if="data.relatedPagesForMoreSection && data.relatedPagesForMoreSection.length"
      class="bg-gray-light lg:py-24 lg:mt-24 py-12 mt-12"
    >
      <BlockLinkCarousel
        item-type="tiles"
        heading="Explore More"
        :items="data.relatedPagesForMoreSection"
      />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import LayoutHelper from './../../components/LayoutHelper/LayoutHelper.vue'
import HeroMedia from './../../components/HeroMedia/HeroMedia.vue'
import DetailHeadline from './../../components/DetailHeadline/DetailHeadline.vue'
import BaseImagePlaceholder from './../../components/BaseImagePlaceholder/BaseImagePlaceholder.vue'
import BlockStreamfield from './../../components/BlockStreamfield/BlockStreamfield.vue'
import NewsDetailMediaContact from './../../components/NewsDetailMediaContact/NewsDetailMediaContact.vue'
import BlockRelatedLinks from './../../components/BlockRelatedLinks/BlockRelatedLinks.vue'
import BlockImageCarousel from './../../components/BlockImageCarousel/BlockImageCarousel.vue'
import BlockImageComparison from './../../components/BlockImageComparison/BlockImageComparison.vue'
import BlockImageStandard from './../../components/BlockImage/BlockImageStandard.vue'
import BlockLinkCarousel from './../../components/BlockLinkCarousel/BlockLinkCarousel.vue'
import ShareButtons from './../../components/ShareButtons/ShareButtons.vue'
import BlockText from './../../components/BlockText/BlockText.vue'

export default defineComponent({
  name: 'PageNewsDetail',
  components: {
    LayoutHelper,
    HeroMedia,
    DetailHeadline,
    BaseImagePlaceholder,
    BlockStreamfield,
    NewsDetailMediaContact,
    BlockRelatedLinks,
    BlockImageCarousel,
    BlockImageComparison,
    BlockImageStandard,
    BlockLinkCarousel,
    ShareButtons,
    BlockText
  },
  props: {
    data: {
      type: Object,
      required: false
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
          // TODO: should this match PageEduResourceArticle and also check for VideoEmbedBlock?
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
    },
    socialAdjustment() {
      if (this.data?.body && this.data.body[0]) {
        const block = this.data.body[0].blockType
        if (
          block === 'CarouselBlock' ||
          block === 'FullBleedImageBlock' ||
          block === 'TeaserBlock' ||
          block === 'VideoEmbedBlock'
        ) {
          return true
        }
      }
      return false
    }
  }
})
</script>
