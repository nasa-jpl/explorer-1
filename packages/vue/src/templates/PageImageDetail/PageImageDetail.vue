<template>
  <div
    v-if="data"
    class="PageImageDetail ThemeLight"
    itemscope
    itemtype="http://schema.org/ImageObject"
  >
    <!-- schema.org -->
    <meta
      v-if="data.image && data.image.original"
      itemprop="contentUrl"
      :content="data.image.original"
    />
    <meta
      v-if="data.image && data.image.src"
      itemprop="thumbnailUrl"
      :content="data.image.src"
    />

    <div class="lg:container 3xl:px-0 lg:mt-12 px-5 mx-auto mt-5">
      <BaseLink variant="secondary" to="/images" class="py-3">Image</BaseLink>
      <DetailHeadline
        :title="data.title"
        :publication-date="data.publicationDate"
        schema
      />
    </div>
    <div
      class="PageImageDetail-image-container max-w-screen-3xl relative lg:mb-20 mx-auto mt-10 mb-8"
    >
      <ImageDetailContextImage
        v-if="data.contextImage"
        class="sm:block hidden"
        :data="data"
      />
      <MixinFancybox
        v-if="data.image"
        :src="data.image.original"
        :caption="data.image.caption"
        :credit="data.image.credit"
        :title="data.title"
      >
        <BaseImagePlaceholder
          class="relative bg-black border border-black"
          aspect-ratio="21:9"
        >
          <BaseImage
            v-if="data.image.src"
            :id="data.image.id"
            :src="data.image.src.url"
            :srcset="data.image.srcSet"
            :alt="data.image.alt"
            object-fit-class="scaleDown"
            loading="eager"
          />
        </BaseImagePlaceholder>
      </MixinFancybox>
      <ImageDetailContextImage
        v-if="data.contextImage"
        class="sm:hidden block"
        :data="data"
      />
    </div>
    <LayoutHelper indent="col-2" class="lg:mb-24 mb-10">
      <div class="lg:grid grid-cols-10">
        <div v-if="data.body" class="col-span-7" itemprop="description">
          <BlockStreamfield variant="fluid" :data="data.body" />
        </div>
        <aside class="col-start-9 col-end-11">
          <div class="lg:pt-0 pt-8 mb-12">
            <div class="lg:w-auto w-full">
              <BaseButton
                v-if="data.image && data.image.original"
                :href="data.image.original"
                class="w-full mb-5"
                variant="primary"
                compact
                >Download JPG</BaseButton
              >
            </div>
            <div class="lg:w-auto w-full">
              <BaseButton
                v-if="data.downloadUrl"
                :href="data.downloadUrl"
                class="w-full"
                variant="secondary"
                compact
                >Download TIFF</BaseButton
              >
            </div>
          </div>
          <div
            v-if="data.relatedMission && data.relatedMission.length"
            class="lg:mb-16 mb-8"
          >
            <span
              class="font-secondary w-full text-base tracking-wider uppercase"
            >
              Mission
            </span>
            <ul>
              <li v-for="(block, index) in data.relatedMission" :key="index">
                <div v-if="block.blockType == 'MissionLinkBlock'">
                  <template v-if="block.page || block.externalLink">
                    <BaseLink
                      v-if="block.externalLink === null"
                      variant="none"
                      link-class="font-primary text-jpl-red hover:text-jpl-red-light text-lg"
                      :to="block.page.url"
                      >{{ block.text }}
                    </BaseLink>
                    <BaseLink
                      v-else
                      variant="none"
                      link-class="font-primary text-jpl-red hover:text-jpl-red-light text-lg"
                      :href="block.externalLink"
                      external-target-blank
                    >
                      <span class="flex items-center">
                        <span class="mr-2">{{ block.text }}</span>
                        <IconExternal class="flex-shrink-0 text-sm" />
                      </span>
                    </BaseLink>
                  </template>
                  <span v-else class="text-lg">
                    {{ block.text }}
                  </span>
                </div>
              </li>
            </ul>
          </div>
          <div v-if="data.targets && data.targets.length" class="lg:mb-16 mb-8">
            <span
              class="font-secondary w-full text-base tracking-wider uppercase"
            >
              Target
            </span>
            <ul>
              <li v-for="(item, index) in data.targets" :key="index">
                <BaseLink
                  variant="none"
                  link-class="font-primary text-jpl-red hover:text-jpl-red-light w-full py-3 text-lg"
                  :to="{
                    name: 'missions',
                    query: { mission_target: item.target },
                  }"
                >
                  {{ item.target }}
                </BaseLink>
              </li>
            </ul>
          </div>
          <div
            v-if="data.spacecraft && data.spacecraft.length"
            class="lg:mb-16 mb-8"
          >
            <span
              class="font-secondary w-full text-base tracking-wider uppercase"
            >
              Spacecraft
            </span>
            <ul>
              <li v-for="(item, index) in data.spacecraft" :key="index">
                <span class="w-full text-lg">
                  {{ item.spacecraft }}
                </span>
              </li>
            </ul>
          </div>
          <div
            v-if="data.instruments && data.instruments.length"
            class="lg:mb-16 mb-8"
          >
            <span
              class="font-secondary w-full text-base tracking-wider uppercase"
            >
              Instrument
            </span>
            <ul>
              <li
                v-for="(item, index) in data.instruments"
                :key="index"
                class="instrument justify-content-center flex-column flex items-start w-full align-middle"
              >
                <span class="w-full text-lg">
                  {{ item.instrument }}
                </span>
              </li>
            </ul>
          </div>
          <div v-if="data.image.credit" class="lg:mb-16 mb-8">
            <span
              class="font-secondary w-full text-base tracking-wider uppercase"
            >
              Credit
            </span>
            <BlockText :text="data.image.credit" />
          </div>
        </aside>
      </div>
    </LayoutHelper>
    <LayoutHelper
      v-if="
        (data.keepExploringMission && data.keepExploringMission.length) ||
        (data.keepExploringTarget && data.keepExploringTarget.length) ||
        (data.keepExploringInstrument && data.keepExploringInstrument.length)
      "
      indent="col-2"
    >
      <h2
        class="font-primary text-gray-dark lg:mb-5 lg:text-6xl mb-6 text-3xl font-semibold leading-normal tracking-normal uppercase"
      >
        Keep Exploring
      </h2>
      <ul
        class="TopicTabs flex flex-row flex-wrap justify-start pb-4 mb-5 list-none"
      >
        <li
          v-if="
            data.relatedMission &&
            data.relatedMission.length &&
            data.keepExploringMission &&
            data.keepExploringMission.length
          "
          class="last:mr-0 sm:w-auto md:mr-16 w-full mr-10 text-center"
        >
          <button
            class="text-subtitle block py-2 border-b-2 text-gray-mid-dark can-hover:hover:text-gray-dark"
            :class="
              openTab === 1 ? 'border-jpl-red text-gray-dark' : 'border-white'
            "
            :aria-expanded="openTab === 1 ? 'true' : 'false'"
            active
            @click="toggleTabs(1)"
          >
            {{ data.relatedMission[0].text }}
          </button>
        </li>
        <li
          v-if="
            data.targets &&
            data.targets.length &&
            data.keepExploringTarget &&
            data.keepExploringTarget.length
          "
          class="last:mr-0 sm:w-auto md:mr-16 w-full mr-10 text-center"
        >
          <button
            class="text-subtitle block py-2 border-b-2 text-gray-mid-dark can-hover:hover:text-gray-dark"
            :class="
              openTab === 2 ? 'border-jpl-red text-gray-dark' : 'border-white'
            "
            :aria-expanded="openTab === 2 ? 'true' : 'false'"
            @click="toggleTabs(2)"
          >
            {{ data.targets[0].target }}
          </button>
        </li>
        <li
          v-if="
            data.instruments &&
            data.instruments.length &&
            data.keepExploringInstrument &&
            data.keepExploringInstrument.length
          "
          class="last:mr-0 sm:w-auto md:mr-16 w-full mr-10 text-center"
        >
          <button
            class="text-subtitle block py-2 border-b-2 text-gray-mid-dark can-hover:hover:text-gray-dark"
            :class="
              openTab === 3 ? 'border-jpl-red text-gray-dark' : 'border-white'
            "
            :aria-expanded="openTab === 3 ? 'true' : 'false'"
            @click="toggleTabs(3)"
          >
            {{ data.instruments[0].instrument }}
          </button>
        </li>
      </ul>
    </LayoutHelper>
    <keep-alive>
      <template
        v-if="
          openTab === 1 &&
          data.keepExploringMission &&
          data.keepExploringMission.length
        "
      >
        <ThumbnailCarousel
          :key="openTab"
          class="lg:mb-24 mb-12"
          :aria-hidden="openTab === 1 ? 'false' : 'true'"
          :slides="data.keepExploringMission"
        />
      </template>
      <template
        v-else-if="
          openTab === 2 &&
          data.keepExploringTarget &&
          data.keepExploringTarget.length
        "
      >
        <ThumbnailCarousel
          :key="openTab"
          class="lg:mb-24 mb-12"
          :aria-hidden="openTab === 2 ? 'false' : 'true'"
          :slides="data.keepExploringTarget"
        />
      </template>
      <template
        v-else-if="
          openTab === 3 &&
          data.keepExploringInstrument &&
          data.keepExploringInstrument.length
        "
      >
        <ThumbnailCarousel
          :key="openTab"
          class="lg:mb-24 mb-12"
          :aria-hidden="openTab === 3 ? 'false' : 'true'"
          :slides="data.keepExploringInstrument"
        />
      </template>
    </keep-alive>
    <div
      v-if="data.relatedTopics && data.relatedTopics.length"
      class="bg-gray-light lg:py-24 py-12"
    >
      <BlockLinkCarousel
        item-type="tiles"
        heading="Related Topics"
        :items="data.relatedTopics"
      />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import BaseButton from '@/components/BaseButton/BaseButton.vue'
import MixinFancybox from '@/components/MixinFancybox/MixinFancybox.vue'
import BaseImage from '@/components/BaseImage/BaseImage.vue'
import BaseImagePlaceholder from '@/components/BaseImagePlaceholder/BaseImagePlaceholder.vue'
import BaseLink from '@/components/BaseLink/BaseLink.vue'
import BlockLinkCarousel from '@/components/BlockLinkCarousel/BlockLinkCarousel.vue'
import BlockStreamfield from '@/components/BlockStreamfield/BlockStreamfield.vue'
import BlockText from '@/components/BlockText/BlockText.vue'
import DetailHeadline from '@/components/DetailHeadline/DetailHeadline.vue'
import IconExternal from '@/components/Icons/IconExternal.vue'
import ImageDetailContextImage from '@/components/ImageDetailContextImage/ImageDetailContextImage.vue'
import LayoutHelper from '@/components/LayoutHelper/LayoutHelper.vue'
import ThumbnailCarousel from '@/components/ThumbnailCarousel/ThumbnailCarousel.vue'

export default defineComponent({
  name: 'PageImageDetail',
  components: {
    BaseButton,
    MixinFancybox,
    BaseImage,
    BaseImagePlaceholder,
    BaseLink,
    BlockLinkCarousel,
    BlockStreamfield,
    BlockText,
    DetailHeadline,
    IconExternal,
    ImageDetailContextImage,
    LayoutHelper,
    ThumbnailCarousel,
  },
  props: {
    data: {
      type: Object,
      required: false,
    },
  },
  data() {
    return {
      openTab: 1, // for tabbed carousels
    }
  },
  watch: {
    // to make sure carousel init on headless preview
    data() {
      this.initExploreCarousels()
    },
  },
  mounted() {
    this.initExploreCarousels()
  },
  methods: {
    initExploreCarousels() {
      if (this.data) {
        if (
          this.data.keepExploringMission &&
          this.data.keepExploringMission.length
        ) {
          this.openTab = 1
        } else if (
          this.data.keepExploringTarget &&
          this.data.keepExploringTarget.length
        ) {
          this.openTab = 2
        } else if (
          this.data.keepExploringInstrument &&
          this.data.keepExploringInstrument.length
        ) {
          this.openTab = 3
        }
      }
    },
    toggleTabs(tabNumber: number) {
      this.openTab = tabNumber
    },
  },
})
</script>

<style lang="scss">
.PageImageDetail {
  .PageImageDetail-image-container {
    .BaseImagePlaceholder {
      @apply select-none;

      min-height: 400px;

      img {
        -webkit-user-drag: none;
      }
    }
    @screen sm {
      &::before {
        content: '';
        @apply absolute inset-0;
      }
    }
  }

  .TopicTabs {
    button {
      @apply select-none;
    }
  }

  aside {
    .BaseButton {
      max-width: 200px;
    }

    .BlockText {
      @apply text-lg;
    }
  }
}
</style>
