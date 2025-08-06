<template>
  <div
    v-if="data"
    id="galleryTop"
    class="PageCuratedGallery ThemeVariantLight"
  >
    <!-- page headline -->

    <LayoutHelper class="lg:mt-8 lg:mb-4 mt-5 mb-0">
      <div class="mr-auto max-w-sm hidden relative lg:block mt-4 -mb-2">
        <ShareButtons
          v-if="data.title && data.url"
          class="mx-4 lg:mx-1.5"
          :title="data.title"
          :url="data.url"
        />
      </div>
      <LayoutHelper
        indent="col-2"
        :class="data.firstPublishedAt && data.firstPublishedAt.length > 2 ? '' : 'py-4 mb-2'"
      >
        <div
          class="justify-start flex flex-row items-center py-3 divide-x-2 divide-gray-light-mid space-x-2"
        >
          <nuxt-link
            v-if="data.label"
            class="group nuxt-link-active text-subtitle text-theme-red can-hover:hover:text-theme-red-hover cursor-pointer"
            to="/galleries"
          >
            Curated Gallery
          </nuxt-link>
          <template v-if="data.galleryType">
            <span class="pl-2 text-subtitle"> {{ data.galleryType }}S </span>
          </template>
        </div>
        <DetailHeadline
          :title="data.title"
          :publication-date="data.firstPublishedAt"
        />
        <div class="flex lg:hidden">
          <ShareButtons
            v-if="data.title && data.url"
            inline
            class="my-4"
            :class="data.firstPublishedAt && data.firstPublishedAt.length > 2 ? '' : 'mb-0'"
            :title="data.title"
            :url="data.url"
          />
        </div>
      </LayoutHelper>
    </LayoutHelper>
    <LayoutHelper>
      <div
        class="lg:-mt-6 lg:border-gray-light-mid lg:flex items-center justify-between px-4 lg:px-0 py-1.5 lg:mb-4 align-middle lg:border-b"
      >
        <div class="flex flex-row ml-auto py-3 lg:py-0 justify-between">
          <!-- toggle gallery view -->
          <div
            v-if="allowGridView"
            class="align-end flex text-2xl font-secondary font-semibold tracking-wider"
          >
            <button
              class="lg:ml-6"
              :class="
                showGridView
                  ? 'text-theme-red cursor-default'
                  : 'text-gray-mid can-hover:hover:text-theme-red-hover cursor-pointer'
              "
              :aria-label="showGridView ? 'Grid View (enabled)' : 'Grid View'"
              :disabled="showGridView"
              @click="curatedGalleryStore.updateView(true)"
            >
              <span class="flex items-center">
                <IconGrid />
              </span>
            </button>
            <button
              class="ml-3"
              :class="
                !showGridView
                  ? 'text-theme-red cursor-default'
                  : 'text-gray-mid can-hover:hover:text-theme-red-hover cursor-pointer'
              "
              :aria-label="!showGridView ? 'Slideshow View (enabled)' : 'Slideshow View'"
              :disabled="!showGridView"
              @click="curatedGalleryStore.updateView(false)"
            >
              <span class="flex items-center mb-0.5">
                <IconSlideshow />
              </span>
            </button>
          </div>
        </div>
      </div>
    </LayoutHelper>
    <!-- <template v-if="data.galleryType === 'installations'"> -->
    <template v-if="data.galleryType">
      <div
        :class="'gallery-' + data.galleryType"
        class="mx-auto bg-white"
      >
        <div
          v-if="data.galleryItems"
          class="container mx-auto"
        >
          <div
            v-if="showGridView"
            class="CuratedGallery-thumbnails"
          >
            <div class="BaseGrid container mx-auto">
              <div
                v-for="(galleryItem, index) in data.galleryItems"
                :key="index"
                class="BaseGalleryImage"
              >
                <MixinFancybox
                  v-if="galleryItem.image.src"
                  :caption="galleryItem.image.caption"
                  :title="galleryItem.image.title"
                  :gallery-name="`grid-${data.id}`"
                  :src="galleryItem.image.src.url"
                  :detail-url="galleryItem.image.detailUrl"
                  animated
                  show-thumbnails
                >
                  <BaseImagePlaceholder
                    v-if="galleryItem.image"
                    dark-mode
                    :aspect-ratio="data.galleryAspectRatio || '2:3'"
                  >
                    <BaseImage
                      v-if="galleryItem.image.src"
                      :src="galleryItem.image.src.url"
                      :srcset="galleryItem.image.srcSet"
                      :alt="galleryItem.image.caption"
                      :width="galleryItem.image.src.width"
                      :height="galleryItem.image.src.height"
                      :object-fit-class="data.galleryObjectFit || 'contain'"
                    />
                  </BaseImagePlaceholder>
                  <BlockText
                    class="the-caption-text"
                    :text="galleryItem.image.title"
                  />
                </MixinFancybox>
              </div>
            </div>
          </div>
          <div
            v-else
            class="CuratedGallery-carousel"
          >
            <div class="mx-auto max-h-screen">
              <BlockImageCarousel
                key="CuratedGalleryCarousel"
                :items="data.galleryItems"
                :slide="slide"
                :block-id="data.id"
                show-title
              />
            </div>
          </div>
          <LayoutHelper indent="col-2">
            <div
              class="RelatedLinks lg:mb-10 mb-16 mt-16"
              :class="{ 'lg:mt-10': showGridView }"
            >
              <template v-if="data.galleryDownloadLink && data.galleryDownloadLink.length">
                <div class="sm:w-3/4 md:w-2/3 lg:w-3/4 xl:w-2/3 mb-2">
                  <RelatedLink
                    variant="document"
                    :href="data.galleryDownloadLink"
                  >
                    Download the {{ data.title }} gallery
                  </RelatedLink>
                </div>
              </template>
            </div>
          </LayoutHelper>
          <!-- Body Streamfield -->
          <template v-if="data.body">
            <BlockStreamfield
              class="lg:mb-10 mb-4"
              :data="data.body"
            />
          </template>
          <LayoutHelper indent="col-2">
            <!-- related links -->
            <template v-if="data.relatedLinks && data.relatedLinks.length">
              <BlockRelatedLinks
                class="mt-10 mb-20 lg:mb-25"
                :data="data.relatedLinks[0]"
              />
            </template>
          </LayoutHelper>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { mapStores } from 'pinia'
import { useCuratedGalleryStore } from '../../../store/curatedGallery'
import LayoutHelper from './../../../components/LayoutHelper/LayoutHelper.vue'
import DetailHeadline from './../../../components/DetailHeadline/DetailHeadline.vue'
import BaseImage from './../../../components/BaseImage/BaseImage.vue'
import MixinFancybox from './../../../components/MixinFancybox/MixinFancybox.vue'
import RelatedLink from './../../../components/BlockRelatedLinks/RelatedLink.vue'
import BlockRelatedLinks from './../../../components/BlockRelatedLinks/BlockRelatedLinks.vue'
import BlockText from './../../../components/BlockText/BlockText.vue'
import BlockImageCarousel from './../../../components/BlockImageCarousel/BlockImageCarousel.vue'
import BaseImagePlaceholder from './../../../components/BaseImagePlaceholder/BaseImagePlaceholder.vue'
import BlockStreamfield from './../../../components/BlockStreamfield/BlockStreamfield.vue'
import IconGrid from './../../../components/Icons/IconGrid.vue'
import IconSlideshow from './../../../components/Icons/IconSlideshow.vue'
import ShareButtons from './../../../components/ShareButtons/ShareButtons.vue'

export default defineComponent({
  name: 'PageCuratedGallery',
  components: {
    LayoutHelper,
    BaseImage,
    BlockText,
    MixinFancybox,
    BaseImagePlaceholder,
    RelatedLink,
    BlockRelatedLinks,
    BlockImageCarousel,
    BlockStreamfield,
    DetailHeadline,
    IconGrid,
    IconSlideshow,
    ShareButtons
  },
  props: {
    data: {
      type: Object || String,
      required: false
    }
  },
  data() {
    return {
      // defaults to first slide
      galleryTitle: 'curated-gallery',
      slide: 0,
      inCarousel: false,
      // if grid view should be allowed
      allowGridView: true,
      defaultShowGridView: true
    }
  },
  computed: {
    ...mapStores(useCuratedGalleryStore),
    showGridView() {
      if (this.curatedGalleryStore.showGridView !== undefined) {
        return this.curatedGalleryStore.showGridView
      }
      return this.defaultShowGridView
    }
  }
})
</script>

<style lang="scss">
@import '@explorer-1/common/src/scss/templates/PageCuratedGallery';
</style>
