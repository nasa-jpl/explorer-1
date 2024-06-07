<template>
  <nav
    v-if="enabled"
    ref="NavSecondary"
    aria-label="Secondary"
    class="NavSecondary"
    :class="{ 'has-intro': hasIntro }"
  >
    <div class="max-w-screen-3xl mx-auto">
      <div
        class="nav-secondary-container lg:container lg:px-0 lg:whitespace-normal border-gray-mid text-gray-mid-dark lg:overflow-visible relative px-4 pb-0 mx-auto overflow-x-auto text-sm font-medium whitespace-nowrap border-t border-opacity-50"
      >
        <div class="lg:ml-0 2xl:-mr-3 lg:justify-end flex -ml-3">
          <template v-for="(item, index) in theBreadcrumb">
            <template v-if="item.children && item.children.length > 0">
              <NavSecondaryDropdown
                :key="index"
                :item="item"
                :index="index"
                :is-last="theBreadcrumb && index === theBreadcrumb.length - 1"
              />
            </template>
            <template v-else>
              <NavSecondaryLink
                :key="index"
                :item="item"
                :index="index"
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
  components: {
    NavSecondaryDropdown,
    NavSecondaryLink
  },
  props: {
    breadcrumb: {
      type: String,
      required: false
    },
    hasIntro: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data() {
    return {
      isSticky: false
    }
  },
  computed: {
    ...mapStores(useHeaderStore),
    theBreadcrumb(): [BreadcrumbPathObject] | undefined {
      if (this.breadcrumb) {
        // we also want to update the store to override secondary nav
        mixinUpdateSecondary(JSON.parse(this.breadcrumb))
        return JSON.parse(this.breadcrumb)
      } else if (this.headerStore) {
        return this.headerStore.globalChildren
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
      mixinHighlightPrimary(false)
    }

    if (
      !('IntersectionObserver' in window) ||
      !('IntersectionObserverEntry' in window) ||
      !('intersectionRatio' in window.IntersectionObserverEntry.prototype)
    ) {
      // intersection observer not supported
    } else if (this.enabled) {
      this.checkSticky()
    }
  },
  methods: {
    isExternal(path: string): boolean {
      if (path && path.startsWith('http')) {
        return true
      }
      return false
    },
    checkSticky() {
      const stickyElement = this.$refs.NavSecondary as HTMLElement
      // we need both observers for when the global nav is/isn't showing
      const observer = new IntersectionObserver(
        ([e]) => {
          e.target.classList.toggle('-is-sticky', e.intersectionRatio < 1)
        },
        { threshold: [1] }
      )
      const observerOffset = new IntersectionObserver(
        ([e]) => {
          e.target.classList.toggle('-is-sticky-offset', e.intersectionRatio < 1)
        },
        {
          threshold: [1],
          // would prefer to use rems but intersection observer only works with % or px
          rootMargin: '-113px 0px 0px 0px'
        }
      )
      observer.observe(stickyElement)
      observerOffset.observe(stickyElement)
    }
  }
})
</script>
<style lang="scss">
.NavSecondary {
  top: -1px; // for intersection observer to work
  @apply sticky z-50 w-full bg-white border-b border-gray-mid border-opacity-0 transition-border-opacity duration-150 ease-in;
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
        @apply text-jpl-red font-semibold #{!important};
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

    &.-is-sticky-offset {
      @apply border-gray-mid border-opacity-50 transition-all;

      .nav-secondary-container {
        @apply border-gray-mid border-opacity-50;
      }
    }
    @screen lg {
      @apply top-28;
    }
  }
}
</style>
