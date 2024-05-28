<script lang="ts">
import { defineComponent } from 'vue'
import BlockImageStandard from './BlockImageStandard.vue'
import BlockImageFullBleed from './BlockImageFullBleed.vue'
import LayoutHelper from './../LayoutHelper/LayoutHelper.vue'

export default defineComponent({
  name: 'BlockImage',
  components: {
    BlockImageStandard,
    BlockImageFullBleed,
    LayoutHelper,
  },
  props: {
    data: {
      type: Object,
      required: false,
    },
    fullBleed: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
})
</script>
<template>
  <div v-if="data">
    <template v-if="fullBleed && data.imageFullBleed">
      <BlockImageFullBleed
        :data="data.imageFullBleed"
        :display-caption="data.displayCaption"
        :caption="data.caption"
        :constrain="data.constrain"
      />
    </template>
    <template v-else>
      <LayoutHelper indent="col-2">
        <BlockImageStandard
          :data="data.image"
          :display-caption="data.displayCaption"
          :caption="data.caption"
          :constrain="data.constrain"
        />
      </LayoutHelper>
    </template>
  </div>
</template>
