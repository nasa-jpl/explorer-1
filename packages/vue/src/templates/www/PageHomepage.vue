<template>
  <div>
    <pre>
      {{  data }}
    </pre>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'PageHomepage',
  props: {
    data: {
      type: Object,
      required: false
    }
  },
  computed: {
    theNews(): object | false {
      // check first for featured news
      if (this.data?.featuredNews && this.data.featuredNews.length) {
        return this.data.featuredNews
      } else if (this.data?.latestNews && this.data.latestNews.length) {
        return this.data.latestNews
      }
      return false
    }
  }
})
</script>
