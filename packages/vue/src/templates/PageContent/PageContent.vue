<script lang="ts">
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'
import { mapStores } from 'pinia'
import { useThemeStore } from '../../store/theme'
import HeroLarge from './../../components/HeroLarge/HeroLarge.vue'
import HeroMedia from './../../components/HeroMedia/HeroMedia.vue'
import NavSecondary from './../../components/NavSecondary/NavSecondary.vue'
import LayoutHelper from './../../components/LayoutHelper/LayoutHelper.vue'
import DetailHeadline from './../../components/DetailHeadline/DetailHeadline.vue'
import BlockImageStandard from './../../components/BlockImage/BlockImageStandard.vue'
import ShareButtons from './../../components/ShareButtons/ShareButtons.vue'
import ShareButtonsEdu from './../../components/ShareButtonsEdu/ShareButtonsEdu.vue'
import BlockStreamfield from './../../components/BlockStreamfield/BlockStreamfield.vue'
import BlockRelatedLinks from './../../components/BlockRelatedLinks/BlockRelatedLinks.vue'
import FormContact from './../../components/FormContact/FormContact.vue'
import FormNewsletterSignup from './../../components/FormNewsletterSignup/FormNewsletterSignup.vue'
import BlockLinkCarousel from './../../components/BlockLinkCarousel/BlockLinkCarousel.vue'

const route = useRoute()

export default defineComponent({
  name: 'PageContent',
  components: {
    HeroLarge,
    HeroMedia,
    NavSecondary,
    LayoutHelper,
    DetailHeadline,
    BlockImageStandard,
    ShareButtons,
    ShareButtonsEdu,
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
    ...mapStores(useThemeStore),
    displayLabel() {
      return this.themeStore.isEdu && this.data?.parent?.title && this.data?.parent?.title !== 'EDU'
        ? this.data?.parent?.title
        : this.data?.displayLabel
    },
    heroInline() {
      if (this.data?.heroPosition === 'inline') {
        return true
      }
      return false
    },
    heroTitle() {
      return this.data?.heroImage && !this.heroInline && this.data?.displayTitleInHero
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
      return 'lg:mt-12 lg:mb-18 edu:lg:mb-12 mt-5 mb-10 edu:mb-8'
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
    <HeroLarge
      v-if="heroTitle"
      :title="data.title"
      :image="data.heroImage"
      :summary="data.heroSummary"
    />
    <HeroMedia
      v-else-if="!heroTitle && data.heroImage && !heroInline"
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
        v-if="!heroTitle"
        :title="data.title"
        :label="displayLabel"
        :class="{ 'sr-only': hideH1 }"
      />
      <ShareButtonsEdu
        v-if="themeStore.isEdu && data?.url"
        :class="{ 'mt-4': !heroTitle }"
        :url="data.url"
        :title="data.title"
        :image="data.thumbnailImage?.original"
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
      v-if="themeStore.theme !== 'ThemeEdu'"
      indent="col-2"
      class="lg:mb-0 relative mb-8"
    >
      <ShareButtons
        v-if="data.title && data.url && !themeStore.isEdu"
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
