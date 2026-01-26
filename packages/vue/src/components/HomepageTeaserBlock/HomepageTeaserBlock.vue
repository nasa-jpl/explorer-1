<template>
  <div
    v-if="data"
    class="HomepageTeaserBlock max-w-screen-3xl relative mx-auto"
  >
    <BaseImage
      v-if="hasCoverImage"
      class="lg:mb-0 mb-10"
      :src="data.coverImage.src.url"
      :srcset="theSrcSet"
      :alt="data.coverImage.alt"
      :width="data.coverImage.src.width"
      :height="data.coverImage.src.height"
      image-class="object-cover w-full h-full"
      loading="lazy"
    />

    <div class="lg:px-4 2xl:px-0">
      <div
        class="lg:BaseGrid container relative z-10 mx-auto bg-white"
        :class="{ 'lg:-mt-26 lg:pt-22': hasCoverImage }"
      >
        <div class="lg:px-0 lg:col-end-8 xl:col-end-9 col-start-2 px-4">
          <BaseHeading
            v-if="data.heading"
            level="h2"
            class="lg:mb-8 mb-5"
          >
            {{ data.heading }}
          </BaseHeading>
          <BlockText
            v-if="data.paragraph"
            class="lg:pr-14"
            :text="data.paragraph"
          />
          <template v-if="data.link || theExternalLink">
            <BaseLink
              variant="primary"
              class="mt-5"
              link-class="inline-block"
              caret-wrapper-class="py-2"
              :href="theExternalLink"
              :to="data.link.page ? data.link.page.url : undefined"
              external-target-blank
            >
              {{ data.link.text }}
            </BaseLink>
          </template>
        </div>
        <aside
          v-if="theCard"
          :aria-label="theCard ? theCard.heading : 'Virtual Tour'"
          class="lg:mt-0 lg:mx-0 xl:col-span-3 sm:mx-auto lg:w-auto sm:w-80 lg:col-start-8 xl:col-start-9 col-span-4 mx-6 mt-12"
        >
          <div
            class="shadow-jpl"
            :class="{ 'flex items-center min-h-32': !theCard.image }"
          >
            <div
              v-if="theCard.image"
              class="relative h-auto"
            >
              <template v-if="theCard.link || theCardExternalLink">
                <BaseLink
                  variant="none"
                  link-class="block"
                  :aria-label="theCard.link.text || 'Learn more'"
                  :href="theCardExternalLink"
                  :to="theCard.link.page?.url || undefined"
                  external-target-blank
                >
                  <HomepageTeaserBlockCardImage :data="theCard" />
                </BaseLink>
              </template>
              <template v-else>
                <HomepageTeaserBlockCardImage :data="theCard" />
              </template>
            </div>
            <div class="px-6 pt-6 pb-4">
              <div class="mb-2 text-h5">
                {{ theCard.heading }}
              </div>
              <p
                v-if="theCard.description"
                class="text-body-sm"
              >
                {{ theCard.description }}
              </p>

              <template v-if="theCard.link || theCardExternalLink">
                <BaseLink
                  variant="primary"
                  class="mt-3"
                  link-class="inline-block"
                  caret-wrapper-class="py-2"
                  :href="theCardExternalLink"
                  :to="theCard.link.page ? theCard.link.page.url : undefined"
                  external-target-blank
                >
                  {{ theCard.link.text }}
                </BaseLink>
              </template>
            </div>
          </div>
        </aside>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// @ts-nocheck
import { defineComponent } from 'vue'
import { mixinGetExternalLink, mixinGetSrcSet } from './../../utils/mixins.ts'
import BaseHeading from './../BaseHeading/BaseHeading.vue'
import BlockText from './../BlockText/BlockText.vue'
import BaseImage from './../BaseImage/BaseImage.vue'
import BaseLink from './../BaseLink/BaseLink.vue'
import HomepageTeaserBlockCardImage from './../HomepageTeaserBlock/HomepageTeaserBlockCardImage.vue'

export default defineComponent({
  name: 'HomepageTeaserBlock',
  components: {
    BaseHeading,
    BlockText,
    BaseImage,
    BaseLink,
    HomepageTeaserBlockCardImage
  },
  props: {
    data: {
      type: Object,
      required: false,
      default: undefined
    }
  },
  computed: {
    theCard(): object | undefined {
      if (this.data?.card && this.data.card.length > 0) {
        return this.data?.card[0]
      }
      return undefined
    },
    hasCoverImage(): boolean {
      if (this.data.coverImage && this.data.coverImage.src) {
        return true
      }
      return false
    },
    theExternalLink() {
      return mixinGetExternalLink(this.data?.link) || undefined
    },
    theCardExternalLink() {
      return mixinGetExternalLink(this.theCard?.link) || undefined
    },
    theSrcSet() {
      return this.data.coverImage
        ? mixinGetSrcSet(this.data.coverImage)
          ? mixinGetSrcSet(this.data.coverImage)
          : this.data.coverImage.srcSet
        : undefined
    }
  }
})
</script>
