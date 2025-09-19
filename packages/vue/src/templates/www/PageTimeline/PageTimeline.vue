<script lang="ts">
// PageTimeline.vue - Timeline component for displaying milestones.
import { defineComponent, type PropType } from 'vue'
import BackToTop from './../../../components/BackToTop/BackToTop.vue'
import BlockMilestone, { Milestone } from './BlockMilestone.vue'
import HeroLarge from './../../../components/HeroLarge/HeroLarge.vue'
import NavSecondary from './../../../components/NavSecondary/NavSecondary.vue'
// Use a SearchSelectMenu for consistency with the "sort by" dropdown.
import SearchSelectMenu from './../../../components/SearchSelectMenu/SearchSelectMenu.vue'
import TimelineDialog from './../../../components/TimelineDialog/TimelineDialog.vue'
import YearTicker from './../../../components/YearTicker/YearTicker.vue'
import ParallaxContainer from './../../../components/ParallaxContainer/ParallaxContainer.vue'
import ParallaxElement from './../../../components/ParallaxElement/ParallaxElement.vue'

/**
 * This page contains a lot of overlapping elements. Layers from highest to lowest:
 * - TimelineDialog
 * - Dropdown menus within NavSecondary
 * - BackToTop, Main navigation, NavSecondary
 * - (YearTicker on mobile viewport)
 * - Milestone cards (BlockMilestone / BlockCircleImageCard)
 * - VerticalLine
 * - Milestone background images
 * - (YearTicker on desktop viewport)
 */

type SortBy = '' | 'latestDate' | 'oldestDate'

type Decades = {
  [label: string]: string
}

const sortByOptions = [
  {
    text: 'Latest',
    value: 'latestDate'
  },
  {
    text: 'Oldest',
    value: 'oldestDate'
  }
] as const

export default defineComponent({
  name: 'PageTimeline',
  components: {
    BackToTop,
    BlockMilestone,
    HeroLarge,
    NavSecondary,
    TimelineDialog,
    YearTicker,
    ParallaxContainer,
    ParallaxElement,
    SearchSelectMenu
  },
  props: {
    data: {
      type: Object as PropType<{
        heroTitle: string
        heroSummary: string
        heroImage: any
        breadcrumb: string
        milestones: Milestone[]
      }>,
      required: true
    }
  },
  data(): {
    sortBy: SortBy
    sortByOptions: any
    jumpTo: string
    jumpToOptions: { value: string; text: string }[]
    latestYear: String
    oldestYear: String
    currentYear: String
    activeMilestone: Milestone | null
    yearObserver: IntersectionObserver | null
  } {
    return {
      sortBy: '',
      sortByOptions,
      jumpTo: '',
      jumpToOptions: [],
      latestYear: '',
      oldestYear: '',
      currentYear: '',
      activeMilestone: null,
      yearObserver: null
    }
  },
  computed: {
    milestones(): Milestone[] {
      if (this.sortBy === 'oldestDate') {
        return this.data.milestones.slice().reverse()
      }

      return this.data.milestones
    }
  },
  watch: {
    sortBy(newSortBy) {
      this.currentYear = newSortBy === 'oldestDate' ? this.oldestYear : this.latestYear
      // Move to the top of the page when changing sort order, for a more consistent experience.
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    },
    jumpTo(newJumpTo) {
      if (newJumpTo === '') {
        this.currentYear = this.sortBy === 'oldestDate' ? this.oldestYear : ''
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })
        return
      }
      this.currentYear = newJumpTo.slice(0, 4)
      document.querySelector(`#milestone-${newJumpTo}`)?.scrollIntoView({
        behavior: 'smooth'
      })
    }
  },
  created() {
    const sortByParam = this.$route?.query.sortBy
    if (
      sortByParam &&
      sortByOptions &&
      sortByOptions.some((option) => option.value === sortByParam)
    ) {
      this.sortBy = sortByParam as SortBy
    }

    // Compute the latest and oldest years from the milestones in their source order (latest first).
    this.latestYear = this.data.milestones[0].date.split('-')[0]
    this.oldestYear = this.data.milestones[this.data.milestones.length - 1].date.split('-')[0]
    this.currentYear = this.sortBy === 'oldestDate' ? this.oldestYear : this.latestYear

    const jumpToParam = this.$route?.query.jumpTo

    if (jumpToParam) {
      this.jumpTo = jumpToParam as string
    }
  },
  mounted() {
    this.observeYears()
  },
  beforeUnmount() {
    if (this.yearObserver) {
      this.yearObserver.disconnect()
    }
  },
  methods: {
    handleBackToTop() {
      this.jumpTo = ''
      this.currentYear = this.sortBy === 'oldestDate' ? this.oldestYear : this.latestYear
    },
    getJumpDecades() {
      const decades: Decades = {
        // uppercase string to avoid conflict with the lowercase 's' in the decade
        TOP: ''
      }

      this.milestones.forEach((milestone) => {
        const decade = `${milestone.date.slice(0, 3)}0𝚜` // uses special '𝚜' since we can't have lowercase letters in the decade
        // Use the first milestone of the decade in the sorting order.
        if (!decades[decade]) {
          decades[decade] = milestone.date
        }
      })

      return Object.entries(decades).map(([text, value]) => ({
        text,
        value
      }))
    },
    showMilestone(milestone: Milestone) {
      this.activeMilestone = milestone
    },
    /**
     * Update the current year displayed by the year ticker depending on
     * which year card the user reaches while scrolling.
     */
    observeYears() {
      const years = this.$el?.querySelectorAll('[data-milestone-year]')

      if (
        !years ||
        !('IntersectionObserver' in window) ||
        !('IntersectionObserverEntry' in window) ||
        !('intersectionRatio' in window.IntersectionObserverEntry.prototype)
      ) {
        return
      }

      this.currentYear = years[0].dataset.milestoneYear as String

      const observer = new IntersectionObserver(
        (entries) => {
          const intersections = entries.filter((e) => e.isIntersecting)
          if (intersections.length > 0) {
            this.currentYear = (intersections[0].target as HTMLDivElement).dataset
              .milestoneYear as String
          }
        },
        {
          threshold: 1,
          // Treat an item as intersecting if it’s halfway up the page.
          rootMargin: '0px 0px -50% 0px'
        }
      )
      years.forEach((year: Element) => observer.observe(year))

      this.yearObserver = observer
    }
  }
})
</script>

<template>
  <div
    v-if="data"
    class="-nav-offset"
  >
    <HeroLarge
      :title="data.heroTitle"
      :summary="data.heroSummary"
      :image="data.heroImage"
      has-overlay
    />

    <NavSecondary>
      <!-- Use a fixed height to simplify sticky positioning. -->
      <div class="w-full flex gap-4 align-content h-16">
        <SearchSelectMenu
          v-model="jumpTo"
          v-model:select-value="jumpTo"
          class="flex"
          :options="getJumpDecades()"
          title="JUMP TO"
          group-key="jumpTo"
        />
        <SearchSelectMenu
          v-model="sortBy"
          v-model:select-value="sortBy"
          class="flex"
          :options="sortByOptions"
          title="SORT BY"
          group-key="sortBy"
        />
      </div>
    </NavSecondary>
    <YearTicker :target-year="currentYear as string" />
    <h2 class="sr-only">Milestones</h2>
    <ParallaxContainer
      class="MilestoneList BaseGrid"
      :style="{ '--rows': milestones.length }"
    >
      <div
        v-for="(milestone, index) in milestones"
        :id="`milestone-${milestone.date}`"
        :key="`${milestone.id}-fg`"
        class="MilestoneListItem"
        :style="{ '--row': index + 1 }"
        :data-milestone-year="milestone.date.split('-')[0]"
      >
        <ParallaxElement
          v-if="milestone.backgroundImage"
          class="MilestoneImageWrapper"
          :factor="0.18"
          :offset="index * 80"
        >
          <img
            class="MilestoneImage"
            :src="milestone.backgroundImage.src.url"
            :width="milestone.backgroundImage.src.width"
            :height="milestone.backgroundImage.src.height"
            :srcset="`${milestone.backgroundImage.screenMd.url} ${milestone.backgroundImage.screenMd.width}w ${milestone.backgroundImage.src.url} ${milestone.backgroundImage.src.width}w`"
            :style="{
              // Shift images left or right based on column, and then by a variable amount to create a staggered effect.
              '--x-translate': `${(index % 2 === 0 ? 180 : -130) + 10 * (index % 3)}%`
            }"
            alt=""
            data-chromatic="ignore"
          />
        </ParallaxElement>
        <BlockMilestone
          :data="milestone"
          :handle-click="showMilestone"
        />
      </div>
      <div class="VerticalLine"></div>
    </ParallaxContainer>
    <BackToTop
      class="fixed right-10 bottom-10"
      :threshold="900"
      @click="handleBackToTop()"
    />

    <TimelineDialog
      v-if="activeMilestone"
      :data="activeMilestone"
      dialog-box-class="sm:max-w-xl md:max-w-3xl"
      @hide="() => (activeMilestone = null)"
    ></TimelineDialog>
  </div>
</template>

<style lang="scss">
@import '@explorer-1/common/src/scss/templates/PageTimeline';
</style>
