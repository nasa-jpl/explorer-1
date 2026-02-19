<script setup lang="ts">
/**
 * Wrapper template for all Explore JPL App pages.
 * Provides the sticky navigation.
 */
import NavSecondary from './../../../components/NavSecondary/NavSecondary.vue'

defineProps({
  /** If hero content appears above the navigation (provided by parent component) */
  hasIntro: {
    type: Boolean,
    default: false
  },
  navData: {
    type: String,
    default: undefined
  }
})
</script>
<template>
  <div class="BaseExploreApp">
    <!-- @slot: hero content -->
    <slot name="hero"></slot>
    <!-- navigation -->
    <NavSecondary
      :breadcrumb="navData"
      :has-intro="hasIntro"
      show-on-mobile
    />
    <!-- @slot: page body -->
    <slot>
      <p class="text-center"></p>
    </slot>
  </div>
</template>
<style lang="scss">
.BaseExploreApp {
  .text-h1 {
    // mimic text-h2
    @apply font-display font-bold;
    font-size: pxToRem(36);
    line-height: 1.25;

    @screen sm {
      font-size: pxToRem(38);
    }
    @screen md {
      font-size: pxToRem(40);
    }
    @screen lg {
      font-size: pxToRem(42);
    }
    @screen xl {
      font-size: pxToRem(44);
    }
  }
}
</style>
