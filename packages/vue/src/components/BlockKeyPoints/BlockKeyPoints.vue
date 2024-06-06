<template>
  <div
    v-if="data"
    class="BlockKeyPoints border-gray-light-mid lg:py-10 py-6 border-t border-b"
  >
    <BlockHeading
      class="mb-5"
      :data="{ heading: data.heading }"
    />
    <ul>
      <li
        v-for="(item, index) in data.listItem"
        :key="index"
        class="flex"
        :class="index + 1 === data.listItem.length ? 'mb-0' : 'mb-4'"
      >
        <BlockText
          :text="item.text"
          variant="medium"
        ></BlockText>
      </li>
    </ul>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import BlockHeading from './../BlockHeading/BlockHeading.vue'
import BlockText from './../BlockText/BlockText.vue'

export default defineComponent({
  name: 'BlockKeyPoints',
  components: {
    BlockHeading,
    BlockText
  },
  props: {
    data: {
      type: Object,
      required: false
    }
  }
})
</script>

<style lang="scss">
@import '@explorer-1/common/src/scss/components/BlockKeyPoints';
</style>
