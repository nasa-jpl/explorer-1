<template>
  <div class="NavLogoLinks relative">
    <div class="absolute inset-0 flex items-start">
      <BaseLink
        variant="none"
        href="https://www.nasa.gov"
        title="NASA"
        aria-label="NASA"
        class="w-1/4 h-full"
        link-class="block w-auto h-full"
        external-target-blank
      ></BaseLink>
      <BaseLink
        variant="none"
        to="/"
        title="JPL Home"
        aria-label="JPL Home"
        class="flex-grow h-full"
        link-class="block w-full h-full"
      ></BaseLink>
    </div>
    <!-- JPL tribrand logo placed via the default slot -->
    <slot />
  </div>
</template>
<script lang="ts">
/*
 ** This component provides a wrapper for the JPL tribrand logo
 ** that creates overlay links for both the NASA insignia and the JPL homepage
 **
 ** The logo is added via a slot to allow for complex display logic such as in NavDesktop
 */
import { defineComponent } from 'vue'
import BaseLink from './../BaseLink/BaseLink.vue'

export default defineComponent({
  name: 'NavLogoLinks',
  components: {
    BaseLink
  }
})
</script>
<style lang="scss">
@import '@explorer-1/common/src/scss/components/NavLogoLinks';
</style>
