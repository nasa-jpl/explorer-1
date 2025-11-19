<template>
  <div
    v-if="data"
    class="PageAudioDetail ThemeVariantLight"
    itemscope
    itemtype="http://schema.org/VideoObject"
  >
    <!-- schema.org -->
    <meta
      v-if="data.uploadedMedia && data.uploadedMedia.file"
      itemprop="contentUrl"
      :content="data.uploadedMedia.file"
    />
    <meta
      v-if="data.uploadedMedia && data.uploadedMedia.duration"
      itemprop="duration"
      :content="data.uploadedMedia.duration"
    />
    <meta
      v-if="data.thumbnailImage && data.thumbnailImage.original"
      itemprop="thumbnailUrl"
      :content="data.thumbnailImage.original"
    />
    <meta
      v-if="data.summary"
      itemprop="description"
      :content="data.summary"
    />

    <LayoutHelper
      indent="col-1"
      class="3xl:px-0 lg:mt-12 mx-auto lg:px-4 mt-5 mb-10 lg:mb-14"
    >
      <!-- TODO consolidate all media detail pages to use the same headline component -->
      <template v-if="data.series && data.series.url">
        <DetailHeadline
          :title="data.title"
          :publication-date="data.publicationDate"
          :label="data.series.title + ' Podcast'"
          :label-link="data.series.url"
          schema
        />
      </template>
      <template v-else>
        <DetailHeadline
          :title="data.title"
          :publication-date="data.publicationDate"
          label="Audio"
          schema
        />
      </template>
    </LayoutHelper>
    <BlockAudio :data="data as BlockAudioData" />
    <LayoutHelper
      indent="col-2"
      class="lg:pt-12 pt-4"
    >
      <div class="lg:grid flex flex-col grid-cols-10 mb-12">
        <div
          v-if="data.summary || data.transcript || (data.relatedLinks && data.relatedLinks.length)"
          class="lg:order-1 order-2 col-span-7 mb-12"
        >
          <BlockText :text="data.summary" />
          <hr
            v-if="data.summary"
            class="border-gray-light-mid lg:my-8 my-5"
          />
          <div
            v-if="data.transcript && data.transcript.length > 2"
            ref="audioTranscript"
            class="relative col-span-7 my-5"
            :class="{
              'max-h-xl lg:max-h-3xl overflow-hidden': collapseTranscript
            }"
          >
            <div
              v-if="collapseTranscript && showTranscriptControls"
              class="transcript-overlay"
            ></div>
            <BaseHeading
              level="h2"
              class="mb-5"
              >Transcript</BaseHeading
            >
            <BlockText
              :text="data.transcript"
              variant="medium"
              class="audio-transcript"
              itemprop="transcript"
            />
          </div>
          <template v-if="data.transcript && data.transcript.length > 2 && showTranscriptControls">
            <BaseButton
              class="my-6"
              variant="secondary"
              compact
              :aria-expanded="collapseTranscript ? 'false' : 'true'"
              @click="toggleTranscript()"
            >
              <template v-if="collapseTranscript">
                <span>Read more</span>
                <IconDropdown class="text-sm ml-2" />
              </template>
              <template v-else>
                <span>Collapse</span>
                <IconDropdown class="transform rotate-180 text-sm ml-2" />
              </template>
            </BaseButton>
          </template>
          <!-- related links -->
          <template v-if="data.relatedLinks && data.relatedLinks.length">
            <BlockRelatedLinks
              class="mt-12"
              :data="data.relatedLinks[0]"
            />
          </template>
        </div>
        <aside class="audio-aside lg:order-2 order-1 col-start-9 col-end-11 mb-12">
          <div class="mt-5 lg:mt-0 lg:mb-12">
            <div class="lg:w-auto w-full">
              <BaseModal
                v-if="data.subscribeLinks && data.subscribeLinks.length"
                bg-close
              >
                <template #modalTrigger>
                  <BaseButton
                    class="w-full mb-5"
                    variant="primary"
                    compact
                  >
                    Subscribe
                  </BaseButton>
                </template>
                <template
                  v-if="data.subscribeLinks[0].heading"
                  #modalHeader
                >
                  {{ data.subscribeLinks[0].heading }}
                </template>
                <div class="SubscribeModal mb-8">
                  <p
                    v-if="data.subscribeLinks[0].description"
                    class="text-body-md mb-5"
                  >
                    {{ data.subscribeLinks[0].description }}
                  </p>
                  <ul
                    v-if="data.subscribeLinks[0].links && data.subscribeLinks[0].links.length > 0"
                    class="text-body-md mb-5"
                  >
                    <li
                      v-for="(link, index) in data.subscribeLinks[0].links"
                      :key="index"
                    >
                      <BaseLink
                        variant="default"
                        :href="link.externalLink"
                        external-target-blank
                      >
                        {{ link.text }}
                      </BaseLink>
                    </li>
                  </ul>
                </div>
              </BaseModal>
            </div>
            <div class="lg:w-auto w-full">
              <BaseButton
                v-if="data.uploadedMedia && data.uploadedMedia.file"
                :href="data.uploadedMedia.file"
                class="inline-block lg:block mb-5"
                :variant="
                  data.subscribeLinks && data.subscribeLinks.length ? 'secondary' : 'primary'
                "
                compact
              >
                <span class="pr-2">
                  Download
                  {{ data.uploadedMedia.fileExtension || 'Audio' }}
                </span>
                <slot name="icon">
                  <IconDownload />
                </slot>
              </BaseButton>
            </div>
          </div>

          <div
            v-if="data.series && data.series.url"
            class="lg:pt-0 lg:mb-12 pt-8"
          >
            <p class="text-subtitle mb-5">Podcast Series</p>
            <BaseLink
              variant="none"
              :to="data.series.url"
              class="text-jpl-red hover:text-jpl-red-dark text-lg"
              link-class="p-3 -mt-3 -ml-3"
            >
              {{ data.series.title }}
            </BaseLink>
          </div>
        </aside>
      </div>
    </LayoutHelper>

    <PodcastSeriesCarousel
      v-if="data?.series"
      :series="data.series"
      :initial-season-id="data.parent ? data.parent.id : null"
      class="mb-12 lg:mb-24"
    />
    <div
      v-if="data.relatedPages && data.relatedPages.length"
      class="bg-gray-light lg:py-24 lg:mt-24 py-12 mt-12"
    >
      <BlockLinkCarousel
        item-type="tiles"
        heading="Related Pages"
        :items="data.relatedPages"
      />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import LayoutHelper from './../../components/LayoutHelper/LayoutHelper.vue'
import DetailHeadline from './../../components/DetailHeadline/DetailHeadline.vue'
import BaseButton from './../../components/BaseButton/BaseButton.vue'
import BlockRelatedLinks from './../../components/BlockRelatedLinks/BlockRelatedLinks.vue'
import BlockText from './../../components/BlockText/BlockText.vue'
import BlockAudio, { type BlockAudioData } from './../../components/BlockAudio/BlockAudio.vue'
import IconDownload from './../../components/Icons/IconDownload.vue'
import IconDropdown from './../../components/Icons/IconDropdown.vue'
import BlockLinkCarousel from './../../components/BlockLinkCarousel/BlockLinkCarousel.vue'
import BaseHeading from './../../components/BaseHeading/BaseHeading.vue'
import BaseLink from './../../components/BaseLink/BaseLink.vue'
import BaseModal from './../../components/BaseModal/BaseModal.vue'
import PodcastSeriesCarousel from './../../components/PodcastSeriesCarousel/PodcastSeriesCarousel.vue'

export default defineComponent({
  name: 'PageAudioDetail',
  components: {
    LayoutHelper,
    BlockRelatedLinks,
    DetailHeadline,
    BlockText,
    BaseButton,
    BlockAudio,
    IconDownload,
    IconDropdown,
    BlockLinkCarousel,
    BaseHeading,
    BaseLink,
    BaseModal,
    PodcastSeriesCarousel
  },
  props: {
    data: {
      type: Object,
      required: false,
      default: undefined
    }
  },
  data() {
    return {
      collapseTranscript: true, // must start as true to determine if there is overflow
      showTranscriptControls: true
    }
  },
  watch: {
    'data.transcript': {
      handler() {
        this.$nextTick(() => {
          this.checkTranscriptOverflow()
        })
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.checkTranscriptOverflow()
    })
  },
  methods: {
    checkTranscriptOverflow() {
      if (this.$refs.audioTranscript) {
        const element = this.$refs.audioTranscript as HTMLElement
        if (element.scrollHeight > element.clientHeight) {
          this.showTranscriptControls = true
        } else {
          this.showTranscriptControls = false
        }
      }
    },
    toggleTranscript() {
      if (!this.collapseTranscript && this.$refs.audioTranscript) {
        // @ts-ignore
        this.$refs.audioTranscript.scrollIntoView({ behavior: 'smooth' })
        this.collapseTranscript = true
      } else {
        this.collapseTranscript = false
      }
    }
  }
})
</script>

<style lang="scss">
@import '@explorer-1/common/src/scss/templates/PageAudioDetail';
</style>
