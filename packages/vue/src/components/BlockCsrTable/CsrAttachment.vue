<script setup lang="ts">
import { reactive } from 'vue'
import BaseLink from './../BaseLink/BaseLink.vue'

interface CsrAttachmentProps {
  params: {
    data: {
      Attachment: string
    }
    /** Example values: `https://test-api.jpl.nasa.gov/attachments?key=`, `https://test-api.jpl.nasa.gov/` */
    attachmentPrefix: string
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
    :href="params.attachmentPrefix + params.data.Attachment"
    variant="default"
    target="_blank"
    >Download</BaseLink
  >
</template>
