<script setup lang="ts">
import { computed, onMounted } from 'vue'
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

const encodedAttachmentUrl = computed(() => {
  let url = ''
  if (props.params.data?.Attachment && props.params.attachmentPrefix) {
    url = props.params.attachmentPrefix + props.params.data.Attachment
  }
  return encodeURI(url)
})

onMounted(() => {
  console.log(encodedAttachmentUrl.value)
})
</script>
<template>
  <BaseLink
    v-if="props.params?.data?.Attachment"
    :href="encodedAttachmentUrl"
    variant="default"
    target="_blank"
    :add-slash="false"
    >Download</BaseLink
  >
</template>
