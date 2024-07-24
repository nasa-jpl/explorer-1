<script setup lang="ts">
import { computed, ref } from 'vue'
import BaseButton from './../BaseButton/BaseButton.vue'
import IconDownload from './../Icons/IconDownload.vue'
import IconLink from './../Icons/IconLink.vue'
import IconShare from './../Icons/IconShare.vue'
import IconSocialGoogleClassroom from './../Icons/IconSocialGoogleClassroom.vue'
import IconSocialFacebook from './../Icons/IconSocialFacebook.vue'
import IconSocialEmail from './../Icons/IconSocialEmail.vue'
import IconSocialPinterest from './../Icons/IconSocialPinterest.vue'
import IconSocialTwitter from './../Icons/IconSocialTwitter.vue'
import { mixinCanonicalUrl } from '../../utils/mixins'

interface ShareButtonsEduProps {
  title: string
  url: string
  image?: string
}

// define props
const props = defineProps<ShareButtonsEduProps>()

// ref
const isOpen = ref(false)
const hasCopied = ref(false)

// methods
const copyUrl = async () => {
  try {
    await navigator.clipboard.writeText(props.url)
    hasCopied.value = true
  } catch (err) {
    console.error('Failed to copy: ', err)
  }
}
const toggle = () => {
  isOpen.value = !isOpen.value
  if (!isOpen.value) {
    closeMenu()
  }
}
const closeMenu = () => {
  isOpen.value = false
  hasCopied.value = false
}

const print = () => {
  window.print()
}

// computed
const encodedTitle = computed(() => {
  return props.title ? encodeURIComponent(props.title) : undefined
})

const encodedURL = computed(() => {
  return props.url ? encodeURIComponent(mixinCanonicalUrl(props.url)) : undefined
})

const facebookLink = computed(() => {
  return `https://www.facebook.com/sharer.php?u=${encodedURL.value}`
})
const twitterLink = computed((): string => {
  const handle = encodeURIComponent('NASAJPL_Edu')
  return `https://twitter.com/share?url=${encodedURL.value}&text=${encodedTitle.value}&via=${handle}`
})

const pinterestLink = computed(() => {
  return `http://pinterest.com/pin/create/button/?url=${encodedURL.value}&media=${props.image}&description=${encodedTitle.value}`
})

const googleClassroomLink = computed(() => {
  return `https://classroom.google.com/share?url=${encodedURL.value}`
})

const mailLink = computed((): string => {
  return `mailto:?body=${encodedTitle.value}:%20${encodedURL.value}&subject=${encodedTitle.value}`
})

const copyLinkText = computed(() => {
  if (hasCopied.value) {
    return 'Copied'
  } else {
    return 'Copy link'
  }
})
const buttonClass = computed(() => {
  return 'h-10 xl:h-11 !py-0 !px-3'
})
</script>
<template>
  <div class="ShareButtonsEdu relative flex flex-row items-start border-collapse">
    <BaseButton
      variant="social"
      :class="buttonClass"
      aria-label="Print"
      compact
      @click="print()"
    >
      <span class="flex flex-row flex-wrap-none items-center">
        <IconDownload class="text-lg mr-2" />
        <span class="text-sm">Print</span>
      </span>
    </BaseButton>
    <div class="relative xl:flex">
      <BaseButton
        variant="social"
        :class="`-ml-px ${buttonClass} ${isOpen ? '!bg-gray-light' : ''}`"
        aria-label="Share"
        compact
        :aria-expanded="isOpen"
        @click="toggle()"
        @keydown.esc="toggle()"
      >
        <span class="flex flex-row flex-wrap-none items-start xl:items-center">
          <IconShare class="text-lg mr-2" />
          <span class="text-sm">Share…</span>
        </span>
      </BaseButton>
      <Transition name="fade">
        <div
          v-if="isOpen"
          v-click-outside="closeMenu"
          class="share-buttons-list absolute left-0 xl:relative z-10 flex flex-col -ml-px -mt-px xl:m-0 border-action border xl:border-none xl:flex-row flex-wrap-none"
        >
          <BaseButton
            variant="social"
            aria-label="Copy"
            @click="copyUrl()"
            @keydown.esc="toggle()"
          >
            <IconLink class="text-lg mr-2" />
            <span class="text-xs">{{ copyLinkText }}</span>
          </BaseButton>

          <BaseButton
            variant="social"
            :href="facebookLink"
            aria-label="Share to Facebook"
            target="_blank"
            rel="noopener"
            @keydown.esc="toggle()"
          >
            <IconSocialFacebook class="text-lg mr-2" />
            <span class="text-xs">Facebook</span>
          </BaseButton>

          <BaseButton
            variant="social"
            :href="twitterLink"
            aria-label="Share to X (Twitter)"
            target="_blank"
            rel="noopener"
            @keydown.esc="toggle()"
          >
            <IconSocialTwitter class="text-lg mr-2" />
            <span class="text-xs">X (Twitter)</span>
          </BaseButton>

          <BaseButton
            variant="social"
            :href="pinterestLink"
            aria-label="Add to Pinterest"
            target="_blank"
            rel="noopener"
            @keydown.esc="toggle()"
          >
            <IconSocialPinterest class="text-lg mr-2" />
            <span class="text-xs">Pinterest</span>
          </BaseButton>

          <BaseButton
            variant="social"
            :href="mailLink"
            aria-label="Share via Email"
            target="_blank"
            rel="noopener"
            @keydown.esc="toggle()"
          >
            <IconSocialEmail class="text-lg mr-2" />
            <span class="text-xs">Email</span>
          </BaseButton>

          <BaseButton
            variant="social"
            :href="googleClassroomLink"
            aria-label="Google Classroom"
            target="_blank"
            rel="noopener"
            @keydown.esc="toggle()"
          >
            <IconSocialGoogleClassroom class="text-lg mr-2" />
            <span class="text-xs">Google Classroom</span>
          </BaseButton>
        </div>
      </Transition>
    </div>
  </div>
</template>
<style lang="scss">
.ShareButtonsEdu {
  .BaseButton {
    @apply relative focus:z-20;
    &:hover {
      @apply z-20;
    }
  }
  .share-buttons-list {
    .BaseButton.-social {
      @apply h-10 xl:h-11 py-0 px-2 lg:px-3 #{!important};
      span.text-xs {
        @apply whitespace-nowrap;
      }
      .label {
        @apply justify-start xl:justify-center;
      }
    }
  }
}
</style>
