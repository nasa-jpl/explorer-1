<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import type { ImageObject, PageObject } from '../../../interfaces'
import SearchInput from './../../../components/SearchInput/SearchInput.vue'
import BlockStreamfield from './../../../components/BlockStreamfield/BlockStreamfield.vue'
import BaseLink from './../../../components/BaseLink/BaseLink.vue'

const router = useRouter()

interface PageEduHomeObject extends PageObject {
  heroImage: ImageObject
  heroText: string
  hotTopics: {
    page: PageObject
  }[]
}

interface PageEduHomeProps {
  data: PageEduHomeObject
}

// define props
const props = withDefaults(defineProps<PageEduHomeProps>(), {
  data: undefined
})

const { data } = reactive(props)

const searchQuery = ref(undefined)
const image = computed(() => {
  return data?.heroImage
})

const submitSearch = () => {
  router.push({ path: '/edu/resources/', query: { query: searchQuery.value } })
}
</script>
<template>
  <div
    v-if="data"
    class="PageEduHome ThemeVariantLight -nav-offset"
  >
    <div class="EduHero max-w-screen-3xl relative mx-auto">
      <div class="absolute inset-0 z-10 bg-black">
        <picture v-if="image?.src">
          <source
            media="(min-width: 768px)"
            :srcset="image.srcSet"
          />
          <source
            media="(min-width: 420px)"
            :srcset="image.screenMd?.url"
          />
          <source :srcset="image.screenSm?.url" />
          <img
            class="md:object-right object-cover object-bottom w-full h-full"
            :src="image.src.url"
            :width="image.src.width"
            :height="image.src.height"
            :alt="image.alt"
          />
        </picture>
      </div>
      <div class="content-wrapper lg:flex lg:items-center relative z-20 w-full h-full">
        <div
          class="bg-gradient-to-b lg:bg-gradient-to-l from-transparent-w25 lg:from-transparent-w50 to-transparent-black-50 lg:to-transparent-black-50 absolute inset-0"
        ></div>
        <div class="text-contrast relative w-full text-white">
          <div class="lg:py-0 pb-10 container pt-8 mx-auto">
            <div class="lg:px-10 2xl:px-0 pt-30 lg:pt-16 lg:pb-18 px-4">
              <h1
                v-if="data.heroText"
                class="lg:w-3/4 xl:w-3/4 xl:text-10xl lg:text-9xl text-7xl lg:tracking-tightest lg:leading-tighter mb-5 font-bold leading-tight"
              >
                {{ data.heroText }}
              </h1>
              <div class="md:w-4/5 lg:w-2/3 xl:w-1/2 w-full">
                <SearchInput
                  v-model="searchQuery"
                  class="bg-white border-none"
                  placeholder="Search the K-12 resource library"
                  with-button
                  @submit="submitSearch()"
                />
              </div>
              <div
                v-if="data.hotTopics?.length"
                class="md:flex flex-row mt-10"
              >
                <h2
                  class="text-subtitle mt-1 text-white font-semibold whitespace-nowrap mr-5 mb-3 md:mb-0 lg:mr-8"
                >
                  Hot Topics
                </h2>
                <ul class="flex flex-row flex-wrap">
                  <li
                    v-for="(topic, index) in data.hotTopics"
                    :key="index"
                    class="mr-2 mb-2"
                  >
                    <BaseLink
                      variant="none"
                      :to="`/edu/resources?query=${topic.page?.title}`"
                      link-class="text-gray-dark whitespace-nowrap text-sm bg-[#99D1DF] font-extrabold rounded-full inline-block px-3 py-1 text-contrast-none hover:bg-action hover:text-white"
                    >
                      {{ topic.page?.title }}
                    </BaseLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      v-if="data.body?.length"
      class="my-10 lg:my-18"
    >
      <BlockStreamfield
        v-if="data.body?.length"
        :data="data.body"
      />
    </div>
  </div>
</template>
<style lang="scss">
@import '@explorer-1/common/src/scss/templates/PageEduHome';
</style>
