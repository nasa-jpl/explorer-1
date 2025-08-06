<template>
  <div
    v-if="data"
    class="PageInfographicDetail ThemeVariantLight"
  >
    <div class="lg:container 3xl:px-0 lg:mt-12 px-5 mx-auto mt-5">
      <DetailHeadline
        :title="data.title"
        :publication-date="data.publicationDate"
        :topics="data.getTopicsForDisplay"
      />
    </div>
    <div class="max-w-screen-3xl lg:mb-24 mx-auto mt-10 mb-8">
      <MixinFancybox
        v-if="data.image"
        :src="data.image.original || data.image.src?.url"
        :caption="data.image.caption"
        :credit="data.image.credit"
        :detail-url="data.image.detailUrl"
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
            :width="data.image.src.width"
            :height="data.image.src.height"
            object-fit-class="scaleDown"
            loading="eager"
          />
        </BaseImagePlaceholder>
      </MixinFancybox>
    </div>
    <LayoutHelper
      indent="col-2"
      class="lg:pb-24 pb-10"
    >
      <div class="lg:grid grid-cols-10">
        <div
          v-if="data.descriptionString"
          class="col-span-7"
        >
          <BlockText :text="data.descriptionString" />
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
              >
                Download JPG
              </BaseButton>
            </div>
          </div>

          <div
            v-if="data.image.credit"
            class="lg:mb-16 mb-8"
          >
            <span class="font-secondary w-full text-base tracking-wider uppercase"> Credit </span>
            <BlockText :text="data.image.credit" />
          </div>
        </aside>
      </div>
    </LayoutHelper>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import BaseButton from './../../../components/BaseButton/BaseButton.vue'
import MixinFancybox from './../../../components/MixinFancybox/MixinFancybox.vue'
import BaseImage from './../../../components/BaseImage/BaseImage.vue'
import BaseImagePlaceholder from './../../../components/BaseImagePlaceholder/BaseImagePlaceholder.vue'
import BlockText from './../../../components/BlockText/BlockText.vue'
import DetailHeadline from './../../../components/DetailHeadline/DetailHeadline.vue'
import LayoutHelper from './../../../components/LayoutHelper/LayoutHelper.vue'

export default defineComponent({
  name: 'PageInfographicDetail',
  components: {
    BaseButton,
    MixinFancybox,
    BaseImage,
    BaseImagePlaceholder,
    BlockText,
    DetailHeadline,
    LayoutHelper
  },
  props: {
    data: {
      type: Object,
      required: false
    }
  }
})
</script>

<style lang="scss">
@import '@explorer-1/common/src/scss/templates/PageInfographicDetail';
</style>
