<template>
  <div
    v-if="description"
    class="MissionDetailAbout lg:BaseGrid lg:px-0 container px-4 mx-auto"
  >
    <div class="col-span-6 col-start-2 mb-3">
      <BaseHeading level="h2">{{ descriptionHeading }}</BaseHeading>
    </div>

    <div class="col-span-6 col-start-2">
      <div class="mb-10">
        <BlockText :text="description" />
      </div>
    </div>
    <div
      v-if="hasContent"
      class="col-span-3 col-start-9"
    >
      <p class="font-secondary mb-5 text-base leading-tight tracking-wider uppercase">
        {{ sidebarTitle }}
      </p>
      <ul class="lg:mb-5 flex flex-wrap items-start mb-3">
        <li
          v-for="(item, index) in instruments"
          :key="index"
          v-observe-visibility="{
            callback: isViewableNow,
            throttle: 0,
            once: true
          }"
          :class="animationClass"
          class="instrument justify-content-center flex-column flex items-start w-full align-middle"
        >
          <span>
            {{ item.instrument }}
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import BaseHeading from './../BaseHeading/BaseHeading.vue'
import BlockText from './../BlockText/BlockText.vue'

interface Instrument {
  id: string
  instrument: string
}
export default defineComponent({
  name: 'MissionDetailAbout',
  components: {
    BaseHeading,
    BlockText
  },
  props: {
    descriptionHeading: {
      type: String,
      required: false,
      default: 'About the Mission'
    },
    description: {
      type: String,
      required: true,
      default: ''
    },
    instruments: {
      type: Array as PropType<Instrument[]>,
      required: false
    },
    sidebarTitle: {
      type: String,
      required: false,
      default: 'Instruments'
    }
  },
  data() {
    return {
      showAnimation: false,
      hasIntersectionObserver: true
    }
  },
  computed: {
    hasContent() {
      if (!this.instruments || this.instruments.length === 0) {
        return false
      } else {
        return true
      }
    },
    animationClass() {
      if (this.hasIntersectionObserver) {
        if (this.showAnimation) {
          return 'animated'
        }
      } else {
        return 'lifeless'
      }
      return ''
    }
  },
  mounted() {
    this.featureDetection()
  },
  methods: {
    isViewableNow(isVisible: boolean) {
      this.showAnimation = isVisible
    },
    // could eventually turn this into a mixin if we need to use it a bunch
    featureDetection() {
      if (
        !('IntersectionObserver' in window) ||
        !('IntersectionObserverEntry' in window) ||
        !('intersectionRatio' in window.IntersectionObserverEntry.prototype)
      ) {
        // intersection observer not supported
        this.hasIntersectionObserver = false
      }
    }
  }
})
</script>
<style lang="scss">
.MissionDetailAbout {
  @apply text-gray-dark; // fallback if no theme
  li.instrument {
    @apply mb-3;
    @apply flex;
    @apply max-w-full;

    span {
      @apply opacity-0;
      @screen lg {
        max-width: 20ch;
      }
    }

    &::before {
      @apply bg-jpl-red-light;
      @apply inline-block;
      @apply relative;
      @apply mr-3;
      @apply flex-shrink-0;

      content: '';
      transform: scale(0);
      margin-top: 0.65rem;
      width: 30px;
      height: 2px;
    }

    &.lifeless {
      span {
        @apply opacity-100;
      }

      &::before {
        transform: scale(1);
      }
    }

    &.animated {
      span {
        @apply animate-fadeIn;
        @screen lg {
          max-width: 20ch;
        }

        -webkit-animation-delay: inherit;
        animation-delay: inherit;
      }
      @for $i from 1 through 20 {
        &:nth-child(#{$i}) {
          -webkit-animation-delay: (#{$i * 300ms});
          animation-delay: (#{$i * 300ms});
        }
      }

      &::before {
        @apply animate-scaleIn;

        -webkit-animation-delay: inherit;
        animation-delay: inherit;
        transform-origin: 0% 50%;
      }
    }
  }

  // dark and light treatments
  .ThemeVariantLight & {
    @apply text-gray-dark;
  }

  .ThemeVariantDark & {
    @apply text-white;
  }
}
</style>
