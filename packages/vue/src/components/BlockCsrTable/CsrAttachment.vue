<script setup lang="ts">
import { reactive, computed } from 'vue'
import BaseLink from './../BaseLink/BaseLink.vue'

interface CsrAttachmentProps {
  params: {
    data: {
      Attachment: string
    }
    attachmentPrefix: string
  }
}

const props = withDefaults(defineProps<CsrAttachmentProps>(), {
  params: undefined
})
const { params } = reactive(props)

const prefix = computed(() => {
  // make sure it ends with a slash
  if (params.attachmentPrefix && params.attachmentPrefix.endsWith('/')) {
    return params.attachmentPrefix
  } else {
    return params.attachmentPrefix + '/'
  }
})
</script>
<template>
  <BaseLink
    v-if="params?.data?.Attachment"
    :href="prefix + params.data.Attachment"
    variant="default"
    target="_blank"
    >Download</BaseLink
  >
</template>
