<template>
  <div
    class="BlockTeaser bg-gray-light lg:grid lg:grid-cols-10 relative z-0"
    :style="image ? `min-height: ${theImage.height}px` : ''"
  >
    <div
      v-if="fullWidth"
      class="lg:block bg-gradient-to-l from-transparent-w50 to-transparent-black-50 absolute inset-0 z-10 hidden"
    ></div>
    <BaseImage
      v-if="image && theImage.url"
      :image-class="`cover-bg${fullWidth ? ' -full' : ''}`"
      alt=""
      :src="theImage.url"
      :width="theImage.width"
      :height="theImage.height"
      loading="lazy"
    />
    <div
      :class="`${
        image && fullWidth ? 'relative lg:text-white lg:text-contrast z-20' : ''
      } grid lg:col-start-2 lg:col-end-5 px-10 lg:px-0 lg:py-16 py-8`"
    >
      <div class="my-auto">
        <h2
          v-if="theLabel"
          class="text-subtitle"
        >
          {{ theLabel }}
        </h2>
        <component
          :is="theLabel || (theTeaserPage && theTeaserPage.label) ? 'h3' : 'h2'"
          v-if="theHeading"
          class="text-h3 font-semibold tracking-normal lg:mt-2 mt-3"
        >
          {{ theHeading }}
        </component>
        <p
          v-if="introduction"
          class="text-body-md lg:mt-2 mt-4"
        >
          {{ introduction }}
        </p>
        <BaseButton
          v-if="theTeaserPage"
          variant="primary"
          :to="theTeaserPage.url"
          class="mt-8"
          :aria-label="`${theButtonText} - ${theHeading}`"
        >
          {{ theButtonText }}
        </BaseButton>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import BaseButton from './../BaseButton/BaseButton.vue'
import BaseImage from './../BaseImage/BaseImage.vue'

type teaserPageObject = {
  title: string
  label: string
  url: string
}
type teaserPageBlock = {
  blockType: string
  page: teaserPageObject
}
export default defineComponent({
  name: 'BlockTeaser',
  components: {
    BaseButton,
    BaseImage
  },
  props: {
    /** Small text at the top of the teaser */
    label: {
      type: String,
      required: false,
      default: undefined
    },
    /** Large heading text */
    heading: {
      type: String,
      required: false,
      default: undefined
    },
    /** Short descriptive text */
    introduction: {
      type: String,
      required: false,
      default: undefined
    },
    /** Button text */
    buttonText: {
      type: String,
      required: false,
      default: undefined
    },
    /** Background image */
    image: {
      type: Object,
      required: false,
      default: undefined
    },
    /** If the background image should span the entire width of the block */
    fullWidth: {
      type: Boolean,
      default: false
    },
    /** Option to pass a page data object as an object or as a single item in an array (for better compatibility with CMS mixed use) */
    // ideally can pass a page object (TopicDetailPage), but sometimes (e.g. streamfield teaserblock) this will be wrapped in an array
    teaserPage: {
      type: [Array, Object],
      required: false,
      default: undefined
    }
  },
  computed: {
    /**
     * Fall back to the linked page’s label, if there is one.
     */
    theLabel(): string {
      return this.label || this.theTeaserPage?.label || ''
    },

    /**
     * Fall back to the linked page’s title, if there is one.
     */
    theHeading(): string {
      return this.heading || this.theTeaserPage?.title || ''
    },

    /**
     * Fallback for optional field, which would compromise the usefulness of this component if missing.
     */
    theButtonText(): string {
      return this.buttonText || 'Read More'
    },

    theImage(): { url: string; width: string; height: string } {
      const { url, width, height } =
        this.image && this.fullWidth ? this.image.full : this.image ? this.image.half : undefined

      return {
        url,
        width,
        height
      }
    },
    // necessary as the streamfield teaser block passes an array of blocks
    // this is necessary to retrieve the label from the teaser pages
    theTeaserPage(): teaserPageObject | undefined {
      if (this.teaserPageBlock) {
        return this.teaserPageBlock
      } else if (this.teaserPage && typeof this.teaserPage === 'object') {
        return this.teaserPage as teaserPageObject
      }
      return undefined
    },
    teaserPageBlock(): teaserPageObject | undefined {
      if (Array.isArray(this.teaserPage) && this.teaserPage?.length) {
        const filteredBlocks = this.teaserPage.filter(
          (block: teaserPageBlock) => block.blockType === 'PageChooserBlock'
        )
        if (filteredBlocks?.length) {
          return filteredBlocks[0].page
        }
      }
      return undefined
    }
  },
  methods: {
    getTeaserPageBlock(page: any[]): teaserPageBlock[] | null {
      const theBlocks = page
      return theBlocks.filter((block: teaserPageBlock) => block.blockType === 'PageChooserBlock')
    }
  }
})
</script>
<style lang="scss">
@import '@explorer-1/common/src/scss/components/BlockTeaser';
</style>
