<template>
  <div
    class="bg-gray-light edu:bg-stars edu:bg-primary md:mx-0 sm:py-8 md:py-10 md:px-0 sm:mx-20 px-6 py-6 text-center"
  >
    <div class="md:mx-16 xl:mx-24">
      <p class="text-h6 edu:text-white edu:font-extrabold">{{ data.heading }}</p>
    </div>
    <BaseButton
      v-if="data.page"
      :variant="buttonVariant"
      :to="data.page.url"
      class="md:mt-5 md:mb-2 mt-4 mb-1"
    >
      {{ data.text }}
    </BaseButton>
    <BaseButton
      v-else-if="data.externalLink"
      :variant="buttonVariant"
      :href="data.externalLink"
      class="md:mt-5 md:mb-2 mt-4 mb-1"
    >
      {{ data.text }}
      <template #icon><IconExternal class="ml-2 text-sm" /></template>
      <!-- TODO: replace with external link icon once icons are available -->
    </BaseButton>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { mapStores } from 'pinia'
import { useThemeStore } from '../../store/theme'
import BaseButton from './../BaseButton/BaseButton.vue'
import IconExternal from './../Icons/IconExternal.vue'

export default defineComponent({
  name: 'BlockCta',
  components: {
    BaseButton,
    IconExternal
  },
  props: {
    data: {
      type: Object,
      required: true,
      default: () => ({})
    }
  },
  computed: {
    ...mapStores(useThemeStore),
    buttonVariant() {
      return this.themeStore.theme === 'ThemeEdu' ? 'reverse-primary' : 'primary'
    }
  }
})
</script>