<template>
  <div
    v-if="data"
    class="PageEduEventDetail ThemeVariantLight"
    :class="{
      'pt-5 lg:pt-12': heroIsInline
    }"
    itemscope
    itemtype="http://schema.org/Event"
  >
    <!-- schema.org -->
    <meta
      v-if="data.thumbnailImage && data.thumbnailImage.original"
      itemprop="thumbnailUrl"
      :content="data.thumbnailImage.original"
    />
    <meta
      itemprop="startDate"
      :content="data.startDatetime"
    />
    <meta
      v-if="data.endDatetime"
      itemprop="endDate"
      :content="data.endDatetime"
    />
    <meta
      v-if="data.summary || data.body"
      itemprop="description"
      :content="data.summary || data.body"
    />
    <div
      v-if="!heroIsInline"
      class="relative max-w-screen-3xl mx-auto -mt-1"
    >
      <!-- hero image -->
      <HeroMedia
        class="md:mb-12 lg:mb-18 mb-10"
        :image="data.eventImage"
        :constrain="data.heroConstrain"
      />
      <CalendarChip
        v-if="startDatetimeForFormatting"
        :start-date="startDatetimeForFormatting"
        :end-date="data.endDatetime"
        :ongoing="data.ongoing"
      />
    </div>
    <LayoutHelper
      indent="col-2"
      class="mb-6 lg:mb-12"
    >
      <div
        v-if="data.eventType"
        class="flex flex-wrap items-start mb-4"
      >
        <BasePill
          variant="primary"
          size="lg"
        >
          {{ data.eventType }}
        </BasePill>
      </div>
      <BaseHeading
        level="h1"
        itemprop="name"
      >
        {{ data.title }}
      </BaseHeading>
      <div
        v-if="data.targetAudience"
        class="text-body-lg mt-3 mb-6"
      >
        <strong>Target Audience:</strong>

        {{ data.targetAudience }}
      </div>
      <ShareButtonsEdu
        class="mt-4"
        :title="data.title"
        :url="data.url"
      />
    </LayoutHelper>

    <LayoutHelper indent="col-2">
      <EventDetailHero
        v-if="heroIsInline"
        :image="data.eventImage"
        :start-date="startDatetimeForFormatting"
        :end-date="data.endDate"
        :constrain="data.heroConstrain"
        :ongoing="data.ongoing"
      />

      <!-- Event details -->
      <div>
        <div
          class="py-1 mb-10 lg:mb-0 lg:flex"
          :class="data.registerLink && data.registerLink.length > 0 ? '' : 'lg:mb-10'"
        >
          <MetadataEvent :event="data" />

          <div class="PageEduEventDetail__Buttons max-w-[17rem]">
            <BaseButton
              v-if="
                data.registerLink &&
                data.registerLink.length > 0 &&
                ((data.registerLink[0].page && data.registerLink[0].page.url) ||
                  data.registerLink[0].externalLink)
              "
              class="w-full px-0 mb-5"
              :href="data.registerLink[0].externalLink ? data.registerLink[0].externalLink : null"
              :to="
                data.registerLink[0].page && data.registerLink[0].page.url
                  ? data.registerLink[0].page.url
                  : null
              "
              :target="data.registerLink[0].externalLink ? '_blank' : '_self'"
              compact
              >Register for event
            </BaseButton>
            <!-- Todo IF VIRTUAL EVENT passes url as string to location prop -->
            <!-- location= location name and link -->
            <CalendarButton
              v-if="data.startDatetime"
              :start-datetime="data.startDatetime"
              :end-datetime="data.endDatetime ? data.endDatetime : null"
              :title="data.title ? data.title : null"
              :location="data.locationName ? data.locationName : null"
              :description="data.summary ? data.summary : null"
            />
          </div>
        </div>

        <!-- Body -->
        <div
          v-if="data.body || data.summary"
          class="grid-cols-10 lg:grid -mx-4 lg:mx-0"
        >
          <div class="col-span-7">
            <BlockText
              v-if="data.topper && data.topper.length > 2"
              class="lg:mb-8 mb-5 px-4 lg:px-0"
              :text="data.topper"
            />

            <p
              v-if="data.summary"
              class="BlockText text-body-lg mb-8 px-4 lg:px-0 font-semibold"
            >
              {{ data.summary }}
            </p>
            <BlockStreamfield
              v-if="data.body"
              variant="fluid"
              :data="data.body"
            />
          </div>
        </div>
      </div>
    </LayoutHelper>

    <!-- Speakers -->
    <LayoutHelper
      v-if="data.speakers && data.speakers.length > 0"
      indent="col-2"
      class="mb-12 lg:mb-16"
    >
      <div class="grid-cols-10 lg:grid">
        <div class="col-span-7">
          <BaseHeading
            level="h2"
            size="h3"
            class="mb-5 md:mb-8"
            >Speakers</BaseHeading
          >
          <div class="flex flex-col flex-wrap justify-start md:flex-row md:-mx-4">
            <div
              v-for="(item, index) in data.speakers"
              :key="index"
              class="flex flex-1 mb-6 md:flex-none md:flex-wrap md:mx-4 md:w-56"
            >
              <div class="w-40 mr-6 md:mr-0 md:w-56">
                <BaseImagePlaceholder
                  aspect-ratio="1:1"
                  class="relative overflow-hidden bg-gray-light-mid"
                  transparent-mode
                >
                  <BaseImage
                    v-if="item.speaker.image && item.speaker.image.src"
                    :src="item.speaker.image.src.url"
                    :width="item.speaker.image.src.width"
                    :height="item.speaker.image.src.height"
                    alt=""
                    class="object-cover"
                    loading="lazy"
                  />
                  <img
                    v-else
                    :src="PlaceholderPortrait"
                    alt=""
                  />
                </BaseImagePlaceholder>
              </div>
              <div class="flex-1 h-full">
                <h3
                  v-if="item.speaker.name"
                  class="my-3 text-lg !font-normal !tracking-normal leading-none"
                >
                  <BaseLink
                    v-if="item.speaker.internalLink || item.speaker.externalLink"
                    link-class="no-underline normal-case"
                    :to="item.speaker.internalLink ? item.speaker.internalLink.url : null"
                    :href="item.speaker.externalLink ? item.speaker.externalLink : null"
                    external-target-blank
                  >
                    {{ item.speaker.name }}
                  </BaseLink>
                  <template v-else>
                    {{ item.speaker.name }}
                  </template>
                </h3>
                <p
                  v-if="item.speaker.title"
                  class="mb-3 text-gray-mid-dark"
                >
                  {{ item.speaker.title }}
                </p>
                <p class="text-action capitalize">
                  {{ item.speaker.host }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutHelper>

    <!-- Webcast -->
    <LayoutHelper
      v-if="data.relatedLinks && data.relatedLinks.length > 0"
      indent="col-2"
      class="my-12 lg:my-16"
    >
      <BlockRelatedLinks
        :data="data.relatedLinks[0]"
        size="h3"
      />
    </LayoutHelper>

    <!-- Related Events -->
    <div
      v-if="relatedEvents?.length"
      class="my-12 lg:my-16 px-0"
    >
      <BlockLinkCarousel
        item-type="cards"
        size="h3"
        heading="Related Events"
        :items="relatedEvents"
      />
    </div>
    <!-- Related Content -->
    <div
      v-if="data.relatedContent?.length"
      class="bg-stars bg-[#15003B] lg:py-24 lg:mt-24 py-12 mt-12 print:px-4"
    >
      <BlockLinkCarousel
        class="ThemeVariantDark"
        item-type="cards"
        heading="Explore More"
        :items="data.relatedContent"
      />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import type { EventCardObject } from './../../../interfaces'
import LayoutHelper from './../../../components/LayoutHelper/LayoutHelper.vue'
import BaseHeading from './../../../components/BaseHeading/BaseHeading.vue'
import BasePill from './../../../components/BasePill/BasePill.vue'
import ShareButtonsEdu from './../../../components/ShareButtonsEdu/ShareButtonsEdu.vue'
import EventDetailHero from './../../../components/EventDetailHero/EventDetailHero.vue'
import HeroMedia from './../../../components/HeroMedia/HeroMedia.vue'
import BaseLink from './../../../components/BaseLink/BaseLink.vue'
import BaseButton from './../../../components/BaseButton/BaseButton.vue'
import CalendarButton from './../../../components/CalendarButton/CalendarButton.vue'
import BlockStreamfield from './../../../components/BlockStreamfield/BlockStreamfield.vue'
import BaseImagePlaceholder from './../../../components/BaseImagePlaceholder/BaseImagePlaceholder.vue'
import BaseImage from './../../../components/BaseImage/BaseImage.vue'
import BlockRelatedLinks from './../../../components/BlockRelatedLinks/BlockRelatedLinks.vue'
import BlockLinkCarousel from './../../../components/BlockLinkCarousel/BlockLinkCarousel.vue'
import BlockText from './../../../components/BlockText/BlockText.vue'
import CalendarChip from './../../../components/CalendarChip/CalendarChip.vue'
import MetadataEvent from './../../../components/MetadataEvent/MetadataEvent.vue'

// @ts-ignore
import PlaceholderPortrait from '@explorer-1/common/src/images/svg/placeholder-portrait.svg'

export default defineComponent({
  name: 'PageEduEventDetail',
  components: {
    LayoutHelper,
    BaseHeading,
    BasePill,
    ShareButtonsEdu,
    EventDetailHero,
    HeroMedia,
    BaseLink,
    BaseButton,
    CalendarButton,
    BlockStreamfield,
    BaseImagePlaceholder,
    BaseImage,
    BlockRelatedLinks,
    BlockLinkCarousel,
    BlockText,
    CalendarChip,
    MetadataEvent
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
      PlaceholderPortrait: PlaceholderPortrait
    }
  },
  computed: {
    startDatetimeForFormatting(): string {
      return this.data?.startDatetime || this.data?.startDate
    },
    heroIsInline(): boolean {
      return this.data?.heroPosition === 'inline'
    },
    relatedEvents(): EventCardObject[] {
      // mimic the data shape of a PageChooserBlock array
      const mapped = this.data?.relatedEvents
        ? this.data.relatedEvents.map((event: EventCardObject) => {
            return {
              __typename: 'EDUEventPage',
              page: event
            }
          })
        : undefined
      return mapped
    }
  }
})
</script>
<style lang="scss">
.PageEduEventDetail {
  .PageEduEventDetail__Metadata {
    @apply flex;
    @apply items-baseline;
    @apply mr-4 md:mr-4 xl:mr-12;
    @apply mb-5 lg:mb-7;
    @apply lg:max-w-[17rem] lg:min-w-[10rem];

    span {
      @apply text-gray-dark;
    }

    svg {
      min-width: 1.25rem;
      @apply top-0.5;
    }
  }

  .PageEduEventDetail__Buttons {
    @apply text-base;
    @apply lg:ml-auto;
    @apply mt-10;
    @apply lg:mt-0;
    @apply text-center;
  }
  .bg-stars .MixinCarousel__Heading {
    @apply text-white;
  }
}
</style>
