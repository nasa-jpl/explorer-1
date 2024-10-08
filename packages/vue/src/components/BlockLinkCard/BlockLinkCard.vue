<template>
  <div v-if="theItem">
    <template v-if="metadataType === 'EDUCollectionsDetailPage' && useFeaturedStyles">
      <BlockLinkCardCollectionLg
        :the-item="theItem as EduResourceCardObject"
        :metadata-type="metadataType"
        :metadata-attrs="metadataAttrs"
        :size="size"
      />
    </template>
    <template v-else>
      <BaseLink
        v-if="theItem"
        variant="none"
        :to="theItem.url ? theItem.url : undefined"
        :href="theItem.externalLink ? theItem.externalLink : undefined"
        class="BlockLinkCard group"
        :link-class="`block ${small ? 'pb-3' : 'pb-5'} ${large ? 'sm:flex flex-row border-b border-gray-light-mid pb-5 mb-5' : ''}`"
        external-target-blank
      >
        <BaseImagePlaceholder
          :aspect-ratio="large ? '3:2' : '16:9'"
          class="bg-gray-dark h-full relative overflow-hidden mb-6"
          :class="{ 'lg:mb-10': medium, 'sm:w-1/3 lg:mb-0': large }"
          dark-mode
          no-logo
        >
          <BaseImage
            v-if="theItem.thumbnailImage && theItem.thumbnailImage.src"
            :src="theItem.thumbnailImage.src.url"
            :width="theItem.thumbnailImage.src.width"
            :height="theItem.thumbnailImage.src.height"
            alt=""
            object-fit-class="cover"
            image-class="can-hover:group-hover:delay-200 can-hover:group-hover:scale-100 absolute top-0 left-0 w-full transition-all duration-200 ease-in transform scale-105"
            loading="lazy"
          />
          <div v-else></div>
          <CalendarChip
            v-if="
              showCalendarChip &&
              themeStore.isEdu &&
              ((theItem as EventCardObject).startDate || (theItem as EventCardObject).ongoing)
            "
            :start-date="(theItem as EventCardObject).startDate"
            :end-date="(theItem as EventCardObject).endDate"
            :ongoing="(theItem as EventCardObject).ongoing"
          />
        </BaseImagePlaceholder>

        <div
          class="BlockLinkCard__CardContent transition-translate can-hover:group-hover:delay-200 duration-200 ease-in transform ThemeVariantLight"
          :class="contentClasses"
        >
          <template v-if="metadataAttrs">
            <BasePill
              :class="{ 'mb-2': !large, 'mb-4': large }"
              size="sm"
              :content-type="metadataType"
              :text="(theItem as EventCardObject).eventType"
            />
            <template v-if="metadataType === 'EDUNewsPage' && theItem.label">
              <!-- include the topic label for EDU News -->
              <span class="text-subtitle text-gray-mid-dark uppercase ThemeVariantLight pl-3">
                {{ theItem.label }}
              </span>
            </template>
          </template>
          <template
            v-else-if="themeStore.isEdu && theItem.parent?.title && theItem.parent?.title !== 'EDU'"
          >
            <!-- use parent page's title as the label for EDU Content cards, unless the EDU homepage is the parent -->
            <div class="flex flex-wrap">
              <p
                class="text-subtitle"
                :class="small ? 'mb-2' : 'mb-4'"
              >
                <span class="edu:text-primary ThemeVariantLight">
                  {{ (theItem as Card).parent?.title }}
                </span>
              </p>
            </div>
          </template>
          <template v-else>
            <div class="flex flex-wrap">
              <p
                v-if="
                  theItem.label || ((theItem as EventCardObject).startDate && !themeStore.isEdu)
                "
                class="text-subtitle divide-gray-mid flex divide-x"
                :class="small ? 'mb-2' : 'mb-4'"
              >
                <span
                  v-if="theItem.label"
                  class="edu:text-primary ThemeVariantLight"
                  :class="{ 'pr-2': (theItem as EventCardObject).startDate && !themeStore.isEdu }"
                >
                  {{ theItem.label }}
                </span>
                <span
                  v-if="(theItem as EventCardObject).startDate && !themeStore.isEdu"
                  :class="{ 'text-gray-mid-dark pl-2': theItem.label }"
                >
                  {{ formattedEventDates }}
                </span>
                <span class="sr-only">.</span>
              </p>
              <template
                v-if="
                  theItem.externalLink &&
                  themeStore.isEdu &&
                  isEduExternalLink(theItem.externalLink)
                "
              >
                <IconExternal
                  class="text-primary ml-2"
                  :class="{ 'text-sm mt-1px': small, '-mt-1px': medium, '-mt-.5': large }"
                />
              </template>
            </div>
          </template>

          <component
            :is="headingLevel || 'p'"
            class="text-gray-dark text-xl font-medium leading-tight tracking-tight edu:font-extrabold"
            :class="{ 'lg:text-3xl': !small }"
          >
            {{ theItem.title }}
          </component>
          <p
            v-if="(theItem as EventCardObject).targetAudience"
            :class="{ 'mt-1': !large, 'mt-4': large }"
          >
            <strong>Target Audience:</strong> {{ (theItem as EventCardObject).targetAudience }}
          </p>
          <p
            v-if="theItem.date && !themeStore.isEdu"
            class="text-gray-mid-dark"
            :class="{ 'mt-2': !large, 'mt-4': large }"
          >
            {{ theItem.date }}
          </p>
          <p
            v-if="large && theItem.summary"
            class="mt-4 text-gray-mid-dark"
            :class="{
              'line-clamp-2 sm:line-clamp-1 lg:line-clamp-2 xl:line-clamp-3': themeStore.isEdu
            }"
          >
            {{ theItem.summary }}
          </p>
          <p
            v-if="theItem.date && themeStore.isEdu"
            class="text-gray-mid-dark"
            :class="{ 'mt-2': !large, 'mt-4': large }"
          >
            {{ theItem.date }}
          </p>
          <div
            v-if="metadataAttrs"
            :class="{ 'mt-4': large, 'mt-2 mb-1': medium, 'mt-1 mb-0': small }"
          >
            <MetadataEvent
              v-if="metadataType === 'EDUEventPage'"
              :event="theItem"
              :show-time="large"
              compact
            />
            <MetadataEduResource
              v-else-if="metadataAttrs.type === 'resource'"
              :resource="theItem as EduResourceCardObject"
              :variant="metadataAttrs.icons"
              :show-time="true"
              compact
            />
          </div>
        </div>
        <div
          v-if="!large"
          class="BlockLinkCard__CardArrow ThemeVariantLight can-hover:block can-hover:-ml-3 can-hover:group-hover:delay-200 can-hover:opacity-0 can-hover:group-hover:ml-0 can-hover:group-hover:opacity-100 hidden -mt-1 text-2xl leading-normal transition-all duration-200 ease-in"
          :class="metadataAttrs ? `text-${metadataAttrs.icons}` : 'text-primary'"
        >
          <IconArrow />
        </div>
      </BaseLink>
    </template>
  </div>
</template>

<script lang="ts">
import type { PropType } from 'vue'
import type { Card, EventCardObject, EduResourceCardObject } from '../../interfaces'
import { defineComponent } from 'vue'
import { mapStores } from 'pinia'
import { useThemeStore } from '../../store/theme'
import { mixinFormatEventDates } from './../../utils/mixins'
import { isEduExternalLink } from './../../utils/isEduExternalLink'
import type { HeadingLevel } from './../BaseHeading/BaseHeading.vue'
import IconArrow from './../Icons/IconArrow.vue'
import IconExternal from './../Icons/IconExternal.vue'
import BaseLink from './../BaseLink/BaseLink.vue'
import BaseImage from './../BaseImage/BaseImage.vue'
import BaseImagePlaceholder from './../BaseImagePlaceholder/BaseImagePlaceholder.vue'
import BasePill from './../BasePill/BasePill.vue'
import BlockLinkCardCollectionLg from './../BlockLinkCard/BlockLinkCardCollectionLg.vue'
import CalendarChip from './../CalendarChip/CalendarChip.vue'
import MetadataEvent from './../MetadataEvent/MetadataEvent.vue'
import MetadataEduResource from './../MetadataEduResource/MetadataEduResource.vue'
import { eduMetadataDictionary } from './../../constants'

export default defineComponent({
  name: 'BlockLinkCard',
  components: {
    IconArrow,
    IconExternal,
    BaseLink,
    BaseImage,
    BaseImagePlaceholder,
    BasePill,
    CalendarChip,
    MetadataEvent,
    MetadataEduResource,
    BlockLinkCardCollectionLg
  },
  props: {
    data: {
      type: Object as PropType<Card>,
      required: false,
      default: undefined
    },
    // override props as needed
    // so we can use this component in search results
    url: {
      type: String,
      required: false,
      default: undefined
    },
    externalLink: {
      type: String,
      required: false,
      default: undefined
    },
    thumbnailImage: {
      type: Object,
      required: false,
      default: undefined
    },
    label: {
      type: String,
      required: false,
      default: undefined
    },
    title: {
      type: String,
      required: false,
      default: undefined
    },
    date: {
      type: String,
      required: false,
      default: undefined
    },
    eventType: {
      type: String,
      default: undefined
    },
    startDate: {
      type: String,
      required: false,
      default: undefined
    },
    endDate: {
      type: String,
      required: false,
      default: undefined
    },
    ongoing: {
      type: Boolean,
      default: false
    },
    startDatetime: {
      type: String,
      default: undefined
    },
    endDatetime: {
      type: String,
      default: undefined
    },
    location: {
      type: String,
      default: undefined
    },
    // if styling should be compact
    size: {
      type: String,
      default: 'md'
    },
    // if a heading should be used and at what level
    headingLevel: {
      type: (String as PropType<HeadingLevel>) || null,
      required: false,
      default: undefined
    },
    showCalendarChip: {
      type: Boolean,
      default: false
    },
    useFeaturedStyles: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapStores(useThemeStore),
    small() {
      return this.size === 'sm'
    },
    medium() {
      return this.size === 'md'
    },
    large() {
      return this.size === 'lg'
    },
    contentClasses() {
      let classes = ''
      if (this.small) {
        classes = 'can-hover:group-hover:-translate-y-2'
      } else if (this.medium) {
        classes = 'can-hover:group-hover:-translate-y-3 edu:can-hover:group-hover:-translate-y-2'
      } else if (this.large) {
        classes = 'sm:pl-8 sm:w-2/3 lg:pt-2'
      }
      return classes
    },
    // to allow for various data shapes and sources
    // use-case: content pages provide this.data.page with non-page siblings (i.e. external link cards)
    // use-case: search and listing pages pass individual props
    theItem(): Card | EventCardObject | EduResourceCardObject | undefined {
      if ((this.data as Card)?.page) {
        return (this.data as Card).page
      } else if (this.data) {
        return this.data
      } else if (
        this.url ||
        this.externalLink ||
        this.thumbnailImage ||
        this.label ||
        this.title ||
        this.date ||
        this.startDate ||
        this.endDate ||
        this.eventType ||
        this.startDatetime ||
        this.endDatetime ||
        this.ongoing ||
        this.location
      ) {
        // form a custom object
        return {
          url: this.url,
          externalLink: this.externalLink,
          thumbnailImage: this.thumbnailImage,
          label: this.label,
          title: this.title,
          date: this.date,
          startDate: this.startDate,
          endDate: this.endDate,
          eventType: this.eventType,
          startDatetime: this.startDatetime,
          endDatetime: this.endDatetime,
          ongoing: this.ongoing,
          locationName: this.location
        }
      }
      return undefined
    },
    metadataType() {
      // checks that this is a valid metadata type
      const validContentTypes = Object.keys(eduMetadataDictionary)
      return this.data?.page?.__typename && validContentTypes.includes(this.data?.page?.__typename)
        ? this.data?.page?.__typename
        : undefined
    },
    metadataAttrs() {
      // retrieves attributes for that metadata type
      if (this.metadataType) {
        return eduMetadataDictionary[this.metadataType]
      }
      return undefined
    },
    formattedEventDates() {
      return (this.theItem as EventCardObject)?.startDate
        ? mixinFormatEventDates(
            (this.theItem as EventCardObject).startDate,
            (this.theItem as EventCardObject).endDate
          )
        : undefined
    }
  },
  methods: {
    isEduExternalLink(url: string): boolean {
      return isEduExternalLink(url)
    }
  }
})
</script>
<style lang="scss">
.BlockLinkCard {
  .text-subtitle.divide-x {
    @apply leading-none #{!important};
  }
  .ThemeVariantDark & {
    @apply bg-white;
    .BlockLinkCard__CardContent,
    .BlockLinkCard__CardArrow {
      @apply px-6;
      @apply print:px-0;
    }
    .BaseImagePlaceholder {
      @apply bg-gray-mid-dark;
    }
  }
  .MetadataEvent,
  .MetadataEduResource {
    &.-compact {
      .MetadataEventItem,
      .MetadataEduResourceItem {
        @apply mr-2.5;
      }
    }
    .MetadataEventIcon,
    .MetadataEduResourceIcon {
      @apply mr-1;
    }
  }
}
</style>
