<template>
  <div
    v-if="image"
    class="HeroMedia mb-10 md:mb-10 lg:mb-14 -mx-4 lg:mx-0"
  >
    <div class="bg-gray-light">
      <div class="relative flex items-center mx-auto overflow-hidden vh-crop max-w-screen-3xl">
        <div class="hero">
          <img
            v-if="image.src"
            class="object-cover object-center w-full h-full"
            :srcset="getSrcSet"
            :src="image.src.url"
            :width="image.src.width"
            :height="image.src.height"
            :alt="image.alt"
          />
          <div
            v-if="startDateSplit"
            class="absolute top-0 left-0 z-10 px-4 py-4 text-center text-white bg-jpl-red"
          >
            <div class="font-extrabold text-6xl leading-tight tracking-wider">
              {{ startDateSplit.day }}
            </div>
            <div class="text-subtitle">
              {{ startDateSplit.monthAndYear }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { mixinGetSrcSet } from './../../utils/mixins'

export default defineComponent({
  name: 'EventDetailHero',
  props: {
    data: {
      type: Object,
      required: false
    },
    startDateSplit: {
      type: Object,
      required: true
    },
    image: {
      type: Object,
      required: false
    }
  },
  computed: {
    getSrcSet() {
      return this.image ? mixinGetSrcSet(this.image) : undefined
    }
  }
})
</script>
<style lang="scss">
@import '@explorer-1/common/src/scss/components/HeroMedia';
</style>
