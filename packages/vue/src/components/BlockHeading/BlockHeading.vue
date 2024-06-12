<template>
  <BaseHeading
    v-if="data"
    :level="data.level"
    :size="data.size"
  >
    {{ data.heading }}
  </BaseHeading>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BaseHeading from './../BaseHeading/BaseHeading.vue'

export default defineComponent({
  name: 'BlockHeading',
  components: {
    BaseHeading
  },
  props: {
    data: {
      type: Object,
      required: false
    }
  }
})
</script>
