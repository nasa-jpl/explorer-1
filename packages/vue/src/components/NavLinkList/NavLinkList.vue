<template>
  <div v-if="data">
    <NavHeading :data="data" />
    <div v-if="data.links" :class="{ 'auto-col': autoCol }">
      <div v-for="(item, index) in data.links" :key="index" class="mb-0">
        <BaseLink
          variant="none"
          class="block text-lg font-medium leading-tight text-white"
          :href="item.path && !mixinGetRouterLink(item) ? item.path : null"
          :to="mixinGetRouterLink(item) ? mixinGetRouterLink(item) : null"
          link-class="can-hover:hover:underline inline-block px-2 py-3 -ml-2"
        >
          {{ mixinGetLinkText(item) }}
        </BaseLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BaseLink from './../BaseLink/BaseLink.vue'
import NavHeading from './../NavHeading/NavHeading.vue'

export default defineComponent({
  name: 'NavLinkList',
  components: {
    BaseLink,
    NavHeading,
  },
  props: {
    data: {
      type: Object,
      required: false,
    },
    autoCol: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
})
</script>
<style lang="scss" scoped>
.auto-col {
  @screen lg {
    column-count: 2;
  }
}
</style>
