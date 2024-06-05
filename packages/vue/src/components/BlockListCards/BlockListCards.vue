<template>
  <div
    v-if="data && data.items && data.items.length > 0"
    class="BlockListCards"
  >
    <template v-for="(item, index) in data.items" :key="index">
      <div
        class="md:flex"
        :class="{
          'lg:pb-10 lg:mb-10 mb-8 border-gray-light-mid pb-6 border-b':
            index + 1 !== data.items.length,
        }"
      >
        <div class="md:mr-6 lg:mr-8 md:mb-0 flex-shrink-0 w-40 mb-6">
          <BaseImagePlaceholder aspect-ratio="1:1">
            <BaseImage
              v-if="item.image && item.image.src"
              :src="item.image.src.url"
              :width="item.image.src.width"
              :height="item.image.src.height"
              alt=""
              class="object-cover"
              loading="lazy"
            />
          </BaseImagePlaceholder>
        </div>
        <div>
          <BaseHeading v-if="item.heading" size="h5" level="h2" class="mb-3">
            {{ item.heading }}
          </BaseHeading>
          <BlockText
            v-if="item.description"
            :text="item.description"
            variant="medium"
          />
          <div v-if="item.links && item.links.length > 1" class="mt-3">
            <!-- When more than one link is present, use default link variant -->
            <ul class="pl-4 list-square">
              <template v-for="(link, index_link) in item.links" :key="index_link">
                <li class="my-2">
                  <BaseLink
                    :key="index_link"
                    variant="default"
                    class=""
                    link-class="no-underline"
                    :href="
                      getExternalLink(link)
                        ? getExternalLink(link)
                        : null
                    "
                    :to="link.page ? link.page.url : null"
                    external-target-blank
                  >
                    {{ link.text }}
                  </BaseLink>
                </li>
              </template>
            </ul>
          </div>
          <div v-else-if="item.links && item.links.length === 1" class="mt-3">
            <!-- When exactly one link, use primary link variant -->
            <template v-for="(link, index_link) in item.links" :key="index_link">
              <BaseLink
                variant="primary"
                class="-mb-1"
                link-class="inline-block"
                caret-wrapper-class="py-2"
                :href="
                  getExternalLink(link) ? getExternalLink(link) : null
                "
                :to="link.page ? link.page.url : null"
                external-target-blank
              >
                {{ link.text }}
              </BaseLink>
            </template>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mixinGetExternalLink } from './../../utils/mixins'
import MixinAnimationCaret from './../MixinAnimationCaret/MixinAnimationCaret.vue'
import BaseHeading from './../BaseHeading/BaseHeading.vue'
import BaseLink from './../BaseLink/BaseLink.vue'
import BaseImage from './../BaseImage/BaseImage.vue'
import BaseImagePlaceholder from './../BaseImagePlaceholder/BaseImagePlaceholder.vue'
import BlockText from './../BlockText/BlockText.vue'

export default defineComponent({
  name: 'BlockListCards',
  components: {
    BaseHeading,
    BaseLink,
    BaseImage,
    BaseImagePlaceholder,
    BlockText,
  },
  props: {
    data: {
      type: Object,
      required: false,
    },
  },
  methods: {
    getExternalLink(link) {
      mixinGetExternalLink(link)
    }
  }
})
</script>
