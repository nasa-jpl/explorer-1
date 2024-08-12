<template>
  <div
    v-if="image"
    class="EventDetailHero mb-10 md:mb-10 lg:mb-14 -mx-4 lg:mx-0"
  >
    <div class="hero">
      <BaseImagePlaceholder
        :aspect-ratio="constrain ? '16:9' : 'none'"
        dark-mode
      >
        <BaseImage
          v-if="image.src"
          :src="image.src.url"
          :srcset="getSrcSet"
          :width="image.src.width"
          :height="image.src.height"
          :alt="image.alt"
          image-class="w-full h-auto"
          object-fit-class="cover"
          loading="lazy"
        />
        <div
          v-if="startDateSplit || ongoing"
          class="ThemeVariantLight absolute top-0 left-0 z-10 px-4 py-4 text-center text-white bg-primary"
        >
          <template v-if="ongoing">
            <div class="text-subtitle">Ongoing</div>
          </template>
          <template v-else>
            <div class="font-extrabold text-6xl leading-tight tracking-wider uppercase">
              {{ themeStore.isEdu ? startDateSplit?.month : startDateSplit?.day }}
            </div>
            <div class="text-subtitle">
              {{ themeStore.isEdu ? startDateSplit?.year : startDateSplit?.monthAndYear }}
            </div>
          </template>
        </div>
      </BaseImagePlaceholder>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { mapStores } from 'pinia'
import { useThemeStore } from '../../store/theme'
import BaseImage from '../BaseImage/BaseImage.vue'
import BaseImagePlaceholder from '../BaseImagePlaceholder/BaseImagePlaceholder.vue'
import { mixinGetSrcSet, type EventDateObject } from './../../utils/mixins'
import type { PropType } from 'vue'

export default defineComponent({
  name: 'EventDetailHero',
  components: {
    BaseImage,
    BaseImagePlaceholder
  },
  props: {
    data: {
      type: Object,
      required: false,
      default: undefined
    },
    startDateSplit: {
      type: Object as PropType<EventDateObject | undefined>,
      required: true
    },
    ongoing: {
      type: Boolean,
      default: false
    },
    image: {
      type: Object,
      required: false,
      default: undefined
    },
    constrain: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  computed: {
    ...mapStores(useThemeStore),
    getSrcSet() {
      return this.image ? mixinGetSrcSet(this.image) : undefined
    }
  }
})
</script>
