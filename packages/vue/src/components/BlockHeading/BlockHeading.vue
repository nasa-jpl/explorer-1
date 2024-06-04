<template>
  <BaseHeading v-if="data" :level="data.level">
    {{ data.heading }}
  </BaseHeading>
</template>

<script>
import { defineComponent } from 'vue'
import BaseHeading from './../BaseHeading/BaseHeading.vue'

export default defineComponent({
  name: 'BlockHeading',
  components: {
    BaseHeading,
  },
  props: {
    data: {
      type: Object,
      required: false,
    },
  },
})
</script>
