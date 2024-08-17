<template>
  <BaseHeading
    v-if="data"
    :id="getId"
    :level="data.level"
    class="BlockHeading"
    :class="{ 'has-anchor': generateId }"
  >
    {{ data.heading }}
  </BaseHeading>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import { getHeadingId } from '../../utils/getHeadingId'
import BaseHeading from './../BaseHeading/BaseHeading.vue'

export interface BlockHeadingObject {
  heading?: string
  level?: string
  size?: string
}

export default defineComponent({
  name: 'BlockHeading',
  components: {
    BaseHeading
  },
  props: {
    data: {
      type: Object as PropType<BlockHeadingObject>,
      required: false,
      default: undefined
    },
    index: {
      type: Number,
      required: false,
      default: undefined
    },
    generateId: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    getId() {
      return this.generateId ? getHeadingId(this.data?.heading, this.index) : undefined
    }
  }
})
</script>
<style lang="scss">
.BlockHeading {
  &:target {
    @apply scroll-mt-14;
    @screen lg {
      @apply scroll-mt-20;
    }
  }
}
</style>
