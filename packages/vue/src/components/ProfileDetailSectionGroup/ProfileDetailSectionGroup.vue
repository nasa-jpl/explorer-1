<template>
  <section
    v-if="!isEmpty"
    class="border-gray-light-mid border-t mb-10 lg:mb-20 pt-10 lg:pt-20"
    :aria-labelledby="`${section.id}-heading`"
  >
    <BaseHeading
      :id="`${section.id}-heading`"
      level="h2"
      size="h3"
      class="mb-5 lg:mb-10"
      >{{ section.title }}</BaseHeading
    >

    <div
      v-for="sub in section.subsections"
      :key="sub.prop"
    >
      <template v-if="data[sub.prop]">
        <BaseHeading
          level="h3"
          size="h4"
          class="mb-2.5"
        >
          <component
            :is="sub.icon"
            class="inline relative -top-0.5"
          />
          {{ sub.title }}
        </BaseHeading>
        <div class="mb-5 lg:mb-10">
          <BlockText
            variant="large"
            :text="data[sub.prop]"
          />
        </div>
      </template>
    </div>
  </section>
</template>

<script>
import { defineComponent } from 'vue'
import BaseHeading from './../BaseHeading/BaseHeading.vue'
import BlockText from './../BlockText/BlockText.vue'
import IconBookUser from './../Icons/IconBookUser.vue'
import IconUniversity from './../Icons/IconUniversity.vue'
import IconMagnifyingGlass from './../Icons/IconMagnifyingGlass.vue'
import IconBriefcase from './../Icons/IconBriefcase.vue'
import IconHand from './../Icons/IconHand.vue'
import IconMedal from './../Icons/IconMedal.vue'
import IconBook from './../Icons/IconBook.vue'

export default defineComponent({
  name: 'ProfileDetailSectionGroup',
  components: {
    BaseHeading,
    BlockText,
    IconBookUser,
    IconUniversity,
    IconMagnifyingGlass,
    IconBriefcase,
    IconHand,
    IconMedal,
    IconBook
  },
  props: {
    section: {
      type: Object,
      required: false
    },
    data: {
      type: Object,
      required: false
    }
  },
  computed: {
    isEmpty() {
      return this.section.subsections.every((sub) => !this.data[sub.prop])
    }
  }
})
</script>
