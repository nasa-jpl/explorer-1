<template>
  <div
    v-if="data"
    class="PageEduEventDetail pt-5 ThemeVariantLight lg:pt-12"
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

    <LayoutHelper
      indent="col-2"
      class="mb-6 lg:mb-12"
    >
      <div
        v-if="data.eventType"
        class="flex flex-wrap items-start mb-3"
      >
        <BaseTag
          variant="primary"
          size="md"
        >
          {{ data.eventType }}
        </BaseTag>
      </div>
      <BaseHeading
        level="h1"
        itemprop="name"
      >
        {{ data.title }}
      </BaseHeading>
      <ShareButtonsEdu
        class="mt-4"
        :title="data.title"
        :url="data.url"
      />
    </LayoutHelper>

    <LayoutHelper indent="col-2">
      <EventDetailHero
        :image="data.eventImage"
        :start-date-split="formattedSplitEventDates"
      />

      <!-- Event details -->
      <div>
        <div
          class="py-1 mb-10 text-xl lg:mb-0 lg:flex"
          :class="data.registerLink && data.registerLink.length > 0 ? '' : 'lg:mb-10'"
        >
          <div
            v-if="formattedEventDates || data.customDate"
            class="PageEduEventDetail__Metadata text-primary"
          >
            <IconCalendar class="relative mr-3 text-[1.2rem]" />
            <span>{{ formattedEventDates || data.customDate }}</span>
          </div>
          <div
            v-show="displayTime"
            class="PageEduEventDetail__Metadata text-primary"
          >
            <IconTime class="relative mr-3" />
            <span>{{ displayTime }}</span>
          </div>
          <!--Virtual location -->
          <div
            v-if="data.isVirtualEvent && data.locationLink"
            itemprop="location"
            itemscope
            itemtype="https://schema.org/VirtualLocation"
            class="PageEduEventDetail__Metadata text-primary"
          >
            <link
              itemprop="url"
              :href="data.locationLink"
            />
            <meta
              itemprop="name"
              :content="data.locationName"
            />
            <IconLocation class="relative mr-3" />
            <BaseLink
              variant="none"
              :href="data.locationLink"
              external-target-blank
            >
              {{ data.locationName }}
            </BaseLink>
          </div>
          <!-- Normal location -->
          <div
            v-else-if="data.locationName"
            class="PageEduEventDetail__Metadata text-primary"
          >
            <meta
              itemprop="location"
              :content="data.locationName"
            />
            <IconLocation class="relative mr-3" />
            <BaseLink
              v-if="data.locationLink"
              variant="none"
              :href="data.locationLink"
              external-target-blank
            >
              {{ data.locationName }}
            </BaseLink>
            <span v-else>{{ data.locationName }}</span>
          </div>
          <div
            v-if="data.targetAudience"
            class="PageEduEventDetail__Metadata text-primary"
          >
            <IconUser class="relative mr-3 text-[.9rem]" />
            <span>{{ data.targetAudience }}</span>
          </div>

          <div class="PageEduEventDetail__Buttons">
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
              v-for="(speaker, index) in data.speakers"
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
                    v-if="speaker.image && speaker.image.src"
                    :src="speaker.image.src.url"
                    :width="speaker.image.src.width"
                    :height="speaker.image.src.height"
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
                  v-if="speaker.name"
                  class="my-3 text-lg !font-normal !tracking-normal leading-none"
                >
                  <BaseLink
                    v-if="speaker.internalLink || speaker.externalLink"
                    link-class="no-underline normal-case"
                    :to="speaker.internalLink ? speaker.internalLink.url : null"
                    :href="speaker.externalLink ? speaker.externalLink : null"
                    external-target-blank
                  >
                    {{ speaker.name }}
                  </BaseLink>
                  <template v-else>
                    {{ speaker.name }}
                  </template>
                </h3>
                <p
                  v-if="speaker.title"
                  class="mb-3 text-gray-mid-dark"
                >
                  {{ speaker.title }}
                </p>
                <p class="text-action capitalize">
                  {{ speaker.host }}
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
    <LayoutHelper
      v-if="data.relatedEvents?.length"
      indent="col-1"
      class="my-12 lg:my-16"
    >
      <BlockLinkCarousel
        item-type="cards"
        size="h3"
        heading="Related Events"
        :items="data.relatedEvents"
      />
    </LayoutHelper>
    <!-- Related Content -->
    <div
      v-if="data.relatedContent?.length"
      class="bg-stars bg-[#15003B] lg:py-24 lg:mt-24 py-12 mt-12"
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
import {
  mixinFormatEventDates,
  mixinFormatEventTimeInHoursAndMinutes,
  mixinFormatSplitEventDates
} from '../../../utils/mixins'
import LayoutHelper from './../../../components/LayoutHelper/LayoutHelper.vue'
import BaseHeading from './../../../components/BaseHeading/BaseHeading.vue'
import BaseTag from './../../../components/BaseTag/BaseTag.vue'
import ShareButtonsEdu from './../../../components/ShareButtonsEdu/ShareButtonsEdu.vue'
import EventDetailHero from './../../../components/EventDetailHero/EventDetailHero.vue'
import IconCalendar from './../../../components/Icons/IconCalendar.vue'
import IconLocation from './../../../components/Icons/IconLocation.vue'
import IconTime from './../../../components/Icons/IconTime.vue'
import IconUser from './../../../components/Icons/IconUser.vue'
import BaseLink from './../../../components/BaseLink/BaseLink.vue'
import BaseButton from './../../../components/BaseButton/BaseButton.vue'
import CalendarButton from './../../../components/CalendarButton/CalendarButton.vue'
import BlockStreamfield from './../../../components/BlockStreamfield/BlockStreamfield.vue'
import BaseImagePlaceholder from './../../../components/BaseImagePlaceholder/BaseImagePlaceholder.vue'
import BaseImage from './../../../components/BaseImage/BaseImage.vue'
import BlockRelatedLinks from './../../../components/BlockRelatedLinks/BlockRelatedLinks.vue'
import BlockLinkCarousel from './../../../components/BlockLinkCarousel/BlockLinkCarousel.vue'
// @ts-ignore
import PlaceholderPortrait from '@explorer-1/common/src/images/svg/placeholder-portrait.svg'

export default defineComponent({
  name: 'PageEduEventDetail',
  components: {
    LayoutHelper,
    BaseHeading,
    BaseTag,
    ShareButtonsEdu,
    EventDetailHero,
    IconCalendar,
    IconLocation,
    IconTime,
    IconUser,
    BaseLink,
    BaseButton,
    CalendarButton,
    BlockStreamfield,
    BaseImagePlaceholder,
    BaseImage,
    BlockRelatedLinks,
    BlockLinkCarousel
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
    displayTime(): string {
      return this.data
        ? mixinFormatEventTimeInHoursAndMinutes(
            this.data.startDatetime,
            this.data.endDatetime,
            this.data.endTime
          )
        : ''
    },
    formattedEventDates(): string {
      return this.data ? mixinFormatEventDates(this.data.startDatetime, this.data.endDatetime) : ''
    },
    formattedSplitEventDates() {
      return this.data
        ? mixinFormatSplitEventDates(this.data.startDatetime, this.data.endDatetime)
        : undefined
    }
  }
})
</script>
<style lang="scss">
.PageEduEventDetail {
  .PageEduEventDetail__Metadata {
    @apply flex;
    @apply items-baseline;
    @apply mr-12 md:mr-8 lg:mr-12;
    @apply mb-5 lg:mb-7;

    span {
      max-width: 230px;
      min-width: 110px;
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

    max-width: 260px;
  }
  .bg-stars .MixinCarousel__Heading {
    @apply text-white;
  }
}
</style>
