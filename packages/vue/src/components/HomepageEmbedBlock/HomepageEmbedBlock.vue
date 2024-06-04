<template>
  <div
    v-if="data && data.length && data[0].display"
    id="featuredEmbed"
    class="2xl:px-0 container px-4 mx-auto"
  >
    <h2
      v-if="data[0].heading"
      class="font-primary text-gray-dark lg:text-6xl mb-5 text-3xl font-semibold leading-normal tracking-normal uppercase"
    >
      {{ data[0].heading }}
    </h2>
    <div class="xl:BaseGrid">
      <BlockVideoEmbed class="col-span-11" :data="data[0]" />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import BlockVideoEmbed from './../BlockVideoEmbed/BlockVideoEmbed.vue'

export default defineComponent({
  name: 'HomepageEmbedBlock',
  components: {
    BlockVideoEmbed,
  },
  props: {
    data: {
      type: Array,
      required: false,
    },
  },
})
</script>
