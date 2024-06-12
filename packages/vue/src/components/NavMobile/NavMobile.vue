<template>
  <transition name="headerMobileReveal">
    <div
      v-show="headerVisible"
      class="NavMobile border-gray-light-mid z-50 w-full transition-all duration-150 ease-in bg-white border-b"
      :class="headerClasses"
    >
      <!-- navbar -->
      <div class="relative w-full">
        <div class="h-18 flex items-center justify-between px-5">
          <!-- branding -->
          <NavLogoLinks class="lg:p-0 w-72 z-20 p-2 pl-0 -ml-3">
            <img
              :src="LogoColor"
              alt="JPL Logo"
              width="324"
              height="72"
            />
          </NavLogoLinks>

          <button
            v-if="data"
            class="text-gray-dark p-4 -mr-4 cursor-pointer"
            :aria-label="menuVisible ? 'Close menu' : 'Open menu'"
            @click="toggleMenu"
          >
            <IconMenu
              v-if="!menuVisible"
              class="text-6xl"
            />
            <IconClose
              v-else
              class="text-3xl"
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
          </nav>
          <div class="pl-8">
            <nav
              v-if="data.footerMoreFromJpl && data.footerMoreFromJpl.length > 0"
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
            <NavSocial class="mt-8" />
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script lang="ts">
// @ts-nocheck
import { defineComponent } from 'vue'
import { mapStores } from 'pinia'
import LogoColor from '@explorer-1/common/src/images/svg/logo-tribrand-color.svg'
import { useHeaderStore } from './../../store/header'
import IconMenu from './../Icons/IconMenu.vue'
import IconClose from './../Icons/IconClose.vue'
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
    NavSearchForm
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
  data() {
    return {
      menuVisible: false,
      searchQuery: null,
      LogoColor: LogoColor
    }
  },
  computed: {
    ...mapStores(useHeaderStore),
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
    // // TODO: VUE3: find solution for emitting event from slot
    // // TODO: find a cleaner way to do this w/o using mounted or root level events
    // // scoped slots? https://github.com/vuejs/vue/issues/4332
    // this.$root?.$on('linkClicked', this.closeMenu)
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
        document.body.classList.remove('overflow-hidden')
      }
    },
    openMenu() {
      if (!this.menuVisible) {
        this.menuVisible = true
        this.$emit('openMobileMenu')
        document.body.classList.add('overflow-hidden')
      }
    },
    // safe way to retrieve url key from nav items. used with breadcrumb to determine active class.
    getUrlKey(item: LinkObject): string | null {
      if (item.linkPage) {
        return item.linkPage.url
      }
      return null
    },
    // to determine active class on menu links and 'more' menu links
    checkActive(item: LinkObject) {
      const urlKey = this.getUrlKey(item)
      if (urlKey && this.breadcrumb && this.breadcrumb.menu_links) {
        // key into the breadcrumbs for each section
        const objArray = this.breadcrumb.menu_links[urlKey]
        // check if any of the paths contained in the array are active
        return objArray.some((el: BreadcrumbPathObject) => {
          return mixinIsActivePath(el.path)
        })
      }
      return false
    }
  }
})
</script>
<style lang="scss">
.NavMobile {
  @apply absolute top-0 z-50 inset-x-0;
  // styles for default vs transparent header
  // underline color and logo inversion styles handled within their respective components
  &.-scrolled {
    @apply fixed;
  }
}
// vue-transition classes
// may scope this wider if mobile uses the same transition
.headerMobileReveal-enter-to,
.headerMobileReveal-enter-active {
  @apply transition-transform transform ease-in-out duration-200;
}

.headerMobileReveal-leave-active,
.headerMobileReveal-leave-to {
  @apply transition-transform transform ease-out duration-200;
}

.headerMobileReveal-enter-active {
  @apply -translate-y-full;
}

.headerMobileReveal-enter-to {
  @apply translate-y-0;
}

.headerMobileReveal-leave-to {
  @apply translate-y-0;
}

.headerMobileReveal-leave-active {
  @apply -translate-y-full;
}
</style>
