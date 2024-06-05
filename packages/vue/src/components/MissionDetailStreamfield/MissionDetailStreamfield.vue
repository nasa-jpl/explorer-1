<template>
  <div v-if="data" class="MissionDetailStreamfield">
    <template v-for="(block, index) in data">
      <LayoutHelper
        v-if="block.blockType == 'HeadingBlock'"
        :key="index"
        indent="col-2"
      >
        <BaseHeading
          :level="block.level"
          class="MissionDetailStreamfield-heading md:mb-8 mb-5"
        >
          {{ block.heading }}
        </BaseHeading>
      </LayoutHelper>
      <MissionDetailInlineImage
        v-else-if="block.blockType == 'InlineImageBlock'"
        :key="`InlineImageBlock${index}`"
        :alignment="block.alignTo"
        :text="block.text"
        :image="block.image"
        class="lg:mb-18 mb-10"
      />
      <LayoutHelper
        v-else-if="block.blockType == 'QuoteBlock'"
        :key="`QuoteBlock${index}`"
        indent="col-3"
        class="lg:mb-18 mb-10"
      >
        <BlockQuote :data="block" />
      </LayoutHelper>
      <LayoutHelper
        v-else-if="block.blockType == 'IframeEmbedBlock'"
        :key="`IframeEmbedBlock${index}`"
        indent="col-2"
        class="lg:mb-18 mb-10"
      >
        <BlockIframeEmbed :data="block" />
      </LayoutHelper>
    </template>
  </div>
</template>

<script>
import MissionDetailInlineImage from './../MissionDetailInlineImage/MissionDetailInlineImage.vue'
import BaseHeading from './../BaseHeading/BaseHeading.vue'
import BlockQuote from './../BlockQuote/BlockQuote.vue'
import LayoutHelper from './../LayoutHelper/LayoutHelper.vue'
import BlockIframeEmbed from './../BlockIframeEmbed/BlockIframeEmbed.vue'

export default {
  name: 'MissionDetailStreamfield',
  components: {
    MissionDetailInlineImage,
    BaseHeading,
    BlockQuote,
    LayoutHelper,
    BlockIframeEmbed,
  },
  props: {
    data: {
      type: Array,
      required: false,
    },
  },
}
</script>
<style lang="scss" scoped>
.ThemeVariantDark {
  .MissionDetailStreamfield-heading,
  .BlockText {
    @apply text-white;
  }
}

.MissionDetailStreamfield {
  .MissionDetailInlineImage {
    .featured-image {
      max-width: 700px;
      width: auto;
      position: relative;
      display: block;
    }
    @media screen and (min-width: 1024px) {
      .BlockText p {
        max-width: 30ch;
      }
    }
  }
}
</style>
