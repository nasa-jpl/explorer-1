<template>
  <!-- z-60 is to maintain visibility over NavDesktop -->
  <div class="z-60 lg:left-auto lg:mr-20 absolute top-0 left-0 right-0 mt-4 text-center">
    <BaseButton
      variant="primary"
      class="focus:not-sr-only sr-only"
      compact
      @click="handleClick()"
    >
      Skip to main content
    </BaseButton>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import BaseButton from './../BaseButton/BaseButton.vue'

export default defineComponent({
  name: 'SkipLink',
  components: {
    BaseButton
  },
  data(): {
    main: HTMLElement | null
  } {
    return {
      main: null
    }
  },
  methods: {
    // skip link inspired by https://github.com/wagtail/wagtail/blob/master/client/src/includes/initSkipLink.js
    // gracefully handle focusing on the main element
    handleBlur() {
      // removes the tabindex after focus
      if (this.main) {
        this.main.removeAttribute('tabindex')
        this.main.removeEventListener('blur', this.handleBlur)
        this.main.removeEventListener('focusout', this.handleBlur)
      }
    },
    handleClick() {
      // update the main element each time
      this.main = document.querySelector('main')
      if (this.main) {
        this.main.setAttribute('tabindex', '-1')
        this.main.addEventListener('blur', this.handleBlur)
        this.main.focus()
        window.scrollTo(0, this.main.offsetTop)
      }
    }
  }
})
</script>
