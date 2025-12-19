<template>
  <BlockDialog
    v-if="data"
    :dialog-id="data.id"
    :heading-id="`${data.id}-heading`"
    :dialog-box-class="dialogBoxClass"
    @hide="() => $emit('hide')"
  >
    <div class="p-3 sm:p-10">
      <p class="text-h4">
        <template v-if="data.displayDate">
          {{ data.displayDate }}
        </template>
        <template v-else>
          {{ theDate }}
        </template>
      </p>
      <hr
        aria-hidden="true"
        class="bg-gray-light-mid w-full h-2px border-0 my-3"
      />
      <div
        tabindex="0"
        class="dialog-main pb-3 overflow-auto relative"
      >
        <h2
          :id="`${data.id}-heading`"
          class="mt-4 mb-3 text-h5"
        >
          {{ data.heading }}
        </h2>
        <p
          v-if="data.milestoneLabel"
          class="text-subtitle text-gray-mid-dark"
        >
          {{ data.milestoneLabel }}
        </p>
        <BaseImagePlaceholder
          v-if="data.image"
          aspect-ratio="16:9"
          transparent-mode
          class="sm:mx-20 my-5"
        >
          <BaseImage
            :src="data.image.src.url"
            :width="data.image.src.width"
            :height="data.image.src.height"
            :alt="data.image.alt"
            object-fit-class="contain"
            image-class="swiper-lazy"
            loading="lazy"
          />
        </BaseImagePlaceholder>
        <!-- @ts-ignore -->
        <BlockVideoEmbed :data="data as unknown as BlockVideoEmbedData" />
        <BlockText
          variant="medium"
          :text="data.description"
        />
      </div>
      <div class="my-3">
        <BaseLink
          v-if="data.milestoneLink"
          variant="primary"
          :to="data.milestoneLink.page ? data.milestoneLink.page.url : undefined"
          :href="data.milestoneLink.externalLink"
          link-class="block mt-3"
        >
          {{ getLinkLabel() }}
        </BaseLink>
      </div>
    </div>
  </BlockDialog>
</template>
<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import BlockDialog from './../BlockDialog/BlockDialog.vue'
import { Milestone } from './../../templates/www/PageTimeline/BlockMilestone.vue'
import BaseImage from './../BaseImage/BaseImage.vue'
import BaseImagePlaceholder from './../BaseImagePlaceholder/BaseImagePlaceholder.vue'
import BaseLink from './../BaseLink/BaseLink.vue'
import BlockText from './../BlockText/BlockText.vue'
import BlockVideoEmbed, { type BlockVideoEmbedData } from './../BlockVideoEmbed/BlockVideoEmbed.vue'

export default defineComponent({
  name: 'TimelineDialog',
  components: {
    BlockDialog,
    BaseImage,
    BaseImagePlaceholder,
    BaseLink,
    BlockText,
    BlockVideoEmbed
  },
  props: {
    data: {
      type: Object as PropType<Milestone>,
      required: false,
      default: undefined
    },
    dialogBoxClass: {
      type: String,
      required: false,
      default: undefined
    }
  },
  emits: ['hide'],
  computed: {
    theDate(): string {
      // @ts-ignore
      return this.$filters.displayDate(this.data.date)
    }
  },
  methods: {
    getLinkLabel() {
      if (this.data?.milestoneLink?.page) {
        return this.data.milestoneLinkLabel || 'Visit page'
      }
      return this.data?.milestoneLinkLabel || 'Visit website'
    }
  }
})
</script>
<style lang="scss">
@import '@explorer-1/common/src/scss/components/TimelineDialog';
</style>
