<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'
import type { BlockData } from '../../interfaces'
 
export interface BlockSurveyMonkeyEmbedData extends BlockData {
  url: string
}
 
export interface BlockSurveyMonkeyEmbedProps {
  data?: BlockSurveyMonkeyEmbedData
}
 
const props = withDefaults(defineProps<BlockSurveyMonkeyEmbedProps>(), {
  data: undefined
})
 
const SM_SCRIPT_ID = 'smcx-sdk'
const SM_FORM_CLASS = '.smcx-widget'
const SM_URL_VALIDATOR = /^https:\/\/widget\.surveymonkey\.com\/collect\/website\/js\/[\w-]+\.js$/
const formContainer = ref<HTMLElement>()
let observer: MutationObserver | undefined

const cleanup = () => {
  observer?.disconnect()
  observer = undefined
  document.getElementById(SM_SCRIPT_ID)?.remove()
  document.querySelectorAll(SM_FORM_CLASS).forEach((el) => el.remove())
  delete (window as any).SMCX
  if (formContainer.value) formContainer.value.innerHTML = ''
}

const removeDuplicates = () => {
  const container = formContainer.value
  if (!container) return
  container.querySelectorAll(SM_FORM_CLASS).forEach((el, i) => {
    if (i > 0) el.remove()
  })
}
 
onMounted(() => {
  if (!props.data?.url || !formContainer.value || !SM_URL_VALIDATOR.test(props.data.url)) return
  cleanup()
  ;(window as any).SMCX = []
  observer = new MutationObserver(removeDuplicates)
  observer.observe(document.body, { childList: true, subtree: true })
  const s = document.createElement('script')
  s.id = SM_SCRIPT_ID
  s.async = true
  s.src = props.data.url
  formContainer.value.appendChild(s)
})
 
onBeforeUnmount(cleanup)
</script>
 
<template>
  <div ref="formContainer" class="BlockSurveyMonkeyEmbed"></div>
</template>
