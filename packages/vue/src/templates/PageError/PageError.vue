<template>
  <div
    class="container mx-auto mt-20 mb-30 text-gray-dark font-primary text-center animate-fadeInSlow transition-all duration-150"
  >
    <img
      loading="eager"
      class="mx-auto"
      src="@/assets/images/jpg/pages/error/Oops-galaxy.jpg"
      height="227"
      width="601"
      alt="Oops!"
    />
    <h1
      class="mt-10 text-3xl lg:text-6xl font-semibold leading-normal tracking-normal uppercase"
    >
      <template v-if="error">
        {{ error.statusCode }} {{ error.message }}
      </template>
      <template v-else>An error occurred</template>
    </h1>
    <p
      class="max-w-4xl p-4 mx-auto text-xl lg:text-3xl font-medium leading-normal tracking-normal"
    >
      JPL is good at discovering the undiscovered, and you've done the same.
      This error means that our server couldn’t find the page you requested.
      Please check if you typed the correct URL or you can reload the page.
    </p>
    <div class="flex flex-col md:flex-row justify-center mt-10">
      <BaseButton class="m-3" compact variant="secondary" @click="back">
        <slot name="icon">
          <IconPrev />
        </slot>
        Back to Previous Page&nbsp;&nbsp;&nbsp;&nbsp;
      </BaseButton>
      <BaseButton class="flex justify-center m-3" variant="primary" to="/">
        JPL Homepage
      </BaseButton>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BaseButton from '@/components/BaseButton/BaseButton.vue'
import IconPrev from '@/components/Icons/IconPrev.vue'

export default defineComponent({
  name: 'PageError',
  components: {
    BaseButton,
    IconPrev,
  },
  props: {
    error: [Object, String],
    errorFrom: {
      type: String,
      default: 'Page Error',
    },
  },
  head() {
    return {
      // makes sure robot crawlers do not index our error pages
      meta: [{ hid: 'robots', name: 'robots', content: 'noindex' }],
    }
  },
  methods: {
    back() {
      this.$router.go(-1)
    },
  },
})
</script>
