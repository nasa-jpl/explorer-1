<template>
  <div
    class="NavDesktop z-50 w-full duration-150 ease-in"
    :class="{
      'sticky top-0': scrolledUp,
      relative: !scrolledUp,
      'transition-colors': scrollTop === 0, // smooth bg transition if going from opaque to transparent at top of page
      'transition-transform': scrollTop > 0 && scrolledCurrentPage, // If not at the top of the page, just transition the transform to prevents content from peeking through on header reveal.
      'transform -translate-y-full': !scrolledUp && !headerVisible,
      '-scrolled transform translate-y-0': scrolledUp && headerVisible && scrollTop > 0,
      '-transparent': invert,
      '-hasSecondary': !headerStore?.highlightPrimary
    }"
  >
    <!-- navbar -->
    <div class="header-bg max-w-screen-3xl absolute inset-0 mx-auto"></div>
    <div class="px-4">
      <div class="h-28 container flex items-center justify-between mx-auto">
        <!-- branding -->
        <NavLogoLinks class="z-20 flex flex-shrink-0 my-2 -ml-1">
          <img
            v-if="scrolledUp && headerVisible && scrollTop > 0"
            :src="LogoColor"
            alt="JPL Logo"
            width="324"
            height="72"
          />
          <img
            v-else-if="invert"
            :src="LogoWhite"
            alt="JPL Logo"
            width="324"
            height="72"
          />
          <img
            v-else
            :src="LogoColor"
            alt="JPL Logo"
            width="324"
            height="72"
          />
        </NavLogoLinks>
        <!-- main nav with dropdowns -->
        <nav
          v-if="data"
          aria-label="Main"
          class="main-navigation flex items-center justify-end w-full"
        >
          <div
            v-show="!searchVisible"
            class="flex flex-wrap items-center justify-end"
          >
            <template v-for="(item, index) in data.primaryNavigation">
              <NavDesktopDropdown
                v-if="item.blockType === 'MenuPanel' && item.titleLink"
                :key="index"
                :class="{ '-active': checkActive(item.titleLink) }"
                :parent-scrolled="scrollTop"
              >
                <template #dropdownLabel>
                  {{ getLinkText(item.titleLink) }}
                </template>
                <NavDesktopDropdownContent :data="item" />
              </NavDesktopDropdown>
              <NavDesktopDropdown
                v-else-if="item.blockType === 'MenuMorePanel'"
                :key="`MenuMorePanel${index}`"
                :class="{ '-active': checkActiveMore() }"
                :parent-scrolled="scrollTop"
              >
                <template #dropdownLabel>
                  {{ item.titleText }}
                </template>
                <NavDesktopDropdownMore :data="item" />
              </NavDesktopDropdown>
            </template>
          </div>
          <!-- search -->
          <div
            class="relative z-20 flex items-center w-auto"
            :class="{ 'w-2/3': searchVisible }"
          >
            <button
              v-if="!searchVisible"
              aria-label="Open Search"
              class="p-4 -mr-4 text-lg cursor-pointer"
              @click="toggleSearch()"
            >
              <IconSearch />
            </button>
            <div
              v-else
              class="flex items-center w-full"
            >
              <NavSearchForm
                class="w-full"
                @clear-search="closeSearch()"
                @submit-form="closeSearch()"
              />
              <button
                aria-label="Close Search"
                class="p-4 -mr-4 cursor-pointer"
                @click="closeSearch()"
              >
                <IconClose class="text-sm" />
              </button>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
// @ts-nocheck
import { defineComponent } from 'vue'
import { mapStores } from 'pinia'
import { useHeaderStore } from './../../store/header'
import NavDesktopDropdown from './../NavDesktop/NavDesktopDropdown.vue'
import NavDesktopDropdownContent from './../NavDesktop/NavDesktopDropdownContent.vue'
import NavDesktopDropdownMore from './../NavDesktop/NavDesktopDropdownMore.vue'
import NavLogoLinks from './../NavLogoLinks/NavLogoLinks.vue'
import NavSearchForm from './../NavSearchForm/NavSearchForm.vue'
import IconSearch from './../Icons/IconSearch.vue'
import IconClose from './../Icons/IconClose.vue'
import type { LinkObject, BreadcrumbObject } from './../../utils/mixins'
import LogoColor from '@explorer-1/common/src/images/svg/logo-tribrand-color.svg'
import LogoWhite from '@explorer-1/common/src/images/svg/logo-tribrand-white.svg'
import type { BreadcrumbPathObject } from '../../interfaces'
import {
  mixinIsActivePath,
  mixinGetLinkText,
  mixinUpdateGlobalChildren,
  mixinUpdateSecondary
} from './../../utils/mixins'

export default defineComponent({
  name: 'NavDesktop',
  components: {
    NavDesktopDropdown,
    NavDesktopDropdownContent,
    NavDesktopDropdownMore,
    NavLogoLinks,
    NavSearchForm,
    IconSearch,
    IconClose
  },
  props: {
    data: {
      type: Object || null,
      required: false,
      default: null
    },
    // this will override the initial display state (used in storybook)
    invertOverride: {
      type: Boolean,
      required: false
    },
    headerVisible: {
      type: Boolean,
      required: false,
      default: false
    },
    scrolled: {
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
    }
  },
  data() {
    return {
      searchVisible: false,
      // scrolledCurrentPage is used to track if a user has scrolled on the current page.
      // This is used in transition logic to avoid distracting animations on route changes
      // without this check, the nav would swoop in/out on a route change if it was visible before the route change occured (e.g. partially scrolled up on a page)
      scrolledCurrentPage: false,
      LogoColor: LogoColor,
      LogoWhite: LogoWhite
    }
  },
  computed: {
    ...mapStores(useHeaderStore),
    // get the breadcrumb JSON string and convert to object. used to determine active class.
    breadcrumb(): BreadcrumbObject | null {
      if (this.data) {
        return JSON.parse(this.data.breadcrumb)
      }
      return null
    },
    // dynamic classes for header transparency and onScroll effects
    invert(): boolean {
      const highContrast =
        typeof window !== 'undefined' // client-side only
          ? window.matchMedia('(forced-colors: active)').matches
          : false
      // storybook-safe
      const headerTransparent = this.headerStore ? this.headerStore?.headerTransparent : false
      return !highContrast && (headerTransparent || this.invertOverride)
    }
  },

  watch: {
    scrollTop(newVal) {
      if (newVal > 0) {
        this.scrolledCurrentPage = true
      } else {
        this.scrolledCurrentPage = false
      }
    },
    $route() {
      // close the search on route change
      if (this.searchVisible) {
        this.closeSearch()
      }
      // update header transparency
      if (this.headerStore) {
        this.headerStore.makeTransparent(false)
        // to reset if active primary nav item should be highlighted
        // content pages can override this a la carte
        this.headerStore.updateHighlightPrimary(true)
        // clear secondary nav each time
        mixinUpdateSecondary(null)
      }
      // reset scrolledCurrentPage on route change
      this.scrolledCurrentPage = false
    }
  },
  methods: {
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
        const isActive = objArray.some((el: BreadcrumbPathObject) => mixinIsActivePath(el.path))
        if (isActive) {
          mixinUpdateGlobalChildren(this.breadcrumb.menu_links[urlKey])
        }
        return isActive
      }
      return false
    },
    checkActiveMore() {
      if (this.breadcrumb && this.breadcrumb.more) {
        // get the more menu array
        const arr = this.breadcrumb.more
        // check if array contains current path
        const isActive = arr.some((el: BreadcrumbPathObject) => mixinIsActivePath(el.path))
        if (isActive) {
          // clear the secondary nav store when visiting a breadcrumb page
          // ensures blank secondary nav unless explicitly set via content page "Promote" settings
          mixinUpdateGlobalChildren(null)
        }
        return isActive
      }
      return false
    },
    toggleSearch() {
      this.searchVisible ? this.closeSearch() : this.openSearch()
    },
    closeSearch() {
      if (this.searchVisible) {
        this.searchVisible = false
        this.$emit('closeSearch')
      }
    },
    openSearch() {
      if (!this.searchVisible) {
        this.searchVisible = true
        this.$emit('openSearch')
      }
    },
    getLinkText(item: LinkObject) {
      return mixinGetLinkText(item)
    }
  }
})
</script>
<style lang="scss">
.NavDesktop {
  @apply border-b border-transparent;
  // styles for default vs transparent header
  // underline color and logo inversion styles handled within their respective components
  > .header-bg {
    @apply bg-white;

    .main-navigation {
      > * {
        @apply text-gray-dark;
      }
    }
  }

  &.-transparent {
    @apply bg-transparent;

    > .header-bg {
      @apply bg-gradient-to-b from-transparent-black-75 to-transparent bg-transparent;
    }

    .main-navigation {
      > * {
        @apply text-white;

        .NavDesktopDropdown > button {
          // mimics .text-contrast class
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);
        }
      }
    }
  }

  &.-scrolled {
    @apply border-b border-gray-mid border-opacity-50 bg-white;

    &.-transparent {
      > .header-bg {
        @apply opacity-0 bg-white;
      }

      .main-navigation {
        > * {
          @apply text-gray-dark;

          .NavDesktopDropdown > button {
            text-shadow: none;
          }
        }
      }
    }

    &.-hasSecondary {
      @apply border-0 border-transparent;
    }
  }
}
</style>
