<template>
  <div
    ref="NavDropdownMobile"
    class="NavDropdownMobile"
  >
    <NavDropdownToggle
      :aria-expanded="dropdownVisible ? true : false"
      class="group relative block w-full px-4 py-2 text-xl font-medium text-left"
      :class="{
        '-open': dropdownVisible
      }"
      @toggle-clicked="toggleDropdown()"
      @close-dropdown="closeDropdown()"
    >
      <span
        v-if="data"
        class="block py-0 pl-6 -ml-4 border-l-4"
      >
        {{ (data.length && data[0].title) || getLinkText(data.titleLink) }}
      </span>
    </NavDropdownToggle>

    <div v-if="dropdownVisible">
      <div class="mt-1 mb-3">
        <template v-if="data?.links">
          <NavMobileLink
            v-for="(item, index) in data.links"
            :key="index"
            :data="item"
            link-class="pl-12"
            :exact="true"
          />
        </template>
        <div v-else-if="data?.length > 0">
          <template v-for="(item, index) in data">
            <template v-if="item.children && item.children.length > 0">
              <NavMobileSecondaryDropdown
                :key="index"
                :item="item"
                :index="index"
              />
            </template>
            <template v-else>
              <NavMobileLink
                v-if="!headerStore.secondaryNavIsJumpMenu && index !== 0"
                :key="index"
                :title="index === 0 ? 'Home' : undefined"
                :data="item"
                link-class="pl-12"
                :exact="index === 0"
              />
            </template>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// @ts-nocheck
import { defineComponent } from 'vue'
import { mapStores } from 'pinia'
import { useHeaderStore } from '../../store/header'
import type { LinkObject } from '../../utils/mixins'
import { eventBus } from './../../utils/eventBus'
import NavDropdownToggle from './../NavDropdownToggle/NavDropdownToggle.vue'
import NavMobileLink from './../NavMobile/NavMobileLink.vue'
import NavMobileSecondaryDropdown from './../NavMobile/NavMobileSecondaryDropdown.vue'
import { mixinGetLinkText } from '../../utils/mixins'
export default defineComponent({
  name: 'NavMobileDropdown',
  components: {
    NavDropdownToggle,
    NavMobileLink,
    NavMobileSecondaryDropdown
  },
  props: {
    // expects an object if populated from footer navigation data (default)
    // expects an array when populated by secondary nav overrides
    data: {
      type: [Object, Array],
      required: false
    },
    startOpen: {
      type: Boolean,
      required: false,
      default: false
    },
    expandMultiple: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  data(): {
    dropdownVisible: boolean
    theDropdown: HTMLElement | null
  } {
    return {
      dropdownVisible: false,
      theDropdown: null
    }
  },
  computed: {
    ...mapStores(useHeaderStore)
  },
  mounted() {
    if (this.startOpen) {
      this.dropdownVisible = true
    }
    this.theDropdown = this.$refs.NavDropdownMobile as HTMLElement
    if (!this.expandMultiple) {
      eventBus.on('openMobileDropdown', () => this.closeIfOtherOpened())
    }
  },
  methods: {
    toggleDropdown() {
      if (this.dropdownVisible) {
        this.closeDropdown()
      } else {
        this.openDropdown()
      }
    },
    closeDropdown() {
      if (this.dropdownVisible) {
        this.dropdownVisible = false
        this.$root?.$emit('closeMobileDropdown', this.theDropdown)
      }
    },
    openDropdown() {
      if (!this.dropdownVisible) {
        this.dropdownVisible = true
        this.$root?.$emit('openMobileDropdown', this.theDropdown)
      }
    },
    // allows all to remain open by default. Can override this with expandMultiple prop
    closeIfOtherOpened(opened: HTMLElement) {
      if (opened !== this.theDropdown) {
        this.closeDropdown()
      }
    },
    getLinkText(link: LinkObject) {
      return mixinGetLinkText(link)
    }
  }
})
</script>
<style lang="scss">
@import '@explorer-1/common/src/scss/components/NavMobileDropdown';
</style>
