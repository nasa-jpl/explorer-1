<template>
  <nav
    v-if="enabled"
    ref="NavSecondary"
    aria-label="Secondary"
    class="NavSecondary"
    :class="{
      'has-intro': hasIntro,
      '!bg-transparent border-none': invert,
      '-scrolled-up': scrollDirection === 'up',
      '-at-top': posY === 0
    }"
  >
    <div
      class="w-full mx-auto"
      :class="{ 'bg-gradient-to-r from-black to-primary bg-transparent to-90% text-white': invert }"
    >
      <div
        :class="`nav-secondary-container edu:border-0 lg:container lg:px-0 lg:whitespace-normal lg:overflow-visible relative px-4 pb-0 mx-auto overflow-x-auto text-sm font-medium whitespace-nowrap ${invert ? 'border-0' : 'border-t border-gray-mid text-gray-mid-dark border-opacity-50'}`"
      >
        <div class="lg:ml-0 2xl:-mr-3 lg:justify-end flex -ml-3">
          <template v-for="(item, index) in theBreadcrumb">
            <template v-if="item.children && item.children.length > 0">
              <NavSecondaryDropdown
                :key="index"
                :item="item"
                :index="index"
                :is-last="theBreadcrumb && index === theBreadcrumb.length - 1"
                :invert="invert"
              />
            </template>
            <template v-else>
              <NavSecondaryLink
                :key="index"
                :item="item"
                :index="index"
                :invert="invert"
              />
            </template>
          </template>
          <slot></slot>
        </div>
      </div>
    </div>
  </nav>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { mapStores } from 'pinia'
import { useHeaderStore } from './../../store/header'
import { useThemeStore } from './../../store/theme'
import NavSecondaryDropdown from './NavSecondaryDropdown.vue'
import NavSecondaryLink from './NavSecondaryLink.vue'
import { mixinHighlightPrimary, mixinUpdateSecondary } from './../../utils/mixins'
import type { BreadcrumbPathObject } from './../../interfaces'

export default defineComponent({
  /** The complexity of this component is due to the need for it to be populated from multiple data sources
   ** SecondaryNav will first check to see if there is a navigation override from the data fetched for this specific page (data.breadcrumb and store.header.secondaryNav)
   ** If there is no breadcrumb override, then it will fallback to using the breadcrumbs derived form the active global nav item (store.header.globalChildren)
   ** store.header.secondaryNav reverts to null on route changes, so the breadcrumb override is re-evaluted on every page
   */
  name: 'NavSecondary',
  components: {
    NavSecondaryDropdown,
    NavSecondaryLink
  },
  props: {
    // breadcrumbs create a secondary navigation
    breadcrumb: {
      type: String,
      required: false,
      default: undefined
    },
    hasIntro: {
      type: Boolean,
      required: false,
      default: false
    },
    invert: {
      type: Boolean,
      required: false,
      default: false
    },
    jumpMenu: {
      type: Boolean,
      default: false
    }
  },
  data(): {
    isSticky: boolean
    stickyElement?: HTMLElement
    observer?: IntersectionObserver
    observerOffset?: IntersectionObserver
    scrollDirection?: string
    posY: number
  } {
    return {
      isSticky: false,
      stickyElement: undefined,
      observer: undefined,
      observerOffset: undefined,
      scrollDirection: undefined,
      posY: 0
    }
  },
  computed: {
    ...mapStores(useHeaderStore),
    ...mapStores(useThemeStore),
    theBreadcrumb(): BreadcrumbPathObject[] | undefined {
      if (this.breadcrumb) {
        // we also want to update the store to override secondary nav
        mixinUpdateSecondary(JSON.parse(this.breadcrumb))

        return JSON.parse(this.breadcrumb)
      } else if (this.headerStore) {
        if (!this.jumpMenu) {
          return this.headerStore.globalChildren
        }
      }
      return undefined
    },
    enabled(): Boolean {
      if ((this.theBreadcrumb && this.theBreadcrumb.length > 1) || this.$slots.default) {
        return true
      }
      return false
    }
  },
  mounted() {
    if (this.enabled) {
      // if there is a secondary nav displayed, then don't highlight the primary active item
      if (!this.jumpMenu) {
        mixinHighlightPrimary(false)
      }
      window.addEventListener('scroll', this.handleScroll)
    }

    if (
      !('IntersectionObserver' in window) ||
      !('IntersectionObserverEntry' in window) ||
      !('intersectionRatio' in window.IntersectionObserverEntry.prototype)
    ) {
      // intersection observer not supported
    } else if (this.enabled) {
      this.initIntersectionObservers()
      this.checkSticky()
    }
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    isExternal(path: string): boolean {
      if (path && path.startsWith('http')) {
        return true
      }
      return false
    },
    handleScroll() {
      var scrollY = window.scrollY
      if (scrollY > this.posY) {
        this.scrollDirection = 'down'
      } else {
        this.scrollDirection = 'up'
      }
      this.posY = scrollY
    },
    initIntersectionObservers() {
      this.stickyElement = this.$refs.NavSecondary as HTMLElement
      this.observer = new IntersectionObserver(
        ([e]) => {
          e.target.classList.toggle('-is-sticky', e.intersectionRatio === 0)
        },
        {
          threshold: [0],
          rootMargin: this.themeStore.isEdu ? '-73px 0px 0px 0px' : '-113px 0px 0px 0px'
        }
      )
    },
    checkSticky() {
      if (this.stickyElement) {
        if (this.observer) this.observer.observe(this.stickyElement)
      }
    }
  }
})
</script>
<style lang="scss">
.NavSecondary {
  top: -1px; // for intersection observer to work
  @apply sticky z-40 w-full bg-white border-b border-gray-mid border-opacity-0 transition-border-opacity duration-150 edu:duration-300 ease-in;
  @apply hidden;
  @screen lg {
    @apply block;
  }

  &.has-intro {
    .nav-secondary-container {
      @apply border-gray-mid border-opacity-0;
    }
  }

  &.-is-sticky {
    @apply border-gray-mid border-opacity-50;
  }

  .secondary-root {
    .nuxt-link-exact-active {
      span {
        @apply text-primary font-semibold #{!important};
      }
    }
  }

  // for that nice horizontal scroll on mobile
  .overflow-x-auto {
    scrollbar-width: thin;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  // change sticky point if global nav is showing
  .header-sticky-showing & {
    @apply top-18;
    @screen lg {
      @apply top-28;
    }

    &.-scrolled-up {
      @apply border-gray-mid border-opacity-50;
      .nav-secondary-container {
        @apply border-gray-mid border-opacity-50;
      }
    }
  }
}
// since we depend on a body class, the edu: prefix won't work as usual and requires the below line
body.header-sticky-showing .ThemeEdu .NavSecondary {
  @screen lg {
    @apply top-[4.45rem];
  }
}
</style>
