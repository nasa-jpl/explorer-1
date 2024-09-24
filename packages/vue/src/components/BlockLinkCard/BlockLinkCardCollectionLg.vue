<script setup lang="ts">
import { reactive } from 'vue'
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
}

// define props
const props = withDefaults(defineProps<BlockLinkCardCollectionLgProps>(), {
  theItem: undefined,
  metadataType: undefined,
  metadataAttrs: undefined,
  headingLevel: undefined
})

const { theItem, metadataType, metadataAttrs, headingLevel } = reactive(props)
</script>

<template>
  <BaseLink
    v-if="theItem"
    variant="none"
    :to="theItem.url ? theItem.url : undefined"
    :href="theItem.externalLink ? theItem.externalLink : undefined"
    class="BlockLinkCardCollectionLg group bg-stars bg-primary-dark"
    link-class="block sm:flex flex-row mb-8 relative"
    external-target-blank
  >
    <BaseImagePlaceholder
      class="bg-gray-dark h-full relative sm:absolute sm:top-0 sm:right-0 sm:bottom:0 overflow-hidden mb-6 sm:w-1/3 lg:mb-0 order-1 sm:order-2 z-20 aspect-ratio-three-two sm:aspect-ratio-one-one"
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
      class="BlockLinkCard__CardContent px-6 pb-6 sm:pt-6 lg:px-12 lg:py-10 can-hover:group-hover:delay-200 ThemeVariantLight sm:w-2/3 order-2 sm:order-1"
    >
      <div
        class="absolute z-0 inset-0 bg-gradient-to-r from-transparent-black-75 to-transparent"
      ></div>
      <div class="relative z-10">
        <template v-if="metadataAttrs">
          <BasePill
            class="mb-4"
            size="sm"
            :content-type="metadataType"
          />
        </template>

        <component
          :is="headingLevel || 'p'"
          class="text-white text-xl font-medium leading-tight tracking-tight edu:font-extrabold lg:text-3xl"
        >
          {{ theItem.title }}
        </component>
        <p
          v-if="theItem.summary"
          class="mt-4 text-white line-clamp-2 sm:line-clamp-1 lg:line-clamp-2 xl:line-clamp-3"
        >
          {{ theItem.summary }}
        </p>
        <div
          v-if="metadataAttrs"
          class="mt-4"
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
.BlockLinkCardCollectionLg {
  .MetadataEduResource .MetadataEduResourceItem {
    .MetadataEduResourceIcon {
      @apply text-white;
    }
    span {
      @apply text-white;
    }
  }
}
</style>
