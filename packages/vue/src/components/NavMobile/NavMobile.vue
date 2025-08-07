<template>
  <transition name="headerMobileReveal">
    <div
      v-show="headerVisible"
      class="NavMobile border-gray-light-mid z-50 w-full transition-all duration-150 ease-in bg-white border-b edu:bg-gray-light edu:border-none print:edu:!border-b print:border-black"
      :class="headerClasses"
    >
      <!-- navbar -->
      <div class="relative w-full">
        <div
          class="h-18 flex w-full justify-between items-center px-5 edu:bg-gradient-to-r edu:from-black edu:to-primary edu:to-90% edu:bg-black"
        >
          <!-- branding -->
          <div class="flex items-center">
            <NavLogoLinks class="lg:p-0 w-72 z-20 p-2 pl-0 -ml-3 edu:w-[12rem]">
              <template v-if="themeStore.theme === 'ThemeEdu'">
                <img
                  class="print:hidden"
                  :src="LogoWhite"
                  alt="JPL Logo"
                  width="324"
                  height="72"
                />
                <img
                  class="hidden print:block"
                  :src="LogoColor"
                  alt="JPL Logo"
                  width="324"
                  height="72"
                />
              </template>
              <img
                v-else
                :src="LogoColor"
                alt="JPL Logo"
                width="324"
                height="72"
              />
            </NavLogoLinks>
            <div
              v-if="themeStore.theme === 'ThemeEdu'"
              class="-ml-1 pl-2 border-l border-white border-opacity-30 z-20 print:border-black"
            >
              <BaseLink
                class="text-white font-bold text-xl pl-px"
                to="/edu/"
                variant="none"
              >
                Education</BaseLink
              >
            </div>
          </div>
          <button
            v-if="data"
            class="print:hidden text-gray-dark p-4 -mr-4 cursor-pointer"
            :aria-label="menuVisible ? 'Close menu' : 'Open menu'"
            @click="toggleMenu"
          >
            <IconMenu
              v-if="!menuVisible"
              class="text-6xl edu:text-white"
            />
            <IconClose
              v-else
              class="text-3xl edu:text-white"
            />
          </button>
        </div>
        <div
          v-if="menuVisible"
          class="pb-8"
        >
          <!-- search input goes here -->
          <NavSearchForm
            mobile
            :placeholder="themeStore.isEdu ? 'Search JPL Education' : undefined"
            class="px-4 my-5"
            @submit-form="closeMenu()"
          />

          <!-- secondary nav dropdown -->
          <nav
            v-if="hasSecondary"
            aria-label="Secondary"
          >
            <NavMobileDropdown
              :data="staticSecondaryData || headerStore.secondaryNav"
              start-open
            />
            <hr class="border-gray-light-mid pb-4 mb-4 border-0 border-b" />
          </nav>

          <!-- main nav dropdowns, derived from footer data -->
          <nav aria-label="Main">
            <template v-for="(item, index) in data.footerNavigation">
              <NavMobileDropdown
                v-if="item.titleLink"
                :key="index"
                :class="{
                  '-active': checkActive(item.titleLink) && !hasSecondary
                }"
                :data="item"
                :start-open="checkActive(item.titleLink) && !hasSecondary"
              />
            </template>
            <template v-if="themeStore.isEdu">
              <BaseLink
                variant="none"
                href="https://www.nasa.gov/learning-resources/"
                class="group relative block w-full px-4 py-2 text-xl font-medium text-left"
                link-class="flex flex-wrap-none overflow-visible whitespace-nowrap items-center py-0 pl-6 -ml-4 border-l-4 border-transparent"
                external-target-blank
              >
                <span class="pr-2">NASA OSTEM</span>
                <IconExternal class="shrink-0 text-sm -mt-0.5" />
              </BaseLink>
            </template>
          </nav>
          <div class="pl-8">
            <nav
              v-if="data.footerMoreFromJpl?.length"
              aria-label="Other JPL Sites"
              class="mt-6"
            >
              <div class="text-subtitle text-primary mb-3">Other JPL Sites</div>
              <NavMobileLink
                v-for="(item, index) in data.footerMoreFromJpl"
                :key="index"
                :data="item"
              />
            </nav>
            <NavSocial
              v-if="themeStore.theme === 'defaultTheme'"
              class="mt-8"
            />
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { mapStores } from 'pinia'
import { eventBus } from './../../utils/eventBus'
import LogoColor from '@explorer-1/common/src/images/svg/logo-tribrand-color.svg'
import LogoWhite from '@explorer-1/common/src/images/svg/logo-tribrand-white.svg'
import { useHeaderStore } from './../../store/header'
import { useThemeStore } from './../../store/theme'
import IconMenu from './../Icons/IconMenu.vue'
import IconClose from './../Icons/IconClose.vue'
import IconExternal from './../Icons/IconExternal.vue'
import BaseLink from './../BaseLink/BaseLink.vue'
import NavLogoLinks from './../NavLogoLinks/NavLogoLinks.vue'
import NavMobileDropdown from './../NavMobile/NavMobileDropdown.vue'
import NavMobileLink from './../NavMobile/NavMobileLink.vue'
import NavSocial from './../NavSocial/NavSocial.vue'
import NavSearchForm from './../NavSearchForm/NavSearchForm.vue'
import type { LinkObject, BreadcrumbObject } from '../../utils/mixins'
import { mixinIsActivePath } from '../../utils/mixins'
import type { BreadcrumbPathObject } from '../../interfaces'

export default defineComponent({
  name: 'NavMobile',
  components: {
    IconMenu,
    IconClose,
    NavLogoLinks,
    NavMobileDropdown,
    NavMobileLink,
    NavSocial,
    NavSearchForm,
    BaseLink,
    IconExternal
  },
  props: {
    data: {
      type: Object || null,
      required: false,
      default: null
    },
    headerVisible: {
      type: Boolean,
      required: false,
      default: false
    },
    scrolledUp: {
      type: Boolean,
      required: false,
      default: false
    },
    scrollTop: {
      type: Number,
      required: false,
      default: 0
    },
    staticSecondaryData: {
      type: Array,
      required: false,
      default: null
    }
  },
  emits: ['closeMobileMenu', 'openMobileMenu'],
  data() {
    return {
      menuVisible: false,
      searchQuery: null,
      LogoColor,
      LogoWhite
    }
  },
  computed: {
    ...mapStores(useHeaderStore),
    ...mapStores(useThemeStore),
    // get the breadcrumb JSON string and convert to object. used to determine active class.
    breadcrumb(): BreadcrumbObject | null {
      if (this.data) {
        return JSON.parse(this.data.mobileBreadcrumb)
      }
      return null
    },
    // dynamic classes for header transparency and onScroll effects
    headerClasses() {
      let classes = ''
      // visibility when scrolled
      if (this.scrolledUp && this.headerVisible && this.scrollTop > 0) {
        classes = classes + ' -scrolled'
      }
      if (this.menuVisible) {
        classes = classes + ' inset-0 overflow-auto'
      }
      return classes
    },
    // if current page has a secondary nav that should override behavior of the main nav
    hasSecondary(): boolean {
      if (this.staticSecondaryData || this.headerStore?.secondaryNav) {
        return true
      }
      return false
    }
  },
  watch: {
    $route() {
      // close the menu on route change
      if (this.menuVisible) {
        this.closeMenu()
      }
    }
  },
  mounted() {
    eventBus.on('linkClicked', () => this.closeMenu())
  },
  methods: {
    toggleMenu() {
      if (this.menuVisible) {
        this.closeMenu()
      } else {
        this.openMenu()
      }
    },
    closeMenu() {
      if (this.menuVisible) {
        this.menuVisible = false
        this.$emit('closeMobileMenu')
        if (document.body) document.body.classList.remove('overflow-hidden')
      }
    },
    openMenu() {
      if (!this.menuVisible) {
        this.menuVisible = true
        this.$emit('openMobileMenu')
        if (document.body) document.body.classList.add('overflow-hidden')
      }
    },
    // safe way to retrieve url key from nav items. used with breadcrumb to determine active class.
    getUrlKey(item: LinkObject): string | null {
      if (item?.linkPage) {
        return item.linkPage.url
      }
      return null
    },
    // to determine active class on menu links and 'more' menu links
    checkActive(item: LinkObject) {
      const urlKey = this.getUrlKey(item)
      if (urlKey && this.breadcrumb?.menu_links) {
        // key into the breadcrumbs for each section
        const objArray = this.breadcrumb.menu_links[urlKey]
        // check if any of the paths contained in the array are active
        return objArray?.length
          ? objArray.some((el: BreadcrumbPathObject) => {
              return mixinIsActivePath(el.path)
            })
          : undefined
      }
      return false
    }
  }
})
</script>
<style lang="scss">
@import '@explorer-1/common/src/scss/components/NavMobile';
</style>
