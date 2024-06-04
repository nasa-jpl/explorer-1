<template>
  <div v-if="data" class="-mt-2 -ml-2">
    <template v-if="data.headingPage && data.heading">
      <BaseLink
        variant="none"
        class="text-subtitle text-blue inline-block mb-4"
        link-class="p-2"
        :to="data.headingPage.url"
      >
        {{ data.heading }}
      </BaseLink>
    </template>
    <template v-else-if="data.heading">
      <div class="text-subtitle text-blue inline-block mb-4">
        <span class="p-2">{{ data.heading }}</span>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BaseLink from './../BaseLink/BaseLink.vue'

export default defineComponent({
  name: 'NavHeading',
  components: {
    BaseLink,
  },
  props: {
    data: {
      type: Object,
      required: false,
    },
  },
})
</script>
