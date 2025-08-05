<script setup lang="ts">
import { computed, reactive } from 'vue'
import type { EduResourceCardObject } from '../../interfaces'
import type { HeadingLevel } from './../BaseHeading/BaseHeading.vue'
import BaseLink from './../BaseLink/BaseLink.vue'
import BaseImage from './../BaseImage/BaseImage.vue'
import BaseImagePlaceholder from './../BaseImagePlaceholder/BaseImagePlaceholder.vue'
import BasePill from './../BasePill/BasePill.vue'
import MetadataEduResource from './../MetadataEduResource/MetadataEduResource.vue'

interface BlockLinkCardCollectionLgProps {
  theItem?: EduResourceCardObject
  metadataType?: string
  metadataAttrs?: any
  headingLevel?: HeadingLevel
  size?: string
}

// define props
const props = withDefaults(defineProps<BlockLinkCardCollectionLgProps>(), {
  theItem: undefined,
  metadataType: undefined,
  metadataAttrs: undefined,
  headingLevel: undefined,
  size: undefined
})

const { theItem, metadataType, metadataAttrs, headingLevel, size } = reactive(props)

const isSmall = computed(() => {
  return size === 'sm'
})
</script>

<template>
  <BaseLink
    v-if="theItem"
    variant="none"
    :to="theItem.url ? theItem.url : undefined"
    :href="theItem.externalLink ? theItem.externalLink : undefined"
    class="BlockLinkCardCollectionLg group bg-stars bg-primary-dark"
    :link-class="`block mb-8 relative ${isSmall ? 'flex flex-col' : 'sm:flex flex-row'}`"
    external-target-blank
  >
    <BaseImagePlaceholder
      class="bg-gray-dark h-full relative overflow-hidden mb-6 z-20"
      :class="{
        'aspect-ratio-sixteen-nine': isSmall,
        'sm:absolute sm:top-0 sm:right-0 sm:bottom:0 sm:w-1/3 lg:mb-0 order-1 sm:order-2 aspect-ratio-three-two sm:aspect-ratio-one-one':
          !isSmall
      }"
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
        image-class="can-hover:group-hover:delay-200 can-hover:group-hover:scale-[101%] absolute top-0 right-0 w-full transition-all duration-200 ease-in transform scale-105"
        loading="lazy"
      />
      <div v-else></div>
    </BaseImagePlaceholder>
    <div
      class="BlockLinkCard__CardContent can-hover:group-hover:delay-200 ThemeVariantLight"
      :class="{
        'px-4 pb-4': isSmall,
        'px-6 pb-6 sm:pt-6 lg:px-12 lg:py-10 sm:w-2/3 order-2 sm:order-1': !isSmall
      }"
    >
      <div
        class="absolute z-0 inset-0 bg-gradient-to-r from-transparent-black-75 to-transparent"
      ></div>
      <div class="relative z-10">
        <template v-if="metadataAttrs">
          <BasePill
            :class="{
              'mb-2': isSmall,
              'mb-4': !isSmall
            }"
            size="sm"
            :content-type="metadataType"
          />
        </template>

        <component
          :is="headingLevel || 'p'"
          class="text-white text-xl font-medium leading-tight tracking-tight edu:font-extrabold"
          :class="{
            'lg:text-3xl': !isSmall
          }"
        >
          {{ theItem.title }}
        </component>
        <p
          v-if="theItem.summary && !isSmall"
          class="mt-4 text-white line-clamp-2 sm:line-clamp-1 lg:line-clamp-2 xl:line-clamp-3"
        >
          {{ theItem.summary }}
        </p>
        <div
          v-if="metadataAttrs"
          :class="{
            'mt-1': isSmall,
            'mt-4': !isSmall
          }"
        >
          <MetadataEduResource
            :resource="theItem"
            :variant="metadataAttrs.icons"
            compact
          />
        </div>
      </div>
    </div>
  </BaseLink>
</template>
<style lang="scss">
@import '@explorer-1/common/src/scss/components/BlockLinkCardCollectionLg';
</style>
