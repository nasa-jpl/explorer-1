<template>
  <BaseHeading
    v-if="data"
    :id="getId"
    :level="data.level"
    class="BlockHeading"
    :class="{ 'has-anchor': generateId }"
  >
    <slot>
      {{ data.heading }}
    </slot>
  </BaseHeading>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import { type HeadingLevel } from './../BaseHeading/BaseHeading.vue'
import { getHeadingId } from '../../utils/getHeadingId'

import BaseHeading from './../BaseHeading/BaseHeading.vue'

export interface BlockHeadingObject {
  blockType?: string
  heading: string
  level?: HeadingLevel
  size?: string
  blockId?: string
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
    generateId: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    getId() {
      return this.data && this.generateId
        ? getHeadingId(this.data.heading, this.data.blockId)
        : undefined
    }
  }
})
</script>
<style lang="scss">
.BlockHeading {
  &:target {
    @apply scroll-mt-14;
    @screen lg {
      @apply scroll-mt-[7rem];
    }
  }
}
</style>
