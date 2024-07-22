<template>
  <BlockDialog
    v-if="data"
    :dialog-id="data.id"
    :heading-id="`${data.id}-heading`"
    :dialog-box-class="dialogBoxClass"
    @hide="() => $emit('hide')"
  >
    <div class="p-3 sm:p-10">
      <p class="font-primary text-xl sm:text-4xl font-bold leading-relaxed">
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
        class="dialog-main py-3 overflow-auto relative"
      >
        <h2
          :id="`${data.id}-heading`"
          class="mt-4 mb-2 font-primary text-xl sm:text-2xl font-bold sm:leading-normal"
        >
          {{ data.heading }}
        </h2>
        <p
          v-if="data.milestoneLabel"
          class="font-primary text-gray-mid-dark text-lg sm:text-2xl font-normal leading-relaxed uppercase my-3"
        >
          {{ data.milestoneLabel }}
        </p>
        <BaseImagePlaceholder
          v-if="data.image"
          aspect-ratio="16:9"
          transparent-mode
          class="sm:mx-20 mb-5 sm:mb-8"
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
        <BlockVideoEmbed :data="data" />
        <BlockText
          variant="medium"
          :text="data.description"
        />
      </div>
      <div class="my-3">
        <BaseLink
          v-if="data.milestoneLink"
          variant="default"
          :to="data.milestoneLink.page ? data.milestoneLink.page.url : undefined"
          :href="data.milestoneLink.externalLink"
          link-class="block mt-3 text-center sm:text-left text-2xl"
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
import BlockVideoEmbed from './../BlockVideoEmbed/BlockVideoEmbed.vue'

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
.Dialog {
  .dialog-main {
    max-height: 55vh;

    /* Fade effect */
    mask-image: linear-gradient(
      to bottom,
      transparent 0%,
      black 1rem,
      black calc(100% - 1rem),
      transparent 100%
    );
  }

  @media (forced-colors: active) {
    hr {
      border: 1px solid;
    }
  }
}
</style>
