<script setup lang="ts">
import { reactive } from 'vue'
import BaseLink from './../BaseLink/BaseLink.vue'

interface CsrAttachmentProps {
  params: {
    data: {
      Attachment: string
    }
  }
}

const props = withDefaults(defineProps<CsrAttachmentProps>(), {
  params: undefined
})
const { params } = reactive(props)
</script>
<template>
  <BaseLink
    v-if="params?.data?.Attachment"
    :href="params.data.Attachment"
    variant="default"
    target="_blank"
    >Download</BaseLink
  >
</template>
