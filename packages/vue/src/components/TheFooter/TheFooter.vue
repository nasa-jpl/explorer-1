<template>
  <footer class="TheFooter bg-jpl-blue-darker edu:bg-stars edu:bg-primary text-white relative z-20">
    <div class="footer-main lg:BaseGrid 3xl:px-0 lg:pt-20 container px-4 pt-10 mx-auto">
      <div class="footer-navigation lg:block lg:col-span-9 hidden col-span-12">
        <!-- footerNavigation -->
        <div
          v-if="data && data.footerNavigation"
          class="sm:grid grid-cols-9 gap-6"
        >
          <div
            v-for="(item, index) in data.footerNavigation"
            :key="index"
            class="sm:mb-3 xl:col-span-2 md:col-span-3 col-span-4 mb-8"
          >
            <div class="text-subtitle text-blue edu:text-white mb-3">
              {{ getLinkText(item.titleLink) }}
            </div>
            <BaseLink
              v-for="(link, index_links) in item.links"
              :key="index_links"
              variant="none"
              link-class="can-hover:hover:underline inline-block px-4 py-1 -ml-4"
              :href="link.path && !getRouterLink(link) ? link.path : null"
              :to="getRouterLink(link) ? getRouterLink(link) : null"
            >
              {{ getLinkText(link) }}
            </BaseLink>
          </div>
        </div>
      </div>
      <!-- footer extras -->
      <div class="footer-extras lg:col-span-3 col-span-12">
        <!-- email sign up -->
        <div class="text-subtitle text-blue edu:text-white lg:mb-5 mb-3">
          Get the Latest from JPL
        </div>
        <TheFooterSignUp class="lg:mb-10 mb-8" />
        <!-- social media -->
        <div class="text-subtitle text-blue edu:text-white lg:mb-5 mb-3">
          <template v-if="themeStore.theme === 'ThemeEdu'"> Follow JPL Education </template>
          <template v-else> Follow Us </template>
        </div>
        <NavSocial
          class="lg:mb-14 mb-12"
          dark
          :edu="themeStore.theme === 'ThemeEdu'"
        />
        <template v-if="themeStore.theme === 'defaultTheme'">
          <!-- caltech aside -->
          <BaseLink
            variant="none"
            href="https://caltech.edu"
            aria-label="Caltech"
            class="lg:mb-8 mb-5"
            link-class="inline-block"
          >
            <LogoCaltech class="lg:text-base text-sm text-white" />
          </BaseLink>
          <p class="mb-12">
            JPL is a federally funded research and development center managed for NASA by Caltech.
          </p>
        </template>
      </div>
    </div>
    <!-- more from JPL buttons / links -->
    <div
      v-if="data && data.footerMoreFromJpl"
      class="3xl:px-0 container px-4 mx-auto mt-5"
    >
      <div class="text-subtitle text-blue edu:text-white mb-5">More from JPL</div>
      <div class="lg:block hidden">
        <BaseButton
          v-for="(item, index) in data.footerMoreFromJpl"
          :key="index"
          :href="item.path"
          :to="item.linkPage ? item.linkPage.url : ''"
          :target="item.path ? '_blank' : '_self'"
          variant="dark"
          class="mb-5 mr-8"
        >
          {{ getLinkText(item) }}
        </BaseButton>
      </div>
      <!-- Repeated as BaseLink because the style is so drastically different between desktop and mobile -->
      <!-- TODO: achieve this completely with CSS and not two different components (much refactor) -->
      <div class="lg:hidden auto-col-2">
        <BaseLink
          v-for="(item, index) in data.footerMoreFromJpl"
          :key="index"
          variant="none"
          link-class="can-hover:hover:underline inline-block px-4 py-1 -ml-4"
          :href="item.path ? item.path : null"
          :to="item.linkPage ? item.linkPage.url : null"
        >
          {{ getLinkText(item) }}
        </BaseLink>
      </div>
    </div>
    <!-- Dark section of footer -->
    <div class="bg-opacity-15 lg:py-16 lg:mt-10 pt-10 pb-3 mt-8 bg-black">
      <div class="3xl:px-0 container px-4 mx-auto">
        <div v-if="data && data.relatedNasaSites">
          <div class="text-subtitle text-blue edu:text-white mb-5">Related NASA Sites</div>
          <div class="auto-col-4">
            <BaseLink
              v-for="(item, index) in data.relatedNasaSites"
              :key="index"
              variant="none"
              link-class="can-hover:hover:underline inline-block px-4 py-1 -ml-4"
              :href="item.path ? item.path : null"
              :to="item.linkPage ? item.linkPage.url : null"
            >
              {{ getLinkText(item) }}
            </BaseLink>
          </div>
        </div>
      </div>
    </div>
    <!-- footer meta. complex layout markup bc of differences between mobile / desktop -->
    <div
      class="bg-opacity-15 border-opacity-40 lg:border-t pt-5 pb-3 text-sm bg-black border-black"
    >
      <div class="3xl:px-0 lg:flex lg:flex-wrap lg:px-4 lg:container justify-between mx-auto">
        <div
          v-if="data && data.footerLinks"
          class="divide-opacity-40 lg:justify-start lg:-ml-4 flex flex-wrap justify-center mb-2 divide-x divide-white"
        >
          <BaseLink
            v-for="(item, index) in data.footerLinks"
            :key="index"
            variant="none"
            class="lg:mb-2 mb-5"
            link-class="can-hover:hover:underline inline-block px-4 py-1 font-bold leading-none"
            :href="item.path ? item.path : null"
            :to="item.linkPage ? item.linkPage.url : null"
          >
            {{ getLinkText(item) }}
          </BaseLink>
        </div>
        <div
          v-if="data && data.footerMeta"
          class="lg:text-left lg:border-0 border-opacity-40 lg:pt-0 lg:px-0 px-4 pt-5 mb-4 text-center border-t border-black"
        >
          <div
            v-if="commitSha"
            class="lg:inline-block lg:mb-0 block px-3 mb-2"
          >
            <span class="text-gray-light font-bold">Version:</span>
            <span>{{ commitSha }}</span>
          </div>
          <div
            v-for="(item, index) in data.footerMeta"
            :key="index"
            class="lg:inline-block lg:mb-0 block mb-2"
            :class="{ 'ml-5': index !== 0 }"
          >
            <span class="font-bold">{{ item.label }}:</span>
            <span>{{ item.text }}</span>
          </div>
        </div>
        <div v-else>
          <div
            v-if="commitSha != null"
            class="lg:inline-block lg:mb-0 block px-3 mb-2"
          >
            <span class="text-gray-light font-bold">Version:</span>
            <span>{{ commitSha }}</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script lang="ts">
// @ts-nocheck
import { defineComponent } from 'vue'
import { mapStores } from 'pinia'
import { useThemeStore } from './../../store/theme'
import { mixinGetRouterLink, mixinGetLinkText } from './../../utils/mixins'
import BaseLink from './../BaseLink/BaseLink.vue'
import BaseButton from './../BaseButton/BaseButton.vue'
import NavSocial from './../NavSocial/NavSocial.vue'
import TheFooterSignUp from './../TheFooter/TheFooterSignUp.vue'
import LogoCaltech from './../LogoCaltech/LogoCaltech.vue'

export default defineComponent({
  name: 'TheFooter',
  components: {
    BaseLink,
    BaseButton,
    NavSocial,
    TheFooterSignUp,
    LogoCaltech
  },
  props: {
    data: {
      type: Object || null,
      required: false,
      default: null
    },
    commitSha: {
      type: String,
      required: false
    }
  },
  methods: {
    getLinkText(link) {
      return mixinGetLinkText(link)
    },
    getRouterLink(link) {
      return mixinGetRouterLink(link)
    }
  },
  computed: {
    ...mapStores(useThemeStore)
  }
})
</script>
<style lang="scss">
.TheFooter {
  .auto-col-2 {
    @screen sm {
      column-count: 2;
    }
  }

  .auto-col-4 {
    @screen sm {
      column-count: 2;
    }
    @screen lg {
      column-count: 3;
    }
    @screen 2xl {
      column-count: 4;
    }
  }
}
</style>
