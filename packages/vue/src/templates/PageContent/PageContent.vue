<script lang="ts">
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'
import HeroMedia from '@explorer-1/vue/src/components/HeroMedia/HeroMedia.vue'
import NavSecondary from '@explorer-1/vue/src/components/NavSecondary/NavSecondary.vue'
import LayoutHelper from '@explorer-1/vue/src/components/LayoutHelper/LayoutHelper.vue'
import DetailHeadline from '@explorer-1/vue/src/components/DetailHeadline/DetailHeadline.vue'
import BlockImageStandard from '@explorer-1/vue/src/components/BlockImage/BlockImageStandard.vue'
import ShareButtons from '@explorer-1/vue/src/components/ShareButtons/ShareButtons.vue'
import BlockStreamfield from '@explorer-1/vue/src/components/BlockStreamfield/BlockStreamfield.vue'
import BlockRelatedLinks from '@explorer-1/vue/src/components/BlockRelatedLinks/BlockRelatedLinks.vue'
import FormContact from '@explorer-1/vue/src/components/FormContact/FormContact.vue'
import FormNewsletterSignup from '@explorer-1/vue/src/components/FormNewsletterSignup/FormNewsletterSignup.vue'
import BlockLinkCarousel from '@explorer-1/vue/src/components/BlockLinkCarousel/BlockLinkCarousel.vue'

const route = useRoute()

export default defineComponent({
  name: 'PageContent',
  components: {
    HeroMedia,
    NavSecondary,
    LayoutHelper,
    DetailHeadline,
    BlockImageStandard,
    ShareButtons,
    BlockStreamfield,
    BlockRelatedLinks,
    FormContact,
    FormNewsletterSignup,
    BlockLinkCarousel
  },
  props: {
    data: {
      type: Object,
      required: false,
      default: undefined
    }
  },
  computed: {
    heroInline() {
      if (this.data?.heroPosition === 'inline') {
        return true
      }
      return false
    },
    hideH1() {
      if (route?.path === '/a-plan-for-jpl') {
        return true
      }
      return false
    },
    h1LayoutHelperClasses() {
      if (this.hideH1) {
        // We're hiding the H1 from regular browsers, so reduce the standard margin.
        return 'lg:mt-12 mt-5'
      }
      return 'lg:mt-12 lg:mb-18 mt-5 mb-10'
    }
  }
})
</script>
<template>
  <div
    v-if="data"
    class="ThemeVariantLight"
    :class="{ '-nav-offset': !heroInline && data.heroImage }"
  >
    <!-- hero image -->
    <HeroMedia
      v-if="data.heroImage && !heroInline"
      class="md:mb-0 mb-10"
      :image="data.heroImage"
      :caption="data.heroImageCaption"
      :display-caption="!data.heroImageCaption ? false : true"
      :constrain="data.heroConstrain"
    />

    <!-- secondary nav -->
    <NavSecondary
      :breadcrumb="data.breadcrumb"
      :has-intro="data.heroImage && !heroInline ? true : false"
    />

    <!-- page headline -->
    <LayoutHelper
      indent="col-2"
      :class="h1LayoutHelperClasses"
    >
      <DetailHeadline
        :title="data.title"
        :label="data.displayLabel"
        :class="{ 'sr-only': hideH1 }"
      />
    </LayoutHelper>

    <!-- inline hero -->
    <LayoutHelper
      v-if="data.heroImageInline && heroInline"
      indent="col-2"
      class="mb-22 mt-10"
    >
      <BlockImageStandard
        :data="data.heroImageInline"
        :caption="data.heroImageCaption"
        :display-caption="!data.heroImageCaption ? false : true"
        :constrain="data.heroConstrain"
      />
    </LayoutHelper>

    <!-- share buttons -->
    <LayoutHelper
      indent="col-2"
      class="lg:mb-0 relative mb-8"
    >
      <ShareButtons
        v-if="data.title && data.url"
        :title="data.title"
        :url="data.url"
      />
    </LayoutHelper>

    <!-- Body Streamfield -->
    <BlockStreamfield :data="data.body" />

    <!-- related links -->
    <LayoutHelper
      v-if="data.relatedLinks && data.relatedLinks.length"
      indent="col-3"
      class="lg:my-18 my-10"
    >
      <BlockRelatedLinks :data="data.relatedLinks[0]" />
    </LayoutHelper>

    <!-- contact form for specific content page only -->
    <template v-if="data.slug === 'contact-jpl'">
      <FormContact class="lg:mb-18 mb-10" />
    </template>

    <!-- Newsletter Signup form for specific content page only -->
    <template v-if="data.slug === 'newsletter-signup'">
      <!-- Newsletter Signup Form -->
      <FormNewsletterSignup class="lg:mb-18 mb-10" />
    </template>

    <!-- media contacts and release number -->
    <LayoutHelper
      v-if="data.clearanceNumber"
      indent="col-3"
      class="lg:my-18 my-10"
    >
      <p class="text-body-sm text-gray-mid-dark">
        {{ data.clearanceNumber }}
      </p>
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
